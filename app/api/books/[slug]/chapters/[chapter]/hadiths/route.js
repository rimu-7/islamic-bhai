// app/api/books/[slug]/chapters/[chapter]/hadiths/route.js
import { NextResponse } from "next/server";

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

export async function GET(request, { params }) {
  const { slug, chapter } = params;

  try {
    const url = `https://www.hadithapi.com/public/api/hadiths?apiKey=${encodeURIComponent(
      API_KEY
    )}&book=${encodeURIComponent(slug)}&chapter=${encodeURIComponent(
      chapter
    )}&paginate=200`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Hadiths fetch failed: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Handle different response formats
    let hadithsData = [];
    if (data.hadiths?.data) {
      hadithsData = data.hadiths.data;
    } else if (Array.isArray(data.hadiths)) {
      hadithsData = data.hadiths;
    } else if (Array.isArray(data)) {
      hadithsData = data;
    }

    return NextResponse.json({ hadiths: hadithsData });
  } catch (err) {
    console.error("Error fetching hadiths:", err);
    return NextResponse.json(
      { error: "Failed to fetch hadiths" },
      { status: 500 }
    );
  }
}
