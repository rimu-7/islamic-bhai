"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImportantSection from "@/components/ImportantSection";
import { Skeleton } from "@/components/ui/skeleton"; // ← shadcn Skeleton

export default function Page() {
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      name: "Morning Zikr",
      path: "dua-and-yikir/morning",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
    {
      name: "Evening Zikr",
      path: "dua-and-yikir/evening",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
    {
      name: "Before Going To Bed",
      path: "dua-and-yikir/before-going-to-bed",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
    {
      name: "Salah Zikr",
      path: "dua-and-yikir/salah-zikr",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
    {
      name: "After Prayer Zikr",
      path: "dua-and-yikir/after-prayer-zikr",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
    {
      name: "Ruqyahandin",
      path: "dua-and-yikir/ruqyahandin",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Categories grid) */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <Skeleton className="w-full h-48 rounded-xl" />
                    <Skeleton className="h-5 w-2/3 mx-auto rounded" />
                  </div>
                ))
              : categories.map((category, index) => (
                  <div
                    className="text-center transition-transform transform"
                    key={index}
                  >
                    <Link href={category.path}>
                      <div className="relative group overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                    <Link
                      href={category.path}
                      className="text-xl font-semibold hover:text-green-500"
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
          </div>
        </div>

        {/* Right side (ImportantSection) */}
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
