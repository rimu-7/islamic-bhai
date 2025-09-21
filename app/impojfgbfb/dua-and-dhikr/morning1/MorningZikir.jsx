"use client";
import React, { useState, useRef, useEffect } from "react";
import zikrData from "./morning.json";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MorningZikr() {
  const [openTOC, setOpenTOC] = useState(false);
  const tocRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // sticky header height (সূচিপত্র + মার্জিন)
  const headerHeight = 150;

  useEffect(() => {
    if (openTOC && tocRef.current) {
      setMaxHeight(`${tocRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [openTOC]);

  return (
    <div className="">
      {/* সূচিপত্র */}
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
              {zikrData.sections.map((section) => (
                <li key={section.id}>
                  <Link
                    to={section.id}
                    spy={true}
                    smooth={true}
                    offset={-headerHeight}
                    duration={500}
                    className="block text-left font-medium text-blue-700 hover:text-blue-900 cursor-pointer p-1"
                    onClick={() => setTimeout(() => setOpenTOC(false), 200)}
                  >
                    {section.title}
                  </Link>
                  <ul className="ml-4 mt-1 space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.id}
                          spy={true}
                          smooth={true}
                          offset={-headerHeight}
                          duration={500}
                          className="block text-gray-600 hover:text-gray-900 text-xs cursor-pointer p-1 pl-2"
                          onClick={() =>
                            setTimeout(() => setOpenTOC(false), 200)
                          }
                        >
                          - {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* মূল কন্টেন্ট */}
      <div className="container mx-auto py-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
          {zikrData.title}
        </h1>

        {zikrData.sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="space-y-6 scroll-mt-40" // scroll-mt-40 যাতে স্ক্রোল অবস্থান ঠিক থাকে
          >
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
              {section.title}
            </h2>
            {section.items.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                className="p-4 transition-shadow duration-300 scroll-mt-40"
              >
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-bold text-green-400">
                    {item.name}{" "}
                    <span className="text-red-600 text-2xl">{item.reps}</span>
                  </h3>
                  <p className="text-right text-2xl font-bold leading-loose font-arabic text-gray-900">
                    {item.arabic}
                  </p>
                  <p className="text-rose-700 text-lg bg-green-50 p-2 rounded-md italic">
                    {item.pronunciation}
                  </p>
                  <p className="text-gray-700 text-lg italic">
                    {item.translation}
                  </p>
                  {item.note && (
                    <p className="text-lg text-gray-500 bg-gray-100 p-2 rounded-md">
                      📌 {item.note}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
            {(section.info1 || section.info2 || section.info3) && (
              <div className="flex flex-col gap-3">
                {section.info1 && (
                  <p className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
                    📌 {section.info1}
                  </p>
                )}
                {section.info2 && (
                  <p className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
                    {section.info2}
                  </p>
                )}
                {section.info3 && (
                  <p className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
                    {section.info3}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
