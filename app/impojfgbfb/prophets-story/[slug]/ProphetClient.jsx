"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, BookOpen, MoveUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProphetClient({ prophetData }) {
  const [openTOC, setOpenTOC] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const tocRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const defaultHeaderHeight = 150;
  const collapseTransitionMs = 500;

  useEffect(() => {
    if (openTOC && tocRef.current) {
      setMaxHeight(`${tocRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [openTOC]);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const elTop = el.getBoundingClientRect().top + window.scrollY;

      const style = window.getComputedStyle(el);
      const scrollMarginTop = parseFloat(style.scrollMarginTop) || 0;

      const headerEl = document.querySelector(
        "header, .site-header, .fixed-header"
      );
      const headerH = headerEl
        ? headerEl.getBoundingClientRect().height
        : defaultHeaderHeight;

      const offset = scrollMarginTop > 0 ? scrollMarginTop : headerH;

      const targetY = Math.max(0, Math.round(elTop - offset));
      window.scrollTo({ top: targetY, behavior: "smooth" });
    };

    if (openTOC) {
      setOpenTOC(false);
      setTimeout(doScroll, collapseTransitionMs + 20);
    } else {
      doScroll();
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      {/* TOC */}
      <div className="sticky top-20 z-10 bg-gray-100 mt-4">
        <div className="container mx-auto px-4 py-2">
          <Button
            variant="ghost"
            className="flex items-center w-full justify-between py-4 text-lg font-medium"
            onClick={() => setOpenTOC(!openTOC)}
          >
            <div className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              <span>সূচিপত্র</span>
            </div>
            {openTOC ? <ChevronUp /> : <ChevronDown />}
          </Button>

          <div
            ref={tocRef}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight }}
          >
            <ul className="pb-4 space-y-2 text-sm">
              {prophetData.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="block text-left font-medium text-blue-700 hover:text-blue-900 cursor-pointer p-1"
                    aria-label={`Go to ${section.title}`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-6 space-y-8">
        <h1 className="text-3xl md:text-5xl py-2 font-bold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
          {prophetData.title}
        </h1>

        {prophetData.sections.map((section) => (
          <div key={section.id} id={section.id} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
              {section.title}
            </h2>

            {section.description}

            {(section.info1 || section.info2 || section.info3) && (
              <div className="flex flex-col gap-3">
                {section.info1 && (
                  <p className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
                    📌 {section.info1}
                  </p>
                )}
                {section.info2 && (
                  <p className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
                    📌 {section.info2}
                  </p>
                )}
                {section.info3 && (
                  <p className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
                    📌 {section.info3}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

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
