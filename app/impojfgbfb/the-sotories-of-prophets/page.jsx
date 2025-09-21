"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ShowPopup } from "@/components/ShowPopup";
import ImportantSection from "@/components/ImportantSection";
import SocialMedia from "@/components/SocialMedia";

export default function ProphetsPage() {
  const prophets = [
    "Adam (AS)",
    "Idris (Enoch) (AS)",
    "Nuh (Noah) (AS)",
    "Hud (AS)",
    "Salih (AS)",
    "Ibrahim (Abraham) (AS)",
    "Lut (Lot) (AS)",
    "Ismail (Ishmael) (AS)",
    "Ishaq (Isaac) (AS)",
    "Yaqub (Jacob) (AS)",
    "Yusuf (Joseph) (AS)",
    "Shu’ayb (AS)",
    "Ayyub (Job) (AS)",
    "Dhul-Kifl (AS)",
    "Musa (Moses) (AS)",
    "Harun (Aaron) (AS)",
    "Dawud (David) (AS)",
    "Sulaiman (Solomon) (AS)",
    "Ilyas (Elijah) (AS)",
    "Al-Yasa (Elisha) (AS)",
    "Yunus (Jonah) (AS)",
    "Zakariya (Zechariah) (AS)",
    "Yahya (John the Baptist) (AS)",
    "Isa (Jesus) (AS)",
    "Muhammad (SAW)",
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <ShowPopup />
      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 ">
        {/* Left side (Prophets grid, takes 2/3 space) */}
        <div className="lg:col-span-2 py-10">
          <h2 className="text-2xl md:text-5xl bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
            নবীদের গল্প সমূহ
          </h2>
          <div className="grid gap-6 py-10 sm:grid-cols-2 md:grid-cols-3">
            {loading
              ? Array.from({ length: 27 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full rounded-2xl" />
                ))
              : prophets.map((prophet, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white border border-green-200 
                     text-center text-green-800 font-semibold 
                     transition transform 
                     hover:bg-green-50 cursor-pointer"
                  >
                    {prophet}
                  </div>
                ))}
          </div>
          <SocialMedia />
        </div>

        {/* Right side (Important Section / Skeletons) */}
        <div>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          ) : (
            <ImportantSection />
          )}
        </div>
      </div>
    </div>
  );
}
