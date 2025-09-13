// lib/translator.js
export async function translateText(text, targetLang) {
  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`,
    {
      method: "POST",
      body: JSON.stringify({
        q: text,
        target: targetLang,
        source: "en",
        format: "text",
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await res.json();
  return data.data.translations[0].translatedText;
}
