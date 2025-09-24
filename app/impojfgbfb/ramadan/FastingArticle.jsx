import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FastingArticle = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="">
          <h2 className="text-3xl md:text-5xl text-center bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
            রোজা: একটি বিস্তৃত নির্দেশিকা
          </h2>
        </div>

        {/* Table of Contents */}
        <div className="px-8 py-6 border-b">
          <h2 className="text-2xl font-semibold  mb-4">সূচিপত্র</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a href="#definition" className="hover:underline">
                ইসলামে রোজার সংজ্ঞা
              </a>
            </li>
            <li>
              <a href="#description" className="hover:underline">
                রোজার বর্ণনা
              </a>
            </li>
            <li>
              <a href="#types" className="hover:underline">
                রোজার প্রকারভেদ
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:underline">
                রোজার উপকারিতা
              </a>
            </li>
            <li>
              <a href="#facts" className="hover:underline">
                রোজা সম্পর্কিত তথ্য
              </a>
            </li>
            <li>
              <a href="#conclusion" className="hover:underline">
                উপসংহার
              </a>
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full mt-7 max-w-md aspect-square">
          <Image
            src="https://images.pexels.com/photos/2291592/pexels-photo-2291592.jpeg"
            alt="Sample image"
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        {/* Content Sections */}
        <div className="px-8 py-6 space-y-8">
          {/* Definition */}
          <section id="definition">
            <h2 className="text-3xl font-semibold  mb-4">
              ইসলামে রোজার সংজ্ঞা
            </h2>

            <p className=" leading-relaxed">
              ইসলামে রোজা, যা আরবিতে <em>সাওম</em> নামে পরিচিত, একটি ইবাদতের কাজ
              যেখানে মুসলিমরা নির্দিষ্ট সময়ে খাওয়া, পান করা এবং অন্যান্য
              শারীরিক চাহিদা থেকে বিরত থাকে যাতে আত্ম-নিয়ন্ত্রণ এবং তাকওয়া
              অর্জন করা যায়।
            </p>
            <h3 className="text-xl font-medium  mt-4">কুরআনে রোজার উল্লেখ</h3>
            <blockquote className="border-l-4 border-green-500 bg-green-50 rounded p-4 italic ">
              “হে ঈমানদারগণ! তোমাদের উপর রোজা ফরজ করা হয়েছে, যেমনটি ফরজ করা
              হয়েছিল তোমাদের পূর্ববর্তীদের উপর, যাতে তোমরা তাকওয়া অর্জন করতে
              পার।” (কুরআন ২:১৮৩)
            </blockquote>
            <p className=" mt-2">
              এই আয়াতটি রোজাকে <em>তাকওয়া</em> (আল্লাহ-ভীতি) অর্জনের মাধ্যম
              হিসেবে উল্লেখ করে এবং এটি পূর্ববর্তী ধর্মীয় সম্প্রদায়গুলোর মধ্যে
              সর্বজনীন প্রথা হিসেবে উল্লেখ করে।
            </p>
          </section>

          {/* Description */}
          <section id="description">
            <h2 className="text-3xl font-semibold  mb-4">রোজার বর্ণনা</h2>
            <div className="relative mx-auto w-full mt-7 max-w-md aspect-square">
              <Image
                src="https://images.pexels.com/photos/20475941/pexels-photo-20475941.jpeg"
                alt="Sample image"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <p className=" leading-relaxed">
              রোজা পালন করা হয় ইসলামী চান্দ্র মাস রমজানে, ভোর (ফজর) থেকে
              সূর্যাস্ত (মাগরিব) পর্যন্ত। শারীরিক বিরতি ছাড়াও, রোজার মধ্যে উচ্চ
              নৈতিক আচরণ বজায় রাখা, পাপাচার এড়ানো এবং আল্লাহর সাথে সম্পর্ক
              জোরদার করা অন্তর্ভুক্ত।
            </p>
            <h3 className="text-xl font-medium  mt-4">
              নৈতিক এবং আধ্যাত্মিক দিক
            </h3>
            <p className="">
              হাদিসে বর্ণিত হয়েছে, নবী মুহাম্মদ (সাল্লাল্লাহু আলাইহি
              ওয়াসাল্লাম) বলেছেন:
            </p>
            <blockquote className="border-l-4 border-green-500 rounded bg-green-50 p-4 italic ">
              “রোজা একটি ঢাল। সুতরাং, যে ব্যক্তি রোজা পালন করে তাকে অশ্লীল কথা
              এবং অজ্ঞতা থেকে বিরত থাকতে হবে। যদি কেউ তার সাথে ঝগড়া করে বা তাকে
              অপমান করে, তবে তার উত্তর দেওয়া উচিত, ‘আমি রোজা রাখছি।’” (সহিহ
              আল-বুখারি)
            </blockquote>
            <p className=" mt-2">
              এই শিক্ষা জোর দেয় যে রোজা শুধু খাবার থেকে বিরত থাকার বিষয় নয়,
              বরং আত্ম-নিয়ন্ত্রণ এবং সৎ চরিত্র গঠনের বিষয়।
            </p>
          </section>
          <Separator />
          <Link
            href={`/impojfgbfb/ramadan/dua`}
            className="text-blue-600 flex gap-2 items-center"
          >
            রোজার দুয়া সমূহ <Info />
          </Link>
          <Separator />

          {/* Types */}
          <section id="types">
            <h2 className="text-3xl font-semibold  mb-4">রোজার প্রকারভেদ</h2>
            <h3 className="text-xl font-medium ">ফরজ রোজা</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>রমজানের রোজা:</strong> শারীরিক ও মানসিকভাবে সক্ষম সকল
                প্রাপ্তবয়স্ক মুসলিমদের জন্য ফরজ।
              </li>
              <li>
                <strong>কাফফারা রোজা:</strong> নির্দিষ্ট লঙ্ঘনের জন্য নির্ধারিত,
                যেমন শপথ ভঙ্গ করা বা বৈধ কারণ ছাড়া রমজানের রোজা ভঙ্গ করা।
              </li>
            </ul>
            <h3 className="text-xl font-medium  mt-4">নফল রোজা</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>শাওয়ালের ছয় দিন:</strong> রমজানের পরের মাসে ছয় দিন
                রোজা পালন করলে অতিরিক্ত পুরস্কার পাওয়া যায়।
              </li>
              <li>
                <strong>আশুরার দিন:</strong> মুহাররমের ১০ম দিনে রোজা পালন করা
                ছোট পাপের ক্ষমার জন্য প্রস্তাবিত।
              </li>
              <li>
                <strong>সোমবার এবং বৃহস্পতিবারের রোজা:</strong> নবী
                (সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম) এই দিনগুলোতে রোজা পালনের উৎসাহ
                দিয়েছেন আত্মাকে শুদ্ধ করতে এবং আল্লাহর সন্তুষ্টি অর্জনের জন্য।
              </li>
            </ul>
          </section>

          {/* Benefits */}
          <section id="benefits">
            <h2 className="text-3xl font-semibold  mb-4">রোজার উপকারিতা</h2>
            <h3 className="text-xl font-medium ">আধ্যাত্মিক উপকারিতা</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>ঈমান জোরদার করা:</strong> রোজা শারীরিক চাহিদার উপর
                আধ্যাত্মিক চাহিদাকে অগ্রাধিকার দিয়ে আল্লাহর সাথে সম্পর্ক জোরদার
                করে।
              </li>
              <li>
                <strong>আত্ম-নিয়ন্ত্রণ:</strong> এটি ধৈর্য এবং আত্ম-নিয়ন্ত্রণ
                শেখায়, মুসলিমদের ইচ্ছা নিয়ন্ত্রণ করতে শেখায়।
              </li>
            </ul>
            <h3 className="text-xl font-medium  mt-4">শারীরিক উপকারিতা</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>স্বাস্থ্য উন্নতি:</strong> আধুনিক গবেষণা পরামর্শ দেয় যে
                রোজা বিপাককে উৎসাহিত করতে পারে, ওজন নিয়ন্ত্রণে সহায়তা করতে
                পারে এবং প্রদাহ কমাতে পারে।
              </li>
              <li>
                <strong>বিষমুক্তকরণ:</strong> খাদ্য ও পানীয় থেকে বিরত থাকা
                শরীরকে বিশ্রাম এবং পুনরুজ্জীবনের সুযোগ দেয়।
              </li>
            </ul>
            <h3 className="text-xl font-medium  mt-4">সামাজিক উপকারিতা</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>অভাবীদের প্রতি সহানুভূতি:</strong> রোজা ব্যক্তিদের
                দরিদ্রদের প্রতি সহানুভূতি তৈরি করতে সাহায্য করে, দান-খয়রাতের
                প্রতি উৎসাহিত করে।
              </li>
              <li>
                <strong>সম্প্রদায়ের বন্ধন:</strong> একসাথে রোজা ভাঙা মুসলিম
                সম্প্রদায়ের মধ্যে ঐক্য এবং ভ্রাতৃত্ব জোরদার করে।
              </li>
            </ul>
          </section>

          {/* Facts */}
          <section id="facts">
            <h2 className="text-3xl font-semibold  mb-4">
              রোজা সম্পর্কিত তথ্য
            </h2>
            <div className="relative mx-auto w-full mt-7 max-w-md aspect-square">
              <Image
                src="https://images.pexels.com/photos/8996049/pexels-photo-8996049.jpeg"
                alt="Sample image"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>সর্বজনীন প্রথা:</strong> রোজা শুধু ইসলামের মধ্যে
                সীমাবদ্ধ নয়। খ্রিস্টান এবং ইহুদি ধর্ম সহ অন্যান্য ধর্মেও রোজার
                উপর জোর দেওয়া হয়।
              </li>
              <li>
                <strong>প্রথায় নমনীয়তা:</strong> কুরআন অসুস্থ, ভ্রমণকারী এবং
                গর্ভবতী নারীদের জন্য ছাড় দেয়, পরে মিস হওয়া রোজা পূরণ করার
                বিধান সহ।
              </li>
              <li>
                <strong>জবাবদিহিতা:</strong> রোজা একটি ব্যক্তিগত ইবাদত যা
                শুধুমাত্র আল্লাহর কাছে পরিচিত, যা ভক্তির আন্তরিকতা বাড়ায়।
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-3xl font-semibold  mb-4">উপসংহার</h2>
            <p className=" leading-relaxed">
              ইসলামে রোজা শুধু শারীরিক বিরতি নয়। এটি একটি সামগ্রিক প্রথা যা
              আধ্যাত্মিকতাকে পুষ্ট করে, চরিত্র গঠন করে এবং সম্প্রদায়কে
              শক্তিশালী করে। কুরআন এবং হাদিসে নিহিত, রোজা একটি চিরন্তন ইবাদত যা
              মুসলিমদের ধার্মিকতা এবং কল্যাণের পথে পরিচালিত করে।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FastingArticle;
