// components/HadithsList.jsx
"use client";

import Link from "next/link";
import { Skeleton } from "../../../../../components/ui/skeleton";
import { MoveRight, MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function HadithsList({ initialHadiths, slug, chapter, bookName }) {
  const [hadiths, setHadiths] = useState(initialHadiths || []);
  const [loading, setLoading] = useState(!initialHadiths);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no initial hadiths were provided, fetch them
    if (!initialHadiths) {
      async function fetchHadiths() {
        try {
          setLoading(true);
          setError(null);

          const res = await fetch(`/api/books/${slug}/chapters/${chapter}/hadiths`);
          if (!res.ok) throw new Error(`Hadiths fetch failed: ${res.status}`);

          const data = await res.json();
          setHadiths(data.hadiths || []);

          if (data.hadiths.length === 0) {
            setError("No hadiths found for this chapter.");
          }
        } catch (err) {
          console.error("Error fetching hadiths:", err);
          setError("Failed to load hadiths. Please try again.");
          setHadiths([]);
        } finally {
          setLoading(false);
        }
      }
      
      fetchHadiths();
    }
  }, [initialHadiths, slug, chapter]);

  if (loading) {
    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/impojfgbfb/hadiths/${slug}`}
            className="text-blue-500 inline-flex items-center mb-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>
          <h2 className="text-3xl font-bold">Hadiths in Chapter {chapter}</h2>
          <p className="text-gray-600 capitalize mt-1">
            From {bookName}
          </p>
        </div>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <Skeleton className="h-6 w-1/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-2/3 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/impojfgbfb/hadiths/${slug}`}
            className="text-blue-500 inline-flex items-center mb-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>
          <h2 className="text-3xl font-bold">Hadiths in Chapter {chapter}</h2>
          <p className="text-gray-600 capitalize mt-1">
            From {bookName}
          </p>
        </div>

        <div className="p-6 rounded-lg bg-green-50 text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <Link
            href={`/impojfgbfb/hadiths/${slug}`}
            className="text-blue-500 inline-flex items-center mt-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back to Chapters
          </Link>
        </div>
      </div>
    );
  }

  if (!hadiths) {
    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/impojfgbfb/hadiths/${slug}`}
            className="text-blue-500 inline-flex items-center mb-4 gap-1"
          >
            <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" />
            </span>
            Back
          </Link>
          <h2 className="text-3xl font-bold">Hadiths in Chapter {chapter}</h2>
          <p className="text-gray-600 capitalize mt-1">
            From {bookName}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-red-500">No hadiths found for this chapter.</p>
          <Link
            href={`/impojfgbfb/hadiths/${slug}`}
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
          href={`/impojfgbfb/hadiths/${slug}`}
          className="text-blue-500 inline-flex items-center mb-4 gap-1"
        >
          <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
            <MoveLeft className="w-4 h-4" />
          </span>
          Back
        </Link>
        <h2 className="text-3xl font-bold">Hadiths in Chapter {chapter}</h2>
        <p className="text-gray-600 capitalize mt-1">
          From {bookName}
        </p>
      </div>

      <div className="space-y-4">
        {hadiths.map((hadith) => (
          <article
            key={hadith.hadithNumber ?? hadith.id ?? Math.random()}
            className="p-6 rounded-lg bg-green-50 transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-green-400">
                Hadith #{hadith.hadithNumber ?? hadith.id}
              </h3>
              <Link
                href={`/impojfgbfb/hadiths/${slug}/${chapter}/${
                  hadith.hadithNumber ?? hadith.id
                }`}
                className="text-blue-500 inline-flex items-center gap-1"
              >
                View Details
                <span className="transform transition-transform duration-150 ease-out hover:translate-x-1">
                  <MoveRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            {hadith.hadithEnglish && (
              <div className="mb-3">
                <p className="text-gray-800 leading-relaxed">
                  {hadith.hadithEnglish}
                </p>
              </div>
            )}

            {hadith.hadithArabic && (
              <div className="mb-3 border-t pt-3">
                <p
                  className="text-gray-800 text-right text-lg leading-loose"
                  dir="rtl"
                >
                  {hadith.hadithArabic}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t text-sm">
              {hadith.grade && (
                <div>
                  <span className="font-semibold text-gray-700">
                    Grade:
                  </span>{" "}
                  <span className="text-gray-600">{hadith.grade}</span>
                </div>
              )}

              {hadith.narratedBy && (
                <div>
                  <span className="font-semibold text-gray-700">
                    Narrated By:
                  </span>{" "}
                  <span className="text-gray-600">
                    {hadith.narratedBy}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}