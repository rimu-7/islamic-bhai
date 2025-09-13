"use client";
export default function HadithList({ hadiths, onSelect }) {
  if (!hadiths.length) {
    return <p className="text-center p-6 text-gray-500">কোনো হাদিস পাওয়া যায়নি।</p>;
  }
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hadiths.map((h, i) => (
        <div
          key={i}
          onClick={() => onSelect(h)}
          className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer"
        >
          <p className="font-semibold text-gray-800 line-clamp-2">{h.hadithBangla}</p>
        </div>
      ))}
    </div>
  );
}
