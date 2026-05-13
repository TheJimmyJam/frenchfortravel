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
        headerBorder: 'rgba(205, 46, 58, 0.65)', statBg: 'rgba(0, 30, 90, 0.6)', statBorder: 'rgba(205, 46, 58, 0.45)' },
  nl: { label: 'Dutch',      flag: '🇳🇱', speechLang: 'nl-NL',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/nl.png) center/cover no-repeat',
        headerBorder: 'rgba(255, 102, 0, 0.65)', statBg: 'rgba(0, 40, 100, 0.6)', statBorder: 'rgba(255, 102, 0, 0.45)' },
  ru: { label: 'Russian',    flag: '🇷🇺', speechLang: 'ru-RU',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/ru.png) center/cover no-repeat',
        headerBorder: 'rgba(213, 43, 30, 0.65)', statBg: 'rgba(0, 51, 160, 0.6)', statBorder: 'rgba(213, 43, 30, 0.45)' },
  zh: { label: 'Mandarin',   flag: '🇨🇳', speechLang: 'zh-CN',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/cn.png) center/cover no-repeat',
        headerBorder: 'rgba(255, 222, 0, 0.65)', statBg: 'rgba(140, 20, 20, 0.6)', statBorder: 'rgba(255, 222, 0, 0.45)' },
  ar: { label: 'Arabic',     flag: '🇸🇦', speechLang: 'ar-SA',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/sa.png) center/cover no-repeat',
        headerBorder: 'rgba(0, 122, 61, 0.65)', statBg: 'rgba(0, 60, 25, 0.6)', statBorder: 'rgba(0, 122, 61, 0.45)' },
  hi: { label: 'Hindi',      flag: '🇮🇳', speechLang: 'hi-IN',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/in.png) center/cover no-repeat',
        headerBorder: 'rgba(255, 153, 51, 0.65)', statBg: 'rgba(19, 136, 8, 0.3)', statBorder: 'rgba(255, 153, 51, 0.45)' },
  tr: { label: 'Turkish',    flag: '🇹🇷', speechLang: 'tr-TR',
        headerBg: 'linear-gradient(rgba(8,10,18,0.68), rgba(8,10,18,0.68)), url(https://flagcdn.com/w1280/tr.png) center/cover no-repeat',
        headerBorder: 'rgba(227, 10, 23, 0.65)', statBg: 'rgba(90, 0, 10, 0.6)', statBorder: 'rgba(227, 10, 23, 0.45)' }

  pl: {
    label: 'Polish', flag: '🇵🇱', speechLang: 'pl-PL',
    headerBg: 'linear-gradient(135deg,rgba(220,0,24,0.35),rgba(255,255,255,0.1)) center/cover no-repeat',
    headerBorder: 'rgba(220, 0, 24, 0.65)', statBg: 'rgba(90, 0, 10, 0.6)', statBorder: 'rgba(220, 0, 24, 0.45)' },
  sw: {
    label: 'Swahili', flag: '🇰🇪', speechLang: 'sw-KE',
    headerBg: 'linear-gradient(135deg,rgba(0,100,0,0.35),rgba(0,0,0,0.1)) center/cover no-repeat',
    headerBorder: 'rgba(0, 100, 0, 0.65)', statBg: 'rgba(0, 60, 0, 0.6)', statBorder: 'rgba(0, 150, 0, 0.45)' },
  id: {
    label: 'Indonesian', flag: '🇮🇩', speechLang: 'id-ID',
    headerBg: 'linear-gradient(135deg,rgba(206,17,38,0.35),rgba(255,255,255,0.1)) center/cover no-repeat',
    headerBorder: 'rgba(206, 17, 38, 0.65)', statBg: 'rgba(80, 0, 15, 0.6)', statBorder: 'rgba(206, 17, 38, 0.45)' },
  vi: {
    label: 'Vietnamese', flag: '🇻🇳', speechLang: 'vi-VN',
    headerBg: 'linear-gradient(135deg,rgba(218,37,29,0.35),rgba(255,215,0,0.15)) center/cover no-repeat',
    headerBorder: 'rgba(218, 37, 29, 0.65)', statBg: 'rgba(80, 10, 0, 0.6)', statBorder: 'rgba(218, 37, 29, 0.45)' },
  th: {
    label: 'Thai', flag: '🇹🇭', speechLang: 'th-TH',
    headerBg: 'linear-gradient(135deg,rgba(0,68,170,0.35),rgba(255,255,255,0.1)) center/cover no-repeat',
    headerBorder: 'rgba(0, 68, 170, 0.65)', statBg: 'rgba(0, 30, 90, 0.6)', statBorder: 'rgba(0, 68, 170, 0.45)' },
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

  'en-nl': { source:'en', target:'nl', courseKey:'nl', storageKey:'en_nl_learner_v1', recentKey:'en_nl_translator_recent',
             subtitle:'English → Dutch',     tagline:'30 days to Amsterdam-confidence',
             inputPlaceholder:'e.g. where is the train station',
             translatorSubtitle:'Type any English word or phrase. Get the Dutch translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-ru': { source:'en', target:'ru', courseKey:'ru', storageKey:'en_ru_learner_v1', recentKey:'en_ru_translator_recent',
             subtitle:'English → Russian',   tagline:'30 days to Moscow-confidence',
             inputPlaceholder:'e.g. where is the metro',
             translatorSubtitle:'Type any English word or phrase. Get the Russian translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-zh': { source:'en', target:'zh', courseKey:'zh', storageKey:'en_zh_learner_v1', recentKey:'en_zh_translator_recent',
             subtitle:'English → Mandarin',  tagline:'30 days to Beijing-confidence',
             inputPlaceholder:'e.g. where is the restaurant',
             translatorSubtitle:'Type any English word or phrase. Get the Mandarin translation, pinyin, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-ar': { source:'en', target:'ar', courseKey:'ar', storageKey:'en_ar_learner_v1', recentKey:'en_ar_translator_recent',
             subtitle:'English → Arabic',    tagline:'30 days to Arabic-confidence',
             inputPlaceholder:'e.g. where is the hotel',
             translatorSubtitle:'Type any English word or phrase. Get the Arabic translation, transliteration, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-hi': { source:'en', target:'hi', courseKey:'hi', storageKey:'en_hi_learner_v1', recentKey:'en_hi_translator_recent',
             subtitle:'English → Hindi',     tagline:'30 days to Mumbai-confidence',
             inputPlaceholder:'e.g. how much does this cost',
             translatorSubtitle:'Type any English word or phrase. Get the Hindi translation, transliteration, and a pronunciation guide. Tap the speaker to hear it.' },
  'en-tr': { source:'en', target:'tr', courseKey:'tr', storageKey:'en_tr_learner_v1', recentKey:'en_tr_translator_recent',
             subtitle:'English → Turkish',   tagline:'30 days to Istanbul-confidence',
             inputPlaceholder:'e.g. where is the bazaar',
             translatorSubtitle:'Type any English word or phrase. Get the Turkish translation, IPA, and a pronunciation guide. Tap the speaker to hear it.' },
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
  'nl-en': { source:'nl', target:'en', courseKey:'nl', storageKey:'nl_en_learner_v1', recentKey:'nl_en_translator_recent',
             subtitle:'Nederlands → English',  tagline:'30 dagen naar Engels-zelfvertrouwen',
             inputPlaceholder:'bijv. waar is het station',
             translatorSubtitle:'Typ een Nederlands woord of zin. Krijg de Engelse vertaling, IPA en uitspraakgids. Tik op de luidspreker om het te horen.' },
  'ru-en': { source:'ru', target:'en', courseKey:'ru', storageKey:'ru_en_learner_v1', recentKey:'ru_en_translator_recent',
             subtitle:'Русский → English',     tagline:'30 дней к уверенному английскому',
             inputPlaceholder:'напр. где находится метро',
             translatorSubtitle:'Введите русское слово или фразу. Получите перевод на английский, IPA и руководство по произношению.' },
  'zh-en': { source:'zh', target:'en', courseKey:'zh', storageKey:'zh_en_learner_v1', recentKey:'zh_en_translator_recent',
             subtitle:'普通话 → English',       tagline:'30天英语自信心',
             inputPlaceholder:'例如：火车站在哪里',
             translatorSubtitle:'输入普通话单词或短语。获取英语翻译、拼音和发音指南。点击扬声器收听。' },
  'ar-en': { source:'ar', target:'en', courseKey:'ar', storageKey:'ar_en_learner_v1', recentKey:'ar_en_translator_recent',
             subtitle:'العربية → English',      tagline:'٣٠ يوماً نحو الثقة بالإنجليزية',
             inputPlaceholder:'مثال: أين المحطة',
             translatorSubtitle:'اكتب كلمة أو جملة بالعربية. احصل على الترجمة الإنجليزية والنطق الصوتي.' },
  'hi-en': { source:'hi', target:'en', courseKey:'hi', storageKey:'hi_en_learner_v1', recentKey:'hi_en_translator_recent',
             subtitle:'हिन्दी → English',       tagline:'30 दिनों में अंग्रेज़ी में आत्मविश्वास',
             inputPlaceholder:'उदा. स्टेशन कहाँ है',
             translatorSubtitle:'हिंदी में कोई शब्द या वाक्यांश टाइप करें। अंग्रेज़ी अनुवाद, IPA और उच्चारण मार्गदर्शिका प्राप्त करें।' },
  'tr-en': { source:'tr', target:'en', courseKey:'tr', storageKey:'tr_en_learner_v1', recentKey:'tr_en_translator_recent',
             subtitle:'Türkçe → English',       tagline:'30 günde İngilizce özgüveni',
             inputPlaceholder:'örn. tren istasyonu nerede',
             translatorSubtitle:'Türkçe bir kelime veya cümle yazın. İngilizce çeviri, IPA ve telaffuz rehberi alın.' },
};

// ── Auto-generate cross pairs (non-English ↔ non-English) ───────────────────
// These use the target-language course as fallback until a native lesson plan
// (e.g. js/course-es-fr.js) is loaded, at which point getCourseData() upgrades
// automatically. Cross pairs are intentionally NOT shown on the landing page
// until a native course file exists — surfaced progressively as content ships.
(function() {
  const NON_EN = ['fr','es','sq','it','pt','el','ja','de','ko','nl','ru','zh','ar','hi','tr','pl','sw','id','vi','th'];
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

// ============================================================
// INTERNATIONALISATION — UI strings keyed by source language
// ============================================================
const UI_STRINGS = {
  en: {
    nav_lesson:'Today\'s Lesson', nav_flashcards:'Flashcards', nav_quiz:'Quiz',
    nav_all:'All Lessons', nav_conversations:'Conversations',
    nav_translator:'Translator', nav_notebook:'Notebook', nav_progress:'Progress',
    stat_day:'Day', stat_streak:'Streak', stat_mastered:'Mastered', stat_progress:'Progress',
    lesson_vocabulary:'Vocabulary', lesson_key_phrases:'Key Phrases',
    lesson_grammar_tip:'Grammar / Cultural Tip', lesson_practice:'Practice',
    lesson_cultural_tip:'Cultural Tip', lesson_tap_reveal:'tap to reveal',
    lesson_mark_complete:'Mark Day Complete', lesson_completed:'✓ Completed',
    lesson_undo:'↩ Undo', day_label:'Day',
    nav_yesterday:'← Yesterday', nav_tomorrow:'→ Tomorrow', nav_today:'Today',
    tag_mastered:'★ Mastered', tag_done:'✓ Done',
    flash_subtitle:'Drill the vocab from your completed days.',
    flash_deck:'Deck', flash_days_seen:'Days I\'ve seen',
    flash_all_days:'All 30 days + saved', flash_need_work:'Need more work',
    flash_saved_words:'My saved words', flash_shuffle:'⇄ Shuffle', flash_mode:'Mode',
    flash_ipa_on:'IPA on front', flash_challenge:'Challenge',
    flash_need_btn:'Need work', flash_skip:'Skip', flash_got_it:'Got it ✓',
    flash_tap_flip:'Tap to flip', flash_say_it:'Say it — then flip',
    flash_empty_saved:'No saved words yet. Use the Translator tab and tap "+ Save to flashcards" to build your custom deck.',
    flash_empty_day1:'Complete Day 1 to start using flashcards!', flash_cards:'cards',
    quiz_complete:'Quiz Complete', quiz_unlock:'Complete Day 1 to unlock the quiz.',
    quiz_try_again:'Try Again →', quiz_choose:'🔤 Choose the answer',
    quiz_type_it:'✏️ Type it', quiz_match:'🔗 Match the pairs',
    quiz_placeholder:'Type your answer…', quiz_check:'Check →', quiz_next:'Next →',
    quiz_question:'Question', quiz_of:'of', quiz_score:'Score',
    quiz_match_pick:(s)=>`Now pick the matching ${s} word →`,
    quiz_match_start:'Tap a word on the left to start',
    quiz_what_does:(w,s)=>`What does "${w}" mean in ${s}?`,
    quiz_how_say:(w,tg)=>`How do you say "${w}" in ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} of ${tot} correct`,
    convo_title:'Conversation Practice',
    convo_subtitle:'Real scenarios to drill before you go. Tap a card to open it.',
    convo_tap_open:'Tap to open →', convo_prefix:'Conversation', convo_of:'of',
    convo_you:'You', convo_them:'Them', convo_prev:'← Previous', convo_next:'Next →',
    all_title:'All 30 Days', all_reset_btn:'↺ Reset All Progress',
    all_subtitle:'Tap a day to open it · ↩ to undo completion',
    all_reset_confirm:(l)=>`Reset all ${l} progress and start over?`,
    prog_title:'Dashboard', prog_days_done:'Days Done', prog_of_30:'of 30',
    prog_streak:'Day Streak', prog_last:'last:', prog_start_today:'start today',
    prog_mastered:'Mastered', prog_of_words:(n)=>`of ${n} words`,
    prog_complete:'Complete', prog_course_progress:'course progress',
    prog_vocab:'Vocabulary', prog_seen:'Seen', prog_need_work:'Need work',
    prog_word:(n)=>n===1?'1 word':`${n} words`,
    prog_quiz_perf:'Quiz Performance', prog_accuracy:'Accuracy', prog_answered:'Answered',
    prog_reset_section:'Reset',
    prog_reset_desc:(l)=>`Clear all ${l} progress and start over.`,
    prog_reset_btn:'Reset', prog_reset_confirm:(l)=>`Reset all ${l} progress?`,
    nb_title:'The Leather Notebook',
    nb_subtitle:(n)=>`${n} of 30 entries unlocked · Complete days to reveal more`,
    nb_review:'📍 Review Queue', nb_drill:'Drill these →',
    nb_empty:'Nothing here yet — mark flashcards "Need work" and they\'ll show up here.',
    nb_unlock:'🔒 Complete this day to unlock', nb_got_it:'✓ Got it',
    trans_title:'Translator', trans_loading:'Translating…', trans_btn:'Translate →',
    trans_masculine:'masculine', trans_feminine:'feminine',
    trans_hear:'🔊 Hear it', trans_save:'+ Save to flashcards',
    trans_saved_btn:'✓ Saved to flashcards',
    trans_tip:'Tip: Try phrases, not just single words. "How much is this?" works better than just "much". Saved words appear in the Flashcards tab under "My Saved Words".',
    trans_saved_cards:'Saved cards:', trans_recent:'Recent',
    trans_error:'Translation failed:',
    toast_added_review:'📍 Added to Review Queue',
    toast_removed:'Removed from flashcards', toast_saved:'✓ Saved to flashcards',
    toast_day_incomplete:(n)=>`Day ${n} marked incomplete.`,
    trans_subtitle_cross:(s,tg)=>`Translate from ${s} to ${tg}. Get the translation, IPA, and a pronunciation guide.`,
  },
  es: {
    nav_lesson:'Lección de Hoy', nav_flashcards:'Flashcards', nav_quiz:'Quiz',
    nav_all:'Todas las Lecciones', nav_conversations:'Conversaciones',
    nav_translator:'Traductor', nav_notebook:'Cuaderno', nav_progress:'Progreso',
    stat_day:'Día', stat_streak:'Racha', stat_mastered:'Dominadas', stat_progress:'Progreso',
    lesson_vocabulary:'Vocabulario', lesson_key_phrases:'Frases Clave',
    lesson_grammar_tip:'Gramática / Consejo Cultural', lesson_practice:'Práctica',
    lesson_cultural_tip:'Consejo Cultural', lesson_tap_reveal:'toca para revelar',
    lesson_mark_complete:'Marcar Día Completo', lesson_completed:'✓ Completado',
    lesson_undo:'↩ Deshacer', day_label:'Día',
    nav_yesterday:'← Ayer', nav_tomorrow:'→ Mañana', nav_today:'Hoy',
    tag_mastered:'★ Dominado', tag_done:'✓ Hecho',
    flash_subtitle:'Repasa el vocabulario de los días completados.',
    flash_deck:'Mazo', flash_days_seen:'Días vistos',
    flash_all_days:'Los 30 días + guardados', flash_need_work:'Necesitan más repaso',
    flash_saved_words:'Mis palabras guardadas', flash_shuffle:'⇄ Mezclar', flash_mode:'Modo',
    flash_ipa_on:'IPA al frente', flash_challenge:'Desafío',
    flash_need_btn:'A repasar', flash_skip:'Saltar', flash_got_it:'¡Lo tengo! ✓',
    flash_tap_flip:'Toca para voltear', flash_say_it:'Dilo — luego voltea',
    flash_empty_saved:'Aún no hay palabras guardadas. Usa la pestaña Traductor y toca "+ Guardar" para crear tu mazo personalizado.',
    flash_empty_day1:'¡Completa el Día 1 para empezar a usar las flashcards!', flash_cards:'tarjetas',
    quiz_complete:'Quiz Completado', quiz_unlock:'Completa el Día 1 para desbloquear el quiz.',
    quiz_try_again:'Intentar de nuevo →', quiz_choose:'🔤 Elige la respuesta',
    quiz_type_it:'✏️ Escríbelo', quiz_match:'🔗 Empareja los pares',
    quiz_placeholder:'Escribe tu respuesta…', quiz_check:'Comprobar →', quiz_next:'Siguiente →',
    quiz_question:'Pregunta', quiz_of:'de', quiz_score:'Puntuación',
    quiz_match_pick:(s)=>`Ahora elige la palabra en ${s} que corresponde →`,
    quiz_match_start:'Toca una palabra a la izquierda para empezar',
    quiz_what_does:(w,s)=>`¿Qué significa "${w}" en ${s}?`,
    quiz_how_say:(w,tg)=>`¿Cómo se dice "${w}" en ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} de ${tot} correctas`,
    convo_title:'Práctica de Conversación',
    convo_subtitle:'Situaciones reales para practicar antes de viajar. Toca una tarjeta para abrirla.',
    convo_tap_open:'Toca para abrir →', convo_prefix:'Conversación', convo_of:'de',
    convo_you:'Tú', convo_them:'Ellos', convo_prev:'← Anterior', convo_next:'Siguiente →',
    all_title:'Los 30 Días', all_reset_btn:'↺ Reiniciar Progreso',
    all_subtitle:'Toca un día para abrirlo · ↩ para deshacer',
    all_reset_confirm:(l)=>`¿Reiniciar todo el progreso de ${l} y empezar de nuevo?`,
    prog_title:'Panel', prog_days_done:'Días Hechos', prog_of_30:'de 30',
    prog_streak:'Racha', prog_last:'último:', prog_start_today:'empieza hoy',
    prog_mastered:'Dominadas', prog_of_words:(n)=>`de ${n} palabras`,
    prog_complete:'Completo', prog_course_progress:'progreso del curso',
    prog_vocab:'Vocabulario', prog_seen:'Visto', prog_need_work:'A repasar',
    prog_word:(n)=>n===1?'1 palabra':`${n} palabras`,
    prog_quiz_perf:'Rendimiento en el Quiz', prog_accuracy:'Precisión', prog_answered:'Respondidas',
    prog_reset_section:'Reiniciar',
    prog_reset_desc:(l)=>`Borrar todo el progreso de ${l} y empezar de nuevo.`,
    prog_reset_btn:'Reiniciar', prog_reset_confirm:(l)=>`¿Reiniciar todo el progreso de ${l}?`,
    nb_title:'El Cuaderno de Cuero',
    nb_subtitle:(n)=>`${n} de 30 entradas desbloqueadas · Completa días para revelar más`,
    nb_review:'📍 Cola de Repaso', nb_drill:'Repasar →',
    nb_empty:'Nada aquí todavía — marca flashcards como "A repasar" y aparecerán aquí.',
    nb_unlock:'🔒 Completa este día para desbloquearlo', nb_got_it:'✓ Ya lo sé',
    trans_title:'Traductor', trans_loading:'Traduciendo…', trans_btn:'Traducir →',
    trans_masculine:'masculino', trans_feminine:'femenino',
    trans_hear:'🔊 Escucharlo', trans_save:'+ Guardar en flashcards',
    trans_saved_btn:'✓ Guardado en flashcards',
    trans_tip:'Consejo: Prueba con frases, no solo palabras. "¿Cuánto cuesta esto?" funciona mejor que solo "cuánto". Las palabras guardadas aparecen en Flashcards.',
    trans_saved_cards:'Tarjetas guardadas:', trans_recent:'Recientes',
    trans_error:'Error de traducción:',
    toast_added_review:'📍 Añadido a la cola de repaso',
    toast_removed:'Eliminado de las flashcards', toast_saved:'✓ Guardado en flashcards',
    toast_day_incomplete:(n)=>`Día ${n} marcado como incompleto.`,
    trans_subtitle_cross:(s,tg)=>`Traduce del ${s} al ${tg}. Obtén la traducción, IPA y guía de pronunciación.`,
  },
  fr: {
    nav_lesson:'Leçon du Jour', nav_flashcards:'Flashcards', nav_quiz:'Quiz',
    nav_all:'Toutes les Leçons', nav_conversations:'Conversations',
    nav_translator:'Traducteur', nav_notebook:'Carnet', nav_progress:'Progrès',
    stat_day:'Jour', stat_streak:'Série', stat_mastered:'Maîtrisé', stat_progress:'Progrès',
    lesson_vocabulary:'Vocabulaire', lesson_key_phrases:'Phrases Clés',
    lesson_grammar_tip:'Grammaire / Conseil Culturel', lesson_practice:'Pratique',
    lesson_cultural_tip:'Conseil Culturel', lesson_tap_reveal:'touchez pour révéler',
    lesson_mark_complete:'Marquer le Jour Terminé', lesson_completed:'✓ Terminé',
    lesson_undo:'↩ Annuler', day_label:'Jour',
    nav_yesterday:'← Hier', nav_tomorrow:'→ Demain', nav_today:"Aujourd'hui",
    tag_mastered:'★ Maîtrisé', tag_done:'✓ Fait',
    flash_subtitle:'Révisez le vocabulaire des jours complétés.',
    flash_deck:'Jeu', flash_days_seen:'Jours vus',
    flash_all_days:'Les 30 jours + sauvegardés', flash_need_work:'À retravailler',
    flash_saved_words:'Mes mots sauvegardés', flash_shuffle:'⇄ Mélanger', flash_mode:'Mode',
    flash_ipa_on:'IPA en face', flash_challenge:'Défi',
    flash_need_btn:'À retravailler', flash_skip:'Passer', flash_got_it:'Compris ✓',
    flash_tap_flip:'Touchez pour retourner', flash_say_it:'Dites-le — puis retournez',
    flash_empty_saved:"Aucun mot sauvegardé. Utilisez l'onglet Traducteur et touchez \u0022+ Sauvegarder\u0022 pour créer votre jeu.",
    flash_empty_day1:'Terminez le Jour 1 pour commencer à utiliser les flashcards !', flash_cards:'fiches',
    quiz_complete:'Quiz Terminé', quiz_unlock:'Terminez le Jour 1 pour débloquer le quiz.',
    quiz_try_again:'Réessayer →', quiz_choose:'🔤 Choisissez la réponse',
    quiz_type_it:'✏️ Écrivez-le', quiz_match:'🔗 Associez les paires',
    quiz_placeholder:'Écrivez votre réponse…', quiz_check:'Vérifier →', quiz_next:'Suivant →',
    quiz_question:'Question', quiz_of:'sur', quiz_score:'Score',
    quiz_match_pick:(s)=>`Choisissez maintenant le mot en ${s} correspondant →`,
    quiz_match_start:'Touchez un mot à gauche pour commencer',
    quiz_what_does:(w,s)=>`Que signifie « ${w} » en ${s} ?`,
    quiz_how_say:(w,tg)=>`Comment dit-on « ${w} » en ${tg} ?`,
    quiz_correct_of:(c,tot)=>`${c} sur ${tot} correctes`,
    convo_title:'Pratique de Conversation',
    convo_subtitle:'Des situations réelles à pratiquer avant de partir. Touchez une carte pour l\'ouvrir.',
    convo_tap_open:'Touchez pour ouvrir →', convo_prefix:'Conversation', convo_of:'sur',
    convo_you:'Vous', convo_them:'Eux', convo_prev:'← Précédent', convo_next:'Suivant →',
    all_title:'Les 30 Jours', all_reset_btn:'↺ Réinitialiser la Progression',
    all_subtitle:'Touchez un jour pour l\'ouvrir · ↩ pour annuler',
    all_reset_confirm:(l)=>`Réinitialiser toute la progression ${l} et recommencer ?`,
    prog_title:'Tableau de Bord', prog_days_done:'Jours Faits', prog_of_30:'sur 30',
    prog_streak:'Série', prog_last:'dernier :', prog_start_today:"commencez aujourd'hui",
    prog_mastered:'Maîtrisé', prog_of_words:(n)=>`sur ${n} mots`,
    prog_complete:'Complet', prog_course_progress:'progression du cours',
    prog_vocab:'Vocabulaire', prog_seen:'Vu', prog_need_work:'À retravailler',
    prog_word:(n)=>n===1?'1 mot':`${n} mots`,
    prog_quiz_perf:'Performance au Quiz', prog_accuracy:'Précision', prog_answered:'Répondues',
    prog_reset_section:'Réinitialiser',
    prog_reset_desc:(l)=>`Effacer toute la progression ${l} et recommencer.`,
    prog_reset_btn:'Réinitialiser', prog_reset_confirm:(l)=>`Réinitialiser toute la progression ${l} ?`,
    nb_title:'Le Carnet en Cuir',
    nb_subtitle:(n)=>`${n} entrées sur 30 débloquées · Terminez des jours pour en révéler plus`,
    nb_review:'📍 File de Révision', nb_drill:'Travailler →',
    nb_empty:'Rien ici pour l\'instant — marquez des flashcards « À retravailler » et elles apparaîtront ici.',
    nb_unlock:'🔒 Terminez ce jour pour le débloquer', nb_got_it:'✓ Compris',
    trans_title:'Traducteur', trans_loading:'Traduction…', trans_btn:'Traduire →',
    trans_masculine:'masculin', trans_feminine:'féminin',
    trans_hear:"🔊 L'entendre", trans_save:'+ Sauvegarder',
    trans_saved_btn:'✓ Sauvegardé',
    trans_tip:"Conseil : Essayez des phrases, pas seulement des mots. « Combien ça coûte ? » fonctionne mieux que juste « combien ». Les mots sauvegardés apparaissent dans Flashcards.",
    trans_saved_cards:'Fiches sauvegardées :', trans_recent:'Récents',
    trans_error:'Traduction échouée :',
    toast_added_review:'📍 Ajouté à la file de révision',
    toast_removed:'Supprimé des flashcards', toast_saved:'✓ Sauvegardé dans les flashcards',
    toast_day_incomplete:(n)=>`Jour ${n} marqué incomplet.`,
    trans_subtitle_cross:(s,tg)=>`Traduisez du ${s} en ${tg}. Obtenez la traduction, l'IPA et le guide de prononciation.`,
  },
  it: {
    nav_lesson:'Lezione di Oggi', nav_flashcards:'Flashcard', nav_quiz:'Quiz',
    nav_all:'Tutte le Lezioni', nav_conversations:'Conversazioni',
    nav_translator:'Traduttore', nav_notebook:'Taccuino', nav_progress:'Progresso',
    stat_day:'Giorno', stat_streak:'Serie', stat_mastered:'Padroneggiato', stat_progress:'Progresso',
    lesson_vocabulary:'Vocabolario', lesson_key_phrases:'Frasi Chiave',
    lesson_grammar_tip:'Grammatica / Consiglio Culturale', lesson_practice:'Pratica',
    lesson_cultural_tip:'Consiglio Culturale', lesson_tap_reveal:'tocca per rivelare',
    lesson_mark_complete:'Segna il Giorno Completo', lesson_completed:'✓ Completato',
    lesson_undo:'↩ Annulla', day_label:'Giorno',
    nav_yesterday:'← Ieri', nav_tomorrow:'→ Domani', nav_today:'Oggi',
    tag_mastered:'★ Padroneggiato', tag_done:'✓ Fatto',
    flash_subtitle:'Ripassa il vocabolario dei giorni completati.',
    flash_deck:'Mazzo', flash_days_seen:'Giorni visti',
    flash_all_days:'Tutti i 30 giorni + salvati', flash_need_work:'Da ripassare',
    flash_saved_words:'Le mie parole salvate', flash_shuffle:'⇄ Mescola', flash_mode:'Modalità',
    flash_ipa_on:'IPA in fronte', flash_challenge:'Sfida',
    flash_need_btn:'Da ripassare', flash_skip:'Salta', flash_got_it:'Capito ✓',
    flash_tap_flip:'Tocca per girare', flash_say_it:'Dillo — poi gira',
    flash_empty_saved:'Nessuna parola salvata. Usa la scheda Traduttore e tocca "+ Salva" per creare il tuo mazzo.',
    flash_empty_day1:'Completa il Giorno 1 per iniziare a usare le flashcard!', flash_cards:'schede',
    quiz_complete:'Quiz Completato', quiz_unlock:'Completa il Giorno 1 per sbloccare il quiz.',
    quiz_try_again:'Riprova →', quiz_choose:'🔤 Scegli la risposta',
    quiz_type_it:'✏️ Scrivilo', quiz_match:'🔗 Abbina le coppie',
    quiz_placeholder:'Scrivi la tua risposta…', quiz_check:'Controlla →', quiz_next:'Avanti →',
    quiz_question:'Domanda', quiz_of:'di', quiz_score:'Punteggio',
    quiz_match_pick:(s)=>`Ora scegli la parola in ${s} corrispondente →`,
    quiz_match_start:'Tocca una parola a sinistra per iniziare',
    quiz_what_does:(w,s)=>`Cosa significa "${w}" in ${s}?`,
    quiz_how_say:(w,tg)=>`Come si dice "${w}" in ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} di ${tot} corrette`,
    convo_title:'Pratica di Conversazione',
    convo_subtitle:'Situazioni reali da praticare prima di partire. Tocca una scheda per aprirla.',
    convo_tap_open:'Tocca per aprire →', convo_prefix:'Conversazione', convo_of:'di',
    convo_you:'Tu', convo_them:'Loro', convo_prev:'← Precedente', convo_next:'Avanti →',
    all_title:'Tutti i 30 Giorni', all_reset_btn:'↺ Azzera il Progresso',
    all_subtitle:'Tocca un giorno per aprirlo · ↩ per annullare',
    all_reset_confirm:(l)=>`Azzerare tutti i progressi di ${l} e ricominciare?`,
    prog_title:'Pannello', prog_days_done:'Giorni Fatti', prog_of_30:'di 30',
    prog_streak:'Serie', prog_last:'ultimo:', prog_start_today:'inizia oggi',
    prog_mastered:'Padroneggiato', prog_of_words:(n)=>`di ${n} parole`,
    prog_complete:'Completo', prog_course_progress:'avanzamento del corso',
    prog_vocab:'Vocabolario', prog_seen:'Visto', prog_need_work:'Da ripassare',
    prog_word:(n)=>n===1?'1 parola':`${n} parole`,
    prog_quiz_perf:'Prestazioni al Quiz', prog_accuracy:'Precisione', prog_answered:'Risposte',
    prog_reset_section:'Reimposta',
    prog_reset_desc:(l)=>`Cancella tutti i progressi di ${l} e ricomincia.`,
    prog_reset_btn:'Reimposta', prog_reset_confirm:(l)=>`Reimpostare tutti i progressi di ${l}?`,
    nb_title:'Il Taccuino di Cuoio',
    nb_subtitle:(n)=>`${n} di 30 voci sbloccate · Completa giorni per rivelarne di più`,
    nb_review:'📍 Coda di Revisione', nb_drill:'Ripassare →',
    nb_empty:'Niente ancora — segna le flashcard come "Da ripassare" e appariranno qui.',
    nb_unlock:'🔒 Completa questo giorno per sbloccarlo', nb_got_it:'✓ Capito',
    trans_title:'Traduttore', trans_loading:'Traduzione…', trans_btn:'Traduci →',
    trans_masculine:'maschile', trans_feminine:'femminile',
    trans_hear:'🔊 Ascoltalo', trans_save:'+ Salva nelle flashcard',
    trans_saved_btn:'✓ Salvato nelle flashcard',
    trans_tip:'Consiglio: Prova con le frasi, non solo parole singole. "Quanto costa?" funziona meglio di solo "quanto". Le parole salvate appaiono in Flashcard.',
    trans_saved_cards:'Schede salvate:', trans_recent:'Recenti',
    trans_error:'Traduzione fallita:',
    toast_added_review:'📍 Aggiunto alla coda di revisione',
    toast_removed:'Rimosso dalle flashcard', toast_saved:'✓ Salvato nelle flashcard',
    toast_day_incomplete:(n)=>`Giorno ${n} segnato come incompleto.`,
    trans_subtitle_cross:(s,tg)=>`Traduci dall'${s} in ${tg}. Ottieni la traduzione, IPA e guida alla pronuncia.`,
  },
  pt: {
    nav_lesson:'Lição de Hoje', nav_flashcards:'Flashcards', nav_quiz:'Quiz',
    nav_all:'Todas as Lições', nav_conversations:'Conversas',
    nav_translator:'Tradutor', nav_notebook:'Caderno', nav_progress:'Progresso',
    stat_day:'Dia', stat_streak:'Sequência', stat_mastered:'Dominadas', stat_progress:'Progresso',
    lesson_vocabulary:'Vocabulário', lesson_key_phrases:'Frases-Chave',
    lesson_grammar_tip:'Gramática / Dica Cultural', lesson_practice:'Prática',
    lesson_cultural_tip:'Dica Cultural', lesson_tap_reveal:'toque para revelar',
    lesson_mark_complete:'Marcar Dia Completo', lesson_completed:'✓ Concluído',
    lesson_undo:'↩ Desfazer', day_label:'Dia',
    nav_yesterday:'← Ontem', nav_tomorrow:'→ Amanhã', nav_today:'Hoje',
    tag_mastered:'★ Dominado', tag_done:'✓ Feito',
    flash_subtitle:'Revise o vocabulário dos dias concluídos.',
    flash_deck:'Baralho', flash_days_seen:'Dias vistos',
    flash_all_days:'Todos os 30 dias + salvos', flash_need_work:'Precisa de revisão',
    flash_saved_words:'Minhas palavras salvas', flash_shuffle:'⇄ Embaralhar', flash_mode:'Modo',
    flash_ipa_on:'IPA na frente', flash_challenge:'Desafio',
    flash_need_btn:'Revisar', flash_skip:'Pular', flash_got_it:'Entendi ✓',
    flash_tap_flip:'Toque para virar', flash_say_it:'Diga — depois vire',
    flash_empty_saved:'Nenhuma palavra salva ainda. Use a aba Tradutor e toque em "+ Salvar" para criar seu baralho.',
    flash_empty_day1:'Conclua o Dia 1 para começar a usar os flashcards!', flash_cards:'cartões',
    quiz_complete:'Quiz Concluído', quiz_unlock:'Conclua o Dia 1 para desbloquear o quiz.',
    quiz_try_again:'Tentar novamente →', quiz_choose:'🔤 Escolha a resposta',
    quiz_type_it:'✏️ Digite', quiz_match:'🔗 Combine os pares',
    quiz_placeholder:'Digite sua resposta…', quiz_check:'Verificar →', quiz_next:'Próximo →',
    quiz_question:'Pergunta', quiz_of:'de', quiz_score:'Pontuação',
    quiz_match_pick:(s)=>`Agora escolha a palavra em ${s} correspondente →`,
    quiz_match_start:'Toque em uma palavra à esquerda para começar',
    quiz_what_does:(w,s)=>`O que significa "${w}" em ${s}?`,
    quiz_how_say:(w,tg)=>`Como se diz "${w}" em ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} de ${tot} corretas`,
    convo_title:'Prática de Conversação',
    convo_subtitle:'Situações reais para praticar antes de viajar. Toque em um cartão para abrir.',
    convo_tap_open:'Toque para abrir →', convo_prefix:'Conversa', convo_of:'de',
    convo_you:'Você', convo_them:'Eles', convo_prev:'← Anterior', convo_next:'Próximo →',
    all_title:'Todos os 30 Dias', all_reset_btn:'↺ Redefinir Progresso',
    all_subtitle:'Toque em um dia para abrir · ↩ para desfazer',
    all_reset_confirm:(l)=>`Redefinir todo o progresso de ${l} e começar de novo?`,
    prog_title:'Painel', prog_days_done:'Dias Feitos', prog_of_30:'de 30',
    prog_streak:'Sequência', prog_last:'último:', prog_start_today:'comece hoje',
    prog_mastered:'Dominadas', prog_of_words:(n)=>`de ${n} palavras`,
    prog_complete:'Completo', prog_course_progress:'progresso do curso',
    prog_vocab:'Vocabulário', prog_seen:'Visto', prog_need_work:'A revisar',
    prog_word:(n)=>n===1?'1 palavra':`${n} palavras`,
    prog_quiz_perf:'Desempenho no Quiz', prog_accuracy:'Precisão', prog_answered:'Respondidas',
    prog_reset_section:'Redefinir',
    prog_reset_desc:(l)=>`Apagar todo o progresso de ${l} e começar de novo.`,
    prog_reset_btn:'Redefinir', prog_reset_confirm:(l)=>`Redefinir todo o progresso de ${l}?`,
    nb_title:'O Caderno de Couro',
    nb_subtitle:(n)=>`${n} de 30 entradas desbloqueadas · Conclua dias para revelar mais`,
    nb_review:'📍 Fila de Revisão', nb_drill:'Revisar →',
    nb_empty:'Nada aqui ainda — marque flashcards como "Revisar" e elas aparecerão aqui.',
    nb_unlock:'🔒 Conclua este dia para desbloqueá-lo', nb_got_it:'✓ Entendi',
    trans_title:'Tradutor', trans_loading:'Traduzindo…', trans_btn:'Traduzir →',
    trans_masculine:'masculino', trans_feminine:'feminino',
    trans_hear:'🔊 Ouvir', trans_save:'+ Salvar nos flashcards',
    trans_saved_btn:'✓ Salvo nos flashcards',
    trans_tip:'Dica: Tente frases, não apenas palavras. "Quanto custa isso?" funciona melhor que só "quanto". Palavras salvas aparecem em Flashcards.',
    trans_saved_cards:'Cartões salvos:', trans_recent:'Recentes',
    trans_error:'Falha na tradução:',
    toast_added_review:'📍 Adicionado à fila de revisão',
    toast_removed:'Removido dos flashcards', toast_saved:'✓ Salvo nos flashcards',
    toast_day_incomplete:(n)=>`Dia ${n} marcado como incompleto.`,
    trans_subtitle_cross:(s,tg)=>`Traduza do ${s} para o ${tg}. Obtenha a tradução, IPA e guia de pronúncia.`,
  },
  nl: {
    nav_lesson:'Les van Vandaag', nav_flashcards:'Flashcards', nav_quiz:'Quiz',
    nav_all:'Alle Lessen', nav_conversations:'Gesprekken',
    nav_translator:'Vertaler', nav_notebook:'Notitieboek', nav_progress:'Voortgang',
    stat_day:'Dag', stat_streak:'Reeks', stat_mastered:'Beheerst', stat_progress:'Voortgang',
    lesson_vocabulary:'Woordenschat', lesson_key_phrases:'Kernzinnen',
    lesson_grammar_tip:'Grammatica / Culturele Tip', lesson_practice:'Oefening',
    lesson_cultural_tip:'Culturele Tip', lesson_tap_reveal:'tik om te onthullen',
    lesson_mark_complete:'Dag Voltooien', lesson_completed:'✓ Voltooid',
    lesson_undo:'↩ Ongedaan maken', day_label:'Dag',
    nav_yesterday:'← Gisteren', nav_tomorrow:'→ Morgen', nav_today:'Vandaag',
    tag_mastered:'★ Beheerst', tag_done:'✓ Klaar',
    flash_subtitle:'Oefen de woordenschat van je voltooide dagen.',
    flash_deck:'Stapel', flash_days_seen:'Geziene dagen',
    flash_all_days:'Alle 30 dagen + opgeslagen', flash_need_work:'Meer oefening nodig',
    flash_saved_words:'Mijn opgeslagen woorden', flash_shuffle:'⇄ Schudden', flash_mode:'Modus',
    flash_ipa_on:'IPA voorop', flash_challenge:'Uitdaging',
    flash_need_btn:'Meer oefenen', flash_skip:'Overslaan', flash_got_it:'Begrepen ✓',
    flash_tap_flip:'Tik om te draaien', flash_say_it:'Zeg het — dan draaien',
    flash_empty_saved:'Nog geen opgeslagen woorden. Gebruik het Vertaler-tabblad en tik op "+ Opslaan" om je eigen stapel te maken.',
    flash_empty_day1:'Voltooi Dag 1 om flashcards te gebruiken!', flash_cards:'kaarten',
    quiz_complete:'Quiz Voltooid', quiz_unlock:'Voltooi Dag 1 om de quiz te ontgrendelen.',
    quiz_try_again:'Opnieuw →', quiz_choose:'🔤 Kies het antwoord',
    quiz_type_it:'✏️ Typ het', quiz_match:'🔗 Koppel de paren',
    quiz_placeholder:'Typ je antwoord…', quiz_check:'Controleren →', quiz_next:'Volgende →',
    quiz_question:'Vraag', quiz_of:'van', quiz_score:'Score',
    quiz_match_pick:(s)=>`Kies nu het bijbehorende ${s}-woord →`,
    quiz_match_start:'Tik op een woord links om te beginnen',
    quiz_what_does:(w,s)=>`Wat betekent "${w}" in het ${s}?`,
    quiz_how_say:(w,tg)=>`Hoe zeg je "${w}" in het ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} van ${tot} goed`,
    convo_title:'Gespreksoefening',
    convo_subtitle:'Echte situaties om te oefenen voor vertrek. Tik op een kaart om te openen.',
    convo_tap_open:'Tik om te openen →', convo_prefix:'Gesprek', convo_of:'van',
    convo_you:'Jij', convo_them:'Hen', convo_prev:'← Vorige', convo_next:'Volgende →',
    all_title:'Alle 30 Dagen', all_reset_btn:'↺ Voortgang Herstellen',
    all_subtitle:'Tik op een dag om te openen · ↩ om te annuleren',
    all_reset_confirm:(l)=>`Alle voortgang van ${l} herstellen en opnieuw beginnen?`,
    prog_title:'Dashboard', prog_days_done:'Dagen Gedaan', prog_of_30:'van 30',
    prog_streak:'Reeks', prog_last:'laatste:', prog_start_today:'begin vandaag',
    prog_mastered:'Beheerst', prog_of_words:(n)=>`van ${n} woorden`,
    prog_complete:'Voltooid', prog_course_progress:'cursusvoortgang',
    prog_vocab:'Woordenschat', prog_seen:'Gezien', prog_need_work:'Meer oefenen',
    prog_word:(n)=>n===1?'1 woord':`${n} woorden`,
    prog_quiz_perf:'Quizprestaties', prog_accuracy:'Nauwkeurigheid', prog_answered:'Beantwoord',
    prog_reset_section:'Herstellen',
    prog_reset_desc:(l)=>`Alle ${l}-voortgang wissen en opnieuw beginnen.`,
    prog_reset_btn:'Herstellen', prog_reset_confirm:(l)=>`Alle ${l}-voortgang herstellen?`,
    nb_title:'Het Leren Notitieboek',
    nb_subtitle:(n)=>`${n} van 30 vermeldingen ontgrendeld · Voltooi dagen voor meer`,
    nb_review:'📍 Herhalingsrij', nb_drill:'Herhalen →',
    nb_empty:'Nog niets hier — markeer flashcards als "Meer oefenen" en ze verschijnen hier.',
    nb_unlock:'🔒 Voltooi deze dag om te ontgrendelen', nb_got_it:'✓ Begrepen',
    trans_title:'Vertaler', trans_loading:'Vertalen…', trans_btn:'Vertalen →',
    trans_masculine:'mannelijk', trans_feminine:'vrouwelijk',
    trans_hear:'🔊 Hoor het', trans_save:'+ Opslaan in flashcards',
    trans_saved_btn:'✓ Opgeslagen in flashcards',
    trans_tip:'Tip: Probeer zinnen, niet alleen losse woorden. "Hoeveel kost dit?" werkt beter. Opgeslagen woorden verschijnen in Flashcards.',
    trans_saved_cards:'Opgeslagen kaarten:', trans_recent:'Recent',
    trans_error:'Vertaling mislukt:',
    toast_added_review:'📍 Toegevoegd aan herhalingsrij',
    toast_removed:'Verwijderd uit flashcards', toast_saved:'✓ Opgeslagen in flashcards',
    toast_day_incomplete:(n)=>`Dag ${n} gemarkeerd als onvolledig.`,
    trans_subtitle_cross:(s,tg)=>`Vertaal van ${s} naar ${tg}. Krijg de vertaling, IPA en uitspraakgids.`,
  },
  de: {
    nav_lesson:'Heutige Lektion', nav_flashcards:'Karteikarten', nav_quiz:'Quiz',
    nav_all:'Alle Lektionen', nav_conversations:'Gespräche',
    nav_translator:'Übersetzer', nav_notebook:'Notizbuch', nav_progress:'Fortschritt',
    stat_day:'Tag', stat_streak:'Serie', stat_mastered:'Gelernt', stat_progress:'Fortschritt',
    lesson_vocabulary:'Vokabular', lesson_key_phrases:'Schlüsselsätze',
    lesson_grammar_tip:'Grammatik / Kulturtipp', lesson_practice:'Übung',
    lesson_cultural_tip:'Kulturtipp', lesson_tap_reveal:'tippen zum Aufdecken',
    lesson_mark_complete:'Tag abschließen', lesson_completed:'✓ Abgeschlossen',
    lesson_undo:'↩ Rückgängig', day_label:'Tag',
    nav_yesterday:'← Gestern', nav_tomorrow:'→ Morgen', nav_today:'Heute',
    tag_mastered:'★ Gelernt', tag_done:'✓ Erledigt',
    flash_subtitle:'Übe den Wortschatz aus deinen abgeschlossenen Tagen.',
    flash_deck:'Stapel', flash_days_seen:'Gesehene Tage',
    flash_all_days:'Alle 30 Tage + Gespeicherte', flash_need_work:'Mehr Übung nötig',
    flash_saved_words:'Meine gespeicherten Wörter', flash_shuffle:'⇄ Mischen', flash_mode:'Modus',
    flash_ipa_on:'IPA vorne', flash_challenge:'Herausforderung',
    flash_need_btn:'Noch üben', flash_skip:'Überspringen', flash_got_it:'Verstanden ✓',
    flash_tap_flip:'Tippen zum Umdrehen', flash_say_it:'Sag es — dann umdrehen',
    flash_empty_saved:'Noch keine gespeicherten Wörter. Nutze den Übersetzer-Tab und tippe auf "+ Speichern" um dein eigenes Deck zu erstellen.',
    flash_empty_day1:'Schließe Tag 1 ab, um Karteikarten zu nutzen!', flash_cards:'Karten',
    quiz_complete:'Quiz abgeschlossen', quiz_unlock:'Schließe Tag 1 ab, um das Quiz freizuschalten.',
    quiz_try_again:'Nochmal →', quiz_choose:'🔤 Wähle die Antwort',
    quiz_type_it:'✏️ Tippe es', quiz_match:'🔗 Paare finden',
    quiz_placeholder:'Tippe deine Antwort…', quiz_check:'Prüfen →', quiz_next:'Weiter →',
    quiz_question:'Frage', quiz_of:'von', quiz_score:'Punktzahl',
    quiz_match_pick:(s)=>`Wähle nun das passende ${s}-Wort →`,
    quiz_match_start:'Tippe auf ein Wort links, um zu beginnen',
    quiz_what_does:(w,s)=>`Was bedeutet "${w}" auf ${s}?`,
    quiz_how_say:(w,tg)=>`Wie sagt man "${w}" auf ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} von ${tot} richtig`,
    convo_title:'Gesprächsübung',
    convo_subtitle:'Echte Szenarien zum Üben vor der Reise. Tippe auf eine Karte zum Öffnen.',
    convo_tap_open:'Tippen zum Öffnen →', convo_prefix:'Gespräch', convo_of:'von',
    convo_you:'Du', convo_them:'Sie/Er', convo_prev:'← Zurück', convo_next:'Weiter →',
    all_title:'Alle 30 Tage', all_reset_btn:'↺ Fortschritt zurücksetzen',
    all_subtitle:'Tippe auf einen Tag zum Öffnen · ↩ zum Rückgängigmachen',
    all_reset_confirm:(l)=>`Gesamten ${l}-Fortschritt zurücksetzen und neu beginnen?`,
    prog_title:'Dashboard', prog_days_done:'Tage erledigt', prog_of_30:'von 30',
    prog_streak:'Serie', prog_last:'zuletzt:', prog_start_today:'heute starten',
    prog_mastered:'Gelernt', prog_of_words:(n)=>`von ${n} Wörtern`,
    prog_complete:'Abgeschlossen', prog_course_progress:'Kursfortschritt',
    prog_vocab:'Vokabular', prog_seen:'Gesehen', prog_need_work:'Noch üben',
    prog_word:(n)=>n===1?'1 Wort':`${n} Wörter`,
    prog_quiz_perf:'Quiz-Leistung', prog_accuracy:'Genauigkeit', prog_answered:'Beantwortet',
    prog_reset_section:'Zurücksetzen',
    prog_reset_desc:(l)=>`Gesamten ${l}-Fortschritt löschen und neu beginnen.`,
    prog_reset_btn:'Zurücksetzen', prog_reset_confirm:(l)=>`Gesamten ${l}-Fortschritt zurücksetzen?`,
    nb_title:'Das Ledernotizbuch',
    nb_subtitle:(n)=>`${n} von 30 Einträgen freigeschaltet · Schließe Tage ab um mehr zu enthüllen`,
    nb_review:'📍 Wiederholungsliste', nb_drill:'Wiederholen →',
    nb_empty:'Noch nichts hier — markiere Karteikarten als "Noch üben" und sie erscheinen hier.',
    nb_unlock:'🔒 Schließe diesen Tag ab um ihn freizuschalten', nb_got_it:'✓ Verstanden',
    trans_title:'Übersetzer', trans_loading:'Übersetze…', trans_btn:'Übersetzen →',
    trans_masculine:'maskulin', trans_feminine:'feminin',
    trans_hear:'🔊 Anhören', trans_save:'+ In Karteikarten speichern',
    trans_saved_btn:'✓ In Karteikarten gespeichert',
    trans_tip:'Tipp: Probiere Phrasen, nicht nur einzelne Wörter. "Wie viel kostet das?" funktioniert besser. Gespeicherte Wörter erscheinen in Karteikarten.',
    trans_saved_cards:'Gespeicherte Karten:', trans_recent:'Zuletzt',
    trans_error:'Übersetzung fehlgeschlagen:',
    toast_added_review:'📍 Zur Wiederholungsliste hinzugefügt',
    toast_removed:'Aus Karteikarten entfernt', toast_saved:'✓ In Karteikarten gespeichert',
    toast_day_incomplete:(n)=>`Tag ${n} als unvollständig markiert.`,
    trans_subtitle_cross:(s,tg)=>`Übersetze von ${s} nach ${tg}. Erhalte die Übersetzung, IPA und Ausspracheführer.`,
  },
  el: {
    nav_lesson:'Σημερινό Μάθημα', nav_flashcards:'Κάρτες Μελέτης', nav_quiz:'Κουίζ',
    nav_all:'Όλα τα Μαθήματα', nav_conversations:'Συνομιλίες',
    nav_translator:'Μεταφραστής', nav_notebook:'Σημειωματάριο', nav_progress:'Πρόοδος',
    stat_day:'Ημέρα', stat_streak:'Σερί', stat_mastered:'Κατακτήθηκε', stat_progress:'Πρόοδος',
    lesson_vocabulary:'Λεξιλόγιο', lesson_key_phrases:'Βασικές Φράσεις',
    lesson_grammar_tip:'Γραμματική / Πολιτιστική Συμβουλή', lesson_practice:'Άσκηση',
    lesson_cultural_tip:'Πολιτιστική Συμβουλή', lesson_tap_reveal:'πατήστε για αποκάλυψη',
    lesson_mark_complete:'Ολοκλήρωση Ημέρας', lesson_completed:'✓ Ολοκληρώθηκε',
    lesson_undo:'↩ Αναίρεση', day_label:'Ημέρα',
    nav_yesterday:'← Χθες', nav_tomorrow:'→ Αύριο', nav_today:'Σήμερα',
    tag_mastered:'★ Κατακτήθηκε', tag_done:'✓ Έγινε',
    flash_subtitle:'Εξασκηθείτε με το λεξιλόγιο από τις ολοκληρωμένες ημέρες σας.',
    flash_deck:'Τράπουλα', flash_days_seen:'Ημέρες που είδα',
    flash_all_days:'Όλες οι 30 ημέρες + αποθηκευμένες', flash_need_work:'Χρειάζεται περισσότερη εξάσκηση',
    flash_saved_words:'Οι αποθηκευμένες λέξεις μου', flash_shuffle:'⇄ Ανακάτεμα', flash_mode:'Λειτουργία',
    flash_ipa_on:'IPA μπροστά', flash_challenge:'Πρόκληση',
    flash_need_btn:'Περισσότερη εξάσκηση', flash_skip:'Παράλειψη', flash_got_it:'Το πήρα ✓',
    flash_tap_flip:'Πατήστε για αναστροφή', flash_say_it:'Πείτε το — μετά αναστρέψτε',
    flash_empty_saved:'Δεν υπάρχουν αποθηκευμένες λέξεις ακόμα. Χρησιμοποιήστε τον Μεταφραστή και πατήστε "+ Αποθήκευση" για τη δική σας τράπουλα.',
    flash_empty_day1:'Ολοκληρώστε την Ημέρα 1 για να χρησιμοποιήσετε κάρτες μελέτης!', flash_cards:'κάρτες',
    quiz_complete:'Κουίζ Ολοκληρώθηκε', quiz_unlock:'Ολοκληρώστε την Ημέρα 1 για να ξεκλειδώσετε το κουίζ.',
    quiz_try_again:'Ξανά →', quiz_choose:'🔤 Επιλέξτε την απάντηση',
    quiz_type_it:'✏️ Πληκτρολογήστε το', quiz_match:'🔗 Αντιστοιχίστε τα ζεύγη',
    quiz_placeholder:'Πληκτρολογήστε την απάντησή σας…', quiz_check:'Έλεγχος →', quiz_next:'Επόμενο →',
    quiz_question:'Ερώτηση', quiz_of:'από', quiz_score:'Βαθμολογία',
    quiz_match_pick:(s)=>`Επιλέξτε τώρα την αντίστοιχη λέξη στα ${s} →`,
    quiz_match_start:'Πατήστε μια λέξη αριστερά για να ξεκινήσετε',
    quiz_what_does:(w,s)=>`Τι σημαίνει "${w}" στα ${s};`,
    quiz_how_say:(w,tg)=>`Πώς λέγεται "${w}" στα ${tg};`,
    quiz_correct_of:(c,tot)=>`${c} από ${tot} σωστά`,
    convo_title:'Εξάσκηση Συνομιλίας',
    convo_subtitle:'Πραγματικά σενάρια για εξάσκηση πριν ταξιδέψετε. Πατήστε μια κάρτα για να ανοίξει.',
    convo_tap_open:'Πατήστε για άνοιγμα →', convo_prefix:'Συνομιλία', convo_of:'από',
    convo_you:'Εσείς', convo_them:'Αυτοί', convo_prev:'← Προηγούμενο', convo_next:'Επόμενο →',
    all_title:'Όλες οι 30 Ημέρες', all_reset_btn:'↺ Επαναφορά Προόδου',
    all_subtitle:'Πατήστε μια ημέρα για να ανοίξει · ↩ για αναίρεση',
    all_reset_confirm:(l)=>`Επαναφορά όλης της προόδου ${l} και έναρξη από την αρχή;`,
    prog_title:'Πίνακας Ελέγχου', prog_days_done:'Ημέρες Έγιναν', prog_of_30:'από 30',
    prog_streak:'Σερί', prog_last:'τελευταίο:', prog_start_today:'ξεκινήστε σήμερα',
    prog_mastered:'Κατακτήθηκε', prog_of_words:(n)=>`από ${n} λέξεις`,
    prog_complete:'Ολοκληρώθηκε', prog_course_progress:'πρόοδος μαθήματος',
    prog_vocab:'Λεξιλόγιο', prog_seen:'Εμφανίστηκε', prog_need_work:'Χρειάζεται εξάσκηση',
    prog_word:(n)=>n===1?'1 λέξη':`${n} λέξεις`,
    prog_quiz_perf:'Επίδοση Κουίζ', prog_accuracy:'Ακρίβεια', prog_answered:'Απαντήθηκαν',
    prog_reset_section:'Επαναφορά',
    prog_reset_desc:(l)=>`Διαγραφή όλης της προόδου ${l} και έναρξη από την αρχή.`,
    prog_reset_btn:'Επαναφορά', prog_reset_confirm:(l)=>`Επαναφορά όλης της προόδου ${l};`,
    nb_title:'Το Δερμάτινο Σημειωματάριο',
    nb_subtitle:(n)=>`${n} από 30 καταχωρήσεις ξεκλειδώθηκαν · Ολοκληρώστε ημέρες για να αποκαλύψετε περισσότερες`,
    nb_review:'📍 Ουρά Επανάληψης', nb_drill:'Επανάληψη →',
    nb_empty:'Τίποτα ακόμα — σημειώστε κάρτες ως "Χρειάζεται εξάσκηση" και θα εμφανιστούν εδώ.',
    nb_unlock:'🔒 Ολοκληρώστε αυτή την ημέρα για να ξεκλειδώσετε', nb_got_it:'✓ Το πήρα',
    trans_title:'Μεταφραστής', trans_loading:'Μετάφραση…', trans_btn:'Μετάφραση →',
    trans_masculine:'αρσενικό', trans_feminine:'θηλυκό',
    trans_hear:'🔊 Ακούστε το', trans_save:'+ Αποθήκευση σε κάρτες μελέτης',
    trans_saved_btn:'✓ Αποθηκεύτηκε σε κάρτες μελέτης',
    trans_tip:'Συμβουλή: Δοκιμάστε φράσεις, όχι μόνο λέξεις. "Πόσο κοστίζει αυτό;" λειτουργεί καλύτερα. Αποθηκευμένες λέξεις εμφανίζονται στις Κάρτες Μελέτης.',
    trans_saved_cards:'Αποθηκευμένες κάρτες:', trans_recent:'Πρόσφατα',
    trans_error:'Η μετάφραση απέτυχε:',
    toast_added_review:'📍 Προστέθηκε στην ουρά επανάληψης',
    toast_removed:'Αφαιρέθηκε από τις κάρτες μελέτης', toast_saved:'✓ Αποθηκεύτηκε σε κάρτες μελέτης',
    toast_day_incomplete:(n)=>`Η ημέρα ${n} σημειώθηκε ως ημιτελής.`,
    trans_subtitle_cross:(s,tg)=>`Μεταφράστε από ${s} σε ${tg}. Λάβετε τη μετάφραση, IPA και οδηγό προφοράς.`,
  },
  sq: {
    nav_lesson:'Mësimi i Sotëm', nav_flashcards:'Karta Studimi', nav_quiz:'Kuiz',
    nav_all:'Të Gjitha Mësimet', nav_conversations:'Biseda',
    nav_translator:'Përkthyes', nav_notebook:'Fletore', nav_progress:'Progres',
    stat_day:'Ditë', stat_streak:'Varg', stat_mastered:'Zotëruar', stat_progress:'Progres',
    lesson_vocabulary:'Fjalor', lesson_key_phrases:'Fraza Kryesore',
    lesson_grammar_tip:'Gramatikë / Këshillë Kulturore', lesson_practice:'Praktikë',
    lesson_cultural_tip:'Këshillë Kulturore', lesson_tap_reveal:'trokit për të zbuluar',
    lesson_mark_complete:'Shëno Ditën si të Kryer', lesson_completed:'✓ Kryer',
    lesson_undo:'↩ Zhbëj', day_label:'Ditë',
    nav_yesterday:'← Dje', nav_tomorrow:'→ Nesër', nav_today:'Sot',
    tag_mastered:'★ Zotëruar', tag_done:'✓ Bërë',
    flash_subtitle:'Ushtroni fjalarin nga ditët e kryera.',
    flash_deck:'Paketa', flash_days_seen:'Ditët e parë',
    flash_all_days:'Të 30 ditët + të ruajtura', flash_need_work:'Duhet më shumë punë',
    flash_saved_words:'Fjalët e mia të ruajtura', flash_shuffle:'⇄ Përziej', flash_mode:'Mënyrë',
    flash_ipa_on:'IPA përpara', flash_challenge:'Sfidë',
    flash_need_btn:'Duhet punë', flash_skip:'Kalo', flash_got_it:'E kuptova ✓',
    flash_tap_flip:'Trokit për të kthyer', flash_say_it:'Thuaje — pastaj kthe',
    flash_empty_saved:'Ende nuk ka fjalë të ruajtura. Përdorni skedën Përkthyes dhe trokitni "+ Ruaj" për të krijuar paketën tuaj.',
    flash_empty_day1:'Kryeni Ditën 1 për të filluar kartat e studimit!', flash_cards:'karta',
    quiz_complete:'Kuizi u Krye', quiz_unlock:'Kryeni Ditën 1 për të zhbllokuar kuizin.',
    quiz_try_again:'Provo Sërish →', quiz_choose:'🔤 Zgjidhni përgjigjen',
    quiz_type_it:'✏️ Shkruaje', quiz_match:'🔗 Përputhni çiftet',
    quiz_placeholder:'Shkruani përgjigjen tuaj…', quiz_check:'Kontrollo →', quiz_next:'Tjetri →',
    quiz_question:'Pyetje', quiz_of:'nga', quiz_score:'Pikë',
    quiz_match_pick:(s)=>`Zgjidhni tani fjalën përkatëse në ${s} →`,
    quiz_match_start:'Trokitni një fjalë në të majtë për të filluar',
    quiz_what_does:(w,s)=>`Çfarë do të thotë "${w}" në ${s}?`,
    quiz_how_say:(w,tg)=>`Si thuhet "${w}" në ${tg}?`,
    quiz_correct_of:(c,tot)=>`${c} nga ${tot} saktë`,
    convo_title:'Praktikë Bisede',
    convo_subtitle:'Skenarë realë për t\'u ushtruar para udhëtimit. Trokitni një kartë për ta hapur.',
    convo_tap_open:'Trokit për të hapur →', convo_prefix:'Bisedë', convo_of:'nga',
    convo_you:'Ti', convo_them:'Ata', convo_prev:'← Paraardhësi', convo_next:'Tjetri →',
    all_title:'Të Gjitha 30 Ditët', all_reset_btn:'↺ Rivendos Progresin',
    all_subtitle:'Trokit një ditë për të hapur · ↩ për të zhbërë',
    all_reset_confirm:(l)=>`Rivendosni të gjithë progresin e ${l} dhe filloni nga e para?`,
    prog_title:'Paneli', prog_days_done:'Ditë të Kryera', prog_of_30:'nga 30',
    prog_streak:'Varg', prog_last:'i fundit:', prog_start_today:'filloni sot',
    prog_mastered:'Zotëruar', prog_of_words:(n)=>`nga ${n} fjalë`,
    prog_complete:'Kryer', prog_course_progress:'progresi i kursit',
    prog_vocab:'Fjalor', prog_seen:'Parë', prog_need_work:'Duhet punë',
    prog_word:(n)=>n===1?'1 fjalë':`${n} fjalë`,
    prog_quiz_perf:'Rezultati i Kuizit', prog_accuracy:'Saktësi', prog_answered:'Të Përgjigjet',
    prog_reset_section:'Rivendos',
    prog_reset_desc:(l)=>`Fshini të gjithë progresin e ${l} dhe filloni nga e para.`,
    prog_reset_btn:'Rivendos', prog_reset_confirm:(l)=>`Rivendosni të gjithë progresin e ${l}?`,
    nb_title:'Fletorja e Lëkurës',
    nb_subtitle:(n)=>`${n} nga 30 regjistrime të zhbllokuara · Kryeni ditë për të zbuluar më shumë`,
    nb_review:'📍 Radha e Rishikimit', nb_drill:'Shikoni sërish →',
    nb_empty:'Asgjë këtu ende — shënoni karta si "Duhet punë" dhe do të shfaqen këtu.',
    nb_unlock:'🔒 Kryeni këtë ditë për të zhbllokuar', nb_got_it:'✓ E kuptova',
    trans_title:'Përkthyes', trans_loading:'Duke përkthyer…', trans_btn:'Përkthe →',
    trans_masculine:'mashkullor', trans_feminine:'femëror',
    trans_hear:'🔊 Dëgjoni', trans_save:'+ Ruaj në karta studimi',
    trans_saved_btn:'✓ Ruajtur në karta studimi',
    trans_tip:'Këshillë: Provoni fraza, jo vetëm fjalë. "Sa kushton kjo?" funksionon më mirë. Fjalët e ruajtura shfaqen në Karta Studimi.',
    trans_saved_cards:'Kartat e ruajtura:', trans_recent:'Të fundit',
    trans_error:'Përkthimi dështoi:',
    toast_added_review:'📍 Shtuar në radhën e rishikimit',
    toast_removed:'Hequr nga kartat e studimit', toast_saved:'✓ Ruajtur në kartat e studimit',
    toast_day_incomplete:(n)=>`Dita ${n} u shënua si e pakryer.`,
    trans_subtitle_cross:(s,tg)=>`Përktheni nga ${s} në ${tg}. Merrni përkthimin, IPA dhe udhëzuesin e shqiptimit.`,
  },
  ja: {
    nav_lesson:'今日のレッスン', nav_flashcards:'フラッシュカード', nav_quiz:'クイズ',
    nav_all:'全レッスン', nav_conversations:'会話',
    nav_translator:'翻訳', nav_notebook:'ノート', nav_progress:'進捗',
    stat_day:'日', stat_streak:'連続', stat_mastered:'習得済み', stat_progress:'進捗',
    lesson_vocabulary:'語彙', lesson_key_phrases:'重要フレーズ',
    lesson_grammar_tip:'文法・文化のヒント', lesson_practice:'練習',
    lesson_cultural_tip:'文化のヒント', lesson_tap_reveal:'タップして表示',
    lesson_mark_complete:'この日を完了にする', lesson_completed:'✓ 完了',
    lesson_undo:'↩ 元に戻す', day_label:'日',
    nav_yesterday:'← 昨日', nav_tomorrow:'→ 明日', nav_today:'今日',
    tag_mastered:'★ 習得済み', tag_done:'✓ 完了',
    flash_subtitle:'完了した日の語彙を復習しよう。',
    flash_deck:'デッキ', flash_days_seen:'学習済みの日',
    flash_all_days:'全30日＋保存済み', flash_need_work:'もっと練習が必要',
    flash_saved_words:'保存した単語', flash_shuffle:'⇄ シャッフル', flash_mode:'モード',
    flash_ipa_on:'IPA 表示', flash_challenge:'チャレンジ',
    flash_need_btn:'要練習', flash_skip:'スキップ', flash_got_it:'わかった ✓',
    flash_tap_flip:'タップして裏返す', flash_say_it:'声に出して — 裏返す',
    flash_empty_saved:'まだ保存した単語はありません。翻訳タブで「＋保存」をタップして独自のデッキを作りましょう。',
    flash_empty_day1:'フラッシュカードを使うには1日目を完了してください！', flash_cards:'枚',
    quiz_complete:'クイズ完了', quiz_unlock:'クイズを解放するには1日目を完了してください。',
    quiz_try_again:'もう一度 →', quiz_choose:'🔤 答えを選んでください',
    quiz_type_it:'✏️ 入力する', quiz_match:'🔗 ペアを合わせる',
    quiz_placeholder:'答えを入力…', quiz_check:'確認 →', quiz_next:'次へ →',
    quiz_question:'問題', quiz_of:'/', quiz_score:'スコア',
    quiz_match_pick:(s)=>`対応する${s}の単語を選んでください →`,
    quiz_match_start:'左の単語をタップして始めてください',
    quiz_what_does:(w,s)=>`「${w}」は${s}語で何という意味ですか？`,
    quiz_how_say:(w,tg)=>`「${w}」は${tg}語でどう言いますか？`,
    quiz_correct_of:(c,tot)=>`${tot}問中${c}問正解`,
    convo_title:'会話練習',
    convo_subtitle:'旅行前に練習する実際のシナリオ。カードをタップして開きましょう。',
    convo_tap_open:'タップして開く →', convo_prefix:'会話', convo_of:'/',
    convo_you:'あなた', convo_them:'相手', convo_prev:'← 前', convo_next:'次 →',
    all_title:'全30日', all_reset_btn:'↺ 進捗をリセット',
    all_subtitle:'日をタップして開く · ↩ で元に戻す',
    all_reset_confirm:(l)=>`${l}の全進捗をリセットして最初からやり直しますか？`,
    prog_title:'ダッシュボード', prog_days_done:'完了日数', prog_of_30:'/ 30',
    prog_streak:'連続日数', prog_last:'最終：', prog_start_today:'今日から始める',
    prog_mastered:'習得済み', prog_of_words:(n)=>`/ ${n}単語`,
    prog_complete:'完了', prog_course_progress:'コース進捗',
    prog_vocab:'語彙', prog_seen:'見た', prog_need_work:'要練習',
    prog_word:(n)=>`${n}単語`,
    prog_quiz_perf:'クイズ成績', prog_accuracy:'正確さ', prog_answered:'回答数',
    prog_reset_section:'リセット',
    prog_reset_desc:(l)=>`${l}の全進捗を消去して最初からやり直す。`,
    prog_reset_btn:'リセット', prog_reset_confirm:(l)=>`${l}の全進捗をリセットしますか？`,
    nb_title:'革のノート',
    nb_subtitle:(n)=>`30項目中${n}項目解放済み · 日を完了してさらに表示`,
    nb_review:'📍 復習キュー', nb_drill:'復習する →',
    nb_empty:'まだ何もありません — フラッシュカードを「要練習」にマークするとここに表示されます。',
    nb_unlock:'🔒 この日を完了して解放', nb_got_it:'✓ わかった',
    trans_title:'翻訳', trans_loading:'翻訳中…', trans_btn:'翻訳 →',
    trans_masculine:'男性', trans_feminine:'女性',
    trans_hear:'🔊 聞く', trans_save:'＋フラッシュカードに保存',
    trans_saved_btn:'✓ フラッシュカードに保存済み',
    trans_tip:'ヒント：単語だけでなくフレーズを試してみましょう。「これはいくらですか？」のほうが効果的です。保存した単語はフラッシュカードに表示されます。',
    trans_saved_cards:'保存済みカード：', trans_recent:'最近',
    trans_error:'翻訳エラー：',
    toast_added_review:'📍 復習キューに追加しました',
    toast_removed:'フラッシュカードから削除しました', toast_saved:'✓ フラッシュカードに保存しました',
    toast_day_incomplete:(n)=>`${n}日目を未完了にしました。`,
    trans_subtitle_cross:(s,tg)=>`${s}から${tg}に翻訳。翻訳、IPA、発音ガイドを取得。`,
  },
  ko: {
    nav_lesson:'오늘의 수업', nav_flashcards:'플래시카드', nav_quiz:'퀴즈',
    nav_all:'모든 수업', nav_conversations:'대화',
    nav_translator:'번역기', nav_notebook:'노트', nav_progress:'진도',
    stat_day:'일', stat_streak:'연속', stat_mastered:'마스터됨', stat_progress:'진도',
    lesson_vocabulary:'어휘', lesson_key_phrases:'핵심 표현',
    lesson_grammar_tip:'문법 / 문화 팁', lesson_practice:'연습',
    lesson_cultural_tip:'문화 팁', lesson_tap_reveal:'탭하여 보기',
    lesson_mark_complete:'오늘 수업 완료', lesson_completed:'✓ 완료',
    lesson_undo:'↩ 취소', day_label:'일',
    nav_yesterday:'← 어제', nav_tomorrow:'→ 내일', nav_today:'오늘',
    tag_mastered:'★ 마스터됨', tag_done:'✓ 완료',
    flash_subtitle:'완료한 날의 어휘를 복습하세요.',
    flash_deck:'덱', flash_days_seen:'학습한 날',
    flash_all_days:'전체 30일 + 저장됨', flash_need_work:'더 연습 필요',
    flash_saved_words:'저장한 단어', flash_shuffle:'⇄ 섞기', flash_mode:'모드',
    flash_ipa_on:'IPA 앞에', flash_challenge:'도전',
    flash_need_btn:'연습 필요', flash_skip:'건너뛰기', flash_got_it:'알겠어요 ✓',
    flash_tap_flip:'탭하여 뒤집기', flash_say_it:'말해보고 — 뒤집기',
    flash_empty_saved:'아직 저장된 단어가 없습니다. 번역기 탭에서 "+ 저장"을 탭하여 나만의 덱을 만드세요.',
    flash_empty_day1:'플래시카드를 사용하려면 1일차를 완료하세요!', flash_cards:'장',
    quiz_complete:'퀴즈 완료', quiz_unlock:'퀴즈를 잠금 해제하려면 1일차를 완료하세요.',
    quiz_try_again:'다시 시도 →', quiz_choose:'🔤 답 선택하기',
    quiz_type_it:'✏️ 입력하기', quiz_match:'🔗 쌍 맞추기',
    quiz_placeholder:'답을 입력하세요…', quiz_check:'확인 →', quiz_next:'다음 →',
    quiz_question:'문제', quiz_of:'/', quiz_score:'점수',
    quiz_match_pick:(s)=>`이제 일치하는 ${s} 단어를 선택하세요 →`,
    quiz_match_start:'왼쪽 단어를 탭하여 시작하세요',
    quiz_what_does:(w,s)=>`"${w}"은(는) ${s}어로 무슨 뜻인가요?`,
    quiz_how_say:(w,tg)=>`"${w}"을(를) ${tg}어로 어떻게 말하나요?`,
    quiz_correct_of:(c,tot)=>`${tot}문제 중 ${c}개 정답`,
    convo_title:'대화 연습',
    convo_subtitle:'여행 전 연습할 실제 상황들. 카드를 탭하여 열어보세요.',
    convo_tap_open:'탭하여 열기 →', convo_prefix:'대화', convo_of:'/',
    convo_you:'나', convo_them:'상대방', convo_prev:'← 이전', convo_next:'다음 →',
    all_title:'전체 30일', all_reset_btn:'↺ 진도 초기화',
    all_subtitle:'수업을 탭하여 열기 · ↩ 취소',
    all_reset_confirm:(l)=>`${l} 전체 진도를 초기화하고 처음부터 시작할까요?`,
    prog_title:'대시보드', prog_days_done:'완료한 날', prog_of_30:'/ 30',
    prog_streak:'연속 일수', prog_last:'마지막:', prog_start_today:'오늘부터 시작',
    prog_mastered:'마스터됨', prog_of_words:(n)=>`/ ${n}단어`,
    prog_complete:'완료', prog_course_progress:'코스 진도',
    prog_vocab:'어휘', prog_seen:'학습함', prog_need_work:'연습 필요',
    prog_word:(n)=>`${n}단어`,
    prog_quiz_perf:'퀴즈 성적', prog_accuracy:'정확도', prog_answered:'답한 문제',
    prog_reset_section:'초기화',
    prog_reset_desc:(l)=>`${l} 전체 진도를 지우고 처음부터 시작합니다.`,
    prog_reset_btn:'초기화', prog_reset_confirm:(l)=>`${l} 전체 진도를 초기화할까요?`,
    nb_title:'가죽 노트',
    nb_subtitle:(n)=>`30개 중 ${n}개 잠금 해제됨 · 더 보려면 수업을 완료하세요`,
    nb_review:'📍 복습 대기열', nb_drill:'복습하기 →',
    nb_empty:'아직 아무것도 없습니다 — 플래시카드를 "연습 필요"로 표시하면 여기 나타납니다.',
    nb_unlock:'🔒 이 수업을 완료하여 잠금 해제', nb_got_it:'✓ 알겠어요',
    trans_title:'번역기', trans_loading:'번역 중…', trans_btn:'번역 →',
    trans_masculine:'남성', trans_feminine:'여성',
    trans_hear:'🔊 듣기', trans_save:'+ 플래시카드에 저장',
    trans_saved_btn:'✓ 플래시카드에 저장됨',
    trans_tip:'팁: 단어만이 아닌 문구를 시도해보세요. "이것은 얼마예요?"가 더 효과적입니다. 저장된 단어는 플래시카드에 표시됩니다.',
    trans_saved_cards:'저장된 카드:', trans_recent:'최근',
    trans_error:'번역 실패:',
    toast_added_review:'📍 복습 대기열에 추가됨',
    toast_removed:'플래시카드에서 제거됨', toast_saved:'✓ 플래시카드에 저장됨',
    toast_day_incomplete:(n)=>`${n}일차가 미완료로 표시되었습니다.`,
    trans_subtitle_cross:(s,tg)=>`${s}에서 ${tg}로 번역. 번역, IPA 및 발음 가이드를 받으세요.`,
  },

  ru: {
    nav_lesson:'Урок сегодня', nav_flashcards:'Карточки', nav_quiz:'Тест',
    nav_all:'Все уроки', nav_conversations:'Разговоры',
    nav_translator:'Переводчик', nav_notebook:'Блокнот', nav_progress:'Прогресс',
    stat_day:'День', stat_streak:'Серия', stat_mastered:'Освоено', stat_progress:'Прогресс',
    lesson_vocabulary:'Словарь', lesson_key_phrases:'Ключевые фразы',
    lesson_grammar_tip:'Грамматика / Культурный совет', lesson_practice:'Практика',
    lesson_tip:'Совет', lesson_did_you_know:'Знали ли вы?',
    flash_need_review:'Нужно повторить', flash_saved_words:'Мои сохранённые слова',
    flash_shuffle:'⇄ Перемешать', flash_mode:'Режим', flash_ipa_on:'IPA спереди',
    flash_challenge:'Испытание', flash_need_btn:'К повторению', flash_skip:'Пропустить',
    flash_got_it:'Знаю! ✓', flash_tap_flip:'Нажмите, чтобы перевернуть',
    flash_say_it:'Скажите — затем переверните',
    flash_empty_saved:'Сохранённых слов пока нет. Используйте вкладку «Переводчик» и нажмите «+ Сохранить».',
    flash_empty_day1:'Пройдите День 1, чтобы начать использовать карточки!', flash_cards:'карточек',
    quiz_complete:'Тест завершён', quiz_unlock:'Пройдите День 1, чтобы разблокировать тест.',
    quiz_try_again:'Попробовать снова', quiz_next:'Следующий вопрос', quiz_score:'Результат',
    quiz_correct:'Правильно!', quiz_wrong:'Неверно', quiz_finished:'Тест завершён!',
    quiz_out_of:(n,t)=>`${n} из ${t}`, quiz_back:'Назад к урокам',
    conv_listen:'Слушать всё', conv_your_turn:'Ваша очередь', conv_their_turn:'Их очередь',
    conv_back:'К разговорам',
    trans_placeholder:'Введите слово или фразу на русском…',
    trans_translate:'Перевести', trans_ipa:'IPA', trans_save:'+ Сохранить',
    trans_saved:'Сохранено ✓', trans_clear:'Очистить',
    trans_error:'Ошибка перевода. Попробуйте снова.',
    prog_days:'дней', prog_streak:'серия', prog_mastered:'освоено',
    prog_reset:'Сбросить прогресс',
    prog_confirm_reset:'Вы уверены, что хотите сбросить весь прогресс? Это действие необратимо.',
    prog_reset_done:'Прогресс сброшен.',
    nb_placeholder:'Запишите слова, которые хотите запомнить…',
    nb_save:'Сохранить заметку', nb_saved:'Заметка сохранена!',
    nb_clear:'Очистить', nb_empty:'Заметок пока нет.',
    toast_removed:'Удалено из карточек', toast_saved:'✓ Сохранено в карточки',
    toast_day_complete:(n)=>`День ${n} отмечен как завершённый!`,
    toast_day_incomplete:(n)=>`День ${n} отмечен как незавершённый.`,
    trans_subtitle_cross:(s,tg)=>`${s} → ${tg}. Получите перевод, IPA и руководство по произношению.`,
  },
  zh: {
    nav_lesson:'今日课程', nav_flashcards:'闪卡', nav_quiz:'测验',
    nav_all:'所有课程', nav_conversations:'对话',
    nav_translator:'翻译器', nav_notebook:'笔记本', nav_progress:'进度',
    stat_day:'天', stat_streak:'连击', stat_mastered:'已掌握', stat_progress:'进度',
    lesson_vocabulary:'词汇', lesson_key_phrases:'关键短语',
    lesson_grammar_tip:'语法 / 文化提示', lesson_practice:'练习',
    lesson_tip:'提示', lesson_did_you_know:'您知道吗？',
    flash_need_review:'需要复习', flash_saved_words:'我的保存单词',
    flash_shuffle:'⇄ 打乱', flash_mode:'模式', flash_ipa_on:'IPA在前',
    flash_challenge:'挑战', flash_need_btn:'需要复习', flash_skip:'跳过',
    flash_got_it:'我会了！✓', flash_tap_flip:'点击翻转',
    flash_say_it:'说出来——然后翻转',
    flash_empty_saved:'还没有保存的单词。使用「翻译器」标签并点击「+ 保存」创建自定义卡组。',
    flash_empty_day1:'完成第1天即可开始使用闪卡！', flash_cards:'张卡',
    quiz_complete:'测验完成', quiz_unlock:'完成第1天以解锁测验。',
    quiz_try_again:'再试一次', quiz_next:'下一题', quiz_score:'分数',
    quiz_correct:'正确！', quiz_wrong:'错误', quiz_finished:'测验完成！',
    quiz_out_of:(n,t)=>`${n} / ${t}`, quiz_back:'返回课程',
    conv_listen:'全部收听', conv_your_turn:'你的回合', conv_their_turn:'对方回合',
    conv_back:'返回对话',
    trans_placeholder:'用中文输入单词或短语…',
    trans_translate:'翻译', trans_ipa:'IPA', trans_save:'+ 保存',
    trans_saved:'已保存 ✓', trans_clear:'清除',
    trans_error:'翻译出错，请重试。',
    prog_days:'天', prog_streak:'连击', prog_mastered:'已掌握',
    prog_reset:'重置进度',
    prog_confirm_reset:'您确定要重置所有进度吗？此操作不可撤销。',
    prog_reset_done:'进度已重置。',
    nb_placeholder:'记录您想记住的单词…',
    nb_save:'保存笔记', nb_saved:'笔记已保存！',
    nb_clear:'清除', nb_empty:'还没有笔记。',
    toast_removed:'已从闪卡中移除', toast_saved:'✓ 已保存到闪卡',
    toast_day_complete:(n)=>`第${n}天已标记为完成！`,
    toast_day_incomplete:(n)=>`第${n}天已标记为未完成。`,
    trans_subtitle_cross:(s,tg)=>`${s}翻译成${tg}。获取翻译、IPA和发音指南。`,
  },
  ar: {
    nav_lesson:'درس اليوم', nav_flashcards:'البطاقات', nav_quiz:'اختبار',
    nav_all:'جميع الدروس', nav_conversations:'محادثات',
    nav_translator:'مترجم', nav_notebook:'دفتر الملاحظات', nav_progress:'التقدم',
    stat_day:'اليوم', stat_streak:'السلسلة', stat_mastered:'ملم', stat_progress:'التقدم',
    lesson_vocabulary:'المفردات', lesson_key_phrases:'العبارات الرئيسية',
    lesson_grammar_tip:'قواعد / نصيحة ثقافية', lesson_practice:'تمرين',
    lesson_tip:'نصيحة', lesson_did_you_know:'هل تعلم؟',
    flash_need_review:'يحتاج مراجعة', flash_saved_words:'كلماتي المحفوظة',
    flash_shuffle:'⇄ خلط', flash_mode:'الوضع', flash_ipa_on:'IPA في المقدمة',
    flash_challenge:'تحدٍّ', flash_need_btn:'مراجعة', flash_skip:'تخطي',
    flash_got_it:'أعرفها! ✓', flash_tap_flip:'انقر للقلب',
    flash_say_it:'قلها — ثم اقلب',
    flash_empty_saved:'لا توجد كلمات محفوظة بعد. استخدم تبويب المترجم واضغط «+ حفظ» لإنشاء مجموعتك.',
    flash_empty_day1:'أكمل اليوم الأول لبدء استخدام البطاقات!', flash_cards:'بطاقات',
    quiz_complete:'اكتمل الاختبار', quiz_unlock:'أكمل اليوم الأول لفتح الاختبار.',
    quiz_try_again:'حاول مجدداً', quiz_next:'السؤال التالي', quiz_score:'النتيجة',
    quiz_correct:'صحيح!', quiz_wrong:'خطأ', quiz_finished:'انتهى الاختبار!',
    quiz_out_of:(n,t)=>`${n} من ${t}`, quiz_back:'العودة للدروس',
    conv_listen:'الاستماع للكل', conv_your_turn:'دورك', conv_their_turn:'دورهم',
    conv_back:'العودة للمحادثات',
    trans_placeholder:'أدخل كلمة أو عبارة بالعربية…',
    trans_translate:'ترجم', trans_ipa:'IPA', trans_save:'+ حفظ',
    trans_saved:'محفوظ ✓', trans_clear:'مسح',
    trans_error:'خطأ في الترجمة. حاول مجدداً.',
    prog_days:'أيام', prog_streak:'سلسلة', prog_mastered:'ملم',
    prog_reset:'إعادة تعيين التقدم',
    prog_confirm_reset:'هل أنت متأكد أنك تريد إعادة تعيين كل تقدمك؟ لا يمكن التراجع عن هذا.',
    prog_reset_done:'تم إعادة تعيين التقدم.',
    nb_placeholder:'سجّل الكلمات التي تريد تذكرها…',
    nb_save:'حفظ الملاحظة', nb_saved:'تم حفظ الملاحظة!',
    nb_clear:'مسح', nb_empty:'لا توجد ملاحظات بعد.',
    toast_removed:'تمت الإزالة من البطاقات', toast_saved:'✓ محفوظ في البطاقات',
    toast_day_complete:(n)=>`تم تحديد اليوم ${n} مكتملاً!`,
    toast_day_incomplete:(n)=>`تم تحديد اليوم ${n} غير مكتمل.`,
    trans_subtitle_cross:(s,tg)=>`ترجمة ${s} إلى ${tg}. احصل على الترجمة و IPA ودليل النطق.`,
  },
  hi: {
    nav_lesson:'आज का पाठ', nav_flashcards:'फ्लैशकार्ड', nav_quiz:'प्रश्नोत्तरी',
    nav_all:'सभी पाठ', nav_conversations:'बातचीत',
    nav_translator:'अनुवादक', nav_notebook:'नोटबुक', nav_progress:'प्रगति',
    stat_day:'दिन', stat_streak:'क्रम', stat_mastered:'सीखा', stat_progress:'प्रगति',
    lesson_vocabulary:'शब्द भंडार', lesson_key_phrases:'मुख्य वाक्यांश',
    lesson_grammar_tip:'व्याकरण / सांस्कृतिक सुझाव', lesson_practice:'अभ्यास',
    lesson_tip:'सुझाव', lesson_did_you_know:'क्या आप जानते हैं?',
    flash_need_review:'समीक्षा चाहिए', flash_saved_words:'मेरे सहेजे गए शब्द',
    flash_shuffle:'⇄ फेरबदल', flash_mode:'मोड', flash_ipa_on:'IPA आगे',
    flash_challenge:'चुनौती', flash_need_btn:'समीक्षा करें', flash_skip:'छोड़ें',
    flash_got_it:'जानता हूँ! ✓', flash_tap_flip:'पलटने के लिए टैप करें',
    flash_say_it:'बोलें — फिर पलटें',
    flash_empty_saved:'अभी तक कोई शब्द नहीं बचाए। अनुवादक टैब उपयोग करें और «+ सहेजें» दबाएं।',
    flash_empty_day1:'फ्लैशकार्ड शुरू करने के लिए दिन 1 पूरा करें!', flash_cards:'कार्ड',
    quiz_complete:'प्रश्नोत्तरी पूर्ण', quiz_unlock:'प्रश्नोत्तरी अनलॉक करने के लिए दिन 1 पूरा करें।',
    quiz_try_again:'फिर कोशिश करें', quiz_next:'अगला प्रश्न', quiz_score:'स्कोर',
    quiz_correct:'सही!', quiz_wrong:'गलत', quiz_finished:'प्रश्नोत्तरी समाप्त!',
    quiz_out_of:(n,t)=>`${n} में से ${t}`, quiz_back:'पाठों पर वापस',
    conv_listen:'सब सुनें', conv_your_turn:'आपकी बारी', conv_their_turn:'उनकी बारी',
    conv_back:'बातचीत पर वापस',
    trans_placeholder:'हिंदी में शब्द या वाक्यांश दर्ज करें…',
    trans_translate:'अनुवाद करें', trans_ipa:'IPA', trans_save:'+ सहेजें',
    trans_saved:'सहेजा गया ✓', trans_clear:'साफ़ करें',
    trans_error:'अनुवाद में त्रुटि। फिर कोशिश करें।',
    prog_days:'दिन', prog_streak:'क्रम', prog_mastered:'सीखा',
    prog_reset:'प्रगति रीसेट करें',
    prog_confirm_reset:'क्या आप वाकई अपनी सारी प्रगति रीसेट करना चाहते हैं? यह पूर्ववत नहीं किया जा सकता।',
    prog_reset_done:'प्रगति रीसेट की गई।',
    nb_placeholder:'वे शब्द लिखें जो आप याद रखना चाहते हैं…',
    nb_save:'नोट सहेजें', nb_saved:'नोट सहेजा गया!',
    nb_clear:'साफ़ करें', nb_empty:'अभी तक कोई नोट नहीं।',
    toast_removed:'फ्लैशकार्ड से हटाया गया', toast_saved:'✓ फ्लैशकार्ड में सहेजा गया',
    toast_day_complete:(n)=>`दिन ${n} पूर्ण के रूप में चिह्नित!`,
    toast_day_incomplete:(n)=>`दिन ${n} अपूर्ण के रूप में चिह्नित।`,
    trans_subtitle_cross:(s,tg)=>`${s} से ${tg} अनुवाद। अनुवाद, IPA और उच्चारण गाइड प्राप्त करें।`,
  },
  tr: {
    nav_lesson:'Günün dersi', nav_flashcards:'Kartlar', nav_quiz:'Test',
    nav_all:'Tüm dersler', nav_conversations:'Konuşmalar',
    nav_translator:'Çevirmen', nav_notebook:'Defter', nav_progress:'İlerleme',
    stat_day:'Gün', stat_streak:'Seri', stat_mastered:'Öğrenildi', stat_progress:'İlerleme',
    lesson_vocabulary:'Kelimeler', lesson_key_phrases:'Temel ifadeler',
    lesson_grammar_tip:'Dilbilgisi / Kültürel ipucu', lesson_practice:'Pratik',
    lesson_tip:'İpucu', lesson_did_you_know:'Biliyor muydunuz?',
    flash_need_review:'Tekrar gerekiyor', flash_saved_words:'Kaydettiğim kelimeler',
    flash_shuffle:'⇄ Karıştır', flash_mode:'Mod', flash_ipa_on:'IPA öne',
    flash_challenge:'Meydan okuma', flash_need_btn:'Tekrara', flash_skip:'Atla',
    flash_got_it:'Biliyorum! ✓', flash_tap_flip:'Çevirmek için dokun',
    flash_say_it:'Söyle — sonra çevir',
    flash_empty_saved:'Henüz kayıtlı kelime yok. Çevirmen sekmesini kullanın ve «+ Kaydet» düğmesine basın.',
    flash_empty_day1:'Kartları kullanmaya başlamak için 1. günü tamamlayın!', flash_cards:'kart',
    quiz_complete:'Test tamamlandı', quiz_unlock:'Testi açmak için 1. günü tamamlayın.',
    quiz_try_again:'Tekrar dene', quiz_next:'Sonraki soru', quiz_score:'Puan',
    quiz_correct:'Doğru!', quiz_wrong:'Yanlış', quiz_finished:'Test bitti!',
    quiz_out_of:(n,t)=>`${t} sorudan ${n}`, quiz_back:'Derslere dön',
    conv_listen:'Hepsini dinle', conv_your_turn:'Senin sıran', conv_their_turn:'Onların sırası',
    conv_back:'Konuşmalara dön',
    trans_placeholder:'Türkçe bir kelime veya ifade girin…',
    trans_translate:'Çevir', trans_ipa:'IPA', trans_save:'+ Kaydet',
    trans_saved:'Kaydedildi ✓', trans_clear:'Temizle',
    trans_error:'Çeviri hatası. Tekrar deneyin.',
    prog_days:'gün', prog_streak:'seri', prog_mastered:'öğrenildi',
    prog_reset:'İlerlemeyi sıfırla',
    prog_confirm_reset:'Tüm ilerlemenizi sıfırlamak istediğinizden emin misiniz? Bu geri alınamaz.',
    prog_reset_done:'İlerleme sıfırlandı.',
    nb_placeholder:'Hatırlamak istediğiniz kelimeleri yazın…',
    nb_save:'Notu kaydet', nb_saved:'Not kaydedildi!',
    nb_clear:'Temizle', nb_empty:'Henüz not yok.',
    toast_removed:'Kartlardan kaldırıldı', toast_saved:'✓ Kartlara kaydedildi',
    toast_day_complete:(n)=>`${n}. gün tamamlandı olarak işaretlendi!`,
    toast_day_incomplete:(n)=>`${n}. gün tamamlanmadı olarak işaretlendi.`,
    trans_subtitle_cross:(s,tg)=>`${s} dilinden ${tg} diline çeviri. Çeviri, IPA ve telaffuz rehberi alın.`,
  },
  pl: {
    nav_lesson:'Lekcja dnia', nav_flashcards:'Karty', nav_quiz:'Quiz',
    nav_all:'Wszystkie lekcje', nav_conversations:'Rozmowy',
    nav_translator:'Tłumacz', nav_notebook:'Notatnik', nav_progress:'Postęp',
    stat_day:'Dzień', stat_streak:'Seria', stat_mastered:'Opanowano', stat_progress:'Postęp',
    lesson_vocabulary:'Słownictwo', lesson_key_phrases:'Kluczowe zwroty',
    lesson_grammar_tip:'Gramatyka / Wskazówka kulturowa', lesson_practice:'Ćwiczenie',
    lesson_tip:'Wskazówka', lesson_did_you_know:'Czy wiesz, że?',
    flash_need_review:'Wymaga powtórki', flash_saved_words:'Moje zapisane słowa',
    flash_shuffle:'⇄ Przetasuj', flash_mode:'Tryb', flash_ipa_on:'IPA z przodu',
    flash_challenge:'Wyzwanie', flash_need_btn:'Powtórz', flash_skip:'Pomiń',
    flash_got_it:'Wiem! ✓', flash_tap_flip:'Stuknij, żeby odwrócić',
    flash_say_it:'Powiedz — potem odwróć',
    flash_empty_saved:'Brak zapisanych słów. Użyj zakładki Tłumacz i naciśnij «+ Zapisz».',
    flash_empty_day1:'Ukończ Dzień 1, żeby korzystać z kart!', flash_cards:'kart',
    quiz_complete:'Quiz ukończony', quiz_unlock:'Ukończ Dzień 1, żeby odblokować quiz.',
    quiz_try_again:'Spróbuj ponownie', quiz_next:'Następne pytanie', quiz_score:'Wynik',
    quiz_correct:'Poprawnie!', quiz_wrong:'Błąd', quiz_finished:'Quiz zakończony!',
    quiz_out_of:(n,t)=>`${n} z ${t}`, quiz_back:'Wróć do lekcji',
    conv_listen:'Posłuchaj wszystkich', conv_your_turn:'Twoja kolej', conv_their_turn:'Ich kolej',
    conv_back:'Wróć do rozmów',
    trans_placeholder:'Wpisz słowo lub zwrot po polsku…',
    trans_translate:'Przetłumacz', trans_ipa:'IPA', trans_save:'+ Zapisz',
    trans_saved:'Zapisano ✓', trans_clear:'Wyczyść',
    trans_error:'Błąd tłumaczenia. Spróbuj ponownie.',
    prog_days:'dni', prog_streak:'seria', prog_mastered:'opanowano',
    prog_reset:'Zresetuj postęp',
    prog_confirm_reset:'Czy na pewno chcesz zresetować cały postęp? Tej operacji nie można cofnąć.',
    prog_reset_done:'Postęp zresetowany.',
    nb_placeholder:'Zapisz słowa, które chcesz zapamiętać…',
    nb_save:'Zapisz notatkę', nb_saved:'Notatka zapisana!',
    nb_clear:'Wyczyść', nb_empty:'Brak notatek.',
    toast_removed:'Usunięto z kart', toast_saved:'✓ Zapisano do kart',
    toast_day_complete:(n)=>`Dzień ${n} oznaczony jako ukończony!`,
    toast_day_incomplete:(n)=>`Dzień ${n} oznaczony jako nieukończony.`,
    trans_subtitle_cross:(s,tg)=>`Tłumaczenie z ${s} na ${tg}. Uzyskaj tłumaczenie, IPA i przewodnik wymowy.`,
  },
  sw: {
    nav_lesson:'Somo la leo', nav_flashcards:'Kadi za flash', nav_quiz:'Jaribio',
    nav_all:'Masomo yote', nav_conversations:'Mazungumzo',
    nav_translator:'Mtafsiri', nav_notebook:'Daftari', nav_progress:'Maendeleo',
    stat_day:'Siku', stat_streak:'Mfululizo', stat_mastered:'Imejifunzwa', stat_progress:'Maendeleo',
    lesson_vocabulary:'Msamiati', lesson_key_phrases:'Misemo muhimu',
    lesson_grammar_tip:'Sarufi / Kidokezo cha utamaduni', lesson_practice:'Mazoezi',
    lesson_tip:'Kidokezo', lesson_did_you_know:'Je, ulijua?',
    flash_need_review:'Inahitaji mapitio', flash_saved_words:'Maneno yangu yaliyohifadhiwa',
    flash_shuffle:'⇄ Changanya', flash_mode:'Hali', flash_ipa_on:'IPA mbele',
    flash_challenge:'Changamoto', flash_need_btn:'Pitia tena', flash_skip:'Ruka',
    flash_got_it:'Najua! ✓', flash_tap_flip:'Gusa kubadilisha',
    flash_say_it:'Sema — kisha geuza',
    flash_empty_saved:'Hakuna maneno yaliyohifadhiwa bado. Tumia kichupo cha Mtafsiri na bonyeza «+ Hifadhi».',
    flash_empty_day1:'Maliza Siku ya 1 kuanza kutumia kadi!', flash_cards:'kadi',
    quiz_complete:'Jaribio limekamilika', quiz_unlock:'Maliza Siku ya 1 kufungua jaribio.',
    quiz_try_again:'Jaribu tena', quiz_next:'Swali lijalo', quiz_score:'Alama',
    quiz_correct:'Sahihi!', quiz_wrong:'Kosa', quiz_finished:'Jaribio limeisha!',
    quiz_out_of:(n,t)=>`${n} kati ya ${t}`, quiz_back:'Rudi masomoni',
    conv_listen:'Sikiliza yote', conv_your_turn:'Zamu yako', conv_their_turn:'Zamu yao',
    conv_back:'Rudi mazungumzoni',
    trans_placeholder:'Ingiza neno au msemo kwa Kiswahili…',
    trans_translate:'Tafsiri', trans_ipa:'IPA', trans_save:'+ Hifadhi',
    trans_saved:'Imehifadhiwa ✓', trans_clear:'Futa',
    trans_error:'Hitilafu ya kutafsiri. Jaribu tena.',
    prog_days:'siku', prog_streak:'mfululizo', prog_mastered:'imejifunzwa',
    prog_reset:'Weka upya maendeleo',
    prog_confirm_reset:'Je, una uhakika unataka kuweka upya maendeleo yako yote? Hii haiwezi kutengwa.',
    prog_reset_done:'Maendeleo yamewekwa upya.',
    nb_placeholder:'Andika maneno unayotaka kukumbuka…',
    nb_save:'Hifadhi kumbukumbu', nb_saved:'Kumbukumbu imehifadhiwa!',
    nb_clear:'Futa', nb_empty:'Hakuna maelezo bado.',
    toast_removed:'Imeondolewa kwenye kadi', toast_saved:'✓ Imehifadhiwa kwenye kadi',
    toast_day_complete:(n)=>`Siku ${n} imewekwa alama ya kukamilika!`,
    toast_day_incomplete:(n)=>`Siku ${n} imewekwa alama ya kutokukamilika.`,
    trans_subtitle_cross:(s,tg)=>`Tafsiri ${s} hadi ${tg}. Pata tafsiri, IPA na mwongozo wa matamshi.`,
  },
  id: {
    nav_lesson:'Pelajaran hari ini', nav_flashcards:'Kartu flash', nav_quiz:'Kuis',
    nav_all:'Semua pelajaran', nav_conversations:'Percakapan',
    nav_translator:'Penerjemah', nav_notebook:'Buku catatan', nav_progress:'Kemajuan',
    stat_day:'Hari', stat_streak:'Rangkaian', stat_mastered:'Dikuasai', stat_progress:'Kemajuan',
    lesson_vocabulary:'Kosakata', lesson_key_phrases:'Frasa kunci',
    lesson_grammar_tip:'Tata bahasa / Tips budaya', lesson_practice:'Latihan',
    lesson_tip:'Tips', lesson_did_you_know:'Tahukah Anda?',
    flash_need_review:'Perlu ulasan', flash_saved_words:'Kata-kata tersimpan saya',
    flash_shuffle:'⇄ Acak', flash_mode:'Mode', flash_ipa_on:'IPA di depan',
    flash_challenge:'Tantangan', flash_need_btn:'Ulas lagi', flash_skip:'Lewati',
    flash_got_it:'Tahu! ✓', flash_tap_flip:'Ketuk untuk balik',
    flash_say_it:'Ucapkan — lalu balik',
    flash_empty_saved:'Belum ada kata tersimpan. Gunakan tab Penerjemah dan tekan «+ Simpan».',
    flash_empty_day1:'Selesaikan Hari 1 untuk mulai menggunakan kartu!', flash_cards:'kartu',
    quiz_complete:'Kuis selesai', quiz_unlock:'Selesaikan Hari 1 untuk membuka kuis.',
    quiz_try_again:'Coba lagi', quiz_next:'Pertanyaan berikutnya', quiz_score:'Skor',
    quiz_correct:'Benar!', quiz_wrong:'Salah', quiz_finished:'Kuis selesai!',
    quiz_out_of:(n,t)=>`${n} dari ${t}`, quiz_back:'Kembali ke pelajaran',
    conv_listen:'Dengarkan semua', conv_your_turn:'Giliran Anda', conv_their_turn:'Giliran mereka',
    conv_back:'Kembali ke percakapan',
    trans_placeholder:'Masukkan kata atau frasa dalam bahasa Indonesia…',
    trans_translate:'Terjemahkan', trans_ipa:'IPA', trans_save:'+ Simpan',
    trans_saved:'Tersimpan ✓', trans_clear:'Hapus',
    trans_error:'Kesalahan terjemahan. Coba lagi.',
    prog_days:'hari', prog_streak:'rangkaian', prog_mastered:'dikuasai',
    prog_reset:'Reset kemajuan',
    prog_confirm_reset:'Apakah Anda yakin ingin mereset semua kemajuan Anda? Ini tidak dapat dibatalkan.',
    prog_reset_done:'Kemajuan telah direset.',
    nb_placeholder:'Tulis kata-kata yang ingin Anda ingat…',
    nb_save:'Simpan catatan', nb_saved:'Catatan tersimpan!',
    nb_clear:'Hapus', nb_empty:'Belum ada catatan.',
    toast_removed:'Dihapus dari kartu', toast_saved:'✓ Disimpan ke kartu',
    toast_day_complete:(n)=>`Hari ${n} ditandai selesai!`,
    toast_day_incomplete:(n)=>`Hari ${n} ditandai belum selesai.`,
    trans_subtitle_cross:(s,tg)=>`Terjemahkan ${s} ke ${tg}. Dapatkan terjemahan, IPA dan panduan pengucapan.`,
  },
  vi: {
    nav_lesson:'Bài học hôm nay', nav_flashcards:'Thẻ học', nav_quiz:'Câu hỏi',
    nav_all:'Tất cả bài học', nav_conversations:'Hội thoại',
    nav_translator:'Dịch thuật', nav_notebook:'Sổ tay', nav_progress:'Tiến độ',
    stat_day:'Ngày', stat_streak:'Chuỗi ngày', stat_mastered:'Đã học', stat_progress:'Tiến độ',
    lesson_vocabulary:'Từ vựng', lesson_key_phrases:'Cụm từ chính',
    lesson_grammar_tip:'Ngữ pháp / Mẹo văn hóa', lesson_practice:'Luyện tập',
    lesson_tip:'Mẹo', lesson_did_you_know:'Bạn có biết không?',
    flash_need_review:'Cần ôn tập', flash_saved_words:'Từ đã lưu của tôi',
    flash_shuffle:'⇄ Xáo trộn', flash_mode:'Chế độ', flash_ipa_on:'IPA ở trước',
    flash_challenge:'Thử thách', flash_need_btn:'Ôn tập', flash_skip:'Bỏ qua',
    flash_got_it:'Biết rồi! ✓', flash_tap_flip:'Chạm để lật',
    flash_say_it:'Nói — rồi lật',
    flash_empty_saved:'Chưa có từ nào được lưu. Dùng tab Dịch thuật và nhấn «+ Lưu».',
    flash_empty_day1:'Hoàn thành Ngày 1 để bắt đầu dùng thẻ học!', flash_cards:'thẻ',
    quiz_complete:'Hoàn thành câu hỏi', quiz_unlock:'Hoàn thành Ngày 1 để mở câu hỏi.',
    quiz_try_again:'Thử lại', quiz_next:'Câu hỏi tiếp theo', quiz_score:'Điểm',
    quiz_correct:'Đúng!', quiz_wrong:'Sai', quiz_finished:'Kết thúc câu hỏi!',
    quiz_out_of:(n,t)=>`${n} trong ${t}`, quiz_back:'Quay lại bài học',
    conv_listen:'Nghe tất cả', conv_your_turn:'Đến lượt bạn', conv_their_turn:'Đến lượt họ',
    conv_back:'Quay lại hội thoại',
    trans_placeholder:'Nhập từ hoặc cụm từ bằng tiếng Việt…',
    trans_translate:'Dịch', trans_ipa:'IPA', trans_save:'+ Lưu',
    trans_saved:'Đã lưu ✓', trans_clear:'Xóa',
    trans_error:'Lỗi dịch thuật. Thử lại.',
    prog_days:'ngày', prog_streak:'chuỗi ngày', prog_mastered:'đã học',
    prog_reset:'Đặt lại tiến độ',
    prog_confirm_reset:'Bạn có chắc muốn đặt lại toàn bộ tiến độ? Không thể hoàn tác.',
    prog_reset_done:'Tiến độ đã được đặt lại.',
    nb_placeholder:'Ghi các từ bạn muốn nhớ…',
    nb_save:'Lưu ghi chú', nb_saved:'Đã lưu ghi chú!',
    nb_clear:'Xóa', nb_empty:'Chưa có ghi chú.',
    toast_removed:'Đã xóa khỏi thẻ học', toast_saved:'✓ Đã lưu vào thẻ học',
    toast_day_complete:(n)=>`Ngày ${n} đã được đánh dấu hoàn thành!`,
    toast_day_incomplete:(n)=>`Ngày ${n} đã được đánh dấu chưa hoàn thành.`,
    trans_subtitle_cross:(s,tg)=>`Dịch ${s} sang ${tg}. Nhận bản dịch, IPA và hướng dẫn phát âm.`,
  },
  th: {
    nav_lesson:'บทเรียนวันนี้', nav_flashcards:'แฟลชการ์ด', nav_quiz:'แบบทดสอบ',
    nav_all:'ทุกบทเรียน', nav_conversations:'บทสนทนา',
    nav_translator:'ตัวแปลภาษา', nav_notebook:'สมุดบันทึก', nav_progress:'ความคืบหน้า',
    stat_day:'วัน', stat_streak:'ต่อเนื่อง', stat_mastered:'เชี่ยวชาญ', stat_progress:'ความคืบหน้า',
    lesson_vocabulary:'คำศัพท์', lesson_key_phrases:'วลีสำคัญ',
    lesson_grammar_tip:'ไวยากรณ์ / เคล็ดลับวัฒนธรรม', lesson_practice:'ฝึกฝน',
    lesson_tip:'เคล็ดลับ', lesson_did_you_know:'คุณรู้หรือไม่?',
    flash_need_review:'ต้องทบทวน', flash_saved_words:'คำที่บันทึกไว้',
    flash_shuffle:'⇄ สับ', flash_mode:'โหมด', flash_ipa_on:'IPA ด้านหน้า',
    flash_challenge:'ความท้าทาย', flash_need_btn:'ทบทวน', flash_skip:'ข้าม',
    flash_got_it:'รู้แล้ว! ✓', flash_tap_flip:'แตะเพื่อพลิก',
    flash_say_it:'พูด — แล้วพลิก',
    flash_empty_saved:'ยังไม่มีคำที่บันทึก ใช้แท็บตัวแปลและกด «+ บันทึก»',
    flash_empty_day1:'ทำวันที่ 1 ให้เสร็จเพื่อเริ่มใช้การ์ด!', flash_cards:'การ์ด',
    quiz_complete:'แบบทดสอบเสร็จแล้ว', quiz_unlock:'ทำวันที่ 1 ให้เสร็จเพื่อปลดล็อกแบบทดสอบ',
    quiz_try_again:'ลองอีกครั้ง', quiz_next:'คำถามถัดไป', quiz_score:'คะแนน',
    quiz_correct:'ถูกต้อง!', quiz_wrong:'ผิด', quiz_finished:'แบบทดสอบเสร็จสิ้น!',
    quiz_out_of:(n,t)=>`${n} จาก ${t}`, quiz_back:'กลับไปบทเรียน',
    conv_listen:'ฟังทั้งหมด', conv_your_turn:'ถึงคราวของคุณ', conv_their_turn:'ถึงคราวของพวกเขา',
    conv_back:'กลับไปบทสนทนา',
    trans_placeholder:'ป้อนคำหรือวลีเป็นภาษาไทย…',
    trans_translate:'แปล', trans_ipa:'IPA', trans_save:'+ บันทึก',
    trans_saved:'บันทึกแล้ว ✓', trans_clear:'ล้าง',
    trans_error:'เกิดข้อผิดพลาดในการแปล ลองอีกครั้ง',
    prog_days:'วัน', prog_streak:'ต่อเนื่อง', prog_mastered:'เชี่ยวชาญ',
    prog_reset:'รีเซ็ตความคืบหน้า',
    prog_confirm_reset:'แน่ใจหรือไม่ว่าต้องการรีเซ็ตความคืบหน้าทั้งหมด? ไม่สามารถย้อนกลับได้',
    prog_reset_done:'รีเซ็ตความคืบหน้าแล้ว',
    nb_placeholder:'เขียนคำที่ต้องการจดจำ…',
    nb_save:'บันทึกโน้ต', nb_saved:'บันทึกโน้ตแล้ว!',
    nb_clear:'ล้าง', nb_empty:'ยังไม่มีโน้ต',
    toast_removed:'ลบออกจากแฟลชการ์ดแล้ว', toast_saved:'✓ บันทึกในแฟลชการ์ดแล้ว',
    toast_day_complete:(n)=>`วันที่ ${n} ถูกทำเครื่องหมายว่าเสร็จสิ้น!`,
    toast_day_incomplete:(n)=>`วันที่ ${n} ถูกทำเครื่องหมายว่ายังไม่เสร็จ`,
    trans_subtitle_cross:(s,tg)=>`แปล${s}เป็น${tg} รับคำแปล IPA และคำแนะนำการออกเสียง`,
  },
};

// Translate a UI string key into the current source/instruction language.
// Falls back to English for any missing key or unsupported language.
function t(key, ...args) {
  const lang = currentSource();
  const strings = UI_STRINGS[lang] || UI_STRINGS.en;
  const val = strings[key] !== undefined ? strings[key] : UI_STRINGS.en[key];
  if (val === undefined) return key;
  return typeof val === 'function' ? val(...args) : val;
}

// Update nav button labels and header stat labels to current source language
function updateNavLabels() {
  const navMap = {
    lesson:'nav_lesson', flashcards:'nav_flashcards', quiz:'nav_quiz',
    all:'nav_all', conversations:'nav_conversations',
    translator:'nav_translator', notebook:'nav_notebook', progress:'nav_progress',
  };
  document.querySelectorAll('nav button[data-view]').forEach(btn => {
    const key = navMap[btn.dataset.view];
    if (!key) return;
    const badge = btn.querySelector('.nav-badge');
    btn.textContent = t(key);
    if (badge) btn.appendChild(badge);
  });
  const statMap = {
    'stat-label-day':'stat_day', 'stat-label-streak':'stat_streak',
    'stat-label-mastered':'stat_mastered', 'stat-label-progress':'stat_progress',
  };
  Object.entries(statMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });
}


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
  if (window[pairVar]) {
    // Use pair-specific conversations if they exist; otherwise fall back to base-language conversations
    let convos = window[convoVar];
    if (!convos) {
      // Use direct variable refs — const vars don't attach to window
      const ck2 = (PAIRS[pairKey] || PAIRS['en-fr']).courseKey;
      if (ck2 === 'es') convos = typeof CONVERSATIONS_ES !== 'undefined' ? CONVERSATIONS_ES : [];
      else if (ck2 === 'sq') convos = typeof CONVERSATIONS_SQ !== 'undefined' ? CONVERSATIONS_SQ : [];
      else if (ck2 === 'it') convos = typeof CONVERSATIONS_IT !== 'undefined' ? CONVERSATIONS_IT : [];
      else if (ck2 === 'pt') convos = typeof CONVERSATIONS_PT !== 'undefined' ? CONVERSATIONS_PT : [];
      else if (ck2 === 'el') convos = typeof CONVERSATIONS_EL !== 'undefined' ? CONVERSATIONS_EL : [];
      else if (ck2 === 'ja') convos = typeof CONVERSATIONS_JA !== 'undefined' ? CONVERSATIONS_JA : [];
      else if (ck2 === 'de') convos = typeof CONVERSATIONS_DE !== 'undefined' ? CONVERSATIONS_DE : [];
      else if (ck2 === 'ko') convos = typeof CONVERSATIONS_KO !== 'undefined' ? CONVERSATIONS_KO : [];
      else convos = typeof CONVERSATIONS_FR !== 'undefined' ? CONVERSATIONS_FR : [];
    }
    return { course: window[pairVar], convos: convos || [] };
  }

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
    graceMonth: null,
    learnedCards: []   // persistent learned bucket: array of native-word keys
  };
}
// Migrations
if (!Array.isArray(state.savedVocab)) state.savedVocab = [];
if (!Array.isArray(state.shownMilestones)) state.shownMilestones = [];
if (!Array.isArray(state.learnedCards)) state.learnedCards = [];
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
  flashState = { pool: [], learned: [], index: 0, flipped: false, scope: 'learned', ipaMode: 'show' };
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
  updateNavLabels();
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
  // Spread all fields so native-language keys (pt, es, etc.) are preserved for X→EN cards
  state.savedVocab.forEach(v => all.push({...v, day:'saved'}));
  return all;
}
function getLearnedVocab() {
  const all = [];
  COURSE.filter(d => state.completedDays.includes(d.day) || d.day === state.currentDay)
    .forEach(d => d.vocab.forEach(v => all.push({...v, day:d.day})));
  state.savedVocab.forEach(v => all.push({...v, day:'saved'}));
  return all;
}
function getSavedVocab() {
  return state.savedVocab.map(v => ({...v, day:'saved'}));
}
function isCardSaved(wordKey) {
  return state.savedVocab.some(v => (v.word || v.fr) === wordKey);
}
function saveTranslationCard(translation) {
  if (!translation || !translation.word) return false;
  const wordKey = translation.word;
  if (isCardSaved(wordKey)) return false;
  let card;
  if (isTargetEnglish()) {
    // X→EN: wordKey = English output, translation.input = native language input
    // getFrontWord needs native field (v[ck]), getBackWord needs v.en (English)
    const ck = currentPair().courseKey;
    card = {
      word: wordKey,           // English (used for dedup)
      fr: wordKey,             // legacy fallback
      en: wordKey,             // English for getBackWord
      [ck]: translation.input || '', // native language in the right courseKey field
      ipa: translation.ipa || '',
      phonetic: translation.phonetic || '',
      savedAt: Date.now(),
      source: 'translator'
    };
  } else {
    // EN→X: wordKey = target language output, translation.input = English input
    card = {
      word: wordKey,
      fr: wordKey,
      en: translation.input || '',
      ipa: translation.ipa || '',
      phonetic: translation.phonetic || '',
      savedAt: Date.now(),
      source: 'translator'
    };
  }
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
    const label    = role === 'prev' ? t('nav_yesterday') : role === 'next' ? t('nav_tomorrow') : t('nav_today');
    const status   = mastered ? `<div class="card-check card-mastered">${t('tag_mastered')}</div>`
                   : done     ? `<div class="card-check">${t('lesson_completed')}</div>`
                   : '';
    return `
      <div class="day-nav-card ${role === 'curr' ? 'today' : ''}" onclick="renderLessonView(${d.day})">
        <div class="card-label">${label}</div>
        <div class="card-day">${t('day_label')} ${d.day}</div>
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
    <h2>${t('day_label')} ${day.day}: ${isTargetEnglish() && day.titleNative ? day.titleNative : day.title}${day.titleNative ? `<span class="title-native"> — ${isTargetEnglish() ? day.title : day.titleNative}</span>` : ''}</h2>
    <p class="subtitle">${day.focus || ''}</p>

    <h3>${t('lesson_vocabulary')}</h3>
    <div class="vocab-grid">
      ${day.vocab.map(v => `
        <div class="vocab-card" onclick="this.classList.toggle('flipped')" title="Click to flip">
          <div class="vocab-flip">
            <div class="vocab-face vocab-front">
              <div class="fr">${getFrontWord(v)}</div>
              ${isTargetEnglish() ? '' : `<div class="ipa">${v.phonetic || v.ipa || ''}</div>`}
              <button class="speak-btn speak-btn-sm" onclick="event.stopPropagation();speakWord('${getSpeakWord(v).replace(/'/g,"\\'")}','${currentTarget()}')">🔊</button>
              <div class="vocab-flip-hint">${t('lesson_tap_reveal')}</div>
            </div>
            <div class="vocab-face vocab-back">
              <div class="en">${getBackWord(v)}</div>
              ${isTargetEnglish() ? `<div class="ipa">${v.phonetic || v.ipa || ''}</div>` : ''}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <h3>${t('lesson_key_phrases')}</h3>
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

    <h3>${t('lesson_grammar_tip')}</h3>
    <div class="grammar-box">
      <p>${day.grammar}</p>
    </div>

    ${day.practice && day.practice.length ? `
    <h3>${t('lesson_practice')}</h3>
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
        ${isCompleted ? t('lesson_completed') : t('lesson_mark_complete')}
      </button>
      ${isCompleted ? `<button class="uncomplete-btn" onclick="uncompleteDay(${day.day})">${t('lesson_undo')}</button>` : ''}
    </div>
  `;
  content.innerHTML = html;
  updateLessonBanner(dayNum);

  // ── Swipe to navigate days on mobile ────────────────────────────────────
  const trio = content.querySelector('.day-nav-trio');
  if (trio) {
    let touchStartX = 0;
    let touchStartY = 0;
    trio.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    trio.addEventListener('touchend', function(e) {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return; // too short or mostly vertical
      if (dx < 0 && nextDay) renderLessonView(nextDay.day);  // swipe left → next day
      if (dx > 0 && prevDay) renderLessonView(prevDay.day);  // swipe right → prev day
    }, { passive: true });
  }
}

function completeDay(dayNum) {
  if (!state.completedDays.includes(dayNum)) {
    state.completedDays.push(dayNum);
    // Always advance currentDay to at least dayNum+1, regardless of how you got here
    if (dayNum >= state.currentDay && state.currentDay < 30) {
      state.currentDay = Math.min(30, dayNum + 1);
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
    // Always navigate to the day after the one just completed
    const nextDayNum = Math.min(30, dayNum + 1);
    renderLessonView(nextDayNum);
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    return;
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
  showToast(t('toast_day_incomplete', dayNum));
  if (stayInAll) renderAllView();
  else renderLessonView(dayNum);
}

// FLASHCARDS
let flashState = { pool: [], learned: [], index: 0, flipped: false, scope: 'learned', ipaMode: 'show' };

function renderFlashcardView() {
  rebuildFlashPool();
  renderFlashcardCard();
}
function renderFlashcardCard() {
  if (flashState.pool.length === 0) {
    // All-done: either session complete or genuinely empty deck
    if (state.learnedCards.length > 0) {
      const chips = getLearnedCardObjects().slice(-20).map(c =>
        `<span class="learned-chip">${getFrontWord(c)}<button class="chip-unlearn" onclick="unlearnCard(${JSON.stringify(getNative(c)).replace(/"/g,'&quot;')})" title="Move back to unlearned">↩</button></span>`
      ).join('');
      content.innerHTML = `
        <div class="flash-all-done">
          <div class="all-done-icon">🎉</div>
          <h3>Deck complete!</h3>
          <p>You have <strong>${state.learnedCards.length}</strong> card${state.learnedCards.length===1?'':'s'} in your learned bucket.</p>
          <div class="flash-learned-chips" style="margin:16px 0;">${chips}</div>
          <button class="complete-btn" onclick="resetLearnedBucket()" style="margin-top:8px;">↺ Reset &amp; practice again</button>
        </div>
      `;
      return;
    }
    const emptyMsg = flashState.scope === 'saved'
      ? t('flash_empty_saved')
      : t('flash_empty_day1');
    content.innerHTML = `
      <h2>${t('nav_flashcards')}</h2>
      <p class="subtitle">${t('flash_subtitle')}</p>
      <div class="filter-bar">
        <select onchange="flashState.scope=this.value;flashState.index=0;flashState.flipped=false;renderFlashcardView()">
          <option value="learned" ${flashState.scope==='learned'?'selected':''}>${t('flash_days_seen')}</option>
          <option value="all" ${flashState.scope==='all'?'selected':''}>${t('flash_all_days')}</option>
          <option value="weak" ${flashState.scope==='weak'?'selected':''}>${t('flash_need_work')}</option>
          <option value="saved" ${flashState.scope==='saved'?'selected':''}>${t('flash_saved_words')}${state.savedVocab.length?` (${state.savedVocab.length})`:''}</option>
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
  // IPA lives with the target word (always front side per spec).
  const frontWord = getFrontWord(card);
  const backWord  = getBackWord(card);
  const frontIpa  = ipa;
  const backIpa   = '';
  // Front/back content depends on IPA mode
  const frontContent = flashState.flipped
    ? `<div class="word">${backWord}</div>${backIpa ? `<div class="ipa-large">${backIpa}</div>` : ''}<div class="hint">${dayLabel}</div>`
    : (showIpa
        ? `<div class="word">${frontWord}</div>${frontIpa ? `<div class="ipa-large">${frontIpa}</div>` : ''}${speakBtn}<div class="hint">${t('flash_tap_flip')}</div>`
        : `<div class="word">${frontWord}</div>${speakBtn}<div class="hint pronunciation-challenge">${t('flash_say_it')}</div>`);
  content.innerHTML = `
    <div class="flash-layout">
      <div class="flash-sidebar">
        <h2>${t('nav_flashcards')}</h2>
        <p class="subtitle" style="margin-bottom:20px;">${flashState.pool.length} ${t('flash_cards')} left · ${flashState.index+1}/${flashState.pool.length}</p>
        <div class="flash-sidebar-label">${t('flash_deck')}</div>
        <select class="flash-select" onchange="flashState.scope=this.value;flashState.index=0;flashState.flipped=false;renderFlashcardView()">
          <option value="learned" ${flashState.scope==='learned'?'selected':''}>${t('flash_days_seen')}</option>
          <option value="all" ${flashState.scope==='all'?'selected':''}>${t('flash_all_days')}</option>
          <option value="weak" ${flashState.scope==='weak'?'selected':''}>${t('flash_need_work')}</option>
          <option value="saved" ${flashState.scope==='saved'?'selected':''}>${t('flash_saved_words')}${state.savedVocab.length?` (${state.savedVocab.length})`:''}</option>
        </select>
        <button class="flash-sidebar-btn" onclick="rebuildFlashPool();shufflePool();renderFlashcardCard()">${t('flash_shuffle')}</button>
        <div class="flash-sidebar-label" style="margin-top:18px;">${t('flash_mode')}</div>
        <button class="ipa-mode-btn ${showIpa?'active':''}" style="width:100%;margin-bottom:6px;" onclick="flashState.ipaMode='show';flashState.flipped=false;renderFlashcardCard()">${t('flash_ipa_on')}</button>
        <button class="ipa-mode-btn ${!showIpa?'active':''}" style="width:100%;" onclick="flashState.ipaMode='hide';flashState.flipped=false;renderFlashcardCard()">${t('flash_challenge')}</button>
        <div class="flash-sidebar-label" style="margin-top:22px;">Unlearned</div>
        <div class="flash-bucket-count">${flashState.pool.length} card${flashState.pool.length===1?'':'s'}</div>
        <div class="flash-sidebar-label" style="margin-top:14px;">Learned</div>
        <div class="flash-bucket-count">${state.learnedCards.length} card${state.learnedCards.length===1?'':'s'}</div>
        ${state.learnedCards.length > 0 ? `<button class="flash-sidebar-btn" style="margin-top:8px;font-size:11px;opacity:0.7;" onclick="resetLearnedBucket()">↺ Reset learned</button>` : ''}
      </div>
      <div class="flash-main">
        <div class="flashcard ${flashState.flipped?'flipped':''}" onclick="flashState.flipped=!flashState.flipped;renderFlashcardCard()">
          ${frontContent}
        </div>
        <div class="flashcard-controls">
          <button class="btn-need" onclick="markCard('need')">${t('flash_need_btn')}</button>
          <button class="btn-skip" onclick="nextCard()">${t('flash_skip')}</button>
          <button class="btn-got" onclick="markCard('got')">${t('flash_got_it')}</button>
        </div>
        ${state.learnedCards.length > 0 ? `
        <div class="flash-learned-section">
          <div class="flash-learned-header">✓ Learned (${state.learnedCards.length})</div>
          <div class="flash-learned-chips">
            ${getLearnedCardObjects().slice(-20).map(c => `<span class="learned-chip">${getFrontWord(c)}<button class="chip-unlearn" onclick="unlearnCard(${JSON.stringify(getNative(c)).replace(/"/g,'&quot;')})" title="Move back to unlearned">↩</button></span>`).join('')}
            ${state.learnedCards.length > 20 ? `<span class="learned-chip" style="opacity:0.5;">+${state.learnedCards.length-20} more</span>` : ''}
          </div>
        </div>` : ''}
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
  // Exclude cards already in the persistent learned bucket
  const learnedSet = new Set(state.learnedCards);
  pool = pool.filter(v => !learnedSet.has(getNative(v)));
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
    const key = getNative(card);
    state.masteredVocab[key] = (state.masteredVocab[key]||0)+1;
    state.needWorkVocab[key] = 0;
    // Add to persistent learned bucket if not already there
    if (!state.learnedCards.includes(key)) {
      state.learnedCards.push(key);
    }
    // Remove from active pool
    flashState.pool.splice(flashState.index, 1);
    flashState.flipped = false;
    if (flashState.pool.length > 0 && flashState.index >= flashState.pool.length) {
      flashState.index = 0;
    }
    saveState();
    refreshStats();
    renderFlashcardCard();
  } else {
    state.needWorkVocab[getNative(card)] = (state.needWorkVocab[getNative(card)]||0)+1;
    showToast(t('toast_added_review'));
    saveState();
    refreshStats();
    nextCard();
  }
}
function nextCard() {
  flashState.flipped = false;
  if (flashState.pool.length === 0) { renderFlashcardCard(); return; }
  flashState.index = (flashState.index + 1) % flashState.pool.length;
  renderFlashcardCard();
}
function resetFlashSession() {
  rebuildFlashPool();
  shufflePool();
  renderFlashcardCard();
}
// Returns card objects for all keys in the persistent learned bucket
function getLearnedCardObjects() {
  const learnedSet = new Set(state.learnedCards);
  return getAllVocab().filter(v => learnedSet.has(getNative(v)));
}
// Moves a single card back from learned → unlearned
function unlearnCard(key) {
  state.learnedCards = state.learnedCards.filter(k => k !== key);
  saveState();
  rebuildFlashPool();
  renderFlashcardCard();
}
// Clears the persistent learned bucket and rebuilds the pool
function resetLearnedBucket() {
  state.learnedCards = [];
  saveState();
  rebuildFlashPool();
  shufflePool();
  renderFlashcardCard();
}

// QUIZ
let quizState = { questions:[], current:0, score:0, answered:false };
let _quizKeyHandler = null;

function setupQuizEnterKey() {
  if (_quizKeyHandler) document.removeEventListener('keydown', _quizKeyHandler);
  _quizKeyHandler = function(e) {
    if (e.key !== 'Enter') return;
    // Let the type-it input handle its own Enter (it submits or advances inline)
    if (document.activeElement && document.activeElement.id === 'type-it-inp') return;
    const q = quizState.questions[quizState.current];
    const canAdvance = quizState.answered || (q && q.done);
    if (canAdvance) {
      quizState.current++;
      quizState.answered = false;
      renderQuizView();
    }
  };
  document.addEventListener('keydown', _quizKeyHandler);
}

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
          <h2>${t('nav_quiz')}</h2>
          <p class="subtitle">${t('quiz_unlock')}</p>
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
          <h2>${t('quiz_complete')}</h2>
          <div class="quiz-stars">${starHTML}</div>
          <p class="star-verdict">"${verdict}"</p>
          <p class="subtitle">${t('quiz_correct_of', quizState.score, quizState.questions.length)}</p>
          <button class="complete-btn" onclick="quizState={questions:[],current:0,score:0,answered:false};renderQuizView()">${t('quiz_try_again')}</button>
        </div>
        ${proctorCol}
      </div>
    `;
    return;
  }

  const progressLabel = `${t('quiz_question')} ${quizState.current + 1} ${t('quiz_of')} ${quizState.questions.length} · ${t('quiz_score')}: ${quizState.score}`;
  if (q.type === 'match-pairs') {
    renderMatchPairsQ(q, proctorCol, progressLabel);
  } else if (q.type === 'type-it') {
    renderTypeItQ(q, proctorCol, progressLabel);
  } else {
    renderMcQ(q, proctorCol, progressLabel);
  }
  setupQuizEnterKey();
}

function renderMcQ(q, proctorCol, progressLabel) {
  content.innerHTML = `
    <h2>${t('nav_quiz')}</h2>
    <p class="subtitle">${progressLabel}</p>
    <div class="quiz-qa-row">
      <div class="quiz-q">
        <div class="quiz-type-pill">${t('quiz_choose')}</div>
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
    <button class="complete-btn" onclick="quizState.current++;quizState.answered=false;renderQuizView()" style="${quizState.answered ? '' : 'visibility:hidden;pointer-events:none;'}">${t('quiz_next')}</button>
  `;
}

function renderTypeItQ(q, proctorCol, progressLabel) {
  content.innerHTML = `
    <h2>${t('nav_quiz')}</h2>
    <p class="subtitle">${progressLabel}</p>
    <div class="quiz-qa-row">
      <div class="quiz-q">
        <div class="quiz-type-pill">${t('quiz_type_it')}</div>
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
              onkeydown="if(event.key==='Enter'){if(quizState.questions[quizState.current].answered){quizState.current++;quizState.answered=false;renderQuizView();}else{answerTypeIt();}}"
              oninput="quizState.questions[quizState.current].typed=this.value">
            <button class="type-it-submit" onclick="answerTypeIt()">${t('quiz_check')}</button>
          </div>
        `}
      </div>
      ${proctorCol}
    </div>
    <button class="complete-btn" onclick="quizState.current++;quizState.answered=false;renderQuizView()" style="${q.answered ? '' : 'visibility:hidden;pointer-events:none;'}">${t('quiz_next')}</button>
  `;
  if (!q.answered) setTimeout(() => document.getElementById('type-it-inp')?.focus(), 50);
}

function answerTypeIt() {
  const q = quizState.questions[quizState.current];
  if (q.answered) return;
  const typed = (q.typed || '').trim();
  if (!typed) return;
  const norm = s => {
    let r = s.toLowerCase().trim()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[.,!?;:'"()¡¿\-]/g, '').replace(/\s+/g, ' ');
    // Normalize common contractions so "I'm" and "I am" both grade the same
    r = r.replace(/\bi'm\b/g,'i am').replace(/\byou're\b/g,'you are')
         .replace(/\bhe's\b/g,'he is').replace(/\bshe's\b/g,'she is')
         .replace(/\bit's\b/g,'it is').replace(/\bwe're\b/g,'we are')
         .replace(/\bthey're\b/g,'they are').replace(/\bdon't\b/g,'do not')
         .replace(/\bdoesn't\b/g,'does not').replace(/\bcan't\b/g,'cannot')
         .replace(/\bwon't\b/g,'will not').replace(/\bisn't\b/g,'is not')
         .replace(/\baren't\b/g,'are not');
    return r.trim();
  };
  // Split "hello / good morning" style answers — any alternative counts as correct
  const alternatives = q.correct.split(/\s*[\/|]\s*/).map(norm).filter(Boolean);
  const typedNorm = norm(typed);
  q.isCorrect = alternatives.some(alt => alt === typedNorm);
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
    <h2>${t('nav_quiz')}</h2>
    <p class="subtitle">${progressLabel}</p>
    <div class="quiz-qa-row">
      <div class="quiz-q" style="flex:2;min-width:0;">
        <div class="quiz-type-pill">${t('quiz_match')}</div>
        <div class="match-grid">
          <div class="match-col">${leftHTML}</div>
          <div class="match-col">${rightHTML}</div>
        </div>
        ${allMatched
          ? `<div class="quiz-feedback correct" style="margin-top:14px;">
               <span class="feedback-mark">✓</span>
               <span class="feedback-quip">"${CORRECT_QUIPS[Math.floor(Math.random() * CORRECT_QUIPS.length)]}"</span>
             </div>`
          : `<p class="match-hint">${q.selectedLeft !== null ? t('quiz_match_pick', LANGS[currentSource()].label) : t('quiz_match_start')}</p>`
        }
      </div>
      ${proctorCol}
    </div>
    <button class="complete-btn" onclick="quizState.current++;quizState.answered=false;renderQuizView()" style="${allMatched ? '' : 'visibility:hidden;pointer-events:none;'}">${t('quiz_next')}</button>
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
  const pool = [...learned]
    .filter(item => getFrontWord(item) && getBackWord(item)) // skip cards with missing fields
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(10, learned.length));
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
          ? t('quiz_what_does', getFrontWord(item), targetLabel)
          : t('quiz_how_say', getBackWord(item), targetLabel),
        options: opts,
        correct: correctText
      });
    } else {
      quizState.questions.push({
        type: 'type-it',
        prompt: t('quiz_what_does', getFrontWord(item), targetLabel),
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
      <h2 style="margin-bottom:0;">${t('all_title')}</h2>
      <button class="reset-all-btn" onclick="if(confirm(t('all_reset_confirm', _label))){localStorage.removeItem(getStorageKey());location.reload();}">${t('all_reset_btn')}</button>
    </div>
    <p class="subtitle" style="margin-bottom:20px;">${t('all_subtitle')}</p>
    <div class="day-grid">
      ${COURSE.map(d => {
        const completed = state.completedDays.includes(d.day);
        const mastered  = isDayMastered(d.day);
        let cls = 'day-tile';
        if (completed) cls += ' completed';
        if (mastered)  cls += ' mastered';
        if (d.day === state.currentDay) cls += ' current';
        return `<div class="${cls}" onclick="setView('lesson');renderLessonView(${d.day})">
          <div class="num">${t('day_label')} ${d.day}</div>
          <div class="title">${d.title}</div>
          ${d.titleNative ? `<div class="title-native-small">${d.titleNative}</div>` : ''}
          ${mastered  ? `<div class="mastery-tag">${t('tag_mastered')}</div>` :
            completed ? `<div class="mastery-tag" style="color:#4a9e5c;">${t('tag_done')}</div>` : ''}
          ${completed ? `<button class="tile-undo-btn" onclick="event.stopPropagation();uncompleteDay(${d.day},true)" title="Undo completion">${t('lesson_undo')}</button>` : ''}
        </div>`;
      }).join('')}
    </div>
  `;
}

// CONVERSATIONS
function renderConvosView() {
  content.innerHTML = `
    <h2>${t('convo_title')}</h2>
    <p class="subtitle">${t('convo_subtitle')}</p>
    <div class="convo-grid">
      ${CONVERSATIONS.map((c, i) => `
        <div class="convo-card" onclick="openConvo(${i})">
          <div class="convo-card-inner">
            <div class="convo-card-num">${i + 1}</div>
            <h4 class="convo-card-title">${c.title}</h4>
            ${c.titleNative ? `<div class="convo-card-native">${c.titleNative}</div>` : ''}
            <div class="convo-card-scene">${c.scene || ''}</div>
            <div class="convo-card-cta">${t('convo_tap_open')}</div>
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
      <div class="cmodal-num">${t('convo_prefix')} ${i + 1} ${t('convo_of')} ${CONVERSATIONS.length}</div>
      <h2 class="cmodal-title">${c.title}</h2>
      ${c.titleNative ? `<div class="cmodal-title-native">${c.titleNative}</div>` : ''}
    </div>
    ${c.scene ? `<div class="cmodal-scene">${c.scene}</div>` : ''}
    <div class="cmodal-dialogue">
      ${c.lines.map(l => `
        <div class="cmodal-line ${l.who}">
          <div class="cmodal-speaker">${l.who === 'you' ? t('convo_you') : t('convo_them')}</div>
          <div class="cmodal-native-row">
            <span class="cmodal-native">${getFrontWord(l)}</span>
            <button class="speak-btn speak-btn-sm cmodal-speak" onclick="speakWord(${JSON.stringify(getFrontWord(l)).replace(/"/g,'&quot;')},'${currentTarget()}')">🔊</button>
          </div>
          ${l.phonetic ? `<div class="cmodal-phonetic">${l.phonetic}</div>` : ''}
          <div class="cmodal-english">${getBackWord(l)}</div>
        </div>
      `).join('')}
    </div>
    <div class="cmodal-nav">
      ${i > 0 ? `<button class="cmodal-prev" onclick="openConvo(${i-1})">${t('convo_prev')}</button>` : '<span></span>'}
      ${i < CONVERSATIONS.length - 1 ? `<button class="cmodal-next" onclick="openConvo(${i+1})">${t('convo_next')}</button>` : '<span></span>'}
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
    <h2>${t('prog_title')}</h2>
    <p class="subtitle">${langLabel} · ${pair.subtitle}</p>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-value">${daysComplete}</div>
        <div class="kpi-label">${t('prog_days_done')}</div>
        <div class="kpi-sub">${t('prog_of_30')}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${state.streak}</div>
        <div class="kpi-label">${t('prog_streak')}</div>
        <div class="kpi-sub">${state.lastVisit ? t('prog_last') + ' ' + state.lastVisit : t('prog_start_today')}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${mastered}</div>
        <div class="kpi-label">${t('prog_mastered')}</div>
        <div class="kpi-sub">${t('prog_of_words', totalVocab)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${pct}%</div>
        <div class="kpi-label">${t('prog_complete')}</div>
        <div class="kpi-sub">${t('prog_course_progress')}</div>
      </div>
    </div>

    <div class="dash-section">
      <div class="dash-section-title">${t('prog_vocab')}</div>
      <div class="dash-row">
        <span class="dash-row-label">${t('prog_mastered')}</span>
        <div class="dash-row-right">
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${masteryPct}%"></div></div>
          <span class="dash-pct">${masteryPct}%</span>
        </div>
      </div>
      <div class="dash-row">
        <span class="dash-row-label">${t('prog_seen')}</span>
        <div class="dash-row-right">
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${seenPct}%"></div></div>
          <span class="dash-pct">${seenPct}%</span>
        </div>
      </div>
      <div class="dash-row">
        <span class="dash-row-label">${t('prog_need_work')}</span>
        <div class="dash-row-right">
          <span class="dash-pct" style="color:var(--muted)">${t('prog_word', needWork)}</span>
        </div>
      </div>
    </div>

    <div class="dash-section">
      <div class="dash-section-title">${t('prog_quiz_perf')}</div>
      <div class="dash-row">
        <span class="dash-row-label">${t('prog_accuracy')}</span>
        <div class="dash-row-right">
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${quizPct}%"></div></div>
          <span class="dash-pct">${quizPct}%</span>
        </div>
      </div>
      <div class="dash-row">
        <span class="dash-row-label">${t('prog_answered')}</span>
        <div class="dash-row-right">
          <span class="dash-pct" style="color:var(--muted)">${state.quizScore.correct} / ${state.quizScore.total}</span>
        </div>
      </div>
    </div>

    <div class="dash-section">
      <div class="dash-section-title">${t('prog_reset_section')}</div>
      <div class="dash-row">
        <span class="dash-row-label" style="color:var(--muted);font-size:13px;">${t('prog_reset_desc', langLabel)}</span>
        <button class="reset-btn" onclick="if(confirm(t('prog_reset_confirm', langLabel))){localStorage.removeItem(getStorageKey());location.reload();}">${t('prog_reset_btn')}</button>
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
    <h2>${t('trans_title')}</h2>
    <p class="subtitle">${isCrossPair() ? t('trans_subtitle_cross', LANGS[currentSource()].label, LANGS[currentTarget()].label) : pair.translatorSubtitle}</p>
    <form class="translator-form" onsubmit="event.preventDefault();doTranslate()">
      <input id="translate-input" type="text" placeholder="${pair.inputPlaceholder}" autofocus
             value="${(r?.input || '').replace(/"/g, '&quot;')}"
             onkeydown="if(event.key==='Enter')doTranslate()">
      <button id="translate-btn" type="submit" ${translatorState.loading?'disabled':''}>
        ${translatorState.loading ? `<span class="loader"></span>${t('trans_loading')}` : t('trans_btn')}
      </button>
    </form>

    ${err ? `<div class="translator-error">${err}</div>` : ''}

    ${r ? `
      <div class="translator-result">
        ${r.gender ? `<span class="gender-tag">${r.gender === 'm' ? t('trans_masculine') : r.gender === 'f' ? t('trans_feminine') : r.gender}</span>` : ''}
        <div class="french-word">${escapeHtml(r.word)}</div>
        ${r.ipa ? `<div class="ipa">${escapeHtml(r.ipa)}</div>` : ''}
        ${r.phonetic ? `<div class="phonetic">${escapeHtml(r.phonetic)}</div>` : ''}
        <div class="translator-actions">
          <button class="play-btn" onclick="speakWord(${JSON.stringify(r.word).replace(/"/g, '&quot;')})"> 
${t('trans_hear')}
          </button>
          <button class="save-btn ${isCardSaved(r.word) ? 'saved' : ''}"
                  onclick="toggleSaveCard()"
                  id="save-card-btn">
            ${isCardSaved(r.word) ? t('trans_saved_btn') : t('trans_save')}
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

    <p class="translator-tip">${t('trans_tip')}</p>

    ${state.savedVocab.length > 0 ? `
      <div class="saved-summary">
        <h4>${t('trans_saved_cards')} ${state.savedVocab.length}</h4>
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
        <h4>${t('trans_recent')}</h4>
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
    translatorState.error = `${t('trans_error')} ${e.message}.`;
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
    showToast(t('toast_removed'));
  } else {
    saveTranslationCard(r);
    showToast(t('toast_saved'));
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
    culture: day.culture || day.grammar || day.focus || '',
    unlocked: completed.has(day.day) || day.day <= state.currentDay
  }));
  const unlockedCount = entries.filter(e => e.unlocked).length;

  // Build review queue from all vocab
  const allVocab = getAllVocab();
  const reviewWords = allVocab.filter(v => (state.needWorkVocab[getNative(v)] || 0) > 0);

  const reviewSection = `
    <div class="review-queue-section">
      <div class="review-queue-header">
        <div class="review-queue-title">${t('nb_review')}${reviewWords.length ? ` (${reviewWords.length})` : ''}</div>
        ${reviewWords.length ? `<button class="review-queue-drill-btn" onclick="drillReviewQueue()">${t('nb_drill')}</button>` : ''}
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
    <h2>${t('nb_title')}</h2>
    <p class="subtitle">${t('nb_subtitle', unlockedCount)}</p>
    ${reviewSection}
    <div class="notebook-grid">
      ${entries.map(e => {
        if (e.unlocked) {
          return `
            <div class="notebook-entry">
              <div class="nb-day">${t('day_label')} ${e.day}</div>
              <div class="nb-title">${e.title}</div>
              <div class="nb-title-native">${e.titleNative || ''}</div>
              ${e.culture ? `<div class="nb-divider"></div><div class="nb-culture">${e.culture}</div>` : ''}
            </div>`;
        } else {
          return `
            <div class="notebook-entry locked">
              <div class="nb-day">${t('day_label')} ${e.day}</div>
              <div class="nb-title">${e.title}</div>
              <div class="nb-lock">${t('nb_unlock')}</div>
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
updateNavLabels();
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
