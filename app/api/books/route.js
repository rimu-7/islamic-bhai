// app/api/books/route.js
import { NextResponse } from 'next/server';

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

export async function GET() {
  try {
    const res = await fetch(
      `https://www.hadithapi.com/public/api/books?apiKey=${encodeURIComponent(
        API_KEY
      )}`,
      { cache: "no-store" }
    );
    
    if (!res.ok) {
      return NextResponse.json(
        { error: `Books fetch failed: ${res.status}` },
        { status: res.status }
      );
    }
    
    const data = await res.json();
    return NextResponse.json({ books: data.books || [] });
  } catch (err) {
    console.error("Error fetching books:", err);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}