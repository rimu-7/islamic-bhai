// app/impojfgbfb/hadiths/[slug]/page.jsx
import ImportantSection from "../../../../components/ImportantSection";
import ChaptersGrid from "./ChapterGrid";

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

async function getChapters(slug) {
  try {
    const res = await fetch(
      `https://www.hadithapi.com/public/api/${encodeURIComponent(
        slug
      )}/chapters?apiKey=${encodeURIComponent(API_KEY)}&paginate=200`,
      { cache: "no-store" }
    );
    
    if (!res.ok) throw new Error(`Chapters fetch failed: ${res.status}`);
    const data = await res.json();
    return data.chapters?.data || data.chapters || [];
  } catch (err) {
    console.error("Error fetching chapters:", err);
    return [];
  }
}

export default async function BookPage({ params }) {
  const { slug } = await params; // ✅ fixed
  const chapters = await getChapters(slug);
  const bookName = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Chapters list, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 capitalize bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
            Chapters in {bookName}
          </h2>
          <ChaptersGrid 
            chapters={chapters} 
            slug={slug} 
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
