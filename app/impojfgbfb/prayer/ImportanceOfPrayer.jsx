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
} from "lucide-react";
import { FaMosque } from "react-icons/fa";

const ImportanceOfPrayer = () => {
  const defaultTab = "spiritual";

  const prayerDetails = {
    spiritual: {
      title: "আধ্যাত্মিক গুরুত্ব",
      icon: <Heart className="w-6 h-6" />,
      content: [
        {
          title: "আল্লাহর সাথে সংযোগ",
          description:
            "সালাত হলো আল্লাহর সাথে সরাসরি কথোপকথনের মাধ্যম। রাসূলুল্লাহ (সা.) বলেছেন, 'বান্দা তার প্রভুর সবচেয়ে নিকটবর্তী হয় সালাতের সময়।' (সহীহ মুসলিম)",
          reference: "সহীহ মুসলিম, হাদীস ৫৮২",
        },
        {
          title: "আত্মশুদ্ধি",
          description:
            "নিয়মিত সালাত অন্তর পরিশুদ্ধ করে এবং গুনাহ থেকে বিরত রাখে। আল্লাহ বলেন, 'নিশ্চয় সালাত অশ্লীল ও মন্দ কাজ থেকে বিরত রাখে।' (সূরা আল-আনকাবুত, ২৯:৪৫)",
          reference: "কুরআন ২৯:৪৫",
        },
        {
          title: "আধ্যাত্মিক শান্তি",
          description:
            "সালাত মুমিনের জন্য প্রশান্তির উৎস। আল্লাহ বলেন, 'নিশ্চয়ই ঈমানদারগন সফলকাম হয়েছে, যারা তাদের সালাতে বিনয়-নম্র।' (সূরা আল-মুমিনুন, ২৩:১-২)",
          reference: "কুরআন ২৩:১-২",
        },
      ],
    },
    social: {
      title: "সামাজিক গুরুত্ব",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          title: "সমাজ সংহতি",
          description:
            "জামাতের সাথে সালাত পড়া মুসলিম উম্মাহর ঐক্য ও ভ্রাতৃত্ববোধ শক্তিশালী করে। রাসূলুল্লাহ (সা.) বলেছেন, 'জামাতের সালাত একাকী সালাতের চেয়ে ২৭ গুণ উত্তম।' (সহীহ বুখারী)",
          reference: "সহীহ বুখারী, হাদীস ৬৪৫",
        },
        {
          title: "সমতা প্রতিষ্ঠা",
          description:
            "সালাতের কাতারে ধনী-দরিদ্র, কালো-সাদা সবাই একসাথে দাঁড়ায়, যা সামাজিক সমতা ও ন্যায়বিচারের শিক্ষা দেয়।",
          reference: "রাসূলুল্লাহ (সা.)-এর শেষ ভাষণ",
        },
        {
          title: "শৃঙ্খলা শিক্ষা",
          description:
            "নিয়মিত ওয়াক্তমতো সালাত আদায় সামাজিক শৃঙ্খলা ও সময়ানুবর্তিতা শিক্ষা দেয়।",
          reference: "সূরা আন-নিসা, ৪:১০৩",
        },
      ],
    },
    moral: {
      title: "নৈতিক গুরুত্ব",
      icon: <Scale className="w-6 h-6" />,
      content: [
        {
          title: "চরিত্র গঠন",
          description:
            "সালাত মানুষের মধ্যে সহনশীলতা, ধৈর্য ও নৈতিকতা বিকাশে সহায়তা করে।",
          reference: "সূরা আল-আনকাবুত, ২৯:৪৫",
        },
        {
          title: "আত্মসংযম",
          description:
            "দৈনিক পাঁচ ওয়াক্ত সালাত মানুষের প্রবৃত্তি নিয়ন্ত্রণে সাহায্য করে।",
          reference: "সহীহ মুসলিম, হাদীস ২৩৩",
        },
        {
          title: "সততা ও আমানতদারী",
          description:
            "যে ব্যক্তি সালাতের হক আদায় করে, সে অন্যান্য কাজেও সততা বজায় রাখে।",
          reference: "সহীহ বুখারী, হাদীস ৫২৭",
        },
      ],
    },
  };

  const prayerTimes = [
    {
      name: "ফজর",
      time: "ভোর",
      significance: "নতুন দিনের শুরু আল্লাহর স্মরণে",
      verses: "সূরা ইসরা, ১৭:৭৮",
    },
    {
      name: "জোহর",
      time: "দুপুর",
      significance: "কাজের মধ্যে আল্লাহর স্মরণ",
      verses: "সূরা ত্বহা, ২০:১৩০",
    },
    {
      name: "আসর",
      time: "বিকাল",
      significance: "দিনের শেষভাগের কৃতজ্ঞতা",
      verses: "সূরা বনি ইসরাইল, ১৭:৭৮",
    },
    {
      name: "মাগরিব",
      time: "সূর্যাস্ত",
      significance: "দিনের সমাপ্তি ও রাতের শুরু",
      verses: "সূরা হুদ, ১১:১১৪",
    },
    {
      name: "ইশা",
      time: "রাত",
      significance: "দিনের শেষ ইবাদত",
      verses: "সূরা নুর, ২৪:৫৮",
    },
  ];

  const hadiths = [
    {
      text: "কিয়ামতের দিন বান্দার আমলসমূহের মধ্যে সর্বপ্রথম সালাত সম্পর্কে জিজ্ঞাসা করা হবে।",
      reference: "সুনান তিরমিজী, হাদীস ৪১৩",
    },
    {
      text: "সালাত হলো ইসলামের স্তম্ভ। যে ব্যক্তি তা প্রতিষ্ঠা করল, সে ইসলাম প্রতিষ্ঠা করল; আর যে তা ধ্বংস করল, সে ইসলাম ধ্বংস করল।",
      reference: "সহীহ ইবনে খুজাইমাহ, হাদীস ১৪৬৮",
    },
    {
      text: "বান্দা ও কুফরের মধ্যে পার্থক্য হলো সালাত ত্যাগ করা।",
      reference: "সহীহ মুসলিম, হাদীস ১৩৪",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <FaMosque className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-5xl text-center bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
            ইসলামে সালাতের গুরুত্ব
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            সালাত বা নামাজ ইসলামের দ্বিতীয় স্তম্ভ এবং মুমিনের মিরাজস্বরূপ। এটি
            আল্লাহর সাথে বান্দার সরাসরি সম্পর্ক প্রতিষ্ঠার সর্বশ্রেষ্ঠ মাধ্যম।
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Prayer Times */}
          <div className="lg:col-span-1">
            <div className=" rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6  flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                সালাতের ওয়াক্তসমূহ
              </h2>
              <div className="space-y-4">
                {prayerTimes.map((prayer) => (
                  <div
                    key={prayer.name}
                    className="p-4 bg-green-50 rounded-lg border-2 border-green-100"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg ">
                        {prayer.name}
                      </span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {prayer.time}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">
                      {prayer.significance}
                    </p>
                    <p className="text-xs text-green-700">{prayer.verses}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Default Tab */}
          <div className="lg:col-span-2">
            <div className=" rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 ">
                  {prayerDetails[defaultTab].title}
                </h3>
                <div className="space-y-6">
                  {prayerDetails[defaultTab].content.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
                    >
                      <h4 className="font-semibold text-lg  mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-600" />
                        {item.title}
                      </h4>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block">
                        <BookOpen className="w-3 h-3 inline mr-1" />
                        {item.reference}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hadith Section */}
        <div className="mb-12">
          <div className=" rounded-2xl bg-gradient-to-br from-green-300 via-cyan-200 to-teal-300 shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6" />
              রাসূলুল্লাহ (সা.)-এর বাণী
            </h2>
            <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-6">
              {hadiths.map((hadith, index) => (
                <div
                  key={index}
                  className="/40 backdrop-blur-sm rounded-xl p-6"
                >
                  <p className="text-lg mb-3 leading-relaxed">
                    "{hadith.text}"
                  </p>
                  <p className=" text-sm">{hadith.reference}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-green-300 via-cyan-100 to-teal-300  rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">গুনাহ থেকে সুরক্ষা</h3>
            <p className="text-gray-600 text-sm">
              সালাত মানুষকে অশ্লীল ও মন্দ কাজ থেকে বিরত রাখে
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-300 via-purple-100 to-indigo-300 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full  flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">নিয়মিত অনুশীলন</h3>
            <p className="text-gray-600 text-sm">
              দৈনিক ৫ ওয়াক্ত জীবনকে শৃঙ্খলিত করে
            </p>
          </div>

          <div className="text-center p-6  rounded-2xl bg-gradient-to-br from-purple-300 via-rose-100 to-pink-300 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">আধ্যাত্মিক শান্তি</h3>
            <p className="text-gray-600 text-sm">
              মনের অশান্তি দূর করে প্রশান্তি আনে
            </p>
          </div>

          <div className="text-center p-6  rounded-2xl bg-gradient-to-br from-yellow-300 via-orange-100 to-amber-300 shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">সমাজ সংহতি</h3>
            <p className="text-gray-600 text-sm">
              জামাতের মাধ্যমে সামাজিক বন্ধন শক্তিশালী করে
            </p>
          </div>
        </div>

        {/* Quranic Verse */}
        <div className="text-center  rounded-2xl shadow-lg p-8 border-2 border-green-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold  mb-4">কুরআনের বাণী</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              "নিশ্চয় সালাত মুমিনদের উপর নির্দিষ্ট সময়ে ফরজ করা হয়েছে।"
            </p>
            <p className="text-green-700 font-semibold">
              সূরা আন-নিসা, আয়াত ১০৩
            </p>
          </div>
        </div>

        {/* References */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 ">তথ্যসূত্র</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <ul className="space-y-2">
              <li>• কুরআন মাজিদ - বিভিন্ন সূরা</li>
              <li>• সহীহ বুখারী - ইমাম বুখারী</li>
              <li>• সহীহ মুসলিম - ইমাম মুসলিম</li>
              <li>• সুনান আবু দাউদ - ইমাম আবু দাউদ</li>
            </ul>
            <ul className="space-y-2">
              <li>• সুনান তিরমিজী - ইমাম তিরমিজী</li>
              <li>• রিয়াদুস সালিহীন - ইমাম নববী</li>
              <li>• ফিকহুস সুন্নাহ - সাইয়িদ সাবিক</li>
              <li>• ইসলামিক ফাউন্ডেশন প্রকাশনা</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportanceOfPrayer;
