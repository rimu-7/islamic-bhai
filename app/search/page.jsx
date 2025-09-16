// app/search/page.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const API_KEY = "$2y$10$NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";

// Client-side translation function


export default function SearchPage({ searchParams }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = searchParams?.q || "";

  useEffect(() => {
    async function performSearch() {
      if (!query) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Search hadiths
        const searchUrl = `https://www.hadithapi.com/public/api/hadiths?apiKey=${encodeURIComponent(
          API_KEY
        )}&hadithEnglish=${encodeURIComponent(query)}&paginate=50`;

        const searchRes = await fetch(searchUrl);
        if (!searchRes.ok) throw new Error("Search failed");

        const data = await searchRes.json();
        const hadiths = data.hadiths?.data || data.hadiths || [];

        // Translate results sequentially to avoid rate limiting
        const translatedResults = [];
        for (const hadith of hadiths) {
          const hadithBengali = await translateToBengali(hadith.hadithEnglish || "");
          translatedResults.push({
            ...hadith,
            hadithBengali,
          });
        }

        setResults(translatedResults);
      } catch (err) {
        console.error("Search error:", err);
        setError("Failed to search. Please try again.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    performSearch();
  }, [query]);

  if (!query) {
    return (
      <div className="space-y-6 text-center py-12">
        <h2 className="text-3xl font-bold mb-4">হাদিস অনুসন্ধান</h2>
        <p className="text-gray-600">অনুসন্ধান বাক্য লিখুন এবং Enter চাপুন</p>
        <Link 
          href="/impojfgbfb/hadiths" 
          className="inline-flex items-center text-blue-500 hover:text-blue-700"
        >
          <MoveLeft className="w-4 h-4 mr-1" />
          হাদিসের বই দেখুন
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Link href="/impojfgbfb/hadiths" className="text-blue-500">
            <MoveLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-3xl font-bold">
            "{query}" এর জন্য অনুসন্ধান করা হচ্ছে...
          </h2>
        </div>
        
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Link href="/impojfgbfb/hadiths" className="text-blue-500">
            <MoveLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-3xl font-bold">"{query}" এর অনুসন্ধান ফলাফল</h2>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/impojfgbfb/hadiths" className="text-blue-500">
          <MoveLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-3xl font-bold">"{query}" এর অনুসন্ধান ফলাফল</h2>
      </div>

      {results.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600 text-lg mb-4">কোন ফলাফল পাওয়া যায়নি</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">পরামর্শ:</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>ভিন্ন কীওয়ার্ড দিয়ে চেষ্টা করুন</li>
              <li>সাধারণ শব্দ ব্যবহার করুন</li>
              <li>বানান পরীক্ষা করুন</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">{results.length}টি ফলাফল পাওয়া গেছে</p>
          
          {results.map((hadith) => (
            <div
              key={hadith.id || hadith.hadithNumber || Math.random()}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-green-600">
                  হাদিস #{hadith.hadithNumber || hadith.id}
                </h3>
                <Link
                  href={`/impojfgbfb/hadiths/${hadith.bookSlug}/${hadith.chapterNumber}/${hadith.hadithNumber || hadith.id}`}
                  className="text-blue-500 text-sm hover:underline"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>

             

              {hadith.hadithEnglish && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-1">English:</h4>
                  <p className="text-gray-800 leading-relaxed">
                    {hadith.hadithEnglish}
                  </p>
                </div>
              )}

              {hadith.hadithArabic && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-1">আরবি:</h4>
                  <p 
                    className="text-gray-800 text-right text-lg leading-loose"
                    dir="rtl"
                  >
                    {hadith.hadithArabic}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t text-sm">
                <div>
                  <span className="font-semibold text-gray-700">বই:</span>{" "}
                  <span className="text-gray-600 capitalize">
                    {hadith.bookSlug?.replace(/-/g, " ") || "—"}
                  </span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">অধ্যায়:</span>{" "}
                  <span className="text-gray-600">{hadith.chapterNumber || "—"}</span>
                </div>
                
                {hadith.grade && (
                  <div>
                    <span className="font-semibold text-gray-700">গ্রেড:</span>{" "}
                    <span className="text-gray-600">{hadith.grade}</span>
                  </div>
                )}
              </div>

              {hadith.narratedBy && (
                <div className="pt-3 text-sm">
                  <span className="font-semibold text-gray-700">বর্ণনাকারী:</span>{" "}
                  <span className="text-gray-600">{hadith.narratedBy}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}