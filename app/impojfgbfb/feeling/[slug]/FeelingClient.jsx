"use client";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Skeleton } from "../../../../components/ui/skeleton";
import ImportantSection from "../../../../components/ImportantSection";

export default function FeelingClient({ slug, feelingData, supplicationData }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, [2000]);

  if (!hydrated) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-10 w-2/3 mx-auto rounded-lg" />
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-4 bg-gray-100 rounded-lg">
                  <Skeleton className="h-8 w-3/4 mx-auto mb-2" />
                  <Skeleton className="h-5 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!feelingData) {
    return (
      <div className="min-h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 p-4 rounded-lg">
        <div className="text-center">
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
          <p className="text-red-600 font-medium">
            No feeling found for "{slug}".
          </p>
        </div>
      </div>
    );
  }

  if (!supplicationData) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side (Feelings grid, takes 2/3 space) */}
          <div className="lg:col-span-2">
            <div className=" min-h-96 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 p-4 rounded-lg">
              <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
              <p className="text-red-600 font-medium">
                No supplications found for "{slug}".
              </p>
            </div>
          </div>

          {/* Right side (ImportantSection, takes 1/3 space) */}
          <div>
            <ImportantSection />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (2/3) */}
        <div className="lg:col-span-2">
          <div className="p-4">
            <div
              className={`p-4 rounded-lg text-center mb-6 ${feelingData.color}`}
            >
              <h1 className="text-2xl font-bold">{feelingData.title}</h1>
            </div>

            <h2
              className={`text-3xl font-bold text-center mb-6 ${supplicationData.color}`}
            >
              {supplicationData.title}
            </h2>

            <div className="space-y-8">
              {supplicationData.items.map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">#{item.id}</h3>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-right text-2xl mb-2 font-arabic">
                      {item.arabic}
                    </p>
                    <p className="text-gray-700 italic mb-2">
                      {item.transliteration}
                    </p>
                    <p className="text-gray-600">{item.translation}</p>

                    {item.reference && (
                      <div className="mt-2 p-2 bg-green-100 rounded">
                        <p className="text-sm text-green-800">
                          {item.reference}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side (1/3) */}
        <div>
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}
