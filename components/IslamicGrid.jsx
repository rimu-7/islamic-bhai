import Link from "next/link";
import Image from "next/image";
import data from "@/public/ok.json";
import ShortHadiths from "./ShortHadiths";

const IslamicTopicsGrid = () => {
  const topics = data.topics;
  return (
    <div className="min-h-screen py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
          ইসলামিক লার্নিং হাব
        </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            আপনার ঈমান এবং বোধগম্যতাকে শক্তিশালী করার জন্য খাঁটি ইসলামিক জ্ঞান
            এবং সম্পদ অন্বেষণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link href={topic.path} key={index}>
              <div
                className={`${topic.bgColor}  ${topic.borderColor} ${topic.hoverEffect} p-6 h-full flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
              >
                <div>
                  <div className="relative w-16 h-16 mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    <Image
                      src={topic.icon}
                      alt={topic.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 font-playfair ${topic.textColor}`}
                  >
                    {topic.title}
                  </h3>
                  <p className={`text-sm mb-4 ${topic.textColor}`}>
                    {topic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <ShortHadiths/>
        </div>
      </div>
    </div>
  );
};

export default IslamicTopicsGrid;
