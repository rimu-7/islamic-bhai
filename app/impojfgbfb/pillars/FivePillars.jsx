import { Separator } from "@/components/ui/separator";
import { Calculator } from "lucide-react";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FivePillars = () => {
  return (
    <div className="min-h-screen py-10 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
            ইসলামের পাঁচ স্তম্ভ
          </h2>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-12 border">
          <h2 className="text-2xl font-semibold mb-4">সূচিপত্র</h2>
          <ul className="list-disc list-inside text-green-600 space-y-2">
            <li>
              <Link href="#introduction" className="hover:underline">
                ইসলামের পাঁচটি স্তম্ভ কী এবং এর অর্থ কী?
              </Link>
            </li>
            <li>
              <Link href="#shahada" className="hover:underline">
                শাহাদাহ (বিশ্বাস): প্রথম স্তম্ভ
              </Link>
            </li>
            <li>
              <Link href="#salah" className="hover:underline">
                সালাহ (নামাজ): দ্বিতীয় স্তম্ভ
              </Link>
            </li>
            <li>
              <Link href="#zakat" className="hover:underline">
                যাকাত (দান): তৃতীয় স্তম্ভ
              </Link>
            </li>
            <li>
              <Link href="#sawm" className="hover:underline">
                সাওম (রোজা): চতুর্থ স্তম্ভ
              </Link>
            </li>
            <li>
              <Link href="#hajj" className="hover:underline">
                হজ্জ (তীর্থযাত্রা): পঞ্চম স্তম্ভ
              </Link>
            </li>
            <li>
              <Link href="#significance" className="hover:underline">
                ইসলামের পাঁচটি স্তম্ভের আধ্যাত্মিক ও সামাজিক তাৎপর্য
              </Link>
            </li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Introduction */}
          <section
            id="introduction"
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-3xl font-bold mb-4">
              ইসলামের পাঁচটি স্তম্ভ কী এবং এর অর্থ কী?
            </h2>
            <p className="leading-relaxed mb-4">
              ইসলামের পাঁচটি স্তম্ভ হলো মুসলিমের বিশ্বাস ও অনুশীলনের ভিত্তি।
              এগুলো মুসলিমদের জন্য মূল বিশ্বাস এবং কাজগুলোর প্রতিনিধিত্ব করে, যা
              প্রত্যেক মুসলিমকে ইসলামের শিক্ষা অনুসারে জীবনযাপন করতে পূরণ করতে
              হবে।
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>শাহাদাহ (বিশ্বাস):</strong> আল্লাহর একত্ব এবং মুহাম্মদ
                (সাঃ)-এর নবুয়তের ঘোষণা।
              </li>
              <li>
                <strong>সালাহ (নামাজ):</strong> প্রতিদিন পাঁচবার নামাজ আদায়।
              </li>
              <li>
                <strong>যাকাত (দান):</strong> অভাবীদের জন্য সম্পদের একটি অংশ
                দান।
              </li>
              <li>
                <strong>সাওম (রোজা):</strong> রমজান মাসে রোজা পালন।
              </li>
              <li>
                <strong>হজ্জ (তীর্থযাত্রা):</strong> সামর্থ্য থাকলে মক্কায়
                তীর্থযাত্রা।
              </li>
            </ul>
          </section>

          {/* Shahada */}
          <section
            id="shahada"
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="https://res.cloudinary.com/dub1bqk4s/image/upload/v1758539885/Taliban_-_Wikipedia_iqralz.jpg"
                alt="Shahada Image"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                শাহাদাহ (বিশ্বাস): প্রথম স্তম্ভ
              </h2>

              <blockquote className="border-l-4 border-green-500 pl-4 italic bg-green-50 rounded-lg p-3 mb-6">
                “আশহাদু আল্লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান
                আবদুহু ওয়ারাসুলুহু”
              </blockquote>

              <p className="leading-relaxed mb-4">
                <span className="font-semibold">শাহাদাহ</span> (الشهادة) অর্থ
                হলো
                <span className="italic">“সাক্ষ্য প্রদান”</span>। ইসলামে এটি হলো
                সেই ঘোষণা, যেখানে একজন ব্যক্তি অন্তরে দৃঢ়ভাবে বিশ্বাস করে এবং
                মুখে উচ্চারণ করে যে <strong>আল্লাহ ছাড়া কোনো উপাস্য নেই</strong>{" "}
                এবং{" "}
                <strong>
                  মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) আল্লাহর রাসূল
                </strong>
                । এটি ইসলামে প্রবেশের মূল চাবিকাঠি এবং একজন মুসলিমের ঈমানের
                ভিত্তি।
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                শাহাদাহর দুটি অংশ
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>
                  <span className="font-medium">لا إله إلا الله</span> — আল্লাহ
                  ছাড়া কোনো মাবুদ নেই। এটি <strong>তাওহীদ</strong> প্রতিষ্ঠা করে
                  এবং মানুষকে শিরক থেকে দূরে রাখে।
                </li>
                <li>
                  <span className="font-medium">محمد رسول الله</span> — মুহাম্মদ
                  (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) আল্লাহর রাসূল। তাঁর প্রতি
                  আনুগত্য এবং সুন্নাহ অনুসরণ করা ঈমানের অপরিহার্য অংশ।
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                কুরআন ও হাদীস থেকে
              </h3>
              <div className="bg-gray-50  rounded-lg border-l-4 border-green-400 p-4 shadow-sm mb-6">
                <p className="italic mb-2">
                  “আল্লাহ সাক্ষ্য দেন যে, তিনি ছাড়া কোনো উপাস্য নেই; ফেরেশতারা
                  এবং জ্ঞানীরাও সাক্ষ্য দেন — তিনি ন্যায় প্রতিষ্ঠাকারী। তিনি
                  ছাড়া কোনো উপাস্য নেই, তিনি পরাক্রমশালী, প্রজ্ঞাময়।”{" "}
                </p>
                <p className="text-sm text-gray-600">— সূরা আলে ইমরান ৩:১৮</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
                <p className="italic mb-2">
                  “যে ব্যক্তি আন্তরিকতার সাথে লা ইলাহা ইল্লাল্লাহ উচ্চারণ করবে,
                  সে জান্নাতে প্রবেশ করবে।”
                </p>
                <p className="text-sm text-gray-600">— সহীহ বুখারী ও মুসলিম</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                মুসলিম জীবনে গুরুত্ব
              </h3>
              <p className="leading-relaxed mb-4">
                শাহাদাহ শুধু মুখের উচ্চারণ নয়, বরং এটি জীবনব্যাপী এক অঙ্গীকার।
                জন্মের সময় শিশুর কানে প্রথম যে শব্দ শোনানো হয় তা হলো শাহাদাহ,
                মৃত্যুর সময়ও মুসলমানের শেষ বাক্য ideally এটি হওয়া কাম্য।
                প্রতিদিনের নামাজে, আযানে, ইসলামের আনুষ্ঠানিকতা ও ইবাদতে
                শাহাদাহকে সর্বদা স্মরণ করানো হয়।
              </p>

              <p className="leading-relaxed">
                প্রকৃত মুসলমান হওয়ার জন্য শাহাদাহকে হৃদয়ে ধারণ করতে হবে, মুখে
                বলতে হবে এবং কাজে বাস্তবায়ন করতে হবে। এটাই ইসলামের ভিত্তি, বাকি
                চারটি স্তম্ভ এর উপর প্রতিষ্ঠিত।
              </p>
              <Separator />
              <Link
                href={`/impojfgbfb/pillars/shahadah`}
                className="text-blue-600 hover:underline  flex gap-2 items-center"
              >
                ইসলামে শাহাদাহ(বিশ্বাস) এর গুরুত্ব <Info />
              </Link>
              <Separator />
            </div>
          </section>

          {/* Salah */}
          <section
            id="salah"
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="https://images.pexels.com/photos/7129724/pexels-photo-7129724.jpeg"
                alt="Salah Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                সালাহ (নামাজ): দ্বিতীয় স্তম্ভ
              </h2>

              <p className="leading-relaxed mb-4">
                <span className="font-semibold">সালাহ</span> হলো ইসলামের
                দ্বিতীয় স্তম্ভ, যা প্রতিটি প্রাপ্তবয়স্ক মুসলিম পুরুষ ও নারীর
                জন্য বাধ্যতামূলক ইবাদত। দিনে পাঁচবার নির্দিষ্ট সময়ে নামাজ আদায়
                করা শুধু আনুষ্ঠানিক কাজ নয়; বরং এটি{" "}
                <strong>আল্লাহর সাথে সরাসরি সংযোগ</strong> স্থাপন এবং আত্মাকে
                পবিত্র করার মাধ্যম।
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                ফরজ নামাজের পাঁচ সময়
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>
                  <strong>ফজর</strong> — ভোরের নামাজ (২ রাকাত ফরজ)
                </li>
                <li>
                  <strong>যোহর</strong> — দুপুরের নামাজ (৪ রাকাত ফরজ)
                </li>
                <li>
                  <strong>আসর</strong> — বিকেলের নামাজ (৪ রাকাত ফরজ)
                </li>
                <li>
                  <strong>মাগরিব</strong> — সূর্যাস্তের পর নামাজ (৩ রাকাত ফরজ)
                </li>
                <li>
                  <strong>ইশা</strong> — রাতের নামাজ (৪ রাকাত ফরজ)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">কুরআন থেকে</h3>
              <div className="bg-gray-50 rounded-lg border-l-4 border-green-400 p-4 shadow-sm mb-6">
                <p className="italic mb-2">
                  “নামাজ কায়েম করো; নিশ্চয়ই নামাজ অশ্লীলতা ও মন্দ কাজ থেকে
                  বিরত রাখে। আর আল্লাহর স্মরণ সবচেয়ে বড় জিনিস।”
                </p>
                <p className="text-sm text-gray-600">— সূরা আল-আনকাবুত ২৯:৪৫</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-2">হাদীস থেকে</h3>
              <div className="bg-gray-50 rounded-lg border-l-4 border-green-400 p-4 shadow-sm mb-6">
                <p className="italic mb-2">
                  “ইসলাম পাঁচটি স্তম্ভের উপর প্রতিষ্ঠিত: শাহাদাহ, সালাহ, যাকাত,
                  রমযানের রোজা এবং হজ।”
                </p>
                <p className="text-sm text-gray-600">
                  — সহীহ বুখারী ও সহীহ মুসলিম
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
                <p className="italic mb-2">
                  “বন্দার ও কুফরের মধ্যে পার্থক্যকারী বিষয় হলো নামাজ ত্যাগ
                  করা।”
                </p>
                <p className="text-sm text-gray-600">— সহীহ মুসলিম</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                মুসলিম জীবনে গুরুত্ব
              </h3>
              <p className="leading-relaxed mb-4">
                নামাজ মুসলমানের দৈনন্দিন জীবনের কেন্দ্রবিন্দু। এটি শুধু দোয়া
                নয়; বরং আত্মাকে শুদ্ধ করার, কৃতজ্ঞতা প্রকাশের এবং আল্লাহর
                আনুগত্য প্রমাণের পথ। নামাজের মাধ্যমে মুসলিম সমাজে ঐক্যও
                প্রতিষ্ঠিত হয়, কারণ জামাতে সবাই একই কাতারে দাঁড়ায়।
              </p>

              <p className="leading-relaxed mb-6">
                নিয়মিত সালাহ আদায় করা একজন মুসলিমের ঈমানকে দৃঢ় করে এবং তাকে
                গোনাহ থেকে দূরে রাখে। কিয়ামতের দিনে মানুষের প্রথম হিসাব নেওয়া
                হবে নামাজ সম্পর্কিত।
              </p>
              <Separator />
              <Link
                href={`/impojfgbfb/how-to-pray`}
                className="text-blue-600 hover:underline flex gap-2 items-center"
              >
                সালাহ সম্পর্কে আরো বিস্তারিত জানতে এখানে ক্লিক করুন <Info />
              </Link>
              <Separator />
            </div>
          </section>

          {/* Zakat */}
          <section id="zakat" className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">
              যাকাত (দান): তৃতীয় স্তম্ভ
            </h2>

            <p className="leading-relaxed mb-4">
              <span className="font-semibold">যাকাত</span> হলো ইসলামের তৃতীয়
              স্তম্ভ, যা ধনী মুসলিমদের জন্য বাধ্যতামূলক আর্থিক ইবাদত। এর মাধ্যমে
              সম্পদের একটি অংশ অভাবী, গরিব ও নির্দিষ্ট শ্রেণীর মানুষের মাঝে
              বিতরণ করা হয়। এটি
              <strong> সামাজিক ন্যায়বিচার</strong>,{" "}
              <strong>দারিদ্র্য দূরীকরণ</strong>
              এবং <strong>সম্পদে বরকত</strong> আনার মাধ্যম।
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              যাকাতের মূল উদ্দেশ্য
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>গরিব ও অভাবীদের সাহায্য করা।</li>
              <li>সম্পদকে পরিশুদ্ধ ও বরকতময় করা।</li>
              <li>সমাজে সম্পদের সুষম বণ্টন নিশ্চিত করা।</li>
              <li>ধনীদের হৃদয়কে কৃপণতা থেকে মুক্ত করা।</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">কুরআন থেকে</h3>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
              <p className="italic mb-2">
                “তাদের সম্পদ থেকে দান গ্রহণ কর, যার দ্বারা তুমি তাদের শুদ্ধ করবে
                এবং তাদের বৃদ্ধি করবে।”
              </p>
              <p className="text-sm text-gray-600">— সূরা আত-তাওবা ৯:১০৩</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
              <p className="italic mb-2">
                “যাকাত শুধু গরিব, অভাবী, যাকাত সংগ্রহকারীদের জন্য, যাদের হৃদয়কে
                ইসলামের প্রতি আকৃষ্ট করতে হবে, দাসমুক্তির জন্য, ঋণগ্রস্তদের
                জন্য, আল্লাহর পথে এবং পথিকদের জন্য নির্ধারিত।”
              </p>
              <p className="text-sm text-gray-600">— সূরা আত-তাওবা ৯:৬০</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">হাদীস থেকে</h3>
            <div className="bg-gray-50 rounded-lg border-l-4 border-green-400 p-4 shadow-sm mb-6">
              <p className="italic mb-2">
                “ইসলাম পাঁচটি স্তম্ভের উপর প্রতিষ্ঠিত: শাহাদাহ, সালাহ, যাকাত,
                রমযানের রোজা এবং হজ।”
              </p>
              <p className="text-sm text-gray-600">
                — সহীহ বুখারী ও সহীহ মুসলিম
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">কে যাকাত দিবে?</h3>
            <p className="leading-relaxed mb-4">
              যাদের কাছে <strong>নিসাব</strong> পরিমাণ সম্পদ আছে এবং এক বছর
              পূর্ণ হয়েছে, তাদের উপর যাকাত ফরজ। সাধারণত ২.৫% হারে হিসাব করা
              হয়, তবে কৃষি, পশু ও বাণিজ্য পণ্যে আলাদা হিসাব রয়েছে।
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">যাকাতের প্রভাব</h3>
            <p className="leading-relaxed mb-6">
              যাকাত সমাজে ধনী-গরিবের মধ্যে ব্যবধান কমায়, ভ্রাতৃত্ব বাড়ায় এবং
              অন্যায়-অসাম্য হ্রাস করে। এটি আল্লাহর পক্ষ থেকে সম্পদে বরকত ও
              শান্তি আনে।
            </p>
            <Separator />
            <Link
              href={`/impojfgbfb/pillars/zakat/calculator`}
              className="text-blue-600 flex gap-2 items-center"
            >
              যাকাত ক্যালকুলেটর ব্যবহার করে বিস্তারিত জানতে এখানে ক্লিক করুন{" "}
              <Calculator />
            </Link>
            <Separator />
          </section>

          {/* Sawm */}
          <section id="sawm" className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">
              সাওম (রোজা): চতুর্থ স্তম্ভ
            </h2>

            <p className="leading-relaxed mb-4">
              <span className="font-semibold">সাওম</span> বলতে রমযান মাসে ভোর
              থেকে সূর্যাস্ত পর্যন্ত খাদ্য, পানীয়, যৌন সম্পর্ক এবং অন্য সব
              নিষিদ্ধ কাজ থেকে বিরত থাকার ইবাদতকে বোঝায়। এটি কেবল শারীরিক সংযম
              নয়; বরং <strong>আত্মশুদ্ধি, আল্লাহভীতি</strong>
              এবং <strong>আত্মনিয়ন্ত্রণ</strong> অর্জনের এক বিশেষ মাধ্যম।
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">কুরআন থেকে</h3>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
              <p className="italic mb-2">
                “হে ঈমানদারগণ! তোমাদের উপর রোজা ফরজ করা হয়েছে, যেমনটি ফরজ করা
                হয়েছিল তোমাদের পূর্ববর্তীদের উপর, যাতে তোমরা তাকওয়া অর্জন করতে
                পারো।”
              </p>
              <p className="text-sm text-gray-600">— সূরা আল-বাকারাহ ২:১৮৩</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
              <p className="italic mb-2">
                “রমযান মাস, যে মাসে কুরআন নাযিল করা হয়েছে, মানুষের জন্য
                হিদায়াত হিসেবে এবং সঠিক পথ ও সত্য-মিথ্যার পার্থক্যের স্পষ্ট
                প্রমাণ হিসেবে। তোমাদের মধ্যে যে এ মাস পাবে সে যেন এ মাসে রোজা
                রাখে।”
              </p>
              <p className="text-sm text-gray-600">— সূরা আল-বাকারাহ ২:১৮৫</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">হাদীস থেকে</h3>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
              <p className="italic mb-2">
                “ইসলাম পাঁচটি স্তম্ভের উপর প্রতিষ্ঠিত: শাহাদাহ, সালাহ, যাকাত,
                রমযানের রোজা এবং হজ।”
              </p>
              <p className="text-sm text-gray-600">
                — সহীহ বুখারী ও সহীহ মুসলিম
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 shadow-sm mb-6">
              <p className="italic mb-2">
                “যে ব্যক্তি ঈমান ও সওয়াবের আশায় রমযানের রোজা রাখবে, তার
                পূর্বেকার সব গুনাহ মাফ করে দেওয়া হবে।”
              </p>
              <p className="text-sm text-gray-600">
                — সহীহ বুখারী ও সহীহ মুসলিম
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">রোজার উদ্দেশ্য</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>তাকওয়া (আল্লাহভীতি) অর্জন করা।</li>
              <li>আত্মনিয়ন্ত্রণ ও ধৈর্য শেখা।</li>
              <li>গরিব ও অভাবীদের কষ্ট অনুভব করা।</li>
              <li>সমাজে ভ্রাতৃত্ব ও ঐক্য বাড়ানো।</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">রোজার প্রভাব</h3>
            <p className="leading-relaxed mb-6">
              রমযানের রোজা মুসলিম সমাজকে ঐক্যবদ্ধ করে এবং একজন মুসলিমের আত্মাকে
              পবিত্র করে। এটি দেহকে সুস্থ রাখে, আল্লাহর প্রতি কৃতজ্ঞতা জাগায়
              এবং দোয়া কবুল হওয়ার একটি বিশেষ সময় প্রদান করে। রমযান মাসে
              কিয়ামুল লাইল (তারাবিহ), দান-খয়রাত ও কুরআন তিলাওয়াত বিশেষভাবে
              গুরুত্ব পায়।
            </p>
            <Separator />
            <Link
              href={`/impojfgbfb/ramadan/dua`}
              className="text-blue-600 hover:underline flex gap-2 items-center"
            >
              রোজা সম্পর্কে বিস্তারিত জানতে এখানে ক্লিক করুন <Info />
            </Link>
            <Separator />
          </section>

          <section
            id="hajj"
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="https://images.pexels.com/photos/18274181/pexels-photo-18274181.jpeg"
                alt="Hajj Image - Muslims performing Tawaf around the Kaaba"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                হজ্জ : ইসলামের পঞ্চম স্তম্ভ
              </h2>

              <p className="leading-relaxed mb-4">
                ইসলামে হজ্জ হলো এমন একটি স্তম্ভ যা প্রত্যেক মুসলিমকে তাদের
                আর্থিক ও শারীরিক সামর্থ্য থাকলে জীবনে অন্তত একবার পালন করতে হবে।
                এটি ইসলামিক ক্যালেন্ডারের শেষ মাস জিলহজ্জের ৮ থেকে ১২ তারিখ
                পর্যন্ত পালিত হয়।
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  হজ্জের ঐতিহাসিক তাৎপর্য
                </h3>
                <p className="mb-3">
                  হজ্জের রীতিনীতি ইসলামের পূর্ব থেকেই চলে আসছিল, কিন্তু ইসলামে
                  এটিকে পুনরুদ্ধার ও পবিত্র করা হয়েছে। হজ্জের বিভিন্ন
                  আনুষ্ঠানিকতা নবী ইব্রাহিম (আ.) ও তাঁর পরিবারের সাথে সম্পর্কিত:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>
                    কাবা শরিফ নির্মাণ - নবী ইব্রাহিম (আ.) ও তাঁর পুত্র ইসমাইল
                    (আ.) কর্তৃক
                  </li>
                  <li>
                    সাফা ও মারওয়া পাহাড়ের মধ্যে দৌড়ানো - হাজেরা (আ.)-এর
                    স্মৃতিতে
                  </li>
                  <li>
                    কোরবানি - ইব্রাহিম (আ.)-এর স্বপ্নে পুত্র কোরবানির আদেশ ও
                    আল্লাহর পক্ষ থেকে ভেড়া দিয়ে প্রতিস্থাপনের স্মৃতি
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  হজ্জের প্রধান আনুষ্ঠানিকতা
                </h3>
                <ol className="list-decimal pl-5 mb-4 space-y-3">
                  <li>
                    <strong>ইহরাম:</strong> হজ্জের বিশেষ পোশাক পরিধান ও নিয়ত
                    করা। পুরুষের জন্য দুটি সেলাইবিহীন সাদা কাপড়, মহিলাদের জন্য
                    সাধারণ পবিত্র পোশাক।
                  </li>
                  <li>
                    <strong>তাওয়াফ:</strong> কাবা শরিফকে সাতবার ঘড়ির কাঁটার
                    বিপরীত দিকে প্রদক্ষিণ করা।
                  </li>
                  <li>
                    <strong>সাঈ:</strong> সাফা ও মারওয়া পাহাড়ের মধ্যে সাতবার
                    দৌড়ানো।
                  </li>
                  <li>
                    <strong>আরাফাতের দিন:</strong> জিলহজ্জ ৯ তারিখে আরাফাতের
                    ময়দানে অবস্থান করা - হজ্জের সবচেয়ে গুরুত্বপূর্ণ অংশ।
                  </li>
                  <li>
                    <strong>মুজদালিফায় রাত্রিযাপন:</strong> আরাফাতের পর
                    সূর্যাস্তের পর মুজদালিফায় গিয়ে রাত্রি যাপন।
                  </li>
                  <li>
                    <strong>জামারাতে শয়তানকে পাথর নিক্ষেপ:</strong> মিনায়
                    শয়তানের প্রতীকী স্তম্ভগুলোতে পাথর নিক্ষেপ।
                  </li>
                  <li>
                    <strong>কোরবানি:</strong> জিলহজ্জের ১০ তারিখে পশু কোরবানি
                    করা।
                  </li>
                  <li>
                    <strong>মাথা কামানো বা চুল ছাটা:</strong> ইহরাম থেকে বের
                    হওয়ার লক্ষ্যে।
                  </li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  হজ্জের আধ্যাত্মিক তাৎপর্য
                </h3>
                <p className="mb-3">
                  হজ্জ কেবল একটি শারীরিক ইবাদত নয়, বরং এটি মুসলিমের আত্মার
                  পরিশুদ্ধি ও আল্লাহর নৈকট্য লাভের মাধ্যম। হজ্জের মাধ্যমে:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>মানুষের মধ্যে সাম্য ও ভ্রাতৃত্ববোধের প্রকাশ ঘটে</li>
                  <li>আল্লাহর প্রতি পূর্ণ আত্মসমর্পণের শিক্ষা পাওয়া যায়</li>
                  <li>
                    পূর্বের সকল গুনাহ মাফ হয়ে যায় (যদি খাঁটি মনে করা হয়)
                  </li>
                  <li>সমস্ত মুসলিম উম্মাহর ঐক্য ও সংহতি প্রকাশ পায়</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-green-700">
                কুরআন ও হাদীসে হজ্জ
              </h3>
              <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>কুরআন:</strong> "নিশ্চয়ই মানুষের জন্য সর্বপ্রথম যে
                  গৃহ প্রতিষ্ঠা করা হয়েছে, তা হলো মক্কায়, যা সমগ্র জগতের জন্য
                  বরকতময় ও হেদায়েতস্বরূপ। সেখানে রয়েছে সুস্পষ্ট নিদর্শনসমূহ;
                  তা হলো ইব্রাহিমের দাঁড়ানোর স্থান। যে কেউ এতে প্রবেশ করবে সে
                  নিরাপত্তা লাভ করবে। আল্লাহর জন্য সে গৃহের হজ্জ করা মানুষের উপর
                  ফরজ - তাদের জন্য যারা সেখানে পৌঁছার সামর্থ্য রাখে।" (সূরা আলে
                  ইমরান, ৩:৯৭)
                </p>
                <p>
                  <strong>হাদীস:</strong> রাসূলুল্লাহ (সা.) বলেছেন, "যে ব্যক্তি
                  হজ্জ করল এবং অশ্লীলতা ও গুনাহের কাজ থেকে বিরত থাকল, সে ঐ দিনের
                  মতো নিষ্পাপ হয়ে ফিরবে যেদিন তার মা তাকে জন্ম দিয়েছিলেন।"
                  (সহীহ বুখারী, ১৫২১)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  হজ্জের শর্তাবলি
                </h3>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>মুসলিম হওয়া</li>
                  <li>বালিগ হওয়া (প্রাপ্তবয়স্ক)</li>
                  <li>সুস্থ মস্তিষ্কের অধিকারী হওয়া</li>
                  <li>আজাদ বা স্বাধীন হওয়া (দাস না হওয়া)</li>
                  <li>শারীরিক ও আর্থিক সামর্থ্য থাকা</li>
                  <li>মহিলাদের জন্য স্বামী বা মাহরাম পুরুষের সাথে থাকা</li>
                </ul>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                <h4 className="font-semibold mb-2">তথ্যসূত্র:</h4>
                <ul className="space-y-1">
                  <li>• কুরআন মাজিদ - সূরা আল-বাকারা, সূরা আলে ইমরান</li>
                  <li>• সহীহ বুখারী ও মুসলিম - হজ্জ অধ্যায়</li>
                  <li>• ফিকহুস সুন্নাহ - সাইয়িদ সাবিক</li>
                  <li>• আল-মুগনী - ইবনে কুদামা</li>
                  <li>• ইসলামিক রিলিফ ও ইসলামিক ফাউন্ডেশন প্রকাশনা</li>
                </ul>
              </div>
              <Separator />
              <Link
                href={`/impojfgbfb/pillars/hajj`}
                className="text-blue-600 hover:underline flex gap-2 items-center"
              >
                হজ্জ সম্পর্কে বিস্তারিত জানতে এখানে ক্লিক করুন <Info />
              </Link>
              <Separator />
            </div>
          </section>

          {/* Significance */}
          <section
            id="significance"
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              ইসলামের পাঁচটি স্তম্ভের আধ্যাত্মিক ও সামাজিক তাৎপর্য
            </h2>

            <p className="leading-relaxed mb-6 text-lg">
              ইসলামের পাঁচটি স্তম্ভ মুসলিমের বিশ্বাস ও অনুশীলনের ভিত্তি হিসেবে
              কাজ করে, নিশ্চিত করে যে ইবাদত কেবল ব্যক্তিগত ভক্তির মধ্যে সীমাবদ্ধ
              নয়, বরং সমাজের উন্নতির জন্য প্রসারিত। প্রতিটি স্তম্ভের মধ্যে
              রয়েছে গভীর আধ্যাত্মিক শিক্ষা ও ব্যাপক সামাজিক প্রভাব।
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  আধ্যাত্মিক তাৎপর্য
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>তাওহীদের বাস্তবায়ন:</strong> প্রতিটি স্তম্ভ
                      আল্লাহর একত্বের স্বীকৃতি দেয় এবং তাঁর সাথে ব্যক্তির
                      সম্পর্ক শক্তিশালী করে
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>আত্মশুদ্ধি:</strong> ইবাদতের মাধ্যমে অন্তর
                      পরিশুদ্ধ হয় এবং নৈতিক চরিত্র গঠিত হয়
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>আত্মসংযম:</strong> সিয়াম, সালাত ইত্যাদির মাধ্যমে
                      প্রবৃত্তির উপর নিয়ন্ত্রণ প্রতিষ্ঠা
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>আখিরাতমুখিতা:</strong> পার্থিব জীবনের চেয়ে
                      পরকালীন জীবনের প্রস্তুতিকে প্রাধান্য দেওয়া
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>আল্লাহর নৈকট্য:</strong> নিয়মিত ইবাদতের মাধ্যমে
                      আল্লাহর সাথে সম্পর্ক গভীরতর হয়
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  সামাজিক তাৎপর্য
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>সমাজ সংহতি:</strong> সম্মিলিত ইবাদত (জামাত, হজ্জ)
                      সামাজিক বন্ধন শক্তিশালী করে
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>আর্থিক ভারসাম্য:</strong> যাকাত সম্পদ পুনর্বন্টনের
                      মাধ্যমে সামাজিক ন্যায় প্রতিষ্ঠা
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>সাম্য ও ভ্রাতৃত্ব:</strong> ধনী-দরিদ্র, কালো-সাদার
                      বিভেদ দূর করে সমতা প্রতিষ্ঠা
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>নৈতিক সমাজ গঠন:</strong> ইবাদত থেকে উদ্ভূত নৈতিকতা
                      সমাজের মূল্যবোধ শক্তিশালী করে
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>অনুশাসন ও শৃঙ্খলা:</strong> নিয়মিত ইবাদত ব্যক্তিগত
                      ও সামাজিক শৃঙ্খলা বিকাশে সহায়ক
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-800">
                প্রতিটি স্তম্ভের বিশেষ তাৎপর্য
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2">
                    শাহাদাহ (বিশ্বাসের ঘোষণা)
                  </h4>
                  <p>
                    এটি ইসলামী বিশ্বাসের ভিত্তি এবং সমস্ত ইবাদতের মূল। শাহাদাহ
                    ব্যক্তিকে আল্লাহ ও তাঁর রাসূলের প্রতি আনুগত্যের অঙ্গীকারে
                    আবদ্ধ করে এবং জীবনব্যাপী এই অঙ্গীকার পালনের দায়িত্ব স্মরণ
                    করিয়ে দেয়।
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2">সালাত (নামাজ)</h4>
                  <p>
                    দৈনিক পাঁচ ওয়াক্ত সালাত মুসলিমের জীবনে আল্লাহর স্মরণকে
                    নিয়মিত করে। এটি দিনের কর্মব্যস্ততার মধ্যে আধ্যাত্মিক
                    পুনর্জাগরণ ঘটায় এবং মুসলিম সম্প্রদায়ের মধ্যে ঐক্য ও সংহতি
                    গড়ে তোলে।
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2">সিয়াম (রোজা)</h4>
                  <p>
                    রমজান মাসের সিয়াম আত্মসংযম, সহানুভূতি এবং আধ্যাত্মিক
                    বৃদ্ধির শিক্ষা দেয়। এটি দরিদ্রদের ক্ষুধা ও কষ্টের অনুভূতি
                    বুঝতে সাহায্য করে এবং সামাজিক সহমর্মিতা বিকাশে ভূমিকা রাখে।
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2">যাকাত (দান)</h4>
                  <p>
                    যাকাত ইসলামের আর্থিক ইবাদত যা সম্পদ পবিত্র করে এবং সামাজিক
                    ন্যায়বিচার প্রতিষ্ঠা করে। এটি সম্পদ পুনর্বন্টনের মাধ্যমে
                    দারিদ্র্য দূরীকরণ এবং সম্প্রদায়ের মধ্যে অর্থনৈতিক ভারসাম্য
                    রক্ষায় সহায়ক।
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2">
                    হজ্জ (তীর্থযাত্রা)
                  </h4>
                  <p>
                    হজ্জ是全球 মুসলিম সম্প্রদায়ের ঐক্য ও সাম্যের চূড়ান্ত
                    প্রকাশ। এটি জাতি, বর্ণ ও ভাষার সকল বিভেদ মুছে ফেলে এবং
                    বিশ্বব্যাপী মুসলিম ভ্রাতৃত্বের বাস্তব উদাহরণ উপস্থাপন করে।
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-green-800">
              কুরআন ও হাদীসের আলোকে স্তম্ভগুলোর গুরুত্ব
            </h3>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <p className="mb-3">
                <strong>কুরআন:</strong> "আমি জিন ও মানুষকে কেবল আমার ইবাদতের
                জন্যই সৃষ্টি করেছি।" (সূরা আয-যারিয়াত, ৫১:৫৬)
              </p>
              <p className="mb-3">
                <strong>হাদীস:</strong> রাসূলুল্লাহ (সা.) বলেছেন, "ইসলাম পাঁচটি
                স্তম্ভের উপর প্রতিষ্ঠিত: এ কথার সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া
                কোনো ইলাহ নেই এবং মুহাম্মদ (সা.) আল্লাহর রাসূল, সালাত কায়েম
                করা, যাকাত প্রদান করা, রমজানের সিয়াম পালন করা এবং বাইতুল্লাহর
                হজ্জ করা।" (সহীহ বুখারী, ৮)
              </p>
              <p>
                <strong>হাদীস:</strong> রাসূলুল্লাহ (সা.) আরও বলেছেন, "আল্লাহর
                কাছে সর্বোত্তম আমল হলো: সময়মত সালাত আদায় করা, পিতা-মাতার সাথে
                সদ্ব্যবহার করা এবং আল্লাহর পথে জিহাদ করা।" (সহীহ বুখারী, ৫২৭)
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <h4 className="font-semibold mb-2">তথ্যসূত্র:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <li>• কুরআন মাজিদ - বিভিন্ন সূরা</li>
                <li>• সহীহ বুখারী ও মুসলিম</li>
                <li>• রিয়াদুস সালিহীন - ইমাম নববী</li>
                <li>• ফিকহুস সুন্নাহ - সাইয়িদ সাবিক</li>
                <li>• ইসলামিক স্টাডিজ প্রকাশনা</li>
                <li>• ইসলামিক ফাউন্ডেশন বাংলাদেশ</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FivePillars;
