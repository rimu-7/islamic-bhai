"use client";
export default function HadithDetail({ hadith, onBack }) {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <button onClick={onBack} className="text-sm text-blue-600 mb-4 hover:underline">
        ← ফিরে যান
      </button>
      <p className="mb-4 text-lg text-gray-800">{hadith.hadithBangla}</p>
      {hadith.hadithArabic && (
        <p className="mb-4 italic text-gray-700">{hadith.hadithArabic}</p>
      )}
      <p className="text-sm text-gray-500">পৃষ্ঠা নম্বর: {hadith.pageNo}</p>
    </div>
  );
}
