"use client";

import React, { useMemo, useState } from "react";
import {
  Clock,
  Users,
  Heart,
  Scale,
  BookOpen,
  Award,
  Shield,
  Calendar,
  Target,
} from "lucide-react";
import { FaMosque, FaQuran, FaHandsHelping } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ---- DATA ----
const hajjDetails = {
  spiritual: {
    title: "আধ্যাত্মিক গুরুত্ব",
    icon: <Heart className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    content: [
      {
        title: "আল্লাহর নৈকট্য লাভ",
        description:
          "হজ্জ হলো আল্লাহর সন্তুষ্টি অর্জনের সর্বশ্রেষ্ঠ মাধ্যম之一।",
        detailed:
          "কাবা শরীফের তাওয়াফ, সাঈ, আরাফাত—all আল্লাহর সান্নিধ্য লাভের মুহূর্ত।",
        reference: "সূরা আল-হজ্জ, ২২:২৭",
        benefits: ["গুনাহ মাফ", "ঈমান বৃদ্ধি", "আত্মশুদ্ধি"],
      },
      {
        title: "পূর্ণাঙ্গ পাপমুক্তি",
        description:
          "প্রকৃত ঈমান ও ইখলাসের সাথে হজ্জ করলে নবজাতকের মতো পবিত্রতা লাভ হয়।",
        detailed:
          "রাসূলুল্লাহ (সা.) বলেছেন, ‘হজ্জ মাবরুরের প্রতিদান জান্নাত।’",
        reference: "সহীহ বুখারী, হাদীস ১৫২১",
        benefits: ["গুনাহ মাফ", "আত্মিক পবিত্রতা"],
      },
    ],
  },
  social: {
    title: "সামাজিক গুরুত্ব",
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    content: [
      {
        title: "বিশ্ব মুসলিম ঐক্য",
        description: "হজ্জে বিশ্ব মুসলিম একত্রিত হয়।",
        detailed:
          "ভাষা-বর্ণ নির্বিশেষে সবাই একই ইহরামে একই কিবলার দিকে দাঁড়ায়।",
        reference: "সূরা আল-হুজরাত, ৪৯:১৩",
        benefits: ["ঐক্যবোধ", "ভ্রাতৃত্ব"],
      },
    ],
  },
  moral: {
    title: "নৈতিক গুরুত্ব",
    icon: <Scale className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    content: [
      {
        title: "ধৈর্য ও আত্মসংযম",
        description: "হজ্জের মাধ্যমে ধৈর্যের শিক্ষা।",
        detailed:
          "গরম, ভিড়, ক্লান্তি—সব সহ্য করা ধৈর্য ও নিয়মানুবর্তিতা শেখায়।",
        reference: "সূরা আল-বাকারাহ, ২:১৯৭",
        benefits: ["ধৈর্য", "আত্মসংযম"],
      },
    ],
  },
  historical: {
    title: "ঐতিহাসিক গুরুত্ব",
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
    content: [
      {
        title: "ইবরাহিম (আ.)-এর স্মৃতি",
        description: "হজ্জ ইবরাহিম (আ.) পরিবারের কাহিনী বহন করে।",
        detailed:
          "কাবা নির্মাণ, সাঈ, কুরবানি—সবই তাঁদের আত্মত্যাগের স্মারক।",
        reference: "সূরা আল-বাকারাহ, ২:১২৫-১২৭",
        benefits: ["ঐতিহাসিক সংযোগ", "নবীদের স্মৃতি"],
      },
    ],
  },
};

const hajjRituals = [
  {
    id: 1,
    name: "ইহরাম",
    short: "বিশেষ পোশাক ও নিয়ম মেনে চলা।",
    details: "পুরুষ দুই কাপড়, নারী সাধারণ পোশাক; কিছু নিষেধাজ্ঞা মানা।",
    time: "শাওয়াল-জিলহজ্জ",
    importance: "সমতা ও আত্মসংযম",
  },
  {
    id: 2,
    name: "তাওয়াফ",
    short: "কাবার চারপাশে সাতবার ঘোরা।",
    details: "হাজরে আসওয়াদ থেকে শুরু ও শেষ হয়।",
    time: "হজ্জের বিভিন্ন পর্যায়",
    importance: "আল্লাহর একত্ব",
  },
];

