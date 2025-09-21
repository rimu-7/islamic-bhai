// app/api/seerah/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") || "en";

  // Properly encode page name
  const pageName = lang === "en" ? "Muhammad" : encodeURIComponent("মুহাম্মদ");

  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${pageName}&format=json&origin=*`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data?.parse?.text) {
      return NextResponse.json({ html: data.parse.text["*"] });
    } else {
      return NextResponse.json({ error: "No content found" }, { status: 404 });
    }
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch Wikipedia" }, { status: 500 });
  }
}
