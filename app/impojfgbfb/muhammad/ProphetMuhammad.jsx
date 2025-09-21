"use client";

import { MoveUp, Languages, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ProphetMuhammad({ initialData }) {
  const [language, setLanguage] = useState("bn");
  const [content, setContent] = useState(initialData.content);
  const [sections, setSections] = useState(initialData.sections);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sidebarRef = useRef(null);

  // Fetch when switching language
  useEffect(() => {
    async function fetchContent() {
      if (language === "bn" && content) return; // already have bn
      try {
        setIsLoading(true);
        const wikiBase =
          language === "bn" ? "bn.wikipedia.org" : "en.wikipedia.org";
        const pageTitle = language === "bn" ? "মুহাম্মাদ" : "Muhammad";

        const queryResponse = await fetch(
          `https://${wikiBase}/w/api.php?` +
            new URLSearchParams({
              action: "query",
              titles: pageTitle,
              redirects: "true",
              format: "json",
              origin: "*",
            })
        );
        const queryData = await queryResponse.json();
        const page = Object.values(queryData.query.pages)[0];
        const resolvedTitle = page.title || pageTitle;

        const contentResponse = await fetch(
          `https://${wikiBase}/w/api.php?` +
            new URLSearchParams({
              action: "parse",
              page: resolvedTitle,
              format: "json",
              prop: "text|sections",
              origin: "*",
            })
        );
        const contentData = await contentResponse.json();

        setContent(contentData.parse.text["*"]);
        setSections(contentData.parse.sections);
      } catch (err) {
        setContent(`<p style="color:red">Error: ${err.message}</p>`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchContent();
  }, [language]);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageSwitch = () =>
    setLanguage((prev) => (prev === "bn" ? "en" : "bn"));

  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen relative">
      {/* Floating menu button for all displays */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-20 left-4 z-40 bg-green-600 text-white p-3  hover:bg-green-700 flex items-center justify-center"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar for all displays */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 w-80 h-screen backdrop-blur-2xl shadow-xl transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {language === "bn" ? "বিষয়সূচি" : "Table of Contents"}
          </h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="h-full overflow-y-auto p-4 space-y-2">
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-5 bg-gray-200 animate-pulse rounded"
                />
              ))
            : sections.map((s) => (
                <button
                  key={s.anchor}
                  onClick={() => scrollToSection(s.anchor)}
                  className="block w-full text-left hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50 border-l-2 border-transparent hover:border-green-400 text-sm"
                >
                  {s.line}
                </button>
              ))}
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="pt-10">
        <div className="mx-auto rounded-xl w-full max-w-full overflow-hidden">
          {/* Header with language button */}
          <div className="flex flex-col  justify-between items-start gap-4 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold p-2 bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
              {language === "bn"
                ? "হযরত মুহাম্মদ (সা.)-এর জীবনী"
                : "Biography of Prophet Muhammad (SA)"}
            </h1>
            <button
              onClick={handleLanguageSwitch}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md"
            >
              <Languages size={18} />
              {language === "bn" ? "English" : "বাংলা"}
            </button>
          </div>

          {/* Intro paragraph */}
          {language === "bn" ? (
            <p className="mb-6 text-gray-700 text-lg leading-relaxed bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              হযরত মুহাম্মদ (সা.) ইসলাম ধর্মের প্রতিষ্ঠাতা ও শেষ নবী। তাঁর
              শিক্ষা ও জীবন মুসলমানদের জন্য পথপ্রদর্শক।
            </p>
          ) : (
            <p className="mb-6 text-gray-700 text-lg leading-relaxed bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              Prophet Muhammad (SA) is regarded as the last prophet and founder
              of Islam. His teachings and life serve as guidance for Muslims.
            </p>
          )}

          {/* Wiki content - FIXED WIDTH ISSUE */}
          {isLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4" />
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6" />
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full overflow-x-hidden">
              <div
                className="w-full max-w-none prose prose-sm md:prose-base 
                            prose-headings:text-green-700 prose-headings:border-b-2 prose-headings:border-green-200 prose-headings:pb-2
                            prose-a:text-green-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-green-700
                            prose-img:rounded-xl prose-img:shadow-md prose-img:max-w-full prose-img:border-2 prose-img:border-green-100
                            prose-blockquote:border-l-green-400 prose-blockquote:bg-gradient-to-r prose-blockquote:from-green-50 prose-blockquote:to-white prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                            prose-strong:text-green-700 prose-strong:bg-green-50 prose-strong:px-1 prose-strong:rounded
                            prose-table:max-w-full prose-table:overflow-x-auto prose-table:shadow-sm prose-table:rounded-lg prose-table:border prose-table:border-green-200
                            prose-th:bg-green-100 prose-th:text-green-800 prose-th:border-b prose-th:border-green-300
                            prose-td:border-b prose-td:border-green-100
                            prose-ol:max-w-full prose-ul:max-w-full
                            prose-li:marker:text-green-400
                            prose-hr:border-green-200
                            prose-code:bg-green-50 prose-code:text-green-700 prose-code:rounded prose-code:px-1 prose-code:py-0.5
                            prose-pre:bg-green-50 prose-pre:border prose-pre:border-green-200 prose-pre:rounded-lg"
                dangerouslySetInnerHTML={{ __html: content }}
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-30"
          aria-label="Scroll to top"
        >
          <MoveUp size={24} />
        </button>
      )}
    </div>
  );
}
