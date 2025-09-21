// components/FeelingNavigation.jsx
import Link from "next/link";
import { motion } from "framer-motion";
import data from "@/public/ok.json";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function FeelingNavigation({ slug }) {
  const feelings = data.feeling;
  const index = feelings.findIndex((f) => f.path.endsWith(slug));

  const prevFeeling = index > 0 ? feelings[index - 1] : null;
  const nextFeeling = index < feelings.length - 1 ? feelings[index + 1] : null;

  // --- 🎲 Pick 3 random suggestions (excluding current slug) ---
  const suggestions = feelings
    .filter((f) => !f.path.endsWith(slug))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-12 space-y-12">
      <div className="flex justify-between items-center flex-wrap gap-4">
        {prevFeeling ? (
          <Link href={`/impojfgbfb${prevFeeling.path}`}>
            <div className="flex items-center justify-center gap-2 h-24 w-72 rounded-xl bg-gradient-to-l from-emerald-50 to-emerald-100 text-green-700 font-medium  transition">
              <ArrowLeft className="w-5 h-5" />
              <span className="truncate">{prevFeeling.title}</span>
            </div>
          </Link>
        ) : (
          <span className="flex items-center justify-center gap-2 h-12 w-40 rounded-xl bg-gray-100 text-gray-400 select-none">
            <ArrowLeft className="w-5 h-5 opacity-50" /> পূর্ববর্তী নেই
          </span>
        )}

        {nextFeeling ? (
          <Link href={`/impojfgbfb${nextFeeling.path}`}>
            <div className="flex items-center justify-center gap-2  h-24 w-72 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 text-green-700 font-medium  transition">
              <span className="truncate">{nextFeeling.title}</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        ) : (
          <span className="flex items-center justify-center gap-2 h-12 w-40 rounded-xl bg-gray-100 text-gray-400 select-none">
            পরবর্তী নেই <ArrowRight className="w-5 h-5 opacity-50" />
          </span>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-500" />
          আরও অনুভূতি অন্বেষণ করুন
          <Sparkles className="w-5 h-5 text-emerald-500" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((f, idx) => (
            <Link key={idx} href={`/impojfgbfb${f.path}`}>
              <div
                className={`p-6 rounded-2xl hover:shadow-xl transition cursor-pointer text-center h-36 flex items-center justify-center ${f.color}`}
              >
                <h3 className="text-lg font-bold text-gray-800">{f.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
