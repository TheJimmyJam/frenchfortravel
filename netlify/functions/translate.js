// Netlify Function: translate any English word/phrase to French.
// Calls Anthropic API server-side so the key stays secret.
// Returns { french, ipa, phonetic, gender, examples } on success.

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" }
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const text = (body?.text || "").toString().trim().slice(0, 200);
  const lang = (body?.lang || "en").toString().trim().slice(0, 10);   // target language code
  const sourceLang = (body?.sourceLang || "en").toString().trim().slice(0, 10); // source language code
  if (!text) {
    return new Response(JSON.stringify({ error: "Provide 'text' field" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server missing ANTHROPIC_API_KEY" }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }

  const LANG_NAMES = {
    en: "English", fr: "French", es: "Spanish", sq: "Albanian",
    it: "Italian", pt: "Portuguese (Brazilian)", el: "Greek",
    ja: "Japanese", de: "German", ko: "Korean"
  };
  const fromLang = LANG_NAMES[sourceLang] || "English";
  const toLang   = LANG_NAMES[lang]       || "English";

  const prompt = `Translate the following from ${fromLang} to ${toLang} for a beginner traveler.

Input: "${text}"

Return ONLY a JSON object (no prose, no markdown fences) with these fields:
- "word": the ${toLang} translation (most natural for travel/casual use)
- "ipa": the IPA phonetic transcription of the translation, in slashes like /bɔ̃ʒuʁ/
- "phonetic": a pronunciation guide using simple syllables readable in ${fromLang}, e.g. "bohn-zhoor" for "bonjour". For Japanese, use romaji-style syllables. For Korean, use phonetic syllables. For Greek, use letter-by-letter approximations.
- "gender": "m", "f", or "" if not applicable (only for nouns)
- "literal": brief literal/grammar note if useful (≤12 words), or "" if none
- "example": one short example sentence in ${toLang} using the word/phrase
- "exampleEn": ${fromLang} translation of that example sentence`;

  let resp;
  try {
    resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        messages: [{ role: "user", content: prompt }]
      })
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Upstream fetch failed", detail: String(e) }), {
      status: 502,
      headers: { "content-type": "application/json" }
    });
  }

  if (!resp.ok) {
    const detail = await resp.text();
    return new Response(JSON.stringify({ error: "Anthropic API error", status: resp.status, detail: detail.slice(0, 500) }), {
      status: 502,
      headers: { "content-type": "application/json" }
    });
  }

  const data = await resp.json();
  const raw = data?.content?.[0]?.text || "";

  // Extract first JSON object from the response
  let parsed = null;
  const match = raw.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      parsed = JSON.parse(match[0]);
    } catch {}
  }

  if (!parsed || !parsed.word) {
    return new Response(JSON.stringify({ error: "Could not parse translation", raw }), {
      status: 502,
      headers: { "content-type": "application/json" }
    });
  }

  return new Response(JSON.stringify(parsed), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=86400"
    }
  });
};

export const config = {
  path: "/api/translate"
};
