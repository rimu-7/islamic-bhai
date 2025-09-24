import Link from "next/link";
import data from "@/public/ok.json";

const FeelingsGrid = () => {
  const feelings = data.feeling;

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl text-center bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
          আমি যেমন অনুভব করছি!
        </h2>
        <p className="text-gray-600 text-xs">
          বিভিন্ন অনুভূতি অন্বেষণ করুন এবং প্রতিটির জন্য দিকনির্দেশনা খুঁজে নিন।
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {feelings.map((feeling, index) => (
          <Link href={`/impojfgbfb/${feeling.path}`} key={index}>
            <div
              className={`p-4 rounded shadow-sm hover:shadow-lg transition cursor-pointer text-center h-32 flex items-center justify-center ${feeling.color}`}
            >
              <h3 className="text-lg font-semibold">{feeling.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeelingsGrid;
