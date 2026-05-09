// ============================================================
// Cunning Linguist — Supabase Sync Layer
// Loaded before app.js. Exposes window.cllSync.
// Gracefully falls back to localStorage if Supabase unreachable.
// ============================================================

(function () {
  const SB_URL  = 'https://yvxgkistltbhdsmxphge.supabase.co';
  const SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eGdraXN0bHRiaGRzbXhwaGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMDIwOTEsImV4cCI6MjA5Mzc3ODA5MX0.XpXjVjAIxiEkLCKAq5W70b_pxhh_sr5gEGVC7LajokY';

  let sb        = null;
  let user      = null;
  let pushTimer = null;

  // ── Init — loads Supabase CDN lazily so it never blocks the page ──
  function init() {
    if (typeof supabase !== 'undefined') {
      // Already on the page (shouldn't happen with lazy load, but handle it)
      setupClient();
      return;
    }
    // Inject CDN script dynamically — completely non-blocking
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    script.async = true;
    script.onload = setupClient;
    script.onerror = () => console.warn('cllSync: Supabase CDN failed to load — running local-only.');
    document.head.appendChild(script);
  }

  function setupClient() {
    if (typeof supabase === 'undefined') return;
    sb = supabase.createClient(SB_URL, SB_ANON);

    sb.auth.onAuthStateChange(async (event, session) => {
      const wasLoggedIn = !!user;
      user = session?.user || null;
      updateAuthUI();

      if (event === 'SIGNED_IN' && !wasLoggedIn) {
        await syncOnLogin();
      }
      if (event === 'SIGNED_OUT') {
        toast('Signed out — progress is saved locally.', 3000);
      }
    });
  }

  // ── State ↔ Row mappers ──────────────────────────────────────
  function stateToRow(lang, s) {
    return {
      lang,
      current_day:     s.currentDay            || 1,
      completed_days:  s.completedDays          || [],
      streak:          s.streak                 || 0,
      last_visit:      s.lastVisit              || null,
      mastered_vocab:  s.masteredVocab          || {},
      need_work_vocab: s.needWorkVocab          || {},
      quiz_correct:    s.quizScore?.correct     || 0,
      quiz_total:      s.quizScore?.total       || 0,
      grace_used:      s.graceUsed              || 0,
      grace_month:     s.graceMonth             || null,
    };
  }

  function rowToState(row) {
    return {
      currentDay:    row.current_day,
      completedDays: row.completed_days  || [],
      streak:        row.streak          || 0,
      lastVisit:     row.last_visit      || null,
      masteredVocab: row.mastered_vocab  || {},
      needWorkVocab: row.need_work_vocab || {},
      quizScore:     { correct: row.quiz_correct || 0, total: row.quiz_total || 0 },
      graceUsed:     row.grace_used      || 0,
      graceMonth:    row.grace_month     || null,
    };
  }

  // Merge local + remote — take the "further ahead" value everywhere
  function mergeStates(local, remote) {
    const merged = Object.assign({}, local);

    // completedDays — union
    const days = new Set([...(local.completedDays || []), ...(remote.completedDays || [])]);
    merged.completedDays = [...days].sort((a, b) => a - b);

    // currentDay / streak — furthest
    merged.currentDay = Math.max(local.currentDay || 1, remote.currentDay || 1);
    merged.streak     = Math.max(local.streak     || 0, remote.streak     || 0);

    // masteredVocab / needWorkVocab — max count per word
    const mv = Object.assign({}, local.masteredVocab || {});
    for (const [k, v] of Object.entries(remote.masteredVocab || {})) {
      mv[k] = Math.max(mv[k] || 0, v);
    }
    merged.masteredVocab = mv;

    const nw = Object.assign({}, local.needWorkVocab || {});
    for (const [k, v] of Object.entries(remote.needWorkVocab || {})) {
      nw[k] = Math.max(nw[k] || 0, v);
    }
    merged.needWorkVocab = nw;

    // quizScore — take whichever has more attempts
    if ((remote.quizScore?.total || 0) > (local.quizScore?.total || 0)) {
      merged.quizScore = remote.quizScore;
    }

    // graceUsed — max
    merged.graceUsed = Math.max(local.graceUsed || 0, remote.graceUsed || 0);

    return merged;
  }

  // ── Push progress to Supabase (debounced 2s) ─────────────────
  function pushProgress(lang, state) {
    if (!sb || !user) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(async () => {
      const row = Object.assign({ user_id: user.id }, stateToRow(lang, state));
      const { error } = await sb
        .from('user_progress')
        .upsert(row, { onConflict: 'user_id,lang' });
      if (error) console.warn('cllSync push error:', error.message);
    }, 2000);
  }

  // ── Pull progress for a language ─────────────────────────────
  async function pullProgress(lang) {
    if (!sb || !user) return null;
    const { data, error } = await sb
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('lang', lang)
      .maybeSingle();
    if (error || !data) return null;
    return rowToState(data);
  }

  // ── Push a translator card to Supabase ───────────────────────
  async function pushTranslation(lang, item) {
    if (!sb || !user) return;
    await sb.from('saved_translations').upsert({
      user_id:     user.id,
      lang,
      english:     item.en       || '',
      translation: item.fr       || '',
      ipa:         item.ipa      || null,
      phonetic:    item.phonetic || null,
    }, { onConflict: 'user_id,lang,english' });
  }

  // ── Pull saved translations ───────────────────────────────────
  async function pullTranslations(lang) {
    if (!sb || !user) return [];
    const { data } = await sb
      .from('saved_translations')
      .select('*')
      .eq('user_id', user.id)
      .eq('lang', lang)
      .order('saved_at', { ascending: false });
    return (data || []).map(r => ({
      fr:       r.translation,
      en:       r.english,
      ipa:      r.ipa      || '',
      phonetic: r.phonetic || '',
      savedAt:  Date.parse(r.saved_at) || Date.now(),
      source:   'translator',
    }));
  }

  // ── Sync on login: merge remote + local, reload if changed ───
  async function syncOnLogin() {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
    const key  = lang + (
      { fr:'_learner_v1', es:'_learner_v1', it:'_learner_v1', pt:'_learner_v1',
        el:'_learner_v1', sq:'_learner_v1', ja:'_learner_v1', de:'_learner_v1' }[lang] || '_learner_v1'
    ).replace('_learner', '');

    // Resolve actual storage key via app.js helper if available
    const storageKey = (typeof getStorageKey === 'function') ? getStorageKey()
      : lang + '_learner_v1';

    let local = {};
    try { local = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (e) {}

    const remote = await pullProgress(lang);

    if (!remote) {
      // First ever login — push local state up, no reload needed
      pushProgress(lang, local);
      toast(`✓ Signed in as ${user.email.split('@')[0]}. Progress synced.`);
      updateAuthUI();
      return;
    }

    // Merge saved translations
    const remoteTrans = await pullTranslations(lang);
    if (remoteTrans.length) {
      const localSaved   = Array.isArray(local.savedVocab) ? local.savedVocab : [];
      const existingKeys = new Set(localSaved.map(v => v.fr));
      const newItems     = remoteTrans.filter(v => !existingKeys.has(v.fr));
      local.savedVocab   = [...newItems, ...localSaved];
    }

    const merged = mergeStates(local, remote);
    localStorage.setItem(storageKey, JSON.stringify(merged));

    toast(`✓ Signed in as ${user.email.split('@')[0]}. Progress synced across devices!`);
    updateAuthUI();

    // Reload to apply merged state
    setTimeout(() => window.location.reload(), 1200);
  }

  // ── Auth actions ─────────────────────────────────────────────
  async function signUp(email, password) {
    if (!sb) return { error: { message: 'Supabase not available' } };
    return sb.auth.signUp({ email, password });
  }

  async function signIn(email, password) {
    if (!sb) return { error: { message: 'Supabase not available' } };
    return sb.auth.signInWithPassword({ email, password });
  }

  async function signInWithGoogle() {
    if (!sb) return;
    await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.href },
    });
  }

  async function signOut() {
    if (!sb) return;
    closeAuthModal();
    await sb.auth.signOut();
    user = null;
    updateAuthUI();
  }

  // ── Auth UI ───────────────────────────────────────────────────
  function updateAuthUI() {
    const btn = document.getElementById('auth-btn');
    if (!btn) return;
    if (user) {
      const initial = (user.user_metadata?.full_name || user.email || 'U')
        .charAt(0).toUpperCase();
      btn.textContent = initial + ' ·sync';
      btn.classList.add('signed-in');
      btn.title = `Signed in as ${user.email} — click to manage`;
    } else {
      btn.textContent = 'Sign In';
      btn.classList.remove('signed-in');
      btn.title = 'Sign in to sync progress across devices';
    }
  }

  function showAuthModal() {
    if (user) { showSignedInModal(); return; }
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'flex';
    clearAuthMsg();
    // Default to sign-in tab
    switchAuthTab('signin');
  }

  function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'none';
    const m2 = document.getElementById('auth-signedin-modal');
    if (m2) m2.style.display = 'none';
  }

  function showSignedInModal() {
    const modal = document.getElementById('auth-signedin-modal');
    if (!modal) return;
    const nameEl = document.getElementById('auth-si-name');
    if (nameEl) nameEl.textContent = user.email;
    modal.style.display = 'flex';
  }

  function switchAuthTab(tab) {
    document.getElementById('auth-tab-signin').classList.toggle('active', tab === 'signin');
    document.getElementById('auth-tab-signup').classList.toggle('active', tab === 'signup');
    document.getElementById('auth-panel-signin').style.display = tab === 'signin' ? '' : 'none';
    document.getElementById('auth-panel-signup').style.display = tab === 'signup' ? '' : 'none';
  }

  function clearAuthMsg() {
    ['auth-error-signin','auth-error-signup'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
  }

  // Called by the HTML form buttons
  window.cllAuthSubmitSignIn = async function () {
    const email    = document.getElementById('auth-email-signin').value.trim();
    const password = document.getElementById('auth-pw-signin').value;
    const errEl    = document.getElementById('auth-error-signin');
    const btn      = document.getElementById('auth-btn-signin');
    if (!email || !password) { errEl.textContent = 'Please fill in both fields.'; return; }
    btn.disabled = true; btn.textContent = 'Signing in…';
    const { error } = await signIn(email, password);
    btn.disabled = false; btn.textContent = 'Sign in';
    if (error) { errEl.textContent = error.message; return; }
    closeAuthModal();
  };

  window.cllAuthSubmitSignUp = async function () {
    const email    = document.getElementById('auth-email-signup').value.trim();
    const password = document.getElementById('auth-pw-signup').value;
    const errEl    = document.getElementById('auth-error-signup');
    const btn      = document.getElementById('auth-btn-signup');
    if (!email || !password) { errEl.textContent = 'Please fill in both fields.'; return; }
    if (password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }
    btn.disabled = true; btn.textContent = 'Creating account…';
    const { error } = await signUp(email, password);
    btn.disabled = false; btn.textContent = 'Create account';
    if (error) { errEl.textContent = error.message; return; }
    errEl.style.color = '#7ecb8a';
    errEl.textContent = '✓ Check your email to confirm your account, then sign in.';
  };

  window.cllAuthGoogleSignIn  = signInWithGoogle;
  window.cllAuthSignOut       = signOut;
  window.cllAuthSwitchTab     = switchAuthTab;
  window.cllAuthCloseModal    = closeAuthModal;

  // ── Toast helper ──────────────────────────────────────────────
  function toast(msg, ms) {
    if (typeof showToast === 'function') showToast(msg, ms || 3500);
    else console.log('cllSync:', msg);
  }

  // ── Expose public API ─────────────────────────────────────────
  window.cllSync = {
    init,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
    pushProgress,
    pullProgress,
    pushTranslation,
    pullTranslations,
    getUser: () => user,
    showAuthModal,
    closeAuthModal,
    updateAuthUI,
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAndCheck);
  } else {
    initAndCheck();
  }

  function initAndCheck() {
    init();
    // If user clicked "Sign in" on the landing page, open auth modal automatically
    try {
      if (localStorage.getItem('cll_open_auth') === '1') {
        localStorage.removeItem('cll_open_auth');
        // Wait a beat for the modal DOM to be ready
        setTimeout(showAuthModal, 600);
      }
    } catch(e) {}
  }
})();
