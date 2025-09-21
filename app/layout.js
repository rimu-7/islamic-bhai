import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import { Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: "ইসলামিক ভাই",
  description:
    "ইসলামিক ভাইয়ে আপনাকে, ইসলামিক সব কিছুর জন্য আপনার ওয়ান স্টপ গন্তব্য। নামাজের সময় থেকে আধ্যাত্মিক দিকনির্দেশনা পর্যন্ত, ইসলামিক ভাই সব কিছুর জন্য আপনার বিশ্বস্ত উৎস।",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased bg-white text-black">
        {/* <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a> */}
        <Navbar />
        <Toaster />
        <main id="main" className="max-w-6xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
