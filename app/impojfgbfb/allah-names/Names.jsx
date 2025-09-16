"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Skeleton } from "../../../components/ui/skeleton";

// ✅ Correct way to import JSON
import namesData from "../../../data/ok.json";

const Modal = lazy(() => import("./Modal"));

export default function NamesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close modal with ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const truncate = (text, length = 25) =>
    text?.length > length ? text.slice(0, length) + "..." : text || "";

  // ✅ Use the correct property
  const names = namesData.names || [];

  // ✅ Filter search by name, transliteration, or meaning
  const filtered = names.filter((item) =>
    [item.name, item.transliteration, item.bn?.meaning]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  if (loading) {
    return (
      <main className="min-h-screen py-12">
        {/* Header Skeleton */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <Skeleton className="h-16 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Skeleton className="w-full h-12 rounded-md" />
        </div>

        {/* Grid Skeleton */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(27)].map((_, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg">
              <Skeleton className="h-20 w-full rounded" />
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-500 drop-shadow-sm mb-4">
          আসমাউল হুসনা
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          আল্লাহ তায়ালার ৯৯টি সুন্দর নাম{" "}
          <span className="text-green-600 font-semibold">
            (سُبْحَٰنَهُۥ وَتَعَٰلَىٰ)
          </span>
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12 relative">
        <input
          type="text"
          placeholder="নাম বা অর্থ দ্বারা খুঁজুন..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-12 py-3 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.number}
            onClick={() => setSelected(item)}
            className="p-4 border border-gray-200 rounded-lg hover:bg-emerald-50 cursor-pointer transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex p-2 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {truncate(item.transliteration, 15)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {truncate(item.bn?.meaning, 20)}
                  </p>
                </div>
              </div>
              <h2 className="text-2xl font-arabic text-right">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          কিছুই পাওয়া যায়নি:{" "}
          <span className="font-semibold text-green-700">{query}</span>
        </p>
      )}

      {/* Modal */}
      {selected && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
              <div className="bg-white border-2 border-green-600 rounded shadow-2xl max-w-lg w-full p-8 relative">
                <Skeleton className="h-8 w-8 absolute top-4 right-4 rounded-full" />
                <Skeleton className="h-24 w-48 mx-auto mb-4" />
                <Skeleton className="h-8 w-64 mx-auto mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          }
        >
          <Modal selected={selected} onClose={() => setSelected(null)} />
        </Suspense>
      )}
    </main>
  );
}
