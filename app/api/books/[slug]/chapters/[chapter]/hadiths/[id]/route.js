import { NextResponse } from 'next/server';

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

export async function GET(request, { params }) {
  const { slug, chapter, id } = params;

  try {
    const url = `https://www.hadithapi.com/public/api/hadiths?apiKey=${encodeURIComponent(
      API_KEY
    )}&book=${encodeURIComponent(slug)}&chapter=${encodeURIComponent(
      chapter
    )}&hadithNumber=${encodeURIComponent(id)}`;

    const res = await fetch(url, { cache: "no-store" });
    
    if (!res.ok) {
      return NextResponse.json(
        { error: `Hadith fetch failed: ${res.status}` },
        { status: res.status }
      );
    }
    
    const data = await res.json();

    // Handle different response formats
    let hadithData = null;
    if (data.hadiths?.data) {
      hadithData = data.hadiths.data[0] || null;
    } else if (Array.isArray(data.hadiths)) {
      hadithData = data.hadiths[0] || null;
    } else {
      hadithData = data.hadiths || data;
    }

    return NextResponse.json({ hadith: hadithData });
  } catch (err) {
    console.error("Error fetching hadith:", err);
    return NextResponse.json(
      { error: "Failed to fetch hadith" },
      { status: 500 }
    );
  }
}