"use client";
import { useState } from "react";
import {
  Clock,
  Users,
  Heart,
  Scale,
  BookOpen,
  Star,
  Shield,
  Target,
  Calendar,
  MapPin,
  Globe,
  Award,
  Zap,
  Eye,
  Sparkles,
} from "lucide-react";
import { FaMosque, FaQuran, FaHandsHelping } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HajjPage = () => {
  const [activeTab, setActiveTab] = useState("spiritual");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const hajjDetails = {
    spiritual: {
      title: "আধ্যাত্মিক গুরুত্ব",
      icon: <Heart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "purple",
      content: [
        {
          title: "আল্লাহর নৈকট্য লাভ",
          description:
            "হজ্জ হলো আল্লাহর সন্তুষ্টি অর্জনের সর্বশ্রেষ্ঠ মাধ্যম। এটি বান্দাকে সরাসরি আল্লাহর নৈকট্য লাভের সুযোগ দেয় এবং ঈমানী শক্তি বৃদ্ধি করে।",
          detailed:
            "হজ্জের প্রতিটি কর্মই আল্লাহর নির্দেশিত। কাবা শরীফের তাওয়াফ, সাফা-মারওয়ার সাঈ, আরাফাতের ওকুফ - সবই আল্লাহর সান্নিধ্য লাভের বিশেষ মুহূর্ত। রাসূলুল্লাহ (সা.) বলেছেন, 'হজ্জ মাবরুরের প্রতিদান জান্নাত।' ",
          reference: "সূরা আল-হজ্জ, ২২:২৭; সহীহ বুখারী, হাদীস ১৫৩০",
          benefits: [
            "গুনাহ মাফ",
            "ঈমান বৃদ্ধি",
            "আত্মশুদ্ধি",
            "দুনিয়াবি মোহ থেকে মুক্তি",
          ],
        },
        {
          title: "পূর্ণাঙ্গ পাপমুক্তি",
          description:
            "প্রকৃত ঈমান ও ইখলাসের সাথে হজ্জ সম্পন্ন করলে মানুষ সম্পূর্ণ পবিত্রতা লাভ করে।",
          detailed:
            "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি হজ্জ করল এবং অশ্লীলতা ও গুনাহের কাজ থেকে বিরত থাকল, সে সেদিনের মতো নিষ্পাপ হয়ে ফিরবে যেদিন তার মা তাকে জন্ম দিয়েছিলেন।' ",
          reference: "সহীহ বুখারী, হাদীস ১৫২১; সহীহ মুসলিম, হাদীস ১৩৫০",
          benefits: [
            "জীবনের সব গুনাহ মাফ",
            "আত্মিক পবিত্রতা",
            "নতুন জীবন শুরু",
          ],
        },
        {
          title: "আধ্যাত্মিক প্রশান্তি",
          description:
            "হজ্জ মুমিনের অন্তরে গভীর প্রশান্তি এবং ঈমানের দৃঢ়তা আনে।",
          detailed:
            "হজ্জের মাধ্যমে ব্যক্তি দুনিয়ার মোহ থেকে দূরে সরে আল্লাহর সান্নিধ্যে সময় কাটায়। এই আধ্যাত্মিক যাত্রা হৃদয়কে কোমল করে এবং আল্লাহপ্রেমে সিক্ত করে।",
          reference: "সূরা আল-হজ্জ, ২২:৩২; সুনান ইবনে মাজাহ, হাদীস ২৮৮৭",
          benefits: [
            "আত্মিক প্রশান্তি",
            "ঈমানী শক্তি",
            "দুনিয়াবি মোহ থেকে মুক্তি",
          ],
        },
        {
          title: "দোয়া কবুলের বিশেষ মুহূর্ত",
          description: "হজ্জের বিভিন্ন স্থানে দোয়া কবুলের বিশেষ সময় থাকে।",
          detailed:
            "আরাফাতের দিন, মাশআরুল হারামে এবং কাবা শরীফের কাছে দোয়া করা অত্যন্ত গ্রহণযোগ্য। রাসূলুল্লাহ (সা.) বলেছেন, 'আরাফার দিনের দোয়া সর্বোত্তম দোয়া।' ",
          reference: "সুনান তিরমিজী, হাদীস ৩৫৮৫; সুনান ইবনে মাজাহ",
          benefits: ["দোয়া কবুল", "আল্লাহর রহমত", "বরকত লাভ"],
        },
      ],
    },
    social: {
      title: "সামাজিক গুরুত্ব",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "blue",
      content: [
        {
          title: "বিশ্ব মুসলিম ঐক্য",
          description:
            "হজ্জে বিশ্বের মুসলিম একত্র হয়, যা ইসলামের সার্বজনীনতা প্রদর্শন করে।",
          detailed:
            "লাখ লাখ মুসলিম বিভিন্ন জাতি, ভাষা ও সামাজিক অবস্থান নির্বিশেষে একই কিবলার দিকে মুখ করে একসাথে তালবিয়া পাঠ করে। এটি ইসলামের সমতার প্রকৃত উদাহরণ।",
          reference: "সূরা আল-হুজরাত, ৪৯:১৩; সূরা আল-বাকারাহ, ২:১৪৩",
          benefits: ["ঐক্যবোধ", "ভ্রাতৃত্ব", "বৈশ্বিক দৃষ্টিভঙ্গি"],
        },
        {
          title: "সমতা ও ভ্রাতৃত্ব",
          description:
            "হজ্জ মুমিনদের মধ্যে সাম্যের শিক্ষা দেয় এবং সামাজিক বন্ধন শক্তিশালী করে।",
          detailed:
            "সবাই একই ধরনের সাদা কাপড় (ইহরাম) পরে, যা ধন-সম্পদ ও সামাজিক অবস্থানের পার্থক্য মুছে দেয়। এটি মানুষকে নম্রতা ও ভ্রাতৃত্ব শেখায়।",
          reference: "রাসূলুল্লাহ (সা.)-এর বিদায় হজ্জের ভাষণ",
          benefits: ["সমতা বোধ", "অহংকার দূর", "সামাজিক সমতা"],
        },
        {
          title: "আন্তর্জাতিক ভ্রাতৃত্ব",
          description: "বিভিন্ন দেশের মুসলিমদের মধ্যে সম্পর্ক গড়ে ওঠে।",
          detailed:
            "হজ্জের মাধ্যমে বিভিন্ন দেশের মুসলিমরা একে অপরের সংস্কৃতি, সমস্যা ও অভিজ্ঞতা জানার সুযোগ পায়। এটি বিশ্ব মুসলিম কমিউনিটি শক্তিশালী করে।",
          reference: "সূরা আল-ইমরান, ৩:১০৩; সহীহ মুসলিম",
          benefits: [
            "আন্তর্জাতিক সম্পর্ক",
            "সাংস্কৃতিক বিনিময়",
            "সমস্যা সমাধান",
          ],
        },
      ],
    },
    moral: {
      title: "নৈতিক গুরুত্ব",
      icon: <Scale className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "green",
      content: [
        {
          title: "ধৈর্য ও আত্মসংযমের শিক্ষা",
          description:
            "হজ্জের বিভিন্ন রীতিনীতি মুমিনকে ধৈর্য ও আত্মসংযম শিখায়।",
          detailed:
            "গরম, ভিড়, ক্লান্তি ও অন্যান্য অসুবিধা সহ্য করার মাধ্যমে মানুষ ধৈর্যের বাস্তব শিক্ষা লাভ করে। ইহরাম অবস্থায় দৈনন্দিন কিছু জিনিস থেকে বিরত থাকতে হয়।",
          reference: "সূরা আল-বাকারাহ, ২:১৯৭; সূরা আল-ইমরান, ৩:২০০",
          benefits: [
            "ধৈর্য বৃদ্ধি",
            "আত্মসংযম",
            "কঠিন পরিস্থিতি মোকাবেলার ক্ষমতা",
          ],
        },
        {
          title: "সততা ও নৈতিকতা",
          description: "হজ্জে সততা, পরিশ্রম ও নৈতিকতার গুরুত্ব স্পষ্ট হয়।",
          detailed:
            "হজ্জের পুরো প্রক্রিয়ায় সততা ও নৈতিকতা পরীক্ষা হয়। হালাল উপার্জন থেকে হজ্জ করা আবশ্যক, এবং হজ্জের সময় সমস্ত লেনদেন স্বচ্ছ ও হালাল হতে হবে।",
          reference: "সহীহ বুখারী, হাদীস ১৫৩৫; সুনান আবু দাউদ",
          benefits: ["সততা", "আমানতদারী", "নৈতিক দৃঢ়তা"],
        },
        {
          title: "আত্মশুদ্ধি ও চরিত্র গঠন",
          description:
            "হজ্জ মানুষের অন্তর ও মনকে পরিশুদ্ধ করে এবং উত্তম চরিত্র গঠনে সহায়তা করে।",
          detailed:
            "হজ্জের পর ব্যক্তির জীবনযাপন, আচরণ ও চিন্তাধারা ইতিবাচকভাবে পরিবর্তিত হয়। এটি স্থায়ী নৈতিক পরিবর্তন আনে।",
          reference: "সূরা আশ-শামস, ৯১:৯-১০; সুনান আবু দাউদ, হাদীস ১৮৭৫",
          benefits: [
            "চরিত্র সংশোধন",
            "আত্মউন্নয়ন",
            "স্থায়ী ইতিবাচক পরিবর্তন",
          ],
        },
      ],
    },
    historical: {
      title: "ঐতিহাসিক গুরুত্ব",
      icon: <Globe className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "amber",
      content: [
        {
          title: "ইবরাহিম (আ.)-এর সুন্নাত",
          description:
            "হজ্জ হলো নবী ইবরাহিম (আ.) এবং তার পরিবারের সুন্নতের অনুসরণ।",
          detailed:
            "হজ্জের প্রতিটি রীতিনীতি ইবরাহিম (আ.), তাঁর স্ত্রী হাজেরা ও সন্তান ইসমাঈল (আ.)-এর জীবন ও ত্যাগের স্মৃতি। কাবা নির্মাণ, সাফা-মারওয়ার সাঈ, কুরবানি - সবই তাদের ত্যাগের স্মরণ।",
          reference: "সূরা আল-বাকারাহ, ২:১২৫-১২৭; সূরা ইবরাহিম, ১৪:৩৭",
          benefits: ["ঐতিহাসিক সংযোগ", "নবীদের স্মৃতি", "ইসলামী ঐতিহ্য"],
        },
        {
          title: "ইসলামী সভ্যতার কেন্দ্র",
          description:
            "হজ্জ ইসলামী সভ্যতা ও সংস্কৃতির প্রাণকেন্দ্র হিসেবে কাজ করে।",
          detailed:
            "ইতিহাস জুড়ে হজ্জ মুসলিম বিশ্বে জ্ঞান, সংস্কৃতি ও অর্থনৈতিক কার্যক্রমের কেন্দ্র হয়েছে। বিভিন্ন দেশের আলেম ও ব্যবসায়ীরা হজ্জে মিলিত হয়ে ধারণা বিনিময় করেছেন।",
          reference: "Historical records; Islamic civilization studies",
          benefits: ["সাংস্কৃতিক বিনিময়", "জ্ঞান ভাগাভাগি", "সভ্যতার বিকাশ"],
        },
      ],
    },
  };

  const hajjRituals = [
    {
      name: "ইহরাম",
      description:
        "হজ্জের জন্য বিশেষ পোশাক পরিধান করা এবং কিছু নিষিদ্ধ কাজ থেকে বিরত থাকা।",
      details:
        "ইহরাম হলো হজ্জের প্রথম ধাপ। পুরুষরা দুটি সাদা কাপড় পরিধান করেন, এবং নারী সাধারণ পোশাক পরেই ইহরাম করেন। ইহরামের সময় কিছু দৈনন্দিন কাজ থেকে বিরত থাকতে হয়, যেমন: পারফিউম ব্যবহার, চুল কাটা, নখ কাটা, এবং যৌন সম্পর্ক।",
      time: "হজ্জের মাসে (শাওয়াল, জিলকদ, জিলহজ্জ)",
      importance: "সমতা ও আত্মসংযমের প্রতীক",
    },
    {
      name: "তাওয়াফ",
      description: "কাবা শরীফের চারপাশে সাত বার ঘূর্ণন করা।",
      details:
        "তাওয়াফ হলো কাবা শরীফের চারপাশে বাঁদিক থেকে ডানদিকে সাতবার ঘূর্ণন করা। প্রতিটি ঘূর্ণন শুরু ও শেষ হয় হাজরে আসওয়াদ থেকে। বিভিন্ন ধরনের তাওয়াফ আছে, যেমন: তাওয়াফে কুদুম, তাওয়াফে জিয়ারত।",
      time: "হজ্জের বিভিন্ন পর্যায়ে",
      importance: "আল্লাহর একত্বের স্বীকৃতি এবং সম্মিলনের প্রতীক",
    },
    {
      name: "সাঈ",
      description: "সাফা ও মারওয়া পাহাড়ের মধ্যে সাতবার চলা।",
      details:
        "সাফা ও মারওয়া পাহাড়ের মধ্যে সাতবার চলা হয়। এই রীতিটি হাজেরা (আ.)-এর স্মৃতি, যিনি পানির খোঁজে ছেলে ইসমাঈল (আ.)-এর জন্য এই পথে চলেছিলেন। পুরুষদের জন্য বিশেষ অংশে সামান্য দ্রুত চলা সুপারিশ করা হয়েছে।",
      time: "তাওয়াফের পরে",
      importance: "আল্লাহর উপর নির্ভরতা এবং ধৈর্যের শিক্ষা",
    },
    {
      name: "আরাফাতের দিন",
      description: "জিলহজ্জ মাসের ৯ তারিখে আরাফাতের ময়দানে অবস্থান করা।",
      details:
        "আরাফাতের দিন হজ্জের সবচেয়ে গুরুত্বপূর্ণ অংশ। সূর্য অস্ত যাওয়া পর্যন্ত আরাফাতের ময়দানে অবস্থান করা আবশ্যক। এই সময় দোয়া, ইস্তিগফার এবং ইবাদত করা হয়। রাসূলুল্লাহ (সা.) বলেছেন, 'হজ্জ আরাফাতের দিনেই।' (সহীহ মুসলিম)",
      time: "জিলহজ্জ ৯ তারিখ",
      importance: "হজ্জের মূল অংশ; এই দিন উপস্থিত না হলে হজ্জ সম্পূর্ণ হয় না",
    },
    {
      name: "মুজ্দালিফায় রাত্রিযাপন",
      description: "আরাফাতের পরে মুজ্দালিফায় রাত কাটানো ও নামাজ আদায়।",
      details:
        "আরাফাত থেকে সূর্যাস্তের পর মুজ্দালিফায় আসা। এখানে মাগরিব ও এশার নামাজ একত্রে আদায় করা হয়। কিছু সময় বিশ্রাম নেওয়া হয়। সকালে ফজরের আগে মাশআরুল হারাম থেকে পাথর সংগ্রহ করা হয়।",
      time: "জিলহজ্জ ৯ তারিখ রাত থেকে ১০ তারিখ সকাল",
      importance: "আল্লাহর আদেশ পালন এবং পরবর্তী কার্যক্রমের প্রস্তুতি",
    },
    {
      name: "জামারাতে কংকর নিক্ষেপ",
      description: "শয়তানের প্রতীক স্থানে পাথর নিক্ষেপ করা।",
      details:
        "মুজ্দালিফা থেকে মিনায় এসে জামারাত তিনটি (ছোট, মধ্যম, বড়)-এ পাথর নিক্ষেপ করা হয়। প্রতিটি জামারাতে সাতটি করে পাথর মারা হয়। এই রীতিটি ইবরাহিম (আ.)-এর শয়তানের প্রতিরোধের স্মৃতি।",
      time: "জিলহজ্জ ১০-১৩ তারিখ",
      importance: "শয়তানের বিরুদ্ধে প্রতিরোধের প্রতীক",
    },
    {
      name: "কুরবানি",
      description: "জিলহজ্জ মাসের ১০, ১১, ১২ তারিখে পশু জবেহ করা।",
      details:
        "হজ্জে কুরবানি করা অত্যন্ত সুন্নত। এটি ইবরাহিম (আ.) ও ইসমাঈল (আ.)-এর ত্যাগের স্মৃতি। কুরবানির মাংস দরিদ্রদের মধ্যে বিতরণ করা হয়।",
      time: "জিলহজ্জ ১০-১২ তারিখ",
      importance: "আল্লাহর জন্য ত্যাগ ও দানশীলতার শিক্ষা",
    },
    {
      name: "চুল কাটা/মুন্ডন",
      description: "হজ্জের নিষেধাজ্ঞা থেকে মুক্তির প্রতীক।",
      details:
        "কুরবানি শেষ হওয়ার পরে চুল কাটা বা মুন্ডন করা হয়। পুরুষদের জন্য মুন্ডন করা সুপারিশকৃত, নারীদের জন্য সামান্য চুল কাটা যথেষ্ট। এই ক্রিয়ার পর ইহরামের কিছু নিষেধাজ্ঞা উঠে যায়।",
      time: "জিলহজ্জ ১০ তারিখের পরে",
      importance: "হজ্জের সম্পূর্ণতা এবং পবিত্রতার প্রতীক",
    },
  ];

  const hadiths = [
    {
      text: "প্রকৃতভাবে হজ্জ সম্পন্ন করলে মানুষ পূর্ণ পবিত্রতা লাভ করে এবং পূর্ববর্তী সমস্ত গুনাহ থেকে মুক্ত হয়।",
      reference: "সহীহ বুখারী, হাদীস ১৫২১; সহীহ মুসলিম, হাদীস ১৩৫০",
      importance: "উচ্চ",
    },
    {
      text: "হজ্জ ইসলামের পাঁচটি স্তম্ভের মধ্যে একটি। যে ব্যক্তি আল্লাহর জন্য হজ্জ করে এবং অশ্লীলতা ও গুনাহ থেকে বিরত থাকে, সে হজ্জের পর সম্পূর্ণ পবিত্র হয়ে ফিরে আসে।",
      reference: "সহীহ বুখারী, হাদীস ১৫২১; সহীহ মুসলিম, হাদীস ১৩৫০",
      importance: "উচ্চ",
    },
    {
      text: "আরাফাতের দিনে করা দোয়া অত্যন্ত গ্রহণযোগ্য। রাসূলুল্লাহ (সা.) বলেছেন, 'আরাফাতের দিনের দোয়া সর্বোত্তম দোয়া।'",
      reference: "সুনান তিরমিজী, হাদীস ৩৫৮৫",
      importance: "মাধ্যম",
    },
    {
      text: "উমরা এবং হজ্জ পরপর সম্পন্ন করলে গুনাহ মাফ হয়।",
      reference: "সহীহ মুসলিম, হাদীস ১৩৫০; সহীহ বুখারী, হাদীস ১৫৩০",
      importance: "মাধ্যম",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "পূর্ণাঙ্গ পাপমুক্তি",
      description: "প্রকৃত হজ্জের মাধ্যমে পূর্ববর্তী সমস্ত গুনাহ মাফ হয়",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "জীবন পরিবর্তন",
      description: "হজ্জ জীবনে শৃঙ্খলা ও নিয়মিততা আনে",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "আধ্যাত্মিক পরিবর্তন",
      description: "আত্মাকে প্রশান্তি ও ঈমানী শক্তি প্রদান করে",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "বিশ্ব মুসলিম ঐক্য",
      description: "সারা বিশ্বের মুসলিমদের মধ্যে ভ্রাতৃত্ববোধ গড়ে ওঠে",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "জান্নাতের প্রতিশ্রুতি",
      description: "হজ্জ মাবরুরের প্রতিদান হলো জান্নাত",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "দোয়া কবুল",
      description: "হজ্জের বিভিন্ন স্থানে দোয়া বিশেষভাবে কবুল হয়",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "আল্লাহর দিদার লাভ",
      description: "হজ্জের মাধ্যমে আল্লাহর সান্নিধ্য লাভ করা যায়",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "আত্মিক পরিশুদ্ধি",
      description: "মন ও আত্মার গভীর পরিশুদ্ধি ঘটে",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const TabButton = ({ tab, title, icon }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
        !activeTab
          ? `bg-gradient-to-r ${hajjDetails[tab].color} text-white shadow-lg transform scale-105`
          : "  hover:bg-gray-50 shadow-md"
      }`}
    >
      {icon}
      <span className="font-semibold">{title}</span>
    </button>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0  rounded-full blur-3xl transform scale-150"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6 shadow-2xl">
              <FaMosque className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              ইসলামে হজ্জের গুরুত্ব
            </h1>
            <p className="text-xl md:text-2xl  max-w-4xl mx-auto leading-relaxed  backdrop-blur-sm rounded-2xl p-6 ">
              হজ্জ হলো ইসলামের পাঁচটি স্তম্ভের মধ্যে পঞ্চম স্তম্ভ। এটি শুধু একটি
              ইবাদতই নয়, বরং একটি comprehensive spiritual journey যা মুমিনের
              জীবনে গভীর transformation আনে।
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {/* Left Column - Hajj Rituals */}
          <div className="lg:col-span-1">
            <Card className="p-4 sticky top-6 border rounded-2xl shadow-md ">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-700">
                <Clock className="w-7 h-7 text-green-600" />
                হজ্জের রীতিনীতি
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {hajjRituals.map((ritual, index) => (
                  <AccordionItem key={ritual.name} value={`ritual-${index}`}>
                    <AccordionTrigger className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-lg text-gray-800">
                          {ritual.name}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4  rounded-xl">
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {ritual.details}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                        <Badge variant="secondary">⏱️ {ritual.time}</Badge>
                        <Badge variant="outline">⭐ {ritual.importance}</Badge>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          <div className="">
            <Card className=" overflow-hidden">
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${hajjDetails[activeTab].color} p-6 text-white`}
              >
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                  {hajjDetails[activeTab].icon}
                  {hajjDetails[activeTab].title}
                </h3>
                <p className="mt-2 opacity-90 text-sm md:text-base">
                  হজ্জের {hajjDetails[activeTab].title.toLowerCase()} সম্পর্কে
                  বিস্তারিত
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-6">
                  {hajjDetails[activeTab].content.map((item, index) => (
                    <Card
                      key={index}
                      className="group relative overflow-hidden transition-all duration-300 rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-bold text-lg md:text-xl flex items-center gap-3 text-gray-800">
                            <Target className="w-5 h-5 text-green-600" />
                            {item.title}
                          </h4>
                          <Badge variant="secondary">{index + 1}</Badge>
                        </div>

                        <p className=" mb-4 leading-relaxed text-base md:text-lg">
                          {item.description}
                        </p>

                        <Card className="bg-green-50 rounded-lg border-0 border-l-4 border-green-400 p-4 mb-4">
                          <p className=" text-sm md:text-base">
                            {item.detailed}
                          </p>
                        </Card>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.benefits.map((benefit, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800"
                            >
                              ✓ {benefit}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-green-700 bg-green-50 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          {item.reference}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Hadith Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-300 via-cyan-200 to-teal-300 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-6">
                {hadiths.map((hadith, index) => (
                  <Card
                    key={index}
                    className="bg-white/30 rounded-2xl transition-all duration-300 "
                  >
                    <CardHeader className="flex flex-row items-start gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          hadith.importance === "উচ্চ"
                            ? "bg-red-400"
                            : hadith.importance === "মাধ্যম"
                            ? "bg-yellow-400"
                            : "bg-green-400"
                        }`}
                      >
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-relaxed mb-4">
                          "{hadith.text}"
                        </CardTitle>
                        <div className="flex items-center justify-between">
                          <p className="text-sm">{hadith.reference}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            হজ্জের উপকারিতা ও ফলাফল
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Gradient background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-10`}
                ></div>

                <CardHeader className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <span className="text-white text-2xl">{benefit.icon}</span>
                  </div>
                  <CardTitle className="text-center text-lg font-bold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* হজ্জের প্রস্তুতি */}
          <Card className="bg-gradient-to-br from-green-300 via-cyan-200 to-teal-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                হজ্জের প্রস্তুতি
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center gap-2">
                  • আর্থিক প্রস্তুতি (হালাল উপার্জন)
                </li>
                <li className="flex items-center gap-2">
                  • শারীরিক প্রস্তুতি (ফিটনেস)
                </li>
                <li className="flex items-center gap-2">
                  • মানসিক প্রস্তুতি (ধৈর্য ও সহনশীলতা)
                </li>
                <li className="flex items-center gap-2">
                  • ইলমী প্রস্তুতি (হজ্জের নিয়ম শেখা)
                </li>
                <li className="flex items-center gap-2">
                  • আধ্যাত্মিক প্রস্তুতি (তাওবা ও ইস্তেগফার)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* হজ্জের পরের জীবন */}
          <Card className="bg-gradient-to-br from-purple-300 via-rose-200 to-pink-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <FaHandsHelping className="w-6 h-6" />
                হজ্জের পরের জীবন
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center gap-2">
                  • নিয়মিত নামাজ ও ইবাদত
                </li>
                <li className="flex items-center gap-2">
                  • উত্তম চরিত্র ও আচরণ
                </li>
                <li className="flex items-center gap-2">
                  • সামাজিক দায়িত্ব পালন
                </li>
                <li className="flex items-center gap-2">• দাওয়াত ও তাবলীগ</li>
                <li className="flex items-center gap-2">• ইসলামী জীবনযাপন</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced References */}
        <Card className="rounded-3xl ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-green-600" />
              তথ্যসূত্র ও গ্রন্থপঞ্জি
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* পবিত্র কুরআন */}
              <div>
                <h4 className="font-semibold text-lg mb-3 ">পবিত্র কুরআন</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• সূরা আল-বাকারাহ (২:১২৫-২০৩)</li>
                  <li>• সূরা আল-ইমরান (৩:৯৬-৯৭)</li>
                  <li>• সূরা আল-হজ্জ (২২:২৬-৩৭)</li>
                  <li>• সূরা আল-মায়িদাহ (৫:১-৩)</li>
                </ul>
              </div>

              {/* হাদীস গ্রন্থ */}
              <div>
                <h4 className="font-semibold text-lg mb-3 ">হাদীস গ্রন্থ</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• সহীহ বুখারী (হজ্জ অধ্যায়)</li>
                  <li>• সহীহ মুসলিম (হজ্জ অধ্যায়)</li>
                  <li>• সুনান আবু দাউদ</li>
                  <li>• সুনান তিরমিজী</li>
                  <li>• সুনান নাসাঈ</li>
                  <li>• সুনান ইবনে মাজাহ</li>
                </ul>
              </div>

              {/* ফিকহ গ্রন্থ */}
              <div>
                <h4 className="font-semibold text-lg mb-3 ">ফিকহ গ্রন্থ</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• ফিকহুস সুন্নাহ (সাইয়েদ সাবিক)</li>
                  <li>• বিধ্বস্তের হজ্জ (ড. জাকির নায়েক)</li>
                  <li>• হজ্জ ও উমরা গাইড</li>
                  <li>• ইসলামিক ফাউন্ডেশন প্রকাশনা</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-12 rounded-3xl bg-gradient-to-br from-blue-300 via-purple-100 to-indigo-300 ">
          <CardContent className="text-center">
            <p className="text-lg  mb-8 leading-relaxed">
              "মানুষের মধ্যে যারা বাইতুল্লাহ (আল্লাহর ঘর)-এ পৌঁছার সামর্থ্য
              রাখে, তাদের উপর আল্লাহর জন্য এই ঘরের হজ্জ করা ফরজ।" (সূরা
              আল-ইমরান, ৩:৯৭)
            </p>

            <div className="bg-gray-100 rounded-2xl border-l-4 border-green-400 p-6 inline-block">
              <p className="text-gray-800 text-base">
                "এক উমরা থেকে পরবর্তী উমরা পর্যন্ত মধ্যবর্তী সময়ের গুনাহের জন্য
                কাফফারা।" <br /> — সহীহ মুসলিম, হাদীস : ১৩৫০
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HajjPage;