// ---- COMPONENT ----
export default function HajjPage() {
  const detailKeys = useMemo(() => Object.keys(hajjDetails), []);
  const [activeTab, setActiveTab] = useState(detailKeys[0]);

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* HEADER */}
        <header className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg mb-6">
            <FaMosque className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-blue-700 to-purple-700">
            ইসলামে হজ্জের গুরুত্ব
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            হজ্জ ইসলামের পঞ্চম স্তম্ভ এবং এটি ব্যক্তি ও সমাজ উভয়ের উপর গভীর প্রভাব ফেলে।
          </p>
        </header>

        {/* RITUALS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" /> হজ্জের রীতিনীতি
            </CardTitle>
            <CardDescription>সংক্ষিপ্ত ব্যাখ্যা ও টিপস</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {hajjRituals.map((r) => (
                <AccordionItem key={r.id} value={r.id.toString()}>
                  <AccordionTrigger>
                    <div className="text-left">
                      <span className="font-medium">{r.name}</span>
                      <div className="text-sm text-gray-500">{r.short}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-700 mb-3">{r.details}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>⏱️ {r.time}</Badge>
                      <Badge>⚑ {r.importance}</Badge>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline" size="sm">
                হজ্জের প্রস্তুতি দেখুন
              </Button>
              <Button size="sm">আরও পড়ুন</Button>
            </div>
          </CardContent>
        </Card>

        {/* DETAILS */}
        <Card>
          <CardHeader className={`bg-gradient-to-r ${hajjDetails[activeTab].color} text-white rounded-t-lg`}>
            <CardTitle className="text-lg">
              {hajjDetails[activeTab].title}
            </CardTitle>
            <CardDescription className="text-white/90">
              হজ্জের {hajjDetails[activeTab].title.toLowerCase()} সম্পর্কিত তথ্য
            </CardDescription>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
              <TabsList className="flex flex-wrap gap-2">
                {detailKeys.map((key) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className={`px-3 py-1 rounded-md ${
                      activeTab === key ? "bg-white text-black" : "bg-white/20 text-white"
                    }`}
                  >
                    {hajjDetails[key].title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="bg-white">
            {hajjDetails[activeTab].content.map((item, idx) => (
              <article key={idx} className="border rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-700" />
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <Badge>{item.reference}</Badge>
                </div>
                <p className="text-sm text-gray-700 mb-3">{item.description}</p>
                <div className="bg-gray-50 p-3 rounded mb-3 text-sm text-gray-800">
                  {item.detailed}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.benefits?.map((b, i) => (
                    <Badge key={i} variant="outline">✓ {b}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </CardContent>
        </Card>

        {/* HADITH */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaQuran className="w-5 h-5" /> রাসূলুল্লাহ (সা.)-এর বাণী
            </CardTitle>
            <CardDescription>বাছাইকৃত হাদীস</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-lg border">
                “প্রকৃতভাবে হজ্জ সম্পন্ন করলে মানুষ নবজাতকের মত পবিত্র হয়ে ফিরে আসে।”{" "}
                <div className="text-xs text-gray-500 mt-2">— সহীহ বুখারী</div>
              </li>
              <li className="p-4 bg-white rounded-lg border">
                “আরাফাতের দিনের দোয়া অত্যন্ত গ্রহণযোগ্য।”{" "}
                <div className="text-xs text-gray-500 mt-2">— সুনান তিরমিজী</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* BENEFITS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" /> হজ্জের উপকারিতা
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-white rounded-lg border flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <strong>পূর্ণাঙ্গ পাপমুক্তি</strong>
              </div>
              <div className="text-sm text-gray-500">
                প্রকৃত তাওবার সাথে পুরোনো গুনাহ মাফ হয়।
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <strong>জীবন পরিবর্তন</strong>
              </div>
              <div className="text-sm text-gray-500">
                শৃঙ্খলা ও ধারাবাহিকতা আসে।
              </div>
            </div>
          </CardContent>
        </Card>

        {/* REFERENCES */}
        <Card>
          <CardHeader>
            <CardTitle>
              <BookOpen className="w-5 h-5 inline mr-2" />
              তথ্যসূত্র ও গ্রন্থপঞ্জি
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-4">
            <div>
              <h4 className="font-semibold">পবিত্র কুরআন</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>সূরা আল-বাকারাহ (২:১২৫-১২৭)</li>
                <li>সূরা আল-ইমরান (৩:৯৬-৯৭)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">হাদীস গ্রন্থ</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>সহীহ বুখারী</li>
                <li>সহীহ মুসলিম</li>
                <li>সুনান তিরমিজী</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* FOOTER */}
        <footer className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl px-6 py-4 shadow">
            <FaHandsHelping className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">
                হজ্জ প্রতিটি সক্ষম মুসলিমের উপর ফরজ
              </div>
              <div className="text-sm text-white/90">
                সূত্র: সূরা আল-ইমরান (৩:৯৭)
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
