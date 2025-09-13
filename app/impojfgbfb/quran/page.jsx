"use client";
import ImportantSection from "@/components/ImportantSection";
import QuranReader from "./QuranReader";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeelingsPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-8">
        {/* Left side (Feelings grid, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <QuranReader />
        </div>

        {/* Right side */}
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
