// /lib/translate.js
export async function translateToBengali(text) {
  if (!text) return "";

  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=en|bn`
    );

    const data = await res.json();
    return data.responseData.translatedText || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}
