import React from "react";
import data from "@/public/ok.json";
import { iconMap } from "@/lib/socialIcons";
import Link from "next/link";

export default function Footer() {
  // Add fallbacks for all data properties
  const navLinks = Array.isArray(data?.navLinks) ? data.navLinks : [];
  const banglaHadiths = Array.isArray(data?.banglaHadiths)
    ? data.banglaHadiths
    : [];
  const socialLinks = Array.isArray(data?.socialMedia) ? data.socialMedia : [];

  // Debug data
  console.log("data:", data);
  console.log("socialLinks:", socialLinks);

  // Select random hadith with fallback
  const randomHadith =
    banglaHadiths.length > 0
      ? banglaHadiths[Math.floor(Math.random() * banglaHadiths.length)]
      : { text: "No hadith available", reference: "N/A" };

  return (
    <footer className="py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            ইসলামিক ইনস্পায়ার
          </h2>
          <p className="text-gray-400">
            ইসলামের সৌন্দর্যের মাধ্যমে হৃদয়কে অনুপ্রাণিত করুন। শিখুন, বেড়ে
            উঠুন এবং প্রতিদিন আপনার ঈমানকে জীবন্ত রাখুন।
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-4">দ্রুত লিংক</h3>
          {navLinks.length > 0 ? (
            navLinks.map((link, index) => (
              <Link
                key={link.path || index}
                href={link.path || "/"}
                className="block transition-colors hover:text-green-400"
                target={link.target || "_self"}
                rel={link.rel || ""}
              >
                {link.name || "Unnamed Link"}
              </Link>
            ))
          ) : (
            <p>No links available</p>
          )}
          <Link href="/about" className="block hover:text-green-400">
            About
          </Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">আমাদের সাথে যুক্ত হোন</h3>
          <div className="flex gap-4 flex-wrap">
            <ul className="flex gap-4 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name]; // Get icon component from iconMap
                if (!Icon) return null; // Skip if no icon found
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className={`flex items-center justify-center ${link.color} p-1 w-8 h-8 text-white rounded-lg text-xl  transform transition-all duration-300 hover:scale-120 hover:rotate-6`}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter / Inspiring Line */}
        <div>
          <h3 className="text-xl font-semibold mb-4">অনুপ্রাণিত থাকুন</h3>
          <p className="text-gray-400 mb-4">
            ইসলামিক অনুপ্রেরণা এবং দৈনন্দিন দোয়ার জন্য সাবস্ক্রাইব করুন।
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="আপনার ইমেইল"
              className="px-4 py-2 rounded outline-2 focus:ring-2 focus:ring-green-400 text-gray-800"
            />
            <button
              type="submit"
              className="bg-green-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-green-500 transition"
            >
              সাবস্ক্রাইব
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-l-4 border-amber-400 pl-4 mb-8 text-left max-w-md mx-auto mt-10">
        <p>
          © {new Date().getFullYear()} ইসলামিক ইনস্পায়ার। সর্বস্বত্ব সংরক্ষিত।
        </p>
        <p className="italic text-gray-700">"{randomHadith.text}"</p>
        <p className="text-sm text-gray-500 mt-1">- {randomHadith.reference}</p>
      </div>
    </footer>
  );
}
