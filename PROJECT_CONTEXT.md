# PROJECT_CONTEXT — Cunning Linguist

## What it is
Self-paced language learning platform. Multi-language course system with flashcards, spaced repetition, quizzes, conversation scenarios, and progress tracking. First course: 30-day French for Paris travel. Has since expanded to many language pairs.

## Status
Live — https://cunninglinguist.netlify.app

## Stack
| Layer | Tech | Host |
|---|---|---|
| Frontend | Vanilla JS (single `index.html`, no build step) | Netlify |
| Additional courses | Modular JS files per language pair (`js/course-en-fr.js`, etc.) | — |
| Database (optional) | Supabase (`js/supabase-sync.js`) | Supabase |
| Source | GitHub — `TheJimmyJam/cunninglinguist` | — |

## Repo layout
```
Cunning Linguist/
├── index.html              ← Main app (French course, all features inline)
├── learn.html              ← Secondary learning page
├── js/
│   ├── app.js              ← Core app logic
│   ├── course-en-fr.js     ← English → French
│   ├── course-en-de.js     ← English → German
│   ├── course-en-es.js     ← English → Spanish
│   ├── course-en-it.js     ← English → Italian
│   ├── course-en-ja.js     ← English → Japanese
│   ├── course-en-ko.js     ← English → Korean
│   ├── course-en-pt.js     ← English → Portuguese
│   ├── course-en-el.js     ← English → Greek
│   ├── course-en-sq.js     ← English → Albanian
│   ├── course-es-fr.js     ← + more Romance cross-pairs
│   └── supabase-sync.js    ← Optional progress sync to Supabase
├── 30-Day-Plan.md          ← Curriculum doc
├── Conversation-Scenarios.md
├── Vocab-Tracker.xlsx      ← All vocab across 4 sheets with status dropdowns
├── netlify/
└── netlify.toml
```

## Credentials (see `/Projects/.credentials`)
- `FRENCH_GITHUB_REPO` = https://github.com/TheJimmyJam/cunninglinguist
- `FRENCH_NETLIFY_SITE_ID` = `52ea4fa1-2400-4cb0-9367-e766004ca512`
- `FRENCH_NETLIFY_URL` = https://cunninglinguist.netlify.app
- `CL_SUPABASE_URL`, `CL_SUPABASE_ANON_KEY`, `CL_SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY` (may be used for AI features)

## Features built
- 30-day French course (350 vocab + 77 phrases)
- Flashcard system with spaced repetition
- Multiple-choice quiz
- 8 conversation scenarios (café, hotel, métro, etc.)
- Progress tracking (localStorage)
- 15+ language pair course modules
- Optional Supabase progress sync

## Pending / next up
- GitHub Action auto-deploy wired (`.github/workflows/deploy.yml` uses NETLIFY_AUTH_TOKEN + NETLIFY_SITE_ID)

### Course files still to build (37 total)

**Broken X→English pairs — course files exist but both flashcard sides are in English (need proper native-language course written):**
- Spanish → English
- Albanian → English
- Italian → English
- German → English
- Korean → English

**Non-English ↔ non-English pairs missing entirely (32):**

| Source | Missing targets |
|--------|----------------|
| French | Portuguese (stub exists), Albanian, Greek, Japanese, Korean |
| Spanish | Albanian, Greek, Japanese, Korean |
| Albanian | French, Spanish, Italian, Portuguese, Greek, Japanese, German, Korean |
| Italian | Portuguese, Albanian, Greek, Japanese, Korean |
| Portuguese | French (stub exists), Albanian, Italian, Greek, Japanese, German, Korean |
| Greek | French, Spanish, Albanian, Italian, Portuguese, Japanese, German, Korean |
| Japanese | French, Spanish, Albanian, Italian, Portuguese, Greek, German, Korean |
| German | Portuguese, Albanian, Greek, Japanese, Korean |
| Korean | French, Spanish, Albanian, Italian, Portuguese, Greek, Japanese, German |

**How to add a new course:**
1. Create `js/course-{src}-{tgt}.js` — export `var COURSE_{SRC}_{TGT} = [...]` (30 day objects, see `course-fr-es.js` as template)
2. Add `<script src="/js/course-{src}-{tgt}.js"></script>` to `learn.html` before `app.js`
3. Push to GitHub via API (use PAT from `.credentials` → `GITHUB_PAT_CLASSIC`) — Netlify auto-deploys on push to main
4. Note: `app.js` auto-registers the pair config via the `NON_EN` loop — no changes to `app.js` needed

**Vocab object format (FR→PT example):**
```js
{ pt: "obrigado", fr: "merci", ipa: "obrigadu" }
```
Source language is the instruction language (front of card), target is what they're learning (back of card).

## Notes
- No build step — Netlify deploys `index.html` as static
- Progress saved in localStorage (no login required)
- `supabase-sync.js` adds optional cloud persistence if connected
