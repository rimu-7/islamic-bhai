"use client";

import React, { useState } from "react";
import WuduGuide from "./Wudu";
import NamazGuide from "./Namaz";
import ImportantSection from "@/components/ImportantSection";
import { Skeleton } from "@/components/ui/skeleton";

export default function WuduNamazPage() {
  const [wuduConfirmed, setWuduConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleYes = () => {
    setWuduConfirmed(true);
    setShowModal(false);
  };

  const handleNo = () => {
    setWuduConfirmed(false);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen py-8">
      {/* Modal for confirmation */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">
              আপনি কি সহিহ ভাবে অজু করতে পারেন?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              যদি হ্যাঁ তাহলে নামাজগাইড দেখানো হবে, যদি না তাহলে অজু গাইড দেখুন।
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleYes}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                হ্যাঁ
              </button>
              <button
                onClick={handleNo}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                না
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (2/3 width) */}
        <div className="lg:col-span-2">
          {wuduConfirmed ? <NamazGuide /> : <WuduGuide />}
        </div>

        {/* Right side */}
        <div>
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}
