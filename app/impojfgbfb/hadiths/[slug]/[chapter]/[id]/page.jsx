// app/impojfgbfb/hadiths/[slug]/[chapter]/[id]/page.jsx
import ImportantSection from "../../../../../components/ImportantSection";
import HadithDetail from "./HadithDetails";

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

async function getHadith(slug, chapter, id) {
  try {
    const url = `https://www.hadithapi.com/public/api/hadiths?apiKey=${encodeURIComponent(
      API_KEY
    )}&book=${encodeURIComponent(slug)}&chapter=${encodeURIComponent(
      chapter
    )}&hadithNumber=${encodeURIComponent(id)}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Hadith fetch failed: ${res.status}`);

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

    return hadithData;
  } catch (err) {
    console.error("Error fetching single hadith:", err);
    return null;
  }
}

export default async function HadithPage({ params }) {
  const { slug, chapter, id } = params;
  const hadith = await getHadith(slug, chapter, id);
  const bookName = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Hadith content, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <HadithDetail 
            hadith={hadith} 
            slug={slug} 
            chapter={chapter} 
            id={id} 
            bookName={bookName} 
          />
        </div>

        {/* Right side */}
        <div>
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}