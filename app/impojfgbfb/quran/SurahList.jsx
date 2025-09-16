"use client";
import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Skeleton } from "../../../components/ui/skeleton";

export default function SurahList({ surahs, error, fetchSurahs, onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSurahs = surahs.filter(
    (s) =>
      s.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.englishNameTranslation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error && surahs.length === 0)
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <p className="text-red-600 mb-3">{error}</p>
        <button
          onClick={fetchSurahs}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div>
      <h2 className="text-4xl text-green-400 font-bold mb-4">
        কুরআনের সূরাসমূহ
      </h2>
      <div className="mb-4">
        <Input
          placeholder="সূরা খুঁজুন"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {surahs.length === 0
          ? Array.from({ length: 26 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <Skeleton className="h-6 w-48 mb-1" />
                <Skeleton className="h-5 w-26" />
              </div>
            ))
          : filteredSurahs.map((s) => (
              <div
                key={s.number}
                onClick={() => onSelect(s.number)}
                className="p-4 border border-gray-200 rounded-lg hover:bg-emerald-50 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 font-semibold">
                      {s.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {s.englishName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {s.englishNameTranslation}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg">{s.name}</p>
                    <p className="text-sm text-gray-500">
                      {s.numberOfAyahs} ayahs
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
