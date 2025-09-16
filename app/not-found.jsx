import Link from "next/link";
import Image from "next/image";
import data from "../data/ok.json";
export default function NotFound() {
const banglaHadiths = data.banglaHadiths;

  const randomHadith =
    banglaHadiths[Math.floor(Math.random() * banglaHadiths.length)];

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Islamic decorative element */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <Image
              src="https://res.cloudinary.com/dub1bqk4s/image/upload/v1757242299/Picsart_25-09-07_16-42-22-492_yeuduw.png"
              alt="Islamic Pattern"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>
        {/* Main content */}
        <h1 className="text-6xl font-bold  font-playfair mb-4">404</h1>
        <h2 className="text-2xl font-semibold  mb-6">Page Not Found</h2>
        <p className=" mb-8">
          {/* The page you are looking for seems to have been moved, deleted, or does not exist. */}
          আপনি যে পেজটি খুঁজতেছেন সেটি সরিয়ে ফেলা হয়েছে, ডিলিট করে দেওয়া
          হয়েছে ওঠবা সেটির কোন অস্তিত্ব নেই!
        </p>
        {/* Islamic quote */}
        <div className="border-l-4 border-amber-400 pl-4 mb-8 text-left max-w-md mx-auto">
          <p className="italic text-gray-500">"{randomHadith.text}"</p>
          <p className="text-sm text-gray-500 mt-1">
            - {randomHadith.reference}
          </p>
        </div>
        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium hover:bg-green-500 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            হোমে ফিরে যান
          </Link>
          <Link
            href="/impojfgbfb/quran"
            className="px-6 py-3 border border-green-400 text-green-400 rounded-lg font-medium hover:bg-green-50 transition-colors duration-300"
          >
            কুরআন পড়ুন
          </Link>
        </div>
        {/* Additional resources */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">অন্যান্য বিভাগগুলি ঘুরে দেখুন:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/prayer"
              className="text-green-400 hover:text-green-500 text-sm"
            >
              নামাজের নিয়মাবলী
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/dua-dhikr"
              className="text-green-400 hover:text-green-500 text-sm"
            >
              দুয়া এবং জিকির
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/allah-names"
              className="text-green-400 hover:text-green-500 text-sm"
            >
              আল্লাহর ৯৯ টি নাম
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/hadiths"
              className="text-green-400 hover:text-green-500 text-sm"
            >
              হাদিস
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
