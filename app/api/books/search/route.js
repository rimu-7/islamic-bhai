// app/api/search/route.js
import { NextResponse } from 'next/server';

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    // Search hadiths
    const searchUrl = `https://www.hadithapi.com/public/api/hadiths?apiKey=${encodeURIComponent(
      API_KEY
    )}&hadithEnglish=${encodeURIComponent(query)}&paginate=50`;

    const searchRes = await fetch(searchUrl);
    if (!searchRes.ok) {
      throw new Error(`Hadith API responded with status: ${searchRes.status}`);
    }

    const data = await searchRes.json();
    const hadiths = data.hadiths?.data || data.hadiths || [];

    // Translate to Bengali
    const translatedResults = [];
    for (const hadith of hadiths) {
      try {
        const translateRes = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q: hadith.hadithEnglish || "",
            source: "en",
            target: "bn",
            format: "text",
          }),
        });

        if (translateRes.ok) {
          const translateData = await translateRes.json();
          hadith.hadithBengali = translateData.translatedText || hadith.hadithEnglish;
        } else {
          hadith.hadithBengali = hadith.hadithEnglish;
        }
      } catch (translateError) {
        console.error("Translation failed:", translateError);
        hadith.hadithBengali = hadith.hadithEnglish;
      }

      translatedResults.push(hadith);
    }

    return NextResponse.json({ results: translatedResults, query });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to perform search" }, 
      { status: 500 }
    );
  }
}