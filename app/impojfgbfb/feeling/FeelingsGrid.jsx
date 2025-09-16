import Link from "next/link";
import data from "../../../data/ok.json";

const FeelingsGrid = () => {
  const feelings = data.feeling;

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          আমি যেমন অনুভব করছি!
        </h1>
        <p className="text-gray-600 text-xs">
          বিভিন্ন অনুভূতি অন্বেষণ করুন এবং প্রতিটির জন্য দিকনির্দেশনা খুঁজে নিন।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
