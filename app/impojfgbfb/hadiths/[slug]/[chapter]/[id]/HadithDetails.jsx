// components/HadithDetail.jsx
"use client";

import Link from "next/link";
import { Skeleton } from "../../../../../../components/ui/skeleton";
import { MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function HadithDetail({ initialHadith, slug, chapter, id, bookName }) {
  const [hadith, setHadith] = useState(initialHadith);
  const [loading, setLoading] = useState(!initialHadith);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no initial hadith was provided, fetch it
    if (!initialHadith) {
      async function fetchHadith() {
        try {
          setLoading(true);
          setError(null);

          const res = await fetch(`/api/books/${slug}/chapters/${chapter}/hadiths/${id}`);
          if (!res.ok) throw new Error(`Hadith fetch failed: ${res.status}`);

          const data = await res.json();
          setHadith(data.hadith || null);

          if (!data.hadith) {
            setError("Hadith not found");
          }
        } catch (err) {
          console.error("Error fetching hadith:", err);
          setError("Failed to load hadith. Please try again.");
          setHadith(null);
        } finally {
          setLoading(false);
        }
      }
      
      fetchHadith();
    }
  }, [initialHadith, slug, chapter, id]);

  // Safe function to format book name
  const formatBookName = (book) => {
    if (typeof book === "string") {
      return book.replace(/-/g, " ");
    }
    return slug.replace(/-/g, " "); // Fallback to URL param
  };

  if (loading) {
    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
            className="text-blue-500 inline-flex items-center mb-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>

          <h2 className="text-3xl font-bold">Hadith #{id}</h2>
          <p className="text-gray-600 capitalize mt-1">
            From {formatBookName(slug)} • Chapter {chapter}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="pt-4 mt-4 border-t">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-1/3 mt-2" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
            className="text-blue-500 inline-flex items-center mb-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>

          <h2 className="text-3xl font-bold">Hadith #{id}</h2>
          <p className="text-gray-600 capitalize mt-1">
            From {formatBookName(slug)} • Chapter {chapter}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <Link
            href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
            className="text-blue-500 inline-flex items-center mt-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back to Hadiths
          </Link>
        </div>
      </div>
    );
  }

  if (!hadith) {
    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
            className="text-blue-500 inline-flex items-center mb-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>

          <h2 className="text-3xl font-bold">Hadith #{id}</h2>
          <p className="text-gray-600 capitalize mt-1">
            From {formatBookName(slug)} • Chapter {chapter}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-red-500">Hadith not found.</p>
          <Link
            href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
            className="text-blue-500 inline-flex items-center mt-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
          className="text-blue-500 inline-flex items-center mb-4 gap-1"
        >
          <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
            <MoveLeft className="w-4 h-4" />
          </span>
          Back
        </Link>

        <h2 className="text-3xl font-bold">Hadith #{id}</h2>
        <p className="text-gray-600 capitalize mt-1">
          From {formatBookName(slug)} • Chapter {chapter}
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            English
          </h3>
          <p className="text-gray-800 leading-relaxed">
            {hadith.hadithEnglish || "No English translation available."}
          </p>
        </div>

        {hadith.hadithArabic && (
          <div className="mb-6 border-t pt-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Arabic
            </h3>
            <p
              className="text-gray-800 text-right text-xl leading-loose"
              dir="rtl"
            >
              {hadith.hadithArabic}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t">
          {hadith.grade && (
            <div>
              <h4 className="font-semibold text-gray-700">Grade</h4>
              <p className="text-gray-600">{hadith.grade}</p>
            </div>
          )}

          {hadith.narratedBy && (
            <div>
              <h4 className="font-semibold text-gray-700">Narrated By</h4>
              <p className="text-gray-600">{hadith.narratedBy}</p>
            </div>
          )}

          {hadith.book && (
            <div>
              <h4 className="font-semibold text-gray-700">Book</h4>
              <p className="text-gray-600 capitalize">
                {formatBookName(hadith.book)}
              </p>
            </div>
          )}

          {hadith.chapterNumber && (
            <div>
              <h4 className="font-semibold text-gray-700">Chapter</h4>
              <p className="text-gray-600">{hadith.chapterNumber}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}