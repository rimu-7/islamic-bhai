import Link from "next/link";

const ImportantSection = () => {
  return (
    <div className="max-w-3xl mx-auto  space-y-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4 text-center sm:text-left">
        গুরুত্বপূর্ণ
      </h2>

      <p className="text-gray-800 text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
        আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
        আপনাদের নজরে আনা যাচ্ছে যে, আমি একাই সাইটটি পরিচালনা ও সংগঠিত করছি।
        সাইটটি সচল রাখার জন্য অনুরোধ করছি, সবাই আমাদের সাইটের জন্য দান করুন!
        ইনশাআল্লাহ এটা গণ্য হবে <strong>সদকাহে জারিয়া</strong> হিসেবে এবং
        সবাইকে প্রচুর সওয়াব দান হবে...
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
        এবং আল্লাহ আমাকে শক্তি দান করুন যাতে আমি সর্বোচ্চ চেষ্টা করতে পারি এই
        সাইটের মাধ্যমে ইসলামিক জ্ঞান ছড়ানোর জন্য...
      </p>

      <p className="text-gray-800 font-semibold mb-4 text-right sm:text-left text-lg">
        جزاك الله خيرًا
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center sm:justify-start">
        <Link
          href={"/donation"}
          className="bg-green-400 text-black items-center flex px-2 py-2 rounded-xl  transform hover:scale-105 transition-all font-semibold text-center"
        >
          দান করুন
        </Link>
        <button className="bg-rose-500 text-white items-center flex px-6 py-3 rounded-xl transform hover:scale-105 transition-all font-semibold text-center">
          সহায়তার জন্য কিনুন
        </button>
      </div>

      {/* Newsletter */}
      <div className="mt-6 bg-gray-50 p-6 rounded-2xl shadow-inner">
        <h3 className="text-xl font-semibold mb-3">
          📩 বিনামূল্যে সাবস্ক্রাইব করুন!
        </h3>
        <p className="text-gray-600 mb-4">
          আমাদের নিউজলেটার কমিউনিটিতে যোগ দিন এবং সাপ্তাহিক ইসলামিক জ্ঞান,
          অনুপ্রেরণা এবং স্মরণীয় বার্তা সরাসরি আপনার ইনবক্সে পান।
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="আপনার ইমেইল ঠিকানা"
            className="flex-1 border border-gray-300 rounded-xl px-2 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button className="bg-green-400 text-black px-6 py-3 rounded-xl hover:bg-green-500 transition shadow-md hover:shadow-lg font-semibold">
            সাবস্ক্রাইব
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportantSection;
