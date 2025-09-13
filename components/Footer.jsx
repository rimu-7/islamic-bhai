// components/Footer.js
import { data } from "@/public/data";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const navLinks = data.navLinks;
  const banglaHadiths = data.banglaHadiths;
  const randomHadith =
    banglaHadiths[Math.floor(Math.random() * banglaHadiths.length)];

  return (
    <footer className=" py-12">
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
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="flex items-centertransition-colors hover:text-green-400"
              target={link.target}
              rel={link.rel}
            >
              {link.name}
            </Link>
          ))}
          <Link href={"/about"}>About</Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">আমাদের সাথে যুক্ত হোন</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaYoutube />
            </a>
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

      <div className="border-l-4 border-amber-400 pl-4 mb-8 text-left max-w-md mx-auto">
        <p>
          © {new Date().getFullYear()} ইসলামিক ইনস্পায়ার। সর্বস্বত্ব সংরক্ষিত।
        </p>
        <p className="italic text-gray-700">"{randomHadith.text}"</p>
        <p className="text-sm text-gray-500 mt-1">- {randomHadith.reference}</p>
      </div>
    </footer>
  );
}
