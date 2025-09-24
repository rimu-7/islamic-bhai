import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const ImportantSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 space-y-10">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl p-2 sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-yellow-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
          গুরুত্বপূর্ণ
        </h2>
        <p className="text-lg sm:text-xl font-medium text-gray-700">
          আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু
        </p>
      </div>

      {/* Content */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
        <p>
          আমি একাই এই সাইটটি পরিচালনা ও সংগঠিত করছি। সাইটটি সচল রাখতে আপনাদের
          সহযোগিতা প্রয়োজন। অনুগ্রহ করে দান করে আমাদের সাথে থাকুন! ইনশাআল্লাহ,
          এটি <strong className="text-emerald-600">সদকাহে জারিয়া</strong>{" "}
          হিসেবে গণ্য হবে এবং সকলকে প্রচুর সওয়াব দেবে।
        </p>
        <p>
          আল্লাহ আমাকে শক্তি দান করুন যেন আমি এই সাইটের মাধ্যমে ইসলামিক জ্ঞান
          ছড়িয়ে দিতে পারি।
        </p>
        <p className="text-right sm:text-left text-lg font-semibold text-gray-800">
          جزاك الله خيرًا
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 justify-between">
        <Link
          href="/donation"
          className="w-full text-center bg-green-400  font-semibold py-2 rounded-md "
        >
          দান করুন
        </Link>
        <Button size="lg" variant="" className="w-full">
          সহায়তার জন্য কিনুন
        </Button>
      </div>

      {/* Newsletter */}
      <Card className="border border-gray-200/70 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-50 via-yellow-50 to-pink-50">
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
            📩 বিনামূল্যে সাবস্ক্রাইব করুন!
          </CardTitle>
          <CardDescription className="text-gray-600">
            আমাদের নিউজলেটার কমিউনিটিতে যোগ দিন এবং সাপ্তাহিক ইসলামিক জ্ঞান,
            অনুপ্রেরণা এবং স্মরণীয় বার্তা সরাসরি আপনার ইনবক্সে পান।
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="আপনার ইমেইল ঠিকানা"
              className="flex-1 rounded-xl px-4 py-3 border-gray-300 focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl px-8 py-3">
              সাবস্ক্রাইব
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ImportantSection;
