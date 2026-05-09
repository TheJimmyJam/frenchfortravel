# The Cunning Linguist — Features & Roadmap

Living doc for the language learning platform. Update as features ship.

## Live

- **Name:** The Cunning Linguist
- **URL:** https://cunninglinguist.netlify.app
- **Repo:** https://github.com/TheJimmyJam/cunninglinguist (public, auto-deploys on push to `main` via GitHub Action)

---

## Architecture

### File naming convention — course files
All course files follow `course-{src}-{tgt}.js`:
- `course-en-fr.js` = English → French
- `course-en-es.js` = English → Spanish
- `course-en-pt.js` = English → Portuguese (Brazilian)
- `course-en-el.js` = English → Greek
- `course-en-sq.js` = English → Albanian
- `course-en-it.js` = English → Italian

Future reverse pairs follow the same pattern:
- `course-fr-en.js` = French → English
- `course-es-en.js` = Spanish → English
- `course-it-sq.js` = Italian → Albanian (cross pair)

Adding a new course = drop in a new file + 3 lines in app.js + 1 line in learn.html + 1 option in index.html. No structural changes needed.

### Language config (`app.js` — `LANGS` object)
Each language key (e.g. `'fr'`, `'el'`) maps to:
- `label`, `flag`, `storageKey`, `recentKey` — identity
- `speechLang` — Web Speech API locale (e.g. `'el-GR'`)
- `subtitle`, `tagline`, `inputPlaceholder`, `translatorSubtitle` — UI copy
- `headerBg`, `headerBorder`, `statBg`, `statBorder` — flag-themed colors via flagcdn.com

### Language routing (`getCourseData(lang)`)
Returns `{ course, convos }` for the active language. Add one `if` line per new language.

### Storage
Each language gets its own localStorage key (e.g. `greek_learner_v1`). Progress is fully isolated per language — switching never clobbers another language's progress.

---

## Live Languages (English-source)

| Language | File | Status |
|----------|------|--------|
| French | course-en-fr.js | ✅ Live |
| Spanish | course-en-es.js | ✅ Live |
| Portuguese (BR) | course-en-pt.js | ✅ Live |
| Greek | course-en-el.js | ✅ Live |
| Albanian | course-en-sq.js | ✅ Live |
| Italian | course-en-it.js | ✅ Live |

---

## Shipped Features

### Core curriculum
- 30-day course per language, built around real travel scenarios
- Each day: 8–10 vocab words with IPA + English-friendly phonetics, 4–5 phrases, grammar tip, cultural note
- `title` (English) + `titleNative` (target language) on every day — displayed bilingually
- Mark Day Complete advances to next day and auto-scrolls to top
- Completed days lock in progress

### Flashcards
- Front = target language / flip = English + IPA
- Four scopes: Days I've seen · All 30 days + saved · Need more work · My saved words
- Per-card "Got it" / "Need work" tracking, persisted in localStorage
- Shuffle button

### Quiz
- 10-question multiple-choice generated from your learned vocab
- Mixed direction (target→English and English→target)
- Tracks running quiz accuracy

### Conversations
- 8 real dialogues per language (café, hotel, directions, market, etc.)
- Collapsible accordion cards in a 4×2 kanban grid — title visible, tap to expand
- Color-coded "you" vs "them" lines

### Translator
- Type any English word/phrase → target language translation, IPA, English-friendly phonetic, example sentence
- Powered by Anthropic Claude Haiku via Netlify Function (`/api/translate`)
- API key stored as Netlify env var, never shipped to browser
- Auto-plays target language via Web Speech API (browser TTS)
- Recent translations remembered locally
- Save to flashcards — translations become custom study cards

### Progress Dashboard
- KPI cards: Days Done, Day Streak, Mastered, % Complete
- Vocabulary panel: Mastered %, Seen %, Need-work count (inline mini-bars)
- Quiz panel: Accuracy % + raw correct/total
- Reset button per language

### UI / UX
- Flag-themed header per language via flagcdn.com (CSS multiple backgrounds + dark overlay)
- Smooth transitions on language/theme switch
- Language selector on homepage only — learn page has "← Change language" link back
- Landing page: "I speak" (English only) + "I want to learn" (all live languages)
- Features grid: 3×2 centered layout
- Conversation cards: 4×2 kanban grid, accordion expand in place
- Auto-scroll to top on day advance

### Analytics
- GA4 custom events: `language_load` (on page load), `language_switch` (on toggle)
- Measurement ID: G-4TK17SVJWQ

---

## Tech Stack

- **Frontend:** Vanilla JS, no build step, no framework
- **Course data:** Separate JS files per language pair (`course-{src}-{tgt}.js`)
- **Storage:** Browser localStorage (per-device, not synced)
- **Hosting:** Netlify (static + Netlify Functions)
- **Backend:** One Netlify Function (`netlify/functions/translate.js`) calling Anthropic API server-side
- **CI/CD:** GitHub Action (`.github/workflows/deploy.yml`) — on push to `main`, runs `netlify deploy --prod`. Secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`. Netlify env var: `ANTHROPIC_API_KEY`

---

## Roadmap

### Next languages (English-source, forward pairs)
- German — large travel market, well-understood learner base
- Japanese — high demand, phonetically approachable despite script complexity
- Turkish — underserved, Istanbul/coastal tourism huge
- More reverse pairs (French → English, Spanish → English) once forward audience is established

### Audio / Speaking
- Listening drill: app speaks a phrase, user types/says what it means
- Speaking drill: app shows English, user records target language, AI checks pronunciation (Whisper via Netlify Function)
- Conversation simulator: play one side of a dialogue, respond aloud
- Voice picker: let user choose from available `speechSynthesis.getVoices()` for the target language

### Translator improvements
- Pass active `lang` param so translator targets the current language (currently always French)
- Phrase batches — save multiple translations at once
- Export saved deck as CSV (for Anki / Quizlet import)

### Progress & gamification
- Quiz pulls from saved cards too, not just course vocab
- Streak repair / grace period (currently hard-resets if you miss a day)
- Milestone toasts already in place — expand milestone set

### Infrastructure
- Supabase sync — cross-device progress (requires login, trades simplicity for capability)
- Custom domain
- Megi Albanian review pass before marking sq as fully vetted

---

## How to add a new language

1. Create `js/course-en-{code}.js` with `COURSE_{CODE}` and `CONVERSATIONS_{CODE}` arrays
2. Add `{code}: { ... }` entry to `LANGS` in `app.js`
3. Add `if (lang === '{code}') return { course: COURSE_{CODE}, convos: CONVERSATIONS_{CODE} };` to `getCourseData()` in `app.js`
4. Add `<script src="/js/course-en-{code}.js"></script>` to `learn.html`
5. Add `<option value="{code}">🏳️ Language</option>` to `index.html` dropdown
6. Add `{code}: "{code}"` to `LANG_CODE_MAP` in `index.html`
7. Push — live in ~30 seconds
