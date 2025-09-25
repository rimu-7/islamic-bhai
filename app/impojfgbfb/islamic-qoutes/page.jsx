"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Importing shadcn/ui Skeleton
import ImportantSection from "@/components/ImportantSection";
// import { ShowPopup } from "@/components/ShowPopup";
import SocialMedia from "@/components/SocialMedia";

export function PinterestBoard({ boardUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load Pinterest script with error handling
    const loadPinterestScript = () => {
      if (
        !document.querySelector(
          'script[src="https://assets.pinterest.com/js/pinit.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = "https://assets.pinterest.com/js/pinit.js";
        script.onload = () => {
          setIsLoading(false);
          // Refresh Pinterest widgets after script loads
          if (window.PinUtils) {
            window.PinUtils.build();
          }
        };
        script.onerror = () => {
          setError("Failed to load Pinterest board");
          setIsLoading(false);
        };
        document.body.appendChild(script);
      } else {
        setIsLoading(false);
        // Refresh Pinterest widgets if script already exists
        if (window.PinUtils) {
          window.PinUtils.build();
        }
      }
    };

    loadPinterestScript();

    // Cleanup script on component unmount
    return () => {
      const script = document.querySelector(
        'script[src="https://assets.pinterest.com/js/pinit.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg transition-all duration-300">
      {isLoading && (
        <div className="p-4 space-y-4">
          <Skeleton className="h-12 w-3/4 rounded-md" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-40 w-full rounded-md" />
            ))}
          </div>
        </div>
      )}
      {error && (
        <div className="p-4 text-red-500 bg-red-50 rounded-md text-center">
          {error}
        </div>
      )}
      {!isLoading && !error && (
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="1000"
            data-pin-scale-height="400"
            data-pin-scale-width="120"
            href={boardUrl}
            className="block w-full"
          ></a>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* <ShowPopup /> */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 animate-fade-in">
          Inspiration Gallery
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side (PinterestBoard and SocialMedia, takes 2/3 space) */}
          <div className="lg:col-span-2 space-y-8">
            <PinterestBoard boardUrl="https://www.pinterest.com/rimu_7/islamic-bhai/" />
            <SocialMedia />
          </div>

          {/* Right side (ImportantSection, takes 1/3 space) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ImportantSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}