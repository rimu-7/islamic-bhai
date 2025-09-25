import Footer from "@/components/Footer";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import { Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

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
    "Welcome to Islamic Bhai, your one-stop destination for all things Islamic. From prayer times to spiritual guidance, Islamic Bhai is your trusted source for all things Islamic.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <Toaster position="top-center" expand={true} richColors />
        <main id="main" className="max-w-6xl mx-auto px-4">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
