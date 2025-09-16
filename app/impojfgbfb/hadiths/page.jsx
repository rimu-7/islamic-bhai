// app/impojfgbfb/hadiths/page.jsx
import ImportantSection from "../../../components/ImportantSection";
import BooksGrid from "./BooksGrid";

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

async function getBooks() {
  try {
    const res = await fetch(
      `https://www.hadithapi.com/public/api/books?apiKey=${encodeURIComponent(
        API_KEY
      )}`,
      { cache: "no-store" }
    );
    
    if (!res.ok) throw new Error(`Books fetch failed: ${res.status}`);
    const data = await res.json();
    
    // Add unique IDs for translation tracking
    return (data.books || []).map(book => ({
      ...book,
      id: book.bookSlug, // Using slug as ID
    }));
  } catch (err) {
    console.error("Error fetching books:", err);
    return [];
  }
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Books grid, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4">হাদিসের বই সমূহ</h2>
          <BooksGrid initialBooks={books} />
        </div>

        {/* Right side */}
        <div>
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}