import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import data from "@/public/ok.json";
import SocialMedia from "@/components/SocialMedia";

export default function NotFound() {
  const banglaHadiths = data.banglaHadiths;
  const randomHadith =
    banglaHadiths[Math.floor(Math.random() * banglaHadiths.length)];

  return (
    <div className="min-h-screen flex py-10 items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl w-full backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
        <CardHeader className="text-center">
          {/* Islamic decorative element */}
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 relative animate-fade-in">
              <Image
                src="https://res.cloudinary.com/dub1bqk4s/image/upload/v1757242299/Picsart_25-09-07_16-42-22-492_yeuduw.png"
                alt="Islamic Pattern"
                fill
                className="object-contain opacity-80"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-green-600 font-sans mb-2">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            পেজ পাওয়া যায়নি
          </h2>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-6">
            আপনি যে পেজটি খুঁজছেন তা সরানো হয়েছে, মুছে ফেলা হয়েছে বা এটির কোনো
            অস্তিত্ব নেই!
          </p>
          {/* Islamic quote */}
          <div className="border-l-4 border-amber-400 pl-4 mb-8 text-left max-w-md mx-auto">
            <p className="italic text-gray-700 font-amiri text-lg">
              "{randomHadith.text}"
            </p>
            <p className="text-sm text-gray-500 mt-1 font-sans">
              - {randomHadith.reference}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2"
          >
            <Link href="/" aria-label="Return to Home">
              হোমে ফিরে যান
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 font-medium px-6 py-2"
          >
            <Link href="/impojfgbfb/quran" aria-label="Read Quran">
              কুরআন পড়ুন
            </Link>
          </Button>
        </CardFooter>
        <SocialMedia/>
        {/* Additional resources */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-4">
            অন্যান্য বিভাগগুলি ঘুরে দেখুন:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/impojfgbfb/how-to-pray"
              className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
              aria-label="Prayer Guidelines"
            >
              নামাজের নিয়মাবলী
            </Link>
            <Separator orientation="vertical" className="h-4 bg-gray-300" />
            <Link
              href="/impojfgbfb/dua-and-dhikr"
              className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
              aria-label="Dua and Dhikr"
            >
              দুয়া এবং জিকির
            </Link>
            <Separator orientation="vertical" className="h-4 bg-gray-300" />
            <Link
              href="/impojfgbfb/allah-names"
              className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
              aria-label="99 Names of Allah"
            >
              আল্লাহর ৯৯ টি নাম
            </Link>
            <Separator orientation="vertical" className="h-4 bg-gray-300" />
            <Link
              href="/impojfgbfb/hadiths"
              className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
              aria-label="Hadiths"
            >
              হাদিস
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
