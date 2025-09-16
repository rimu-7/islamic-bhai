import ImportantSection from "../../../../../components/ImportantSection";
import HadithsList from "./HadithsList";

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

async function getHadiths(slug, chapter) {
  try {
    const url = `https://www.hadithapi.com/public/api/hadiths?apiKey=${encodeURIComponent(
      API_KEY
    )}&book=${encodeURIComponent(slug)}&chapter=${encodeURIComponent(
      chapter
    )}&paginate=200`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Hadiths fetch failed: ${res.status}`);

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

    return hadithsData;
  } catch (err) {
    console.error("Error fetching hadiths:", err);
    return [];
  }
}


export default async function HadithsPage({ params }) {
  const { slug, chapter } = params;
  const hadiths = await getHadiths(slug, chapter);
  const bookName = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Hadiths list, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <HadithsList 
            hadiths={hadiths} 
            slug={slug} 
            chapter={chapter} 
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