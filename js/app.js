// App logic — state, rendering, quiz, flashcards, translator

// ============================================================
// LANGUAGE CONFIG
// ============================================================

// Per-language registry: visual identity + TTS only
const LANGS = {
  en: { label: 'English',    flag: '🇺🇸', speechLang: 'en-US',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/us.png) center/cover no-repeat',
        headerBorder: 'rgba(178, 34, 52, 0.65)', statBg: 'rgba(0, 40, 100, 0.6)', statBorder: 'rgba(178, 34, 52, 0.45)' },
  fr: { label: 'French',     flag: '🇫🇷', speechLang: 'fr-FR',
        headerBg: 'linear-gradient(rgba(8,10,18,0.70), rgba(8,10,18,0.70)), url(https://flagcdn.com/w1280/fr.png) center/cover no-repeat',
        headerBorder: 'rgba(200, 30, 50, 0.55)', statBg: 'rgba(0, 20, 70, 0.6)', statBorder: 'rgba(200, 30, 50, 0.4)' },
  es: { label: 'Spanish',    flag: '🇪🇸', speechLang: 'es-ES',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/es.png) center/cover no-repeat',
        headerBorder: 'rgba(241, 191, 0, 0.6)', statBg: 'rgba(90, 5, 15, 0.6)', statBorder: 'rgba(241, 191, 0, 0.42)' },
  sq: { label: 'Albanian',   flag: '🇦🇱', speechLang: 'sq-AL',
        headerBg: 'linear-gradient(rgba(8,10,18,0.62), rgba(8,10,18,0.62)), url(https://flagcdn.com/w1280/al.png) center/cover no-repeat',
        headerBorder: 'rgba(220, 30, 30, 0.65)', statBg: 'rgba(80, 0, 0, 0.6)', statBorder: 'rgba(220, 30, 30, 0.45)' },
  it: { label: 'Italian',    flag: '🇮🇹', speechLang: 'it-IT',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/it.png) center/cover no-repeat',
        headerBorder: 'rgba(0, 146, 70, 0.6)', statBg: 'rgba(0, 60, 28, 0.6)', statBorder: 'rgba(0, 146, 70, 0.42)' },
  pt: { label: 'Portuguese', flag: '🇧🇷', speechLang: 'pt-BR',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/br.png) center/cover no-repeat',
        headerBorder: 'rgba(0, 168, 89, 0.6)', statBg: 'rgba(0, 60, 20, 0.6)', statBorder: 'rgba(0, 168, 89, 0.42)' },
  el: { label: 'Greek',      flag: '🇬🇷', speechLang: 'el-GR',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/gr.png) center/cover no-repeat',
        headerBorder: 'rgba(0, 118, 190, 0.65)', statBg: 'rgba(0, 40, 90, 0.6)', statBorder: 'rgba(0, 118, 190, 0.45)' },
  ja: { label: 'Japanese',   flag: '🇯🇵', speechLang: 'ja-JP',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/jp.png) center/cover no-repeat',
        headerBorder: 'rgba(188, 0, 45, 0.65)', statBg: 'rgba(80, 0, 20, 0.6)', statBorder: 'rgba(188, 0, 45, 0.45)' },
  de: { label: 'German',     flag: '🇩🇪', speechLang: 'de-DE',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/de.png) bottom/cover no-repeat',
        headerBorder: 'rgba(220, 0, 0, 0.65)', statBg: 'rgba(20, 20, 20, 0.7)', statBorder: 'rgba(220, 0, 0, 0.45)' },
  ko: { label: 'Korean',     flag: '🇰🇷', speechLang: 'ko-KR',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/kr.png) center/cover no-repeat',
        headerBorder: 'rgba(205, 46, 58, 0.65)', statBg: 'rgba(0, 30, 90, 0.6)', statBorder: 'rgba(205, 46, 58, 0.45)' }
};

// Direction pairs: source → target with all pair-specific config.
// courseKey = which course data file to load (always the non-English language).
// Header theme is driven by the TARGET language colors from LANGS above.
const PAIRS = {
  // ── English → X ─────────────────────────────────────────────────────────────
  'en-fr': { source:'en', target:'fr', courseKey:'fr', storageKey:'french_learner_v1',    recentKey:'french_translator_recent',
             subtitle:'English → French',     tagline:'30 days to café-confidence',
             inputPlaceholder:'e.g. where is the bathroom',
             translatorSubtitle:'Type any English word or phrase. Get the French translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-es': { source:'en', target:'es', courseKey:'es', storageKey:'spanish_learner_v1',   recentKey:'spanish_translator_recent',
             subtitle:'English → Spanish',    tagline:'30 days to tapas-confidence',
             inputPlaceholder:'e.g. where is the bathroom',
             translatorSubtitle:'Type any English word or phrase. Get the Spanish translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-sq': { source:'en', target:'sq', courseKey:'sq', storageKey:'albanian_learner_v1',  recentKey:'albanian_translator_recent',
             subtitle:'English → Albanian',   tagline:'30 days to Tirana-confidence',
             inputPlaceholder:'e.g. where is the bathroom',
             translatorSubtitle:'Type any English word or phrase. Get the Albanian translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-it': { source:'en', target:'it', courseKey:'it', storageKey:'italian_learner_v1',   recentKey:'italian_translator_recent',
             subtitle:'English → Italian',    tagline:'30 days to aperitivo-confidence',
             inputPlaceholder:'e.g. where is the bathroom',
             translatorSubtitle:'Type any English word or phrase. Get the Italian translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-pt': { source:'en', target:'pt', courseKey:'pt', storageKey:'portuguese_learner_v1',recentKey:'portuguese_translator_recent',
             subtitle:'English → Portuguese', tagline:'30 days to Rio-confidence',
             inputPlaceholder:'e.g. where is the beach',
             translatorSubtitle:'Type any English word or phrase. Get the Brazilian Portuguese translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-el': { source:'en', target:'el', courseKey:'el', storageKey:'greek_learner_v1',     recentKey:'greek_translator_recent',
             subtitle:'English → Greek',      tagline:'30 days to Athens-confidence',
             inputPlaceholder:'e.g. where is the Acropolis',
             translatorSubtitle:'Type any English word or phrase. Get the Greek translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-ja': { source:'en', target:'ja', courseKey:'ja', storageKey:'japanese_learner_v1',  recentKey:'japanese_translator_recent',
             subtitle:'English → Japanese',   tagline:'30 days to Tokyo-confidence',
             inputPlaceholder:'e.g. where is the train station',
             translatorSubtitle:'Type any English word or phrase. Get the Japanese translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-de': { source:'en', target:'de', courseKey:'de', storageKey:'german_learner_v1',    recentKey:'german_translator_recent',
             subtitle:'English → German',     tagline:'30 days to Berlin-confidence',
             inputPlaceholder:'e.g. where is the train station',
             translatorSubtitle:'Type any English word or phrase. Get the German translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-ko': { source:'en', target:'ko', courseKey:'ko', storageKey:'korean_learner_v1',    recentKey:'korean_translator_recent',
             subtitle:'English → Korean',     tagline:'30 days to Seoul-confidence',
             inputPlaceholder:'e.g. where is the subway station',
             translatorSubtitle:'Type any English word or phrase. Get the Korean translation, Hangul, and a pronunciation guide. Tap the speaker to hear it.' },

  // ── X → English (reverse pairs) ─────────────────────────────────────────────
  'fr-en': { source:'fr', target:'en', courseKey:'fr', storageKey:'fr_en_learner_v1', recentKey:'fr_en_translator_recent',
             subtitle:'Français → English',   tagline:'30 jours pour maîtriser l\'anglais',
             inputPlaceholder:'ex. où sont les toilettes',
             translatorSubtitle:'Tapez un mot ou une phrase en français. Obtenez la traduction anglaise, l\'IPA et un guide de prononciation. Appuyez sur le haut-parleur pour l\'entendre.' },
  'es-en': { source:'es', target:'en', courseKey:'es', storageKey:'es_en_learner_v1', recentKey:'es_en_translator_recent',
             subtitle:'Español → English',    tagline:'30 días para dominar el inglés',
             inputPlaceholder:'ej. dónde están los baños',
             translatorSubtitle:'Escribe una palabra o frase en español. Obtén la traducción al inglés, IPA y guía de pronunciación. Toca el altavoz para escucharlo.' },
  'sq-en': { source:'sq', target:'en', courseKey:'sq', storageKey:'sq_en_learner_v1', recentKey:'sq_en_translator_recent',
             subtitle:'Shqip → English',      tagline:'30 ditë për të zotëruar anglishten',
             inputPlaceholder:'p.sh. ku janë tualetet',
             translatorSubtitle:'Shkruani një fjalë ose frazë në shqip. Merrni përkthimin anglisht, IPA dhe udhëzues shqiptimi. Prekni altoparlantit për ta dëgjuar.' },
  'it-en': { source:'it', target:'en', courseKey:'it', storageKey:'it_en_learner_v1', recentKey:'it_en_translator_recent',
             subtitle:'Italiano → English',   tagline:'30 giorni per padroneggiare l\'inglese',
             inputPlaceholder:'es. dove sono i bagni',
             translatorSubtitle:'Scrivi una parola o frase in italiano. Ottieni la traduzione inglese, IPA e guida alla pronuncia. Tocca l\'altoparlante per ascoltarlo.' },
  'pt-en': { source:'pt', target:'en', courseKey:'pt', storageKey:'pt_en_learner_v1', recentKey:'pt_en_translator_recent',
             subtitle:'Português → English',  tagline:'30 dias para dominar o inglês',
             inputPlaceholder:'ex. onde ficam os banheiros',
             translatorSubtitle:'Digite uma palavra ou frase em português. Obtenha a tradução em inglês, IPA e guia de pronúncia. Toque no alto-falante para ouvir.' },
  'el-en': { source:'el', target:'en', courseKey:'el', storageKey:'el_en_learner_v1', recentKey:'el_en_translator_recent',
             subtitle:'Ελληνικά → English',   tagline:'30 μέρες για να μάθεις αγγλικά',
             inputPlaceholder:'π.χ. πού είναι οι τουαλέτες',
             translatorSubtitle:'Πληκτρολογήστε μια λέξη ή φράση στα ελληνικά. Λάβετε τη μετάφραση, IPA και οδηγό προφοράς. Πατήστε το ηχείο για να το ακούσετε.' },
  'ja-en': { source:'ja', target:'en', courseKey:'ja', storageKey:'ja_en_learner_v1', recentKey:'ja_en_translator_recent',
             subtitle:'日本語 → English',      tagline:'英語習得への30日間',
             inputPlaceholder:'例: トイレはどこですか',
             translatorSubtitle:'日本語の単語やフレーズを入力してください。英語の翻訳、IPA、発音ガイドを取得できます。スピーカーをタップして聞いてください。' },
  'de-en': { source:'de', target:'en', courseKey:'de', storageKey:'de_en_learner_v1', recentKey:'de_en_translator_recent',
             subtitle:'Deutsch → English',    tagline:'30 Tage für Englisch-Selbstvertrauen',
             inputPlaceholder:'z.B. wo sind die Toiletten',
             translatorSubtitle:'Geben Sie ein deutsches Wort oder eine Phrase ein. Erhalten Sie die englische Übersetzung, IPA und Ausspracheführer. Tippen Sie auf den Lautsprecher.' },
  'ko-en': { source:'ko', target:'en', courseKey:'ko', storageKey:'ko_en_learner_v1', recentKey:'ko_en_translator_recent',
             subtitle:'한국어 → English',      tagline:'30일간의 영어 자신감',
             inputPlaceholder:'예: 화장실이 어디에 있나요',
             translatorSubtitle:'한국어 단어나 문장을 입력하세요. 영어 번역, IPA 및 발음 가이드를 받아보세요. 스피커를 탭하여 들으세요.' },
};

// ── Auto-generate cross pairs (non-English ↔ non-English) ───────────────────
// These use the target-language course as fallback until a native lesson plan
// (e.g. js/course-es-fr.js) is loaded, at which point getCourseData() upgrades
// automatically. Cross pairs are intentionally NOT shown on the landing page
// until a native course file exists — surfaced progressively as content ships.
(function() {
  const NON_EN = ['fr','es','sq','it','pt','el','ja','de','ko'];
  NON_EN.forEach(src => {
    NON_EN.forEach(tgt => {
      if (src === tgt) return;
      const key = `${src}-${tgt}`;
      if (PAIRS[key]) return; // already defined
      PAIRS[key] = {
        source: src,
        target: tgt,
        courseKey: tgt,
        nativeCourse: false, // flipped to true when js/course-{key}.js is loaded
        storageKey:  `${src}_${tgt}_learner_v1`,
        recentKey:   `${src}_${tgt}_translator_recent`,
        subtitle:    `${LANGS[src].label} → ${LANGS[tgt].label}`,
        tagline:     `30 days to confidence in ${LANGS[tgt].label}`,
        inputPlaceholder: 'e.g. hello',
        translatorSubtitle: `Translate from ${LANGS[src].label} to ${LANGS[tgt].label}. Get the translation, IPA, and a pronunciation guide.`
      };
    });
  });
})();

// Migrate old single-code lang keys (e.g. 'fr') → pair keys (e.g. 'en-fr')
function migrateLangKey(val) {
  if (!val) return 'en-fr';
  if (val.includes('-') && PAIRS[val]) return val; // already a valid pair key
  return PAIRS['en-' + val] ? 'en-' + val : 'en-fr'; // fr → en-fr, unknown → en-fr
}
let currentLang = migrateLangKey(localStorage.getItem('cll_lang'));

// ── Direction helpers ────────────────────────────────────────
function currentPair()     { return PAIRS[currentLang]; }
function currentTarget()   { return PAIRS[currentLang].target; }
function currentSource()   { return PAIRS[currentLang].source; }
function isTargetEnglish() { return currentTarget() === 'en'; }
function isSourceEnglish() { return currentSource() === 'en'; }
function isCrossPair()     { return !isSourceEnglish() && !isTargetEnglish(); }
// Legacy alias — kept for any stray call sites
function isReversed()      { return !isSourceEnglish(); }

// Returns the native/target-language word from any vocab/phrase/line object.
function getNative(v) {
  const ck = currentPair().courseKey;
  return v[ck] || v.fr || v.native || '';
}

// Front of card = target language word (what you're learning).
// If target IS English (e.g. fr-en), the English word goes on front.
function getFrontWord(v) {
  return isTargetEnglish() ? (v.en || '') : getNative(v);
}

// Back of card = source language word (your native language).
// For cross pairs: v[sourceCode]. For en-X forward: v.en. Falls back to English.
function getBackWord(v) {
  const src = currentSource();
  if (src === 'en') return v.en || '';
  return v[src] || v.en || '';
}

// TTS: always speak the TARGET language word.
function getSpeakWord(v) {
  return isTargetEnglish() ? (v.en || '') : getNative(v);
}

function getCourseData(pairKey) {
  // 1. Try pair-specific course file first (e.g. COURSE_ES_FR for native es→fr plan)
  const pairVar  = 'COURSE_'  + pairKey.toUpperCase().replace('-', '_');
  const convoVar = 'CONVERSATIONS_' + pairKey.toUpperCase().replace('-', '_');
  if (window[pairVar]) return { course: window[pairVar], convos: window[convoVar] || [] };

  // 2. Fall back to target-language course
  const ck = (PAIRS[pairKey] || PAIRS['en-fr']).courseKey;
  if (ck === 'es') return { course: COURSE_ES, convos: CONVERSATIONS_ES };
  if (ck === 'sq') return { course: COURSE_SQ, convos: CONVERSATIONS_SQ };
  if (ck === 'it') return { course: COURSE_IT, convos: CONVERSATIONS_IT };
  if (ck === 'pt') return { course: COURSE_PT, convos: CONVERSATIONS_PT };
  if (ck === 'el') return { course: COURSE_EL, convos: CONVERSATIONS_EL };
  if (ck === 'ja') return { course: COURSE_JA, convos: CONVERSATIONS_JA };
  if (ck === 'de') return { course: COURSE_DE, convos: CONVERSATIONS_DE };
  if (ck === 'ko') return { course: COURSE_KO, convos: CONVERSATIONS_KO };
  return { course: COURSE_FR, convos: CONVERSATIONS_FR };
}
let COURSE = getCourseData(currentLang).course;
let CONVERSATIONS = getCourseData(currentLang).convos;

function getStorageKey() { return currentPair().storageKey; }
function getRecentKey()  { return currentPair().recentKey; }

function updateHeaderTheme(pairKey) {
  const t = LANGS[PAIRS[pairKey]?.target || 'fr'];
  const header = document.querySelector('header');
  if (!header) return;
  header.style.background = t.headerBg;
  header.style.borderColor = t.headerBorder;
  document.querySelectorAll('.stat').forEach(el => {
    el.style.background = t.statBg;
    el.style.borderColor = t.statBorder;
  });
}

// ============================================================
// APP STATE & PERSISTENCE
// ============================================================
let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(getStorageKey());
    if (raw) return JSON.parse(raw);
  } catch(e){}
  return {
    currentDay: 1,
    completedDays: [],
    masteredVocab: {}, // {fr: count}
    needWorkVocab: {}, // {fr: count}
    savedVocab: [],    // [{fr, en, ipa, phonetic, savedAt, source: 'translator'}]
    streak: 0,
    lastVisit: null,
    quizScore: { correct: 0, total: 0 },
    graceUsed: 0,
    graceMonth: null
  };
}
// Migrations
if (!Array.isArray(state.savedVocab)) state.savedVocab = [];
if (!Array.isArray(state.shownMilestones)) state.shownMilestones = [];
if (state.graceUsed === undefined) state.graceUsed = 0;
if (state.graceMonth === undefined) state.graceMonth = null;
function saveState() {
  localStorage.setItem(getStorageKey(), JSON.stringify(state));
  window.cllSync?.pushProgress(currentLang, state);
}
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  // Reset grace allowance each calendar month
  const thisMonth = new Date().toISOString().slice(0, 7);
  if (state.graceMonth !== thisMonth) { state.graceUsed = 0; state.graceMonth = thisMonth; }
  if (state.lastVisit === yesterday) {
    state.streak++;
  } else if (!state.lastVisit) {
    state.streak = 1;
  } else {
    // Missed a day — invoke Diplomatic Immunity if available
    if (state.streak > 0 && state.graceUsed < 2) {
      state.graceUsed++;
      // streak holds; show toast after state loads
      setTimeout(() => showToast(
        `🎩 Diplomatic Immunity invoked. Streak preserved. (${state.graceUsed}/2 grace days used this month)`, 5000
      ), 600);
    } else {
      state.streak = 1;
    }
  }
  state.lastVisit = today;
  saveState();
}
updateStreak();

// ============================================================
// LANGUAGE SWITCHING
// ============================================================
function setLanguage(lang) {
  if (!PAIRS[lang] || lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('cll_lang', lang);
  const data = getCourseData(lang);
  COURSE = data.course;
  CONVERSATIONS = data.convos;
  state = loadState();
  if (!Array.isArray(state.savedVocab)) state.savedVocab = [];
  if (!Array.isArray(state.shownMilestones)) state.shownMilestones = [];
  updateStreak();
  // Reset translator state for new language
  translatorState.lastResult = null;
  translatorState.recent = loadRecent();
  translatorState.error = null;
  // Reset flash/quiz state
  flashState = { pool: [], index: 0, flipped: false, scope: 'learned', ipaMode: 'show' };
  quizState = { questions:[], current:0, score:0, answered:false };
  // Update header subtitle
  const subtitleEl = document.getElementById('lang-subtitle');
  const taglineEl  = document.getElementById('lang-tagline');
  if (subtitleEl) subtitleEl.textContent = currentPair().subtitle;
  if (taglineEl)  taglineEl.textContent  = currentPair().tagline;
  // Update header color theme
  updateHeaderTheme(lang);
  // Track language switch in GA4
  if (typeof gtag === 'function') {
    gtag('event', 'language_switch', { language: lang });
  }
  refreshStats();
  setView('lesson');
}

// ============================================================
// REWARDS HELPERS
// ============================================================
function getQuizStars(correct, total) {
  if (total === 0) return 1;
  const pct = correct / total;
  if (pct === 1)    return 3;
  if (pct >= 0.7)   return 2;
  return 1;
}

function isDayMastered(dayNum) {
  const day = COURSE.find(d => d.day === dayNum);
  if (!day || !state.completedDays.includes(dayNum)) return false;
  const masteredCount = day.vocab.filter(v => (state.masteredVocab[getNative(v)] || 0) >= 2).length;
  return day.vocab.length > 0 && masteredCount / day.vocab.length >= 0.8;
}

const STREAK_MILESTONES = {
  3:  { title: "Three days in.",    msg: "The Proctor raises an eyebrow. In approval." },
  7:  { title: "One week.",         msg: "A week of dedication. The monocle gleams." },
  14: { title: "A fortnight.",      msg: "You are no longer a tourist." },
  30: { title: "Thirty days.",      msg: "The Cunning Linguist tips his hat. Slowly. Deliberately." }
};

function showMilestoneToast(milestone) {
  const el = document.createElement('div');
  el.className = 'milestone-toast';
  el.innerHTML = `
    <div class="milestone-stars">★ ★ ★</div>
    <div class="milestone-title">${milestone.title}</div>
    <div class="milestone-msg">${milestone.msg}</div>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4600);
}

const QUIZ_VERDICTS = {
  3: [
    "Extraordinary. I'm genuinely moved. Don't tell anyone.",
    "Perfect score. I had my doubts. I withdraw them entirely.",
    "Flawless. The monocle nearly fell off in surprise."
  ],
  2: [
    "Very nearly perfect. I've seen worse. Much worse.",
    "Solid work. The gentleman is... not displeased.",
    "Two stars. Room for improvement, but I shan't harp on it."
  ],
  1: [
    "We shall not speak of this. We shall simply try again.",
    "I've witnessed worse performances. I was present for several of them.",
    "One star. The bar was not high. A rematch is clearly in order."
  ]
};

function getAllVocab() {
  const all = [];
  COURSE.forEach(d => d.vocab.forEach(v => all.push({...v, day:d.day})));
  state.savedVocab.forEach(v => all.push({fr: v.fr, en: v.en, ipa: v.ipa || v.phonetic || '', day: 'saved'}));
  return all;
}
function getLearnedVocab() {
  const all = [];
  COURSE.filter(d => state.completedDays.includes(d.day) || d.day === state.currentDay)
    .forEach(d => d.vocab.forEach(v => all.push({...v, day:d.day})));
  state.savedVocab.forEach(v => all.push({fr: v.fr, en: v.en, ipa: v.ipa || v.phonetic || '', day: 'saved'}));
  return all;
}
function getSavedVocab() {
  return state.savedVocab.map(v => ({fr: v.fr, en: v.en, ipa: v.ipa || v.phonetic || '', day: 'saved'}));
}
function isCardSaved(wordKey) {
  return state.savedVocab.some(v => (v.word || v.fr) === wordKey);
}
function saveTranslationCard(translation) {
  if (!translation || !translation.word) return false;
  const wordKey = translation.word;
  if (isCardSaved(wordKey)) return false;
  // Store under both 'word' (new) and 'fr' (legacy compat for getNative/isCardSaved)
  const card = {
    word: wordKey,
    fr: wordKey,
    en: translation.input || '',
    ipa: translation.ipa || '',
    phonetic: translation.phonetic || '',
    savedAt: Date.now(),
    source: 'translator'
  };
  state.savedVocab.unshift(card);
  saveState();
  refreshStats();
  window.cllSync?.pushTranslation(currentLang, card);
  return true;
}
function removeSavedCard(wordKey) {
  state.savedVocab = state.savedVocab.filter(v => (v.word || v.fr) !== wordKey);
  delete state.masteredVocab[wordKey];
  delete state.needWorkVocab[wordKey];
  saveState();
  refreshStats();
}

// ============================================================
// HEADER STATS
// ============================================================
function refreshStats() {
  document.getElementById('stat-day').textContent = state.currentDay;
  document.getElementById('stat-streak').textContent = state.streak;
  const mastered = Object.values(state.masteredVocab).filter(c => c >= 2).length;
  document.getElementById('stat-mastered').textContent = mastered;
  const pct = Math.round((state.completedDays.length / 30) * 100);
  document.getElementById('stat-pct').textContent = pct + '%';
  updateReviewBadge();
}

// ============================================================
// VIEWS
// ============================================================
const content = document.getElementById('content');

function setActiveNav(view) {
  document.querySelectorAll('nav button').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });
}

function renderLessonView(dayNum) {
  const day = COURSE.find(d => d.day === dayNum) || COURSE[0];
  const isCompleted = state.completedDays.includes(day.day);

  const prevDay = COURSE.find(d => d.day === day.day - 1) || null;
  const nextDay = COURSE.find(d => d.day === day.day + 1) || null;

  function navCard(d, role) {
    if (!d) return `<div class="day-nav-card ghost"></div>`;
    const done     = state.completedDays.includes(d.day);
    const mastered = isDayMastered(d.day);
    const label    = role === 'prev' ? '← Yesterday' : role === 'next' ? 'Tomorrow →' : 'Today';
    const status   = mastered ? '<div class="card-check card-mastered">★ Mastered</div>'
                   : done     ? '<div class="card-check">✓ Completed</div>'
                   : '';
    return `
      <div class="day-nav-card ${role === 'curr' ? 'today' : ''}" onclick="renderLessonView(${d.day})">
        <div class="card-label">${label}</div>
        <div class="card-day">Day ${d.day}</div>
        <div class="card-title">${isTargetEnglish() && d.titleNative ? d.titleNative : d.title}</div>
        ${d.titleNative ? `<div class="card-title-native">${isTargetEnglish() ? d.title : d.titleNative}</div>` : ''}
        ${status}
      </div>`;
  }

  let html = `
    <div class="day-nav-trio">
      ${navCard(prevDay, 'prev')}
      ${navCard(day, 'curr')}
      ${navCard(nextDay, 'next')}
    </div>
    <div id="lesson-banner-wrap" style="display:none;margin:16px 0 4px;border-radius:14px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.45);line-height:0;">
      <img id="lesson-banner-img" src="" alt=""
           style="width:100%;max-height:320px;object-fit:cover;object-position:center;opacity:0;transition:opacity 0.4s ease;display:block;">
    </div>
    <h2>Day ${day.day}: ${isTargetEnglish() && day.titleNative ? day.titleNative : day.title}${day.titleNative ? `<span class="title-native"> — ${isTargetEnglish() ? day.title : day.titleNative}</span>` : ''}</h2>
    <p class="subtitle">${day.focus || ''}</p>

    <h3>Vocabulary</h3>
    <div class="vocab-grid">
      ${day.vocab.map(v => `
        <div class="vocab-card" onclick="this.classList.toggle('flipped')" title="Click to flip">
          <div class="vocab-flip">
            <div class="vocab-face vocab-front">
              <div class="fr">${getFrontWord(v)}</div>
              ${isTargetEnglish() ? '' : `<div class="ipa">${v.phonetic || v.ipa || ''}</div>`}
              <button class="speak-btn speak-btn-sm" onclick="event.stopPropagation();speakWord('${getSpeakWord(v).replace(/'/g,"\\'")}','${currentTarget()}')">🔊</button>
              <div class="vocab-flip-hint">tap to reveal</div>
            </div>
            <div class="vocab-face vocab-back">
              <div class="en">${getBackWord(v)}</div>
              ${isTargetEnglish() ? `<div class="ipa">${v.phonetic || v.ipa || ''}</div>` : ''}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <h3>Key Phrases</h3>
    <div class="phrase-list">
      ${day.phrases.map(p => `
        <div class="phrase">
          <div class="fr">${getFrontWord(p)}</div>
          <div class="ipa">${p.ipa || p.phonetic || ''}</div>
          <div class="en">${getBackWord(p)}</div>
          <button class="speak-btn speak-btn-sm" onclick="speakWord('${getSpeakWord(p).replace(/'/g,"\\'")}','${currentTarget()}')">🔊</button>
        </div>
      `).join('')}
    </div>

    <h3>Grammar / Cultural Tip</h3>
    <div class="grammar-box">
      <p>${day.grammar}</p>
    </div>

    ${day.practice && day.practice.length ? `
    <h3>Practice</h3>
    <div class="practice-box">
      <ol>
        ${day.practice.map(p => `<li>${p}</li>`).join('')}
      </ol>
    </div>` : day.tip ? `
    <h3>Cultural Tip</h3>
    <div class="grammar-box">
      <p>${day.tip}</p>
    </div>` : ''}

    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:16px;">
      <button class="complete-btn ${isCompleted?'done':''}" onclick="completeDay(${day.day})" style="${isCompleted?'flex:1;':'width:100%;'}">
        ${isCompleted ? '✓ Completed' : 'Mark Day Complete'}
      </button>
      ${isCompleted ? `<button class="uncomplete-btn" onclick="uncompleteDay(${day.day})">↩ Undo</button>` : ''}
    </div>
  `;
  content.innerHTML = html;
  updateLessonBanner(dayNum);
}

function completeDay(dayNum) {
  if (!state.completedDays.includes(dayNum)) {
    state.completedDays.push(dayNum);
    if (dayNum === state.currentDay && state.currentDay < 30) {
      state.currentDay++;
    }
    // Update streak for completing today
    const today = new Date().toDateString();
    state.lastVisit = today;
    state.streak = Math.max(state.streak, state.completedDays.length);
    saveState();
    refreshStats();
    // Check streak milestones
    if (STREAK_MILESTONES[state.streak] && !state.shownMilestones.includes(state.streak)) {
      state.shownMilestones.push(state.streak);
      saveState();
      setTimeout(() => showMilestoneToast(STREAK_MILESTONES[state.streak]), 400);
    }
    if (state.currentDay <= 30) {
      renderLessonView(state.currentDay);
      content.scrollTop = 0;
      window.scrollTo(0, 0);
      return;
    }
  }
  renderLessonView(dayNum);
}

function uncompleteDay(dayNum, stayInAll) {
  state.completedDays = state.completedDays.filter(d => d !== dayNum);
  // Roll currentDay back if needed
  if (state.currentDay > dayNum) {
    state.currentDay = dayNum;
  }
  // Recalculate streak from remaining completed days
  state.streak = state.completedDays.length;
  saveState();
  refreshStats();
  showToast(`Day ${dayNum} marked incomplete.`);
  if (stayInAll) renderAllView();
  else renderLessonView(dayNum);
}

// FLASHCARDS
let flashState = { pool: [], index: 0, flipped: false, scope: 'learned', ipaMode: 'show' };

function renderFlashcardView() {
  rebuildFlashPool();
  renderFlashcardCard();
}
function renderFlashcardCard() {
  if (flashState.pool.length === 0) {
    const emptyMsg = flashState.scope === 'saved'
      ? 'No saved words yet. Use the Translator tab and tap "+ Save to flashcards" to build your custom deck.'
      : 'Complete Day 1 to start using flashcards!';
    content.innerHTML = `
      <h2>Flashcards</h2>
      <p class="subtitle">Drill the vocab from your completed days.</p>
      <div class="filter-bar">
        <select onchange="flashState.scope=this.value;flashState.index=0;flashState.flipped=false;renderFlashcardView()">
          <option value="learned" ${flashState.scope==='learned'?'selected':''}>Days I've seen</option>
          <option value="all" ${flashState.scope==='all'?'selected':''}>All 30 days + saved</option>
          <option value="weak" ${flashState.scope==='weak'?'selected':''}>Need more work</option>
          <option value="saved" ${flashState.scope==='saved'?'selected':''}>My saved words${state.savedVocab.length?` (${state.savedVocab.length})`:''}</option>
        </select>
      </div>
      <div class="empty">${emptyMsg}</div>
    `;
    return;
  }
  const card = flashState.pool[flashState.index];
  const showIpa = flashState.ipaMode === 'show';
  const ipa = card.phonetic || card.ipa || '';
  const dayLabel = card.personal ? '<span class="personal-badge">👤 About You</span>'
    : card.day === 'saved' ? '(Saved word)' : `(Day ${card.day})`;
  const nativeWord = getNative(card);
  const speakText  = getSpeakWord(card);
  const speakBtn = `<button class="speak-btn" onclick="event.stopPropagation();speakWord('${speakText.replace(/'/g,"\\'")}','${currentTarget()}')" title="Hear pronunciation">🔊</button>`;
  // Front = target language (getFrontWord). Back = source language (getBackWord).
  // IPA lives with the target/front side (not shown when target is English).
  const frontWord = getFrontWord(card);
  const backWord  = getBackWord(card);
  const frontIpa  = isTargetEnglish() ? '' : ipa;
  const backIpa   = isTargetEnglish() ? ipa : '';
  // Front/back content depends on IPA mode
  const frontContent = flashState.flipped
    ? `<div class="word">${backWord}</div>${backIpa ? `<div class="ipa-large">${backIpa}</div>` : ''}<div class="hint">${dayLabel}</div>`
    : (showIpa
        ? `<div class="word">${frontWord}</div>${frontIpa ? `<div class="ipa-large">${frontIpa}</div>` : ''}${speakBtn}<div class="hint">Tap to flip</div>`
        : `<div class="word">${frontWord}</div>${speakBtn}<div class="hint pronunciation-challenge">Say it — then flip</div>`);
  content.innerHTML = `
    <div class="flash-layout">
      <div class="flash-sidebar">
        <h2>Flashcards</h2>
        <p class="subtitle" style="margin-bottom:20px;">${flashState.pool.length} cards · ${flashState.index+1}/${flashState.pool.length}</p>
        <div class="flash-sidebar-label">Deck</div>
        <select class="flash-select" onchange="flashState.scope=this.value;flashState.index=0;flashState.flipped=false;renderFlashcardView()">
          <option value="learned" ${flashState.scope==='learned'?'selected':''}>Days I've seen</option>
          <option value="all" ${flashState.scope==='all'?'selected':''}>All 30 days + saved</option>
          <option value="weak" ${flashState.scope==='weak'?'selected':''}>Need more work</option>
          <option value="saved" ${flashState.scope==='saved'?'selected':''}>My saved words${state.savedVocab.length?` (${state.savedVocab.length})`:''}</option>
        </select>
        <button class="flash-sidebar-btn" onclick="rebuildFlashPool();shufflePool();renderFlashcardCard()">⇄ Shuffle</button>
        <div class="flash-sidebar-label" style="margin-top:18px;">Mode</div>
        <button class="ipa-mode-btn ${showIpa?'active':''}" style="width:100%;margin-bottom:6px;" onclick="flashState.ipaMode='show';flashState.flipped=false;renderFlashcardCard()">IPA on front</button>
        <button class="ipa-mode-btn ${!showIpa?'active':''}" style="width:100%;" onclick="flashState.ipaMode='hide';flashState.flipped=false;renderFlashcardCard()">Challenge</button>
      </div>
      <div class="flash-main">
        <div class="flashcard ${flashState.flipped?'flipped':''}" onclick="flashState.flipped=!flashState.flipped;renderFlashcardCard()">
          ${frontContent}
        </div>
        <div class="flashcard-controls">
          <button class="btn-need" onclick="markCard('need')">Need work</button>
          <button class="btn-skip" onclick="nextCard()">Skip</button>
          <button class="btn-got" onclick="markCard('got')">Got it ✓</button>
        </div>
      </div>
    </div>
  `;
}
function rebuildFlashPool() {
  let pool;
  if (flashState.scope === 'all') pool = getAllVocab();
  else if (flashState.scope === 'weak') {
    pool = getAllVocab().filter(v => (state.needWorkVocab[getNative(v)]||0) > 0);
    if (pool.length === 0) pool = getLearnedVocab();
  } else if (flashState.scope === 'saved') {
    pool = getSavedVocab();
  } else {
    pool = getLearnedVocab();
  }
  // Inject personal phrases at the front if profile is set
  const profile = loadProfile();
  if (profile && (profile.name || profile.city)) {
    const gen = PERSONAL_PHRASES[currentPair().courseKey];
    if (gen) {
      const personal = gen(profile.name || 'me', profile.city || 'my city')
        .map(p => ({ ...p, day: 'personal', personal: true }));
      pool = [...personal, ...pool];
    }
  }
  flashState.pool = pool;
  if (flashState.index >= pool.length) flashState.index = 0;
}
function shufflePool() {
  for (let i=flashState.pool.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [flashState.pool[i],flashState.pool[j]]=[flashState.pool[j],flashState.pool[i]];
  }
  flashState.index = 0;
  flashState.flipped = false;
}
function markCard(type) {
  const card = flashState.pool[flashState.index];
  if (type === 'got') {
    state.masteredVocab[getNative(card)] = (state.masteredVocab[getNative(card)]||0)+1;
    state.needWorkVocab[getNative(card)] = 0;
  } else {
    state.needWorkVocab[getNative(card)] = (state.needWorkVocab[getNative(card)]||0)+1;
    showToast('📍 Added to Review Queue');
  }
  saveState();
  refreshStats();
  nextCard();
}
function nextCard() {
  flashState.flipped = false;
  flashState.index = (flashState.index + 1) % flashState.pool.length;
  renderFlashcardCard();
}

// QUIZ
let quizState = { questions:[], current:0, score:0, answered:false };

const PROCTOR_QUIPS = [
  "I have my eye on you.",
  "No peeking at the Rosetta Stone.",
  "Pencils down. Metaphorically.",
  "*adjusts monocle disapprovingly*",
  "Speak only when spoken to — in the target tongue.",
  "A gentleman guesses. A scholar knows.",
  "I've seen better. I've also seen worse.",
  "Confidence, please. You're not at customs.",
  "The correct answer is always the one you second-guess.",
  "Your accent is... developing.",
];
const CORRECT_QUIPS = [
  "Exquisite.",
  "Precisely. As expected of someone with your potential.",
  "Correct. Do try not to look so surprised.",
  "The monocle stays firmly in place. Well done.",
  "A phrase fit for distinguished company.",
  "Yes. Carry on.",
  "That is, in fact, the word. I commend your restraint in not guessing.",
  "Flawless. Don't let it go to your head.",
  "Acceptable. More than acceptable. I shan't say it again.",
  "Correct. The subjunctive thanks you.",
];
const WRONG_QUIPS = [
  "We shall not speak of this.",
  "Technically, that was a word. Not the right one, but still.",
  "The correct answer was right there. We'll revisit this.",
  "*adjusts monocle* I see. We have work to do.",
  "Bold choice. Incorrect, but bold.",
  "The locals would have understood you. They would have pitied you, but understood.",
  "I've heard worse. I was present for several of them.",
  "This is why we practice in private.",
  "Incorrect. Although your confidence was admirable.",
  "The language did not deserve that. Nevertheless — we continue.",
];

function renderQuizView() {
  const learned = getLearnedVocab();
  const quip = PROCTOR_QUIPS[Math.floor(Math.random() * PROCTOR_QUIPS.length)];
  const proctorCol = `
    <div class="quiz-proctor">
      <div class="proctor-bubble">${quip}</div>
      <img src="/assets/cunning-man.png" alt="The Proctor">
    </div>`;

  if (learned.length < 4) {
    content.innerHTML = `
      <div class="quiz-qa-row">
        <div style="flex:2;min-width:0;">
          <h2>Quiz</h2>
          <p class="subtitle">Complete Day 1 to unlock the quiz.</p>
          <div class="empty" style="padding:40px 0;">The Proctor is waiting.</div>
        </div>
        ${proctorCol}
      </div>
    `;
    return;
  }
  if (!quizState.questions.length) generateQuiz();
  const q = quizState.questions[quizState.current];
  if (!q) {
    const stars = getQuizStars(quizState.score, quizState.questions.length);
    const verdict = QUIZ_VERDICTS[stars][Math.floor(Math.random() * 3)];
    const starHTML = [1,2,3].map(n =>
      `<span class="quiz-star ${n <= stars ? 'earned' : 'empty'}">★</span>`
    ).join('');
    content.innerHTML = `
      <div class="quiz-qa-row">
        <div style="flex:2;min-width:0;">
          <h2>Quiz Complete</h2>
          <div class="quiz-stars">${starHTML}</div>
          <p class="star-verdict">"${verdict}"</p>
          <p class="subtitle">${quizState.score} of ${quizState.questions.length} correct</p>
          <button class="complete-btn" onclick="quizState={questions:[],current:0,score:0,answered:false};renderQuizView()">Try Again →</button>
        </div>
        ${proctorCol}
      </div>
    `;
    return;
  }

  const progressLabel = `Question ${quizState.current + 1} of ${quizState.questions.length} · Score: ${quizState.score}`;
  if (q.type === 'match-pairs') {
    renderMatchPairsQ(q, proctorCol, progressLabel);
  } else if (q.type === 'type-it') {
    renderTypeItQ(q, proctorCol, progressLabel);
  } else {
    renderMcQ(q, proctorCol, progressLabel);
  }
}

function renderMcQ(q, proctorCol, progressLabel) {
  content.innerHTML = `
    <h2>Quiz</h2>
    <p class="subtitle">${progressLabel}</p>
    <div class="quiz-qa-row">
      <div class="quiz-q">
        <div class="quiz-type-pill">🔤 Choose the answer</div>
        <div class="q">${escapeHtml(q.prompt)}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => {
            let cls = 'quiz-option';
            if (quizState.answered) {
              if (opt === q.correct) cls += ' correct';
              else if (i === q.selected) cls += ' wrong';
              cls += ' disabled';
            }
            return `<button class="${cls}" onclick="answerQuiz(${i})">${escapeHtml(opt)}</button>`;
          }).join('')}
        </div>
        ${quizState.answered && q.feedback ? `
          <div class="quiz-feedback ${q.feedbackType}">
            <span class="feedback-mark">${q.feedbackType === 'correct' ? '✓' : '✗'}</span>
            <span class="feedback-quip">"${q.feedback}"</span>
          </div>` : ''}
      </div>
      ${proctorCol}
    </div>
    <button class="complete-btn" onclick="quizState.current++;quizState.answered=false;renderQuizView()" style="${quizState.answered ? '' : 'visibility:hidden;pointer-events:none;'}">Next →</button>
  `;
}

function renderTypeItQ(q, proctorCol, progressLabel) {
  content.innerHTML = `
    <h2>Quiz</h2>
    <p class="subtitle">${progressLabel}</p>
    <div class="quiz-qa-row">
      <div class="quiz-q">
        <div class="quiz-type-pill">✏️ Type it</div>
        <div class="q">${escapeHtml(q.prompt)}</div>
        ${q.answered ? `
          <div class="quiz-feedback ${q.isCorrect ? 'correct' : 'wrong'}">
            <span class="feedback-mark">${q.isCorrect ? '✓' : '✗'}</span>
            <div>
              <div class="feedback-quip">"${q.isCorrect
                ? CORRECT_QUIPS[Math.floor(Math.random() * CORRECT_QUIPS.length)]
                : WRONG_QUIPS[Math.floor(Math.random() * WRONG_QUIPS.length)]}"</div>
              ${!q.isCorrect ? `<div style="margin-top:6px;font-size:14px;font-style:normal;">Answer: <strong>${escapeHtml(q.correct)}</strong>${q.phonetic ? ` · <span style="color:var(--muted)">${escapeHtml(q.phonetic)}</span>` : ''}</div>` : ''}
            </div>
          </div>
        ` : `
          <div class="type-it-wrap">
            <input class="type-it-input" id="type-it-inp" type="text" placeholder="Type your answer…"
              autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
              value="${escapeHtml(q.typed || '')}"
              onkeydown="if(event.key==='Enter')answerTypeIt()"
              oninput="quizState.questions[quizState.current].typed=this.value">
            <button class="type-it-submit" onclick="answerTypeIt()">Check →</button>
          </div>
        `}
      </div>
      ${proctorCol}
    </div>
    <button class="complete-btn" onclick="quizState.current++;quizState.answered=false;renderQuizView()" style="${q.answered ? '' : 'visibility:hidden;pointer-events:none;'}">Next →</button>
  `;
  if (!q.answered) setTimeout(() => document.getElementById('type-it-inp')?.focus(), 50);
}

function answerTypeIt() {
  const q = quizState.questions[quizState.current];
  if (q.answered) return;
  const typed = (q.typed || '').trim();
  if (!typed) return;
  const norm = s => s.toLowerCase().trim()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[.,!?;:'"()¡¿\-]/g, '').replace(/\s+/g, ' ');
  q.isCorrect = norm(typed) === norm(q.correct);
  q.answered = true;
  if (q.isCorrect) { quizState.score++; state.quizScore.correct++; }
  state.quizScore.total++;
  saveState();
  renderQuizView();
}

function renderMatchPairsQ(q, proctorCol, progressLabel) {
  const allMatched = q.matched.length === q.pairs.length;
  const leftHTML = q.leftItems.map((item, i) => {
    const isMatched = q.matched.includes(item.native);
    const isSelected = q.selectedLeft === i;
    const isWrong = q.wrongFlashLeft === i;
    let cls = 'match-btn';
    if (isMatched) cls += ' matched';
    else if (isSelected) cls += ' selected';
    else if (isWrong) cls += ' wrong-flash';
    return `<button class="${cls}" onclick="handleMatchClick('left',${i})" ${isMatched ? 'disabled' : ''}>${escapeHtml(item.native)}</button>`;
  }).join('');

  const rightHTML = q.rightItems.map((item, i) => {
    const pairNative = q.pairs.find(p => p.en === item.en)?.native;
    const isMatched = pairNative && q.matched.includes(pairNative);
    const isWrong = q.wrongFlashRight === i;
    let cls = 'match-btn';
    if (isMatched) cls += ' matched';
    else if (isWrong) cls += ' wrong-flash';
    return `<button class="${cls}" onclick="handleMatchClick('right',${i})" ${isMatched ? 'disabled' : ''}>${escapeHtml(item.en)}</button>`;
  }).join('');

  content.innerHTML = `
    <h2>Quiz</h2>
    <p class="subtitle">${progressLabel}</p>
    <div class="quiz-qa-row">
      <div class="quiz-q" style="flex:2;min-width:0;">
        <div class="quiz-type-pill">🔗 Match the pairs</div>
        <div class="match-grid">
          <div class="match-col">${leftHTML}</div>
          <div class="match-col">${rightHTML}</div>
        </div>
        ${allMatched
          ? `<div class="quiz-feedback correct" style="margin-top:14px;">
               <span class="feedback-mark">✓</span>
               <span class="feedback-quip">"${CORRECT_QUIPS[Math.floor(Math.random() * CORRECT_QUIPS.length)]}"</span>
             </div>`
          : `<p class="match-hint">${q.selectedLeft !== null ? 'Now pick the matching English word →' : 'Tap a word on the left to start'}</p>`
        }
      </div>
      ${proctorCol}
    </div>
    <button class="complete-btn" onclick="quizState.current++;quizState.answered=false;renderQuizView()" style="${allMatched ? '' : 'visibility:hidden;pointer-events:none;'}">Next →</button>
  `;
}

function handleMatchClick(side, idx) {
  const q = quizState.questions[quizState.current];
  if (q.type !== 'match-pairs' || q.done) return;

  if (side === 'left') {
    q.selectedLeft = (q.selectedLeft === idx) ? null : idx;
    renderQuizView();
    return;
  }

  // right side — must have a left selected
  if (q.selectedLeft === null) return;

  const leftNative = q.leftItems[q.selectedLeft].native;
  const rightNative = q.pairs.find(p => p.en === q.rightItems[idx].en)?.native;

  if (leftNative === rightNative) {
    q.matched = [...q.matched, leftNative];
    q.selectedLeft = null;
    q.wrongFlashLeft = null;
    q.wrongFlashRight = null;
    if (q.matched.length === q.pairs.length) {
      q.done = true;
      quizState.score++;
      state.quizScore.correct++;
      state.quizScore.total++;
      saveState();
    }
  } else {
    q.wrongFlashLeft = q.selectedLeft;
    q.wrongFlashRight = idx;
    q.selectedLeft = null;
    setTimeout(() => {
      const cur = quizState.questions[quizState.current];
      if (cur?.type === 'match-pairs') {
        cur.wrongFlashLeft = null;
        cur.wrongFlashRight = null;
        renderQuizView();
      }
    }, 500);
  }
  renderQuizView();
}

function generateQuiz() {
  const learned = getLearnedVocab();
  const all = getAllVocab();
  const pool = [...learned].sort(() => Math.random() - 0.5).slice(0, Math.min(10, learned.length));
  const targetLabel = LANGS[currentTarget()].label;
  const sourceLabel = LANGS[currentSource()].label;
  quizState.questions = [];
  quizState.current = 0;
  quizState.score = 0;

  const insertMatchAt = learned.length >= 4 ? Math.floor(pool.length / 2) : -1;

  pool.forEach((item, idx) => {
    // Insert one match-pairs question in the middle
    if (idx === insertMatchAt) {
      const pairPool = [...learned].sort(() => Math.random() - 0.5).slice(0, 4);
      const pairs = pairPool.map(v => ({ native: getFrontWord(v), en: getBackWord(v) }));
      quizState.questions.push({
        type: 'match-pairs',
        pairs,
        leftItems: [...pairs].sort(() => Math.random() - 0.5),
        rightItems: [...pairs].sort(() => Math.random() - 0.5),
        matched: [],
        selectedLeft: null,
        wrongFlashLeft: null,
        wrongFlashRight: null,
        done: false
      });
    }

    // Mix MC and type-it (~50/50)
    const type = Math.random() > 0.5 ? 'mc' : 'type-it';
    if (type === 'mc') {
      // Direction: show front word → guess back word, or vice versa.
      // When target is English (X-en), always show native→English.
      // Otherwise randomise 50/50.
      const showFrontToBack = isTargetEnglish() ? true : Math.random() > 0.5;
      const wrongs = all.filter(v => getFrontWord(v) !== getFrontWord(item)).sort(() => Math.random() - 0.5).slice(0, 3);
      const correctText = showFrontToBack ? getBackWord(item) : getFrontWord(item);
      const opts = [correctText, ...wrongs.map(w => showFrontToBack ? getBackWord(w) : getFrontWord(w))].sort(() => Math.random() - 0.5);
      quizState.questions.push({
        type: 'mc',
        prompt: showFrontToBack
          ? `What does "${getFrontWord(item)}" mean in ${sourceLabel}?`
          : `How do you say "${getBackWord(item)}" in ${targetLabel}?`,
        options: opts,
        correct: correctText
      });
    } else {
      quizState.questions.push({
        type: 'type-it',
        prompt: `What does "${getFrontWord(item)}" mean in ${sourceLabel}?`,
        correct: getBackWord(item),
        phonetic: item.phonetic || '',
        answered: false,
        isCorrect: false,
        typed: ''
      });
    }
  });
}

function answerQuiz(i) {
  if (quizState.answered) return;
  const q = quizState.questions[quizState.current];
  q.selected = i;
  quizState.answered = true;
  const isCorrect = q.options[i] === q.correct;
  if (isCorrect) {
    quizState.score++;
    state.quizScore.correct++;
    q.feedback = CORRECT_QUIPS[Math.floor(Math.random() * CORRECT_QUIPS.length)];
    q.feedbackType = 'correct';
  } else {
    q.feedback = WRONG_QUIPS[Math.floor(Math.random() * WRONG_QUIPS.length)];
    q.feedbackType = 'wrong';
  }
  state.quizScore.total++;
  saveState();
  renderQuizView();
}

// ALL LESSONS
function renderAllView() {
  const _label = LANGS[currentTarget()].label;
  content.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:4px;">
      <h2 style="margin-bottom:0;">All 30 Days</h2>
      <button class="reset-all-btn" onclick="if(confirm('Reset all ${_label} progress and start over?')){localStorage.removeItem(getStorageKey());location.reload();}">↺ Reset All Progress</button>
    </div>
    <p class="subtitle" style="margin-bottom:20px;">Tap a day to open it · ↩ to undo completion</p>
    <div class="day-grid">
      ${COURSE.map(d => {
        const completed = state.completedDays.includes(d.day);
        const mastered  = isDayMastered(d.day);
        let cls = 'day-tile';
        if (completed) cls += ' completed';
        if (mastered)  cls += ' mastered';
        if (d.day === state.currentDay) cls += ' current';
        return `<div class="${cls}" onclick="setView('lesson');renderLessonView(${d.day})">
          <div class="num">Day ${d.day}</div>
          <div class="title">${d.title}</div>
          ${d.titleNative ? `<div class="title-native-small">${d.titleNative}</div>` : ''}
          ${mastered  ? '<div class="mastery-tag">★ Mastered</div>' :
            completed ? '<div class="mastery-tag" style="color:#4a9e5c;">✓ Done</div>' : ''}
          ${completed ? `<button class="tile-undo-btn" onclick="event.stopPropagation();uncompleteDay(${d.day},true)" title="Undo completion">↩ Undo</button>` : ''}
        </div>`;
      }).join('')}
    </div>
  `;
}

// CONVERSATIONS
function renderConvosView() {
  content.innerHTML = `
    <h2>Conversation Practice</h2>
    <p class="subtitle">Real scenarios to drill before you go. Tap a card to open it.</p>
    <div class="convo-grid">
      ${CONVERSATIONS.map((c, i) => `
        <div class="convo-card" onclick="openConvo(${i})">
          <div class="convo-card-inner">
            <div class="convo-card-num">${i + 1}</div>
            <h4 class="convo-card-title">${c.title}</h4>
            ${c.titleNative ? `<div class="convo-card-native">${c.titleNative}</div>` : ''}
            <div class="convo-card-scene">${c.scene || ''}</div>
            <div class="convo-card-cta">Tap to open →</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div id="convo-modal-overlay" class="convo-modal-overlay" onclick="closeConvo(event)">
      <div class="convo-modal" id="convo-modal">
        <button class="convo-modal-close" onclick="closeConvo()">✕</button>
        <div id="convo-modal-content"></div>
      </div>
    </div>
  `;
}

function openConvo(i) {
  const c = CONVERSATIONS[i];
  const overlay = document.getElementById('convo-modal-overlay');
  const modal = document.getElementById('convo-modal-content');
  modal.innerHTML = `
    <div class="cmodal-header">
      <div class="cmodal-num">Conversation ${i + 1} of ${CONVERSATIONS.length}</div>
      <h2 class="cmodal-title">${c.title}</h2>
      ${c.titleNative ? `<div class="cmodal-title-native">${c.titleNative}</div>` : ''}
    </div>
    ${c.scene ? `<div class="cmodal-scene">${c.scene}</div>` : ''}
    <div class="cmodal-dialogue">
      ${c.lines.map(l => `
        <div class="cmodal-line ${l.who}">
          <div class="cmodal-speaker">${l.who === 'you' ? 'You' : 'Them'}</div>
          <div class="cmodal-native">${getNative(l)}</div>
          ${l.phonetic ? `<div class="cmodal-phonetic">${l.phonetic}</div>` : ''}
          <div class="cmodal-english">${l.en}</div>
        </div>
      `).join('')}
    </div>
    <div class="cmodal-nav">
      ${i > 0 ? `<button class="cmodal-prev" onclick="openConvo(${i-1})">← Previous</button>` : '<span></span>'}
      ${i < CONVERSATIONS.length - 1 ? `<button class="cmodal-next" onclick="openConvo(${i+1})">Next →</button>` : '<span></span>'}
    </div>
  `;
  overlay.classList.add('open');
  document.getElementById('convo-modal').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeConvo(e) {
  if (e && e.target !== document.getElementById('convo-modal-overlay')) return;
  document.getElementById('convo-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// PROGRESS
function renderProgressView() {
  const totalVocab = getAllVocab().length;
  const seen = getLearnedVocab().length;
  const mastered = Object.values(state.masteredVocab).filter(c=>c>=2).length;
  const needWork = Object.values(state.needWorkVocab).filter(c=>c>=1).length;
  const daysComplete = state.completedDays.length;
  const pct = Math.round((daysComplete / 30) * 100);
  const masteryPct = totalVocab > 0 ? Math.round((mastered/totalVocab)*100) : 0;
  const quizPct = state.quizScore.total > 0 ? Math.round((state.quizScore.correct/state.quizScore.total)*100) : 0;
  const seenPct = totalVocab > 0 ? Math.round((seen/totalVocab)*100) : 0;
  const langLabel = LANGS[currentTarget()].label;
  const pair = currentPair();

  content.innerHTML = `
    <h2>Dashboard</h2>
    <p class="subtitle">${langLabel} · ${pair.subtitle}</p>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-value">${daysComplete}</div>
        <div class="kpi-label">Days Done</div>
        <div class="kpi-sub">of 30</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${state.streak}</div>
        <div class="kpi-label">Day Streak</div>
        <div class="kpi-sub">${state.lastVisit ? 'last: ' + state.lastVisit : 'start today'}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${mastered}</div>
        <div class="kpi-label">Mastered</div>
        <div class="kpi-sub">of ${totalVocab} words</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${pct}%</div>
        <div class="kpi-label">Complete</div>
        <div class="kpi-sub">course progress</div>
      </div>
    </div>

    <div class="dash-section">
      <div class="dash-section-title">Vocabulary</div>
      <div class="dash-row">
        <span class="dash-row-label">Mastered</span>
        <div class="dash-row-right">
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${masteryPct}%"></div></div>
          <span class="dash-pct">${masteryPct}%</span>
        </div>
      </div>
      <div class="dash-row">
        <span class="dash-row-label">Seen</span>
        <div class="dash-row-right">
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${seenPct}%"></div></div>
          <span class="dash-pct">${seenPct}%</span>
        </div>
      </div>
      <div class="dash-row">
        <span class="dash-row-label">Need work</span>
        <div class="dash-row-right">
          <span class="dash-pct" style="color:var(--muted)">${needWork} word${needWork===1?'':'s'}</span>
        </div>
      </div>
    </div>

    <div class="dash-section">
      <div class="dash-section-title">Quiz Performance</div>
      <div class="dash-row">
        <span class="dash-row-label">Accuracy</span>
        <div class="dash-row-right">
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${quizPct}%"></div></div>
          <span class="dash-pct">${quizPct}%</span>
        </div>
      </div>
      <div class="dash-row">
        <span class="dash-row-label">Answered</span>
        <div class="dash-row-right">
          <span class="dash-pct" style="color:var(--muted)">${state.quizScore.correct} / ${state.quizScore.total}</span>
        </div>
      </div>
    </div>

    <div class="dash-section">
      <div class="dash-section-title">Reset</div>
      <div class="dash-row">
        <span class="dash-row-label" style="color:var(--muted);font-size:13px;">Clear all ${langLabel} progress and start over.</span>
        <button class="reset-btn" onclick="if(confirm('Reset all ${langLabel} progress?')){localStorage.removeItem(getStorageKey());location.reload();}">Reset</button>
      </div>
    </div>
  `;
}

// TRANSLATOR
let translatorState = { lastResult: null, recent: loadRecent(), loading: false, error: null };
function loadRecent() {
  try { return JSON.parse(localStorage.getItem(getRecentKey()) || '[]'); }
  catch { return []; }
}
function saveRecent() {
  localStorage.setItem(getRecentKey(), JSON.stringify(translatorState.recent.slice(0, 12)));
}

function renderTranslatorView() {
  const r = translatorState.lastResult;
  const err = translatorState.error;
  const recent = translatorState.recent;
  const pair = currentPair();
  content.innerHTML = `
    <h2>Translator</h2>
    <p class="subtitle">${pair.translatorSubtitle}</p>
    <form class="translator-form" onsubmit="event.preventDefault();doTranslate()">
      <input id="translate-input" type="text" placeholder="${pair.inputPlaceholder}" autofocus
             value="${(r?.input || '').replace(/"/g, '&quot;')}"
             onkeydown="if(event.key==='Enter')doTranslate()">
      <button id="translate-btn" type="submit" ${translatorState.loading?'disabled':''}>
        ${translatorState.loading ? '<span class="loader"></span>Translating…' : 'Translate →'}
      </button>
    </form>

    ${err ? `<div class="translator-error">${err}</div>` : ''}

    ${r ? `
      <div class="translator-result">
        ${r.gender ? `<span class="gender-tag">${r.gender === 'm' ? 'masculine' : r.gender === 'f' ? 'feminine' : r.gender}</span>` : ''}
        <div class="french-word">${escapeHtml(r.word)}</div>
        ${r.ipa ? `<div class="ipa">${escapeHtml(r.ipa)}</div>` : ''}
        ${r.phonetic ? `<div class="phonetic">${escapeHtml(r.phonetic)}</div>` : ''}
        <div class="translator-actions">
          <button class="play-btn" onclick="speakWord(${JSON.stringify(r.word).replace(/"/g, '&quot;')})">
            🔊 Hear it
          </button>
          <button class="save-btn ${isCardSaved(r.word) ? 'saved' : ''}"
                  onclick="toggleSaveCard()"
                  id="save-card-btn">
            ${isCardSaved(r.word) ? '✓ Saved to flashcards' : '+ Save to flashcards'}
          </button>
        </div>
        ${r.literal ? `<div class="literal-note">📝 ${escapeHtml(r.literal)}</div>` : ''}
        ${r.example ? `
          <div class="example-box">
            <div class="example-fr">${escapeHtml(r.example)}</div>
            ${r.exampleEn ? `<div class="example-en">${escapeHtml(r.exampleEn)}</div>` : ''}
          </div>
        ` : ''}
      </div>
    ` : ''}

    <p class="translator-tip">Tip: Try phrases, not just single words. "How much is this?" works better than just "much". Saved words appear in the Flashcards tab under "My Saved Words".</p>

    ${state.savedVocab.length > 0 ? `
      <div class="saved-summary">
        <h4>Saved cards: ${state.savedVocab.length}</h4>
        <div class="saved-list">
          ${state.savedVocab.slice(0, 6).map(v => `
            <div class="saved-chip" title="${escapeHtml(v.en)}">
              <span>${escapeHtml(v.word || v.fr || getNative(v))}</span>
              <button class="chip-x" onclick="removeSavedCard(${JSON.stringify(v.word || v.fr).replace(/"/g, '&quot;')});renderTranslatorView()" title="Remove">×</button>
            </div>
          `).join('')}
          ${state.savedVocab.length > 6 ? `<span class="saved-more">+${state.savedVocab.length - 6} more</span>` : ''}
        </div>
      </div>
    ` : ''}

    ${recent.length > 0 ? `
      <div class="recent-translations">
        <h4>Recent</h4>
        ${recent.map((item, i) => `
          <div class="recent-item" onclick="loadRecentTranslation(${i})">
            <div class="input-text">${escapeHtml(item.input)}</div>
            <div class="output-text">→ ${escapeHtml(item.word || item.french)}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
  // restore focus to input if not loading
  if (!translatorState.loading) {
    setTimeout(() => {
      const inp = document.getElementById('translate-input');
      if (inp && document.activeElement === document.body) inp.focus();
    }, 50);
  }
}
function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
async function doTranslate() {
  const inp = document.getElementById('translate-input');
  const text = (inp?.value || '').trim();
  if (!text) return;
  translatorState.loading = true;
  translatorState.error = null;
  renderTranslatorView();
  try {
    const r = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text, lang: currentTarget(), sourceLang: currentSource() })
    });
    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${r.status}`);
    }
    const data = await r.json();
    data.input = text;
    translatorState.lastResult = data;
    // Add to recent (dedupe) — store as 'word' for new entries, keep backward compat
    translatorState.recent = [
      { input: text, word: data.word },
      ...translatorState.recent.filter(x => x.input !== text)
    ].slice(0, 12);
    saveRecent();
  } catch (e) {
    translatorState.error = `Translation failed: ${e.message}. Check your connection or try again.`;
  } finally {
    translatorState.loading = false;
    renderTranslatorView();
    // Auto-play the result
    if (translatorState.lastResult && !translatorState.error) {
      setTimeout(() => speakWord(translatorState.lastResult.word), 200);
    }
  }
}
function loadRecentTranslation(i) {
  const item = translatorState.recent[i];
  if (!item) return;
  document.getElementById('translate-input').value = item.input;
  doTranslate();
}
function toggleSaveCard() {
  const r = translatorState.lastResult;
  if (!r || !r.word) return;
  const wasSaved = isCardSaved(r.word);
  if (wasSaved) {
    removeSavedCard(r.word);
    showToast('Removed from flashcards');
  } else {
    saveTranslationCard(r);
    showToast('✓ Saved to flashcards');
  }
  renderTranslatorView();
  // brief animation hint
  setTimeout(() => {
    const btn = document.getElementById('save-card-btn');
    if (btn) {
      btn.classList.add('flash');
      setTimeout(() => btn.classList.remove('flash'), 500);
    }
  }, 50);
}
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}
// TTS audio cache so repeated taps don't re-fetch
const ttsCache = {};

// langCode is optional — defaults to the target language of the current pair.
async function speakWord(text, langCode) {
  if (!text) return;
  const lang = langCode || currentTarget();

  const btns = document.querySelectorAll('.speak-btn');
  btns.forEach(b => b.classList.add('speaking'));
  const done = () => btns.forEach(b => b.classList.remove('speaking'));

  try {
    const cacheKey = lang + ':' + text;
    let audioUrl = ttsCache[cacheKey];
    if (!audioUrl) {
      const res = await fetch('/.netlify/functions/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, lang }),
      });
      if (!res.ok) throw new Error('TTS failed');
      const blob = await res.blob();
      audioUrl = URL.createObjectURL(blob);
      ttsCache[cacheKey] = audioUrl;
    }
    const audio = new Audio(audioUrl);
    audio.onended = done;
    audio.onerror = done;
    audio.play();
  } catch (e) {
    console.warn('TTS failed, falling back to browser synthesis:', e);
    done();
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = LANGS[lang]?.speechLang || 'en-US';
      u.rate = 0.9;
      speechSynthesis.speak(u);
    }
  }
}

// LEATHER NOTEBOOK
function renderNotebookView() {
  const lang = LANGS[currentTarget()];
  const completed = new Set(state.completedDays);
  const entries = COURSE.map(day => ({
    day: day.day,
    title: day.title,
    titleNative: day.titleNative,
    culture: day.culture,
    unlocked: completed.has(day.day) || day.day <= state.currentDay
  }));
  const unlockedCount = entries.filter(e => e.unlocked && e.culture).length;

  // Build review queue from all vocab
  const allVocab = getAllVocab();
  const reviewWords = allVocab.filter(v => (state.needWorkVocab[getNative(v)] || 0) > 0);

  const reviewSection = `
    <div class="review-queue-section">
      <div class="review-queue-header">
        <div class="review-queue-title">📍 Review Queue${reviewWords.length ? ` (${reviewWords.length})` : ''}</div>
        ${reviewWords.length ? `<button class="review-queue-drill-btn" onclick="drillReviewQueue()">Drill these →</button>` : ''}
      </div>
      ${reviewWords.length ? `
        <div class="review-word-list">
          ${reviewWords.map(v => `
            <div class="review-word-row">
              <div class="review-word-native">${getFrontWord(v)}</div>
              <div class="review-word-phonetic">${v.phonetic || v.ipa || ''}</div>
              <div class="review-word-en">${getBackWord(v)}</div>
              <button class="review-word-clear" onclick="clearFromReview('${getNative(v).replace(/'/g,"\\'")}')">✓ Got it</button>
            </div>`).join('')}
        </div>` : `<div class="review-empty">Nothing here yet — mark flashcards "Need work" and they'll show up here.</div>`}
    </div>`;

  content.innerHTML = `
    <h2>The Leather Notebook</h2>
    <p class="subtitle">${unlockedCount} of 30 entries unlocked · Complete days to reveal more</p>
    ${reviewSection}
    <div class="notebook-grid">
      ${entries.map(e => {
        if (e.unlocked && e.culture) {
          return `
            <div class="notebook-entry">
              <div class="nb-day">Day ${e.day}</div>
              <div class="nb-title">${e.title}</div>
              <div class="nb-title-native">${e.titleNative || ''}</div>
              <div class="nb-divider"></div>
              <div class="nb-culture">${e.culture}</div>
            </div>`;
        } else {
          return `
            <div class="notebook-entry locked">
              <div class="nb-day">Day ${e.day}</div>
              <div class="nb-title">${e.title}</div>
              <div class="nb-lock">🔒 Complete this day to unlock</div>
            </div>`;
        }
      }).join('')}
    </div>
  `;
}

function clearFromReview(nativeWord) {
  state.needWorkVocab[nativeWord] = 0;
  saveState();
  updateReviewBadge();
  renderNotebookView();
}

function drillReviewQueue() {
  flashState.scope = 'weak';
  flashState.index = 0;
  flashState.flipped = false;
  setView('flashcards');
}

function updateReviewBadge() {
  const badge = document.getElementById('review-badge');
  if (!badge) return;
  const allVocab = getAllVocab();
  const count = allVocab.filter(v => (state.needWorkVocab[getNative(v)] || 0) > 0).length;
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

// VIEW ROUTER
// ============================================================
// LESSON BANNER — per-day image above lesson content
// en-X pairs:    /assets/banners/{targetLang}/day-{nn}  (e.g. /assets/banners/fr/day-01)
// cross pairs:   /assets/banners/{pairKey}/day-{nn}     (e.g. /assets/banners/it-fr/day-01)
// Falls back gracefully if image doesn't exist yet.
// ============================================================
function updateLessonBanner(dayNum) {
  const wrap = document.getElementById('lesson-banner-wrap');
  const img  = document.getElementById('lesson-banner-img');
  if (!wrap || !img) return;

  const nn        = String(dayNum).padStart(2, '0');
  const folderKey = currentLang.startsWith('en-') ? currentPair().courseKey : currentLang;
  const base      = `/assets/banners/${folderKey}/day-${nn}`;

  img.style.opacity = '0';
  // Try jpg first, fall back to png, then hide if neither exists
  img.onerror = () => {
    if (img.src.endsWith('.jpg')) {
      img.src = base + '.png';
    } else {
      wrap.style.display = 'none';
      img.src = '';
    }
  };
  img.onload = () => { wrap.style.display = 'block'; img.style.opacity = '1'; };
  img.src = base + '.jpg';
}

function hideLessonBanner() {
  const wrap = document.getElementById('lesson-banner-wrap');
  if (wrap) wrap.style.display = 'none';
}

function setView(view) {
  setActiveNav(view);
  if (view === 'lesson') {
    renderLessonView(state.currentDay);
  } else {
    if (view === 'flashcards')    renderFlashcardView();
    else if (view === 'quiz')          renderQuizView();
    else if (view === 'all')           renderAllView();
    else if (view === 'conversations') renderConvosView();
    else if (view === 'translator')    renderTranslatorView();
    else if (view === 'progress')      renderProgressView();
    else if (view === 'notebook')      renderNotebookView();
  }
}

document.querySelectorAll('nav button').forEach(b => {
  b.addEventListener('click', () => setView(b.dataset.view));
});

// Initial render
refreshStats();
updateHeaderTheme(currentLang);
// Track initial language on page load
if (typeof gtag === 'function') {
  gtag('event', 'language_load', { language: currentLang });
}
// Sync header subtitle on load
const subtitleEl = document.getElementById('lang-subtitle');
const taglineEl  = document.getElementById('lang-tagline');
if (subtitleEl) subtitleEl.textContent = currentPair().subtitle;
if (taglineEl)  taglineEl.textContent  = currentPair().tagline;
setView('lesson');

// ============================================================
// USER PROFILE — personalized phrases & greeting
// ============================================================
const PROFILE_KEY = 'cll_profile';

const PERSONAL_PHRASES = {
  fr: (name, city) => [
    { native: `Je m'appelle ${name}.`,              en: `My name is ${name}.`,                   ipa: `ʒə mapɛl ${name}`,               phonetic: `zhuh mah-PEL ${name}` },
    { native: `Je viens de ${city}.`,               en: `I'm from ${city}.`,                     ipa: `ʒə vjɛ̃ də ${city}`,              phonetic: `zhuh vyaN duh ${city}` },
    { native: `J'habite à ${city}.`,                en: `I live in ${city}.`,                    ipa: `ʒabit a ${city}`,                 phonetic: `zhah-BEET ah ${city}` },
    { native: `Je suis américain.`,                 en: `I'm American.`,                         ipa: `ʒə sɥi zameʁikɛ̃`,               phonetic: `zhuh swee zah-may-ree-KAN` },
    { native: `Enchanté, je m'appelle ${name}.`,    en: `Nice to meet you, I'm ${name}.`,        ipa: `ɑ̃ʃɑ̃te ʒə mapɛl ${name}`,        phonetic: `ahn-shahn-TAY zhuh mah-PEL ${name}` },
  ],
  es: (name, city) => [
    { native: `Me llamo ${name}.`,                  en: `My name is ${name}.`,                   ipa: `me ʝamo ${name}`,                 phonetic: `meh YAH-moh ${name}` },
    { native: `Soy de ${city}.`,                    en: `I'm from ${city}.`,                     ipa: `soj de ${city}`,                  phonetic: `soy deh ${city}` },
    { native: `Vivo en ${city}.`,                   en: `I live in ${city}.`,                    ipa: `biβo en ${city}`,                 phonetic: `BEE-voh en ${city}` },
    { native: `Soy americano.`,                     en: `I'm American.`,                         ipa: `soj ameriˈkano`,                  phonetic: `soy ah-meh-ree-KAH-no` },
    { native: `Mucho gusto, me llamo ${name}.`,     en: `Nice to meet you, I'm ${name}.`,        ipa: `mutʃo ˈɡusto me ʝamo ${name}`,   phonetic: `MOO-choh GOOS-toh meh YAH-moh ${name}` },
  ],
  sq: (name, city) => [
    { native: `Quhem ${name}.`,                     en: `My name is ${name}.`,                   ipa: `cʰem ${name}`,                   phonetic: `CHEH-hem ${name}` },
    { native: `Jam nga ${city}.`,                   en: `I'm from ${city}.`,                     ipa: `jam ŋɡa ${city}`,                 phonetic: `yam ngah ${city}` },
    { native: `Jetoj në ${city}.`,                  en: `I live in ${city}.`,                    ipa: `jɛtɔj nə ${city}`,               phonetic: `yeh-TOY nuh ${city}` },
    { native: `Jam amerikan.`,                      en: `I'm American.`,                         ipa: `jam ameriˈkan`,                   phonetic: `yam ah-meh-ree-KAHN` },
    { native: `Kënaqësi, quhem ${name}.`,           en: `Nice to meet you, I'm ${name}.`,        ipa: `kənacəsi cʰem ${name}`,          phonetic: `kuh-NAH-chuh-see CHEH-hem ${name}` },
  ],
  it: (name, city) => [
    { native: `Mi chiamo ${name}.`,                 en: `My name is ${name}.`,                   ipa: `mi ˈkjamo ${name}`,              phonetic: `mee KYAH-moh ${name}` },
    { native: `Sono di ${city}.`,                   en: `I'm from ${city}.`,                     ipa: `ˈsono di ${city}`,               phonetic: `SOH-noh dee ${city}` },
    { native: `Abito a ${city}.`,                   en: `I live in ${city}.`,                    ipa: `ˈabito a ${city}`,               phonetic: `AH-bee-toh ah ${city}` },
    { native: `Sono americano.`,                    en: `I'm American.`,                         ipa: `ˈsono ameriˈkano`,               phonetic: `SOH-noh ah-meh-ree-KAH-noh` },
    { native: `Piacere, mi chiamo ${name}.`,        en: `Nice to meet you, I'm ${name}.`,        ipa: `pjaˈtʃeɾe mi ˈkjamo ${name}`,   phonetic: `pyah-CHEH-reh mee KYAH-moh ${name}` },
  ],
  pt: (name, city) => [
    { native: `Meu nome é ${name}.`,               en: `My name is ${name}.`,                   ipa: `mew ˈnomi ɛ ${name}`,            phonetic: `mew NOH-mee eh ${name}` },
    { native: `Sou de ${city}.`,                    en: `I'm from ${city}.`,                     ipa: `so dʒi ${city}`,                 phonetic: `soh jee ${city}` },
    { native: `Moro em ${city}.`,                   en: `I live in ${city}.`,                    ipa: `ˈmɔɾu ẽ ${city}`,               phonetic: `MOH-roo em ${city}` },
    { native: `Sou americano.`,                     en: `I'm American.`,                         ipa: `so amɛɾiˈkanu`,                  phonetic: `soh ah-meh-ree-KAH-noo` },
    { native: `Prazer, meu nome é ${name}.`,       en: `Nice to meet you, my name is ${name}.`, ipa: `pɾaˈzeɾ mew ˈnomi ɛ ${name}`,   phonetic: `prah-ZEHR mew NOH-mee eh ${name}` },
  ],
  el: (name, city) => [
    { native: `Με λένε ${name}.`,                   en: `My name is ${name}.`,                   ipa: `me ˈlene ${name}`,               phonetic: `meh LEH-neh ${name}` },
    { native: `Είμαι από το ${city}.`,              en: `I'm from ${city}.`,                     ipa: `ˈime aˈpo to ${city}`,           phonetic: `EE-meh ah-PO toh ${city}` },
    { native: `Ζω στο ${city}.`,                    en: `I live in ${city}.`,                    ipa: `zo sto ${city}`,                 phonetic: `zo stoh ${city}` },
    { native: `Είμαι Αμερικανός.`,                  en: `I'm American.`,                         ipa: `ˈime amerikaˈnos`,               phonetic: `EE-meh ah-meh-ree-kah-NOS` },
    { native: `Χαίρω πολύ, με λένε ${name}.`,      en: `Nice to meet you, I'm ${name}.`,        ipa: `ˈçero poˈli me ˈlene ${name}`,  phonetic: `HEH-roh poh-LEE meh LEH-neh ${name}` },
  ],
  ja: (name, city) => [
    { native: `私の名前は${name}です。`,              en: `My name is ${name}.`,                   ipa: `watashi no namae wa ${name} desu`,     phonetic: `wah-TAH-shee no nah-MAH-eh wah ${name} deh-soo` },
    { native: `${city}から来ました。`,               en: `I'm from ${city}.`,                     ipa: `${city} kara kimashita`,               phonetic: `${city} KAH-rah kee-mah-SHEE-tah` },
    { native: `${city}に住んでいます。`,              en: `I live in ${city}.`,                    ipa: `${city} ni sunde imasu`,               phonetic: `${city} nee soon-deh EE-mah-soo` },
    { native: `アメリカ人です。`,                    en: `I'm American.`,                         ipa: `Amerika-jin desu`,                     phonetic: `ah-MEH-ree-kah-JIN deh-soo` },
    { native: `はじめまして、${name}と申します。`,   en: `Nice to meet you, I'm ${name}.`,        ipa: `hajimemashite ${name} to moushimasu`,  phonetic: `hah-jee-meh-MAH-shee-teh ${name} to moh-shee-mah-soo` },
  ],
  de: (name, city) => [
    { native: `Ich heiße ${name}.`,                  en: `My name is ${name}.`,                   ipa: `ɪç ˈhaɪsə ${name}`,                  phonetic: `ikh HY-suh ${name}` },
    { native: `Ich komme aus ${city}.`,              en: `I'm from ${city}.`,                     ipa: `ɪç ˈkɔmə aʊs ${city}`,              phonetic: `ikh KOM-uh ows ${city}` },
    { native: `Ich wohne in ${city}.`,               en: `I live in ${city}.`,                    ipa: `ɪç ˈvoːnə ɪn ${city}`,              phonetic: `ikh VOH-nuh in ${city}` },
    { native: `Ich bin Amerikaner.`,                 en: `I'm American.`,                         ipa: `ɪç bɪn amɛʁɪˈkaːnɐ`,               phonetic: `ikh bin ah-meh-ree-KAH-ner` },
    { native: `Freut mich, ich bin ${name}.`,        en: `Nice to meet you, I'm ${name}.`,        ipa: `fʁɔʏt mɪç ɪç bɪn ${name}`,         phonetic: `froyt mikh ikh bin ${name}` },
  ],
  ko: (name, city) => [
    { native: `제 이름은 ${name}입니다.`,             en: `My name is ${name}.`,                   ipa: `tɕe iɾɯmɯn ${name} im.ni.da`,       phonetic: `jeh ee-reum-eun ${name} im-ni-da` },
    { native: `저는 ${city} 출신입니다.`,             en: `I'm from ${city}.`,                     ipa: `tɕʌnɯn ${city} tɕʰul.ɕin.im.ni.da`,phonetic: `juh-neun ${city} chul-shin-im-ni-da` },
    { native: `저는 ${city}에 삽니다.`,              en: `I live in ${city}.`,                    ipa: `tɕʌnɯn ${city}e sam.ni.da`,          phonetic: `juh-neun ${city}-eh sam-ni-da` },
    { native: `저는 미국인입니다.`,                   en: `I'm American.`,                         ipa: `tɕʌnɯn mi.ɡu.ɡin.im.ni.da`,        phonetic: `juh-neun mi-guk-in-im-ni-da` },
    { native: `만나서 반갑습니다, ${name}입니다.`,    en: `Nice to meet you, I'm ${name}.`,        ipa: `man.na.sʌ pan.ɡap.sɯm.ni.da`,       phonetic: `man-na-suh ban-gap-seum-ni-da ${name}-im-ni-da` },
  ],
};

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return null;
}

function saveProfile() {
  const nameEl = document.getElementById('profile-name-input');
  const cityEl = document.getElementById('profile-city-input');
  if (!nameEl || !cityEl) return;
  const name = nameEl.value.trim();
  const city = cityEl.value.trim();
  const profile = { name, city };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  closeProfileModal();
  updateProfileUI(profile);
  showToast(`🎩 Welcome, ${name || 'traveler'}. Your personal phrases are ready in Flashcards.`);
}

function updateProfileUI(profile) {
  if (!profile) return;
  const btn = document.getElementById('profile-btn');
  if (btn) btn.textContent = profile.name ? profile.name.charAt(0).toUpperCase() : '👤';
  const greetEl = document.getElementById('profile-greeting');
  if (greetEl) {
    greetEl.textContent = profile.name ? `Hi, ${profile.name}!` : '';
    greetEl.style.display = profile.name ? '' : 'none';
  }
}

function showProfileModal() {
  const profile = loadProfile() || {};
  const overlay = document.getElementById('profile-modal');
  if (!overlay) return;
  document.getElementById('profile-name-input').value = profile.name || '';
  document.getElementById('profile-city-input').value = profile.city || '';
  overlay.style.display = 'flex';
}

function closeProfileModal() {
  const overlay = document.getElementById('profile-modal');
  if (overlay) overlay.style.display = 'none';
}

// Init: show onboarding modal if first visit, else restore profile UI
(function initProfile() {
  const profile = loadProfile();
  if (!profile) {
    setTimeout(() => showProfileModal(), 1400);
  } else {
    updateProfileUI(profile);
  }
})();
