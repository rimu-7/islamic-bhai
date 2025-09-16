// components/FeelingNavigation.jsx
"use client";

import Link from "next/link";
import data from "../../../../data/ok.json";

export default function FeelingNavigation({ slug }) {
  const feelings = data.feeling;
  const index = feelings.findIndex((f) => f.path.endsWith(slug));

  const prevFeeling = index > 0 ? feelings[index - 1] : null;
  const nextFeeling = index < feelings.length - 1 ? feelings[index + 1] : null;

  // --- 🎲 Pick 3 random suggestions (excluding current slug) ---
  const suggestions = feelings
    .filter((f) => !f.path.endsWith(slug))
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 3); // take 3

  return (
    <div className="mt-10 space-y-8">
      {/* Prev / Next Navigation */}
      <div className="flex justify-between items-center">
        {prevFeeling ? (
          <Link
            href={`/impojfgbfb${prevFeeling.path}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 text-green-700 font-medium shadow-sm hover:bg-emerald-200 hover:shadow-md transition"
          >
            <span className="text-xl">⬅</span>
            <span>{prevFeeling.title}</span>
          </Link>
        ) : (
          <span className="px-4 py-2 opacity-30 text-gray-400 select-none">
            ⬅ পূর্ববর্তী নেই
          </span>
        )}

        {nextFeeling ? (
          <Link
            href={`/impojfgbfb${nextFeeling.path}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 text-green-700 font-medium shadow-sm hover:bg-emerald-200 hover:shadow-md transition"
          >
            <span>{nextFeeling.title}</span>
            <span className="text-xl">➡</span>
          </Link>
        ) : (
          <span className="px-4 py-2 opacity-30 text-gray-400 select-none">
            পরবর্তী নেই ➡
          </span>
        )}
      </div>

      {/* Random Suggestions */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
          আরও অনুভূতি অন্বেষণ করুন ✨
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {suggestions.map((f, idx) => (
            <Link key={idx} href={`/impojfgbfb${f.path}`}>
              <div
                className={`p-4 rounded shadow-sm hover:shadow-lg transition cursor-pointer text-center h-32 flex items-center justify-center ${f.color}`}
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
