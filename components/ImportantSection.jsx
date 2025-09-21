import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImportantSection = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text p-3 mb-6 text-center sm:text-left tracking-tight">
        গুরুত্বপূর্ণ
      </h2>

      <p className="text-gray-800 text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
        আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু
      </p>

      <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
        <p>
          আমি একাই এই সাইটটি পরিচালনা ও সংগঠিত করছি। সাইটটি সচল রাখতে আপনাদের সহযোগিতা প্রয়োজন। অনুগ্রহ করে দান করে আমাদের সাথে থাকুন! 
          ইনশাআল্লাহ, এটি <strong>সদকাহে জারিয়া</strong> হিসেবে গণ্য হবে এবং সকলকে প্রচুর সওয়াব দেবে।
        </p>
        <p>
          আল্লাহ আমাকে শক্তি দান করুন যেন আমি এই সাইটের মাধ্যমে ইসলামিক জ্ঞান ছড়িয়ে দিতে পারি।
        </p>
        <p className="text-gray-800 font-semibold text-right sm:text-left text-lg">
          جزاك الله خيرًا
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <Link href="/donation" passHref>
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            দান করুন
          </Button>
        </Link>
        <Button
          variant="destructive"
          className="py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105"
        >
          সহায়তার জন্য কিনুন
        </Button>
      </div>

      {/* Newsletter */}
      <Card className="mt-8 border-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">
            📩 বিনামূল্যে সাবস্ক্রাইব করুন!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            আমাদের নিউজলেটার কমিউনিটিতে যোগ দিন এবং সাপ্তাহিক ইসলামিক জ্ঞান, অনুপ্রেরণা এবং স্মরণীয় বার্তা সরাসরি আপনার ইনবক্সে পান।
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="আপনার ইমেইল ঠিকানা"
              className="flex-1 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition"
            />
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg px-6 py-3"
            >
              সাবস্ক্রাইব
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImportantSection;