"use client";

import { X } from "lucide-react";
import { Cross } from "lucide-react";
import { useState } from "react";

const prayersData = {
  fajr: {
    title: "ফজরের নামাজ",
    rakat: "২ রাকাত সুন্নাত + ২ রাকাত ফরজ",
    time: "ভোর থেকে সূর্যোদয়ের আগে পর্যন্ত",
    fazilat:
      "রাসূল ﷺ বলেছেন, “যে ফজরের নামাজ আদায় করল, সে আল্লাহর জিম্মায় রইল।”",
    details: {
      sunnah: [
        "নিয়ত: নাওয়াইতু আন উসাল্লি লিল্লাহি তা'আলা রাকআতাই সুন্নাতি সালাতিল ফজর",
        "তাকবিরে তাহরিমা: اللهُ أَكْبَرُ (আল্লাহু আকবার)",
        "সানা: سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ...",
        "সূরা ফাতিহা ও অন্য সূরা (যেমন সূরা ইখলাস)",
        "রুকু: سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        "সিজদাহ: سُبْحَانَ رَبِّيَ الْأَعْلَى",
        "শেষ বৈঠকে: তাশাহহুদ, দরুদ, দোয়া, সালাম",
      ],
      farz: ["একই নিয়মে পড়ুন, কিরাত নিঃশব্দে পড়তে হবে।"],
    },
  },
  dhuhr: {
    title: "যোহরের নামাজ",
    rakat: "৪ রাকাত সুন্নাত + ৪ রাকাত ফরজ + ২ রাকাত সুন্নাত",
    time: "সূর্য হেলে পড়া থেকে প্রতিটি বস্তুর ছায়া সমান হওয়া পর্যন্ত",
    details: {
      sunnah_before: ["ফজরের সুন্নাতের মতোই পড়ুন, তবে ৪ রাকাত।"],
      farz: [
        "নিয়ত করুন: নাওয়াইতু আন উসাল্লি লিল্লাহি তা’আলা রাকআরবা সালাতাদ-যোহর ফরজান...",
        "প্রথম দুই রাকাত: সূরা ফাতিহা ও অন্য সূরা নিঃশব্দে।",
        "শেষ দুই রাকাত: শুধু সূরা ফাতিহা নিঃশব্দে।",
        "শেষ বৈঠকে: তাশাহহুদ, দরুদ ও দোয়া পড়ুন।",
      ],
      sunnah_after: ["ফজরের সুন্নাতের মতোই ২ রাকাত পড়ুন।"],
    },
  },
  asr: {
    title: "আসরের নামাজ",
    rakat: "৪ রাকাত ফরজ",
    time: "যোহরের সময় শেষ হওয়ার পর থেকে সূর্যাস্ত পর্যন্ত",
    fazilat:
      "রাসূল ﷺ বলেছেন, “যে আসরের নামাজ আদায় করল, তার জন্য জান্নাত ওয়াজিব।”",
    details: {
      farz: ["যোহরের ফরজের মতোই পড়ুন, সব কিরাত নিঃশব্দে।"],
    },
  },
  maghrib: {
    title: "মাগরিবের নামাজ",
    rakat: "৩ রাকাত ফরজ + ২ রাকাত সুন্নাত",
    time: "সূর্যাস্তের পর থেকে আকাশের লাল আভা মিলিয়ে যাওয়া পর্যন্ত",
    details: {
      farz: [
        "প্রথম দুই রাকাত: সূরা ফাতিহা ও অন্য সূরা সশব্দে।",
        "তৃতীয় রাকাত: শুধু সূরা ফাতিহা নিঃশব্দে।",
        "শেষ বৈঠকে: তাশাহহুদ, দরুদ ও দোয়া পড়ুন।",
      ],
      sunnah: ["ফজরের সুন্নাতের মতোই ২ রাকাত পড়ুন।"],
    },
  },
  isha: {
    title: "এশার নামাজ",
    rakat: "৪ রাকাত ফরজ + ২ রাকাত সুন্নাত + ৩ রাকাত বিতর",
    time: "মাগরিবের সময় শেষ হওয়ার পর থেকে ফজরের ওয়াক্ত শুরু হওয়া পর্যন্ত",
    details: {
      farz: ["যোহরের ফরজের মতোই পড়ুন, তবে প্রথম দুই রাকাত সশব্দে।"],
      sunnah: ["ফজরের সুন্নাতের মতোই ২ রাকাত পড়ুন।"],
      witr: [
        "প্রথম দুই রাকাত: সাধারণ নামাজের মতো পড়ুন।",
        "তৃতীয় রাকাত: সূরা ফাতিহার পর দোয়া কুনুত পড়ুন।",
        "শেষ বৈঠকে: তাশাহহুদ, দরুদ, দোয়া ও সালাম।",
      ],
    },
  },
  eid: {
    title: "ঈদের নামাজ",
    rakat: "২ রাকাত (ফরজ নয়, ওয়াজিব বা সুন্নাত মুয়াক্কাদাহ)",
    time: "সূর্য উদয় হয়ে উঁচু হওয়ার পর থেকে যোহরের আগে পর্যন্ত",
    details: {
      steps: [
        "নিয়ত করুন: নাওয়াইতু আন উসাল্লি লিল্লাহি তা’আলা রাক‘আতাই সালাতিল ঈদ...",
        "প্রথম রাকাতে তাকবিরে তাহরিমার পর সানা, তারপর অতিরিক্ত ৩ তাকবির দিন।",
        "সূরা ফাতিহা ও অন্য সূরা (যেমন সূরা আল-আলা) পড়ুন।",
        "রুকু, সিজদাহ করুন এবং দ্বিতীয় রাকাতে কিরাতের আগে আবার ৩ তাকবির দিন।",
        "দ্বিতীয় রাকাত শেষে তাশাহহুদ, দরুদ ও দোয়া পড়ে সালাম ফিরান।",
        "নামাজের পর খুতবা শোনা সুন্নাত।",
      ],
    },
  },
  janaza: {
    title: "জানাজার নামাজ",
    rakat: "রাকাত নেই – এটি কেবল তাকবির ও দোয়ার সমষ্টি",
    time: "যেকোনো সময়, তবে মাকরুহ সময় ব্যতীত",
    details: {
      steps: [
        "নিয়ত করুন: নাওয়াইতু আন উসাল্লি লিল্লাহি তা’আলা সালাতাল জানাযা...",
        "১ম তাকবির: তাকবিরের পর সানা পড়ুন।",
        "২য় তাকবির: দরুদ শরীফ পড়ুন।",
        "৩য় তাকবির: মৃতের জন্য দোয়া করুন (যেমন: আল্লাহুম্মাগফির লিহাইয়িনা ওয়া মাইয়িতিনা…).",
        "৪র্থ তাকবির: অল্প বিরতি নিয়ে ডানে-বামে সালাম ফিরান।",
      ],
    },
  },
};

const islamicTexts = {
  surah: {
    sana: {
      name: "সানা",
      arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
      transliteration:
        "সুবহানাকা আল্লাহুম্মা ওয়া বিহামদিকা ওয়া তাবারাকাসমুকা, ওয়া তাআলা জাদ্দুকা ওয়া জাল্লা ছানাউকা ওয়া লা ইলাহা গাইরুকা",
      meaning_bn:
        "হে আল্লাহ! সকল প্রশংসা আপনার। আপনি সব ধরনের ত্রুটিবিচ্যুতি হতে পবিত্র। আপনার নাম মঙ্গল ও বরকতপূর্ণ, আপনার মহত্ত্ব অতি বিরাট, আপনার প্রশংসা অতি মহত্ত্বপূর্ণ এবং একমাত্র আপনি ছাড়া আর কোনো প্রভু নেই।",
    },
    durud: {
      name: "দুরুদ",
      arabic: "اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ. وَّعَلٰى اٰلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى اِبْرَاهِيْمَ وَعَلٰى اٰلِ اِبْرَاهِيْمَ' اِنَّكَ حَمِيْدٌ مَّجِيْدٌ. اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ. وَّعَلٰى اٰلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى اِبْرَاهِيْمَ وَعَلٰى اٰلِ اِبْرَاهِيْمَ. اِنَّكَ حَمِيْدٌ مَّجِيْدٌ.",
      transliteration:
        "আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিউঁ ওয়া আলা-আ-লি মুহাম্মাদিন কামা সাল্লাইতা আলা ইবরাহিমা ওয়া আলা–আ-লি ইবরাহিমা ইন্নাকা হামিদুম মাজিদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিউঁ ওয়া আলা-আ-লি মুহাম্মাদিন কামা বারাকতা আলা ইবরাহিমা ওয়া আলা–আ-লি ইবরাহিমা ইন্নাকা হামিদুম মাজিদ।",
      meaning_bn:
        "হে আল্লাহ! মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম ও তাঁর পরিবারবর্গের ওপর শান্তি বর্ষণ করো, যেভাবে ইবরাহিম আলাইহিস সালাম ও তাঁর পরিবারবর্গের ওপর শান্তি বর্ষণ করেছিলে। নিশ্চয়ই তুমি অতি প্রশংসিত মহিমান্বিত। হে আল্লাহ! মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম ও তাঁর পরিবারবর্গের ওপর বরকত দান করো, যেভাবে ইবরাহিম আলাইহিস সালাম ও তাঁর পরিবারবর্গের ওপর বরকত দান করেছিলে। নিশ্চয়ই তুমি অতি প্রশংসিত মহিমান্বিত।’ (নাসাঈ ১২৯১)",
    },
    al_fatiha: {
      name: "সূরা আল-ফাতিহা",
      arabic:
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ • الرَّحْمَٰنِ الرَّحِيمِ • مَالِكِ يَوْمِ الدِّينِ • إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ • اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ • صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      transliteration:
        "বিসমিল্লাহির রাহমানির রাহিম। আলহামদু লিল্লাহি রাব্বিল আলামিন। আররাহমানির রাহিম। মালিকি ইয়াওমিদ্দীন। ইইয়াকা নাবুদু ওয়া ইইয়াকা নাসতাঈন। ইহদিনাস সিরাতাল মুস্তাকীম। সিরাতাল্লাযীনা আনআমতা আলাইহিম গইরিল মাগদুবি আলাইহিম ওয়ালাদ্দাল্লীন।",
      meaning_bn:
        "শুরু করছি আল্লাহর নামে, যিনি পরম করুণাময়, অতি দয়ালু। সমস্ত প্রশংসা আল্লাহর, যিনি সমস্ত জগতের পালনকর্তা। পরম করুণাময়, অতি দয়ালু। বিচার দিনের মালিক। আমরা কেবল তোমারই ইবাদত করি এবং তোমারই সাহায্য চাই। আমাদের সরল পথে পরিচালিত করো – তাদের পথে যাদের প্রতি তুমি অনুগ্রহ করেছ, তাদের পথে নয় যাদের প্রতি তোমার গজব নাযিল হয়েছে, এবং যারা পথভ্রষ্ট।",
    },
    al_ikhlas: {
      name: "সূরা আল-ইখলাস",
      arabic:
        "قُلْ هُوَ اللَّهُ أَحَدٌ • اللَّهُ الصَّمَدُ • لَمْ يَلِدْ وَلَمْ يُولَدْ • وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      transliteration:
        "কুল হুয়াল্লাহু আহাদ। আল্লাহুস সামাদ। লাম ইয়ালিদ ওয়ালাম ইউলাদ। ওয়ালাম ইয়াকুন লাহু কুফুওয়ান আহাদ।",
      meaning_bn:
        "বলুন, তিনিই আল্লাহ, এক। আল্লাহ অমুখাপেক্ষী। তিনি জন্ম দেননি এবং জন্মগ্রহণও করেননি। এবং তাঁর সমতুল্য কেউ নেই।",
    },
  },
  tashahhud: {
    arabic:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "আত্তাহিয়্যাতু লিল্লাহি ওয়াসসালাওয়াতু ওয়াত্তাইয়্যিবাতু। আসসালামু আলাইকা আইয়্যুহান-নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু। আসসালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস সালিহীন। আশহাদু আল্লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসুলুহু।",
    meaning_bn:
      "সমস্ত অভিবাদন, ইবাদত ও পবিত্র কর্ম আল্লাহর জন্য। হে নবী, আপনার প্রতি শান্তি, আল্লাহর রহমত ও বরকত বর্ষিত হোক। আমাদের উপর ও আল্লাহর সৎ বান্দাদের উপর শান্তি বর্ষিত হোক। আমি সাক্ষ্য দিচ্ছি যে আল্লাহ ছাড়া কোনো উপাস্য নেই এবং আমি সাক্ষ্য দিচ্ছি যে মুহাম্মদ তাঁর বান্দা ও রাসূল।",
  },
  salawat: {
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
    transliteration:
      "আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন ওয়া আলা আালি মুহাম্মাদ, কামা সাল্লাইতা আলা ইবরাহীমা ওয়া আলা আালি ইবরাহীম, ইন্নাকা হামিদুম মাজিদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিন ওয়া আলা আালি মুহাম্মাদ, কামা বারাকতা আলা ইবরাহীমা ওয়া আলা আালি ইবরাহীম, ইন্নাকা হামিদুম মাজিদ।",
    meaning_bn:
      "হে আল্লাহ, মুহাম্মদ ও তাঁর পরিবার-পরিজনের উপর রহমত বর্ষণ করুন, যেমন আপনি ইবরাহিম ও তাঁর পরিবার-পরিজনের উপর রহমত বর্ষণ করেছিলেন। নিশ্চয়ই আপনি প্রশংসনীয় ও গৌরবান্বিত। হে আল্লাহ, মুহাম্মদ ও তাঁর পরিবার-পরিজনের উপর বরকত দিন, যেমন আপনি ইবরাহিম ও তাঁর পরিবার-পরিজনের উপর বরকত দিয়েছিলেন। নিশ্চয়ই আপনি প্রশংসনীয় ও গৌরবান্বিত।",
  },
  duas: {
    rabbana_atina: {
      arabic:
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      transliteration:
        "রাব্বানা আতিনা ফিদ-দুনইয়া হাসানাতাও ওয়া ফিল আখিরাতি হাসানাতাও ওয়া ক্বিনা আজাবান-নার।",
      meaning_bn:
        "হে আমাদের প্রভু, আমাদেরকে দুনিয়াতে কল্যাণ দান কর এবং আখিরাতে কল্যাণ দান কর এবং আমাদেরকে জাহান্নামের শাস্তি থেকে রক্ষা কর।",
    },
    dua_qunoot: {
      arabic:
        "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ...",
      transliteration:
        "আল্লাহুম্মা ইহদিনি ফীমান হাদাইতা, ওয়া আফিনি ফীমান আফাইতা, ওয়া তাওয়াল্লানি ফীমান তাওয়াল্লাইতা...",
      meaning_bn:
        "হে আল্লাহ, যাদের তুমি হিদায়াত দিয়েছ, আমাকে হিদায়াত দাও; যাদের তুমি নিরাপদ করেছ, আমাকে নিরাপদ রাখো; যাদের তুমি অভিভাবক হয়েছ, আমাকে অভিভাবকত্ব দাও...",
    },
  },
};

const PrayerTab = ({ prayerKey, onTabChange }) => {
  const prayer = prayersData[prayerKey];
  if (!prayer) return null;

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderDetails = () => {
    const details = prayer.details;
    return (
      <div className="space-y-4 mt-6">
        {details.sunnah && (
          <AccordionSection
            title="সুন্নাত"
            open={openSections.sunnah}
            onToggle={() => toggleSection("sunnah")}
            items={details.sunnah}
          />
        )}
        {details.farz && (
          <AccordionSection
            title="ফরজ"
            open={openSections.farz}
            onToggle={() => toggleSection("farz")}
            items={details.farz}
          />
        )}
        {details.sunnah_before && (
          <AccordionSection
            title="সুন্নাত (যোহরের আগে)"
            open={openSections.sunnah_before}
            onToggle={() => toggleSection("sunnah_before")}
            items={details.sunnah_before}
          />
        )}
        {details.sunnah_after && (
          <AccordionSection
            title="সুন্নাত (যোহরের পর)"
            open={openSections.sunnah_after}
            onToggle={() => toggleSection("sunnah_after")}
            items={details.sunnah_after}
          />
        )}
        {details.witr && (
          <AccordionSection
            title="বিতর"
            open={openSections.witr}
            onToggle={() => toggleSection("witr")}
            items={details.witr}
          />
        )}
        {details.steps && (
          <AccordionSection
            title="ধাপসমূহ"
            open={openSections.steps}
            onToggle={() => toggleSection("steps")}
            items={details.steps}
          />
        )}
      </div>
    );
  };

  return (
    <div className="bg-green-50 p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4">{prayer.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <InfoCard label="রাকাত" value={prayer.rakat} />
        <InfoCard label="সময়" value={prayer.time} />
      </div>
      {prayer.fazilat && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-yellow-800 font-semibold">
            ফযিলত: {prayer.fazilat}
          </p>
        </div>
      )}
      {renderDetails()}
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-md">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="font-semibold text-gray-900">{value}</p>
  </div>
);

const AccordionSection = ({ title, open, onToggle, items }) => (
  <div className="border border-gray-200 rounded-md">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-t-md"
    >
      <span className="font-medium text-green-700">{title}</span>
      <span
        className={`transform transition-transform ${open ? "rotate-180" : ""}`}
      >
        ▼
      </span>
    </button>
    {open && (
      <div className="p-4 bg-white rounded-b-md space-y-2">
        {items.map((item, idx) => (
          <p key={idx} className="text-gray-700 text-sm leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    )}
  </div>
);

const TextModal = ({
  isOpen,
  onClose,
  title,
  arabic,
  transliteration,
  meaning_bn,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-green-50 rounded-lg p-6 max-w-3xl max-h-[90vh] overflow-y-auto m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <X />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-2xl text-gray-600 mb-2">আরবি:</h3>
            <p className="text-2xl text-right text-green-900 mb-2">{arabic}</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-gray-600 mb-2">তাজবীদ:</h3>
            <p className="text-xl text-gray-700">{transliteration}</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-gray-600 mb-2">অর্থ:</h3>
            <p className="text-xl text-gray-700">{meaning_bn}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IslamicTextsSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const texts = [
    {
      key: "sana",
      title: islamicTexts.surah.sana.name,
      ...islamicTexts.surah.sana,
    },
    {
      key: "durud",
      title: islamicTexts.surah.durud.name,
      ...islamicTexts.surah.durud,
    },
    {
      key: "al_fatiha",
      title: islamicTexts.surah.al_fatiha.name,
      ...islamicTexts.surah.al_fatiha,
    },
    {
      key: "al_ikhlas",
      title: islamicTexts.surah.al_ikhlas.name,
      ...islamicTexts.surah.al_ikhlas,
    },
    { key: "tashahhud", title: "তাশাহহুদ", ...islamicTexts.tashahhud },
    { key: "salawat", title: "সালাওয়াত", ...islamicTexts.salawat },
    {
      key: "rabbana_atina",
      title: "রাব্বানা আতিনা",
      ...islamicTexts.duas.rabbana_atina,
    },
    {
      key: "dua_qunoot",
      title: "দোয়া কুনুত",
      ...islamicTexts.duas.dua_qunoot,
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        সূরা, তাশাহহুদ, সালাওয়াত ও দোয়া
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {texts.map((text) => (
          <button
            key={text.key}
            onClick={() => setActiveModal(text)}
            className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 text-left transition-colors"
          >
            <h3 className="font-semibold text-green-700 mb-2">{text.title}</h3>
            <p className="text-sm text-gray-600">বিস্তারিত দেখুন</p>
          </button>
        ))}
      </div>
      {activeModal && (
        <TextModal
          key={activeModal.key}
          isOpen={true}
          onClose={() => setActiveModal(null)}
          {...activeModal}
        />
      )}
    </div>
  );
};

export default function NamazGuide() {
  const [activeTab, setActiveTab] = useState("fajr");

  const tabs = Object.keys(prayersData);

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-2">
            নামাজের গাইড
          </h1>
          <p className="text-gray-600">
            সহজ এবং ব্যবহারকারী-বান্ধব নামাজের নিয়মাবলী
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? "bg-green-400 text-white drop-shadow-lg"
                  : "bg-white text-green-400 hover:bg-green-50 border border-green-200"
              }`}
            >
              {prayersData[tab].title.split("ের")[0]}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <PrayerTab prayerKey={activeTab} />

        {/* Islamic Texts Section */}
        <IslamicTextsSection />
      </div>
    </div>
  );
}
