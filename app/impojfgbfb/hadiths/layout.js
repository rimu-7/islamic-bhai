// app/layout.js
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "হাদিসের সমাহার - ইসলামিক ভাই",
  description: "বিশ্বস্ত হাদিস সংগ্রহের বাংলা অনুবাদ সহ বিশদ তথ্য দেখুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={inter.className}>
        <header className=" p-4 mt-2">
          <div className="container mx-auto flex justify-between items-center">
            <form action="/search" method="GET" className="flex">
              <input
                name="q"
                type="search"
                placeholder="হাদিস খুঁজুন..."
                className="p-2 rounded-l outline focus:outline-2 text-black w-64"
                required
              />
              <button
                type="submit"
                className="bg-green-400 p-2 rounded-r hover:bg-green-500 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
