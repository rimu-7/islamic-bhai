import data from "@/public/ok.json";

export default function ShortHadiths() {
  // Select a random hadith from the JSON data
  const showHadith =
    data.hadiths[Math.floor(Math.random() * data.hadiths.length)];

  return (
    <div className="m flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-5xl bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
          Daily Hadith
        </h2>
        <div className="space-y-6">
          {/* Arabic Text */}
          <div className="text-right">
            <p className="text-xl md:text-2xl font-arabic text-gray-800 leading-relaxed">
              {showHadith.arabic}
            </p>
          </div>
          {/* Bangla Text */}
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {showHadith.bangla}
            </p>
          </div>
          {/* English Text */}
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {showHadith.english}
            </p>
          </div>
          {/* Reference and Grade */}
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold text-green-700">Reference:</span>{" "}
              {showHadith.reference}
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold text-green-700">Grade:</span>{" "}
              {showHadith.grade}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 0;
