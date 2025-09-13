// SupplicationPage.js
"use client";
import React, { useState, useEffect } from "react";
import { Loader2, AlertCircle } from "lucide-react";

export default function SupplicationPage({ type }) {
  const [supplicationData, setSupplicationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/ok.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Check if the requested type exists in the data
        if (data.supplications && data.supplications[type]) {
          setSupplicationData(data.supplications[type]);
        } else {
          setError(`No supplications found for "${type}".`);
        }
      } catch (err) {
        setError("Failed to fetch supplications. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) {
    return (
      <div className="min-h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 p-4 rounded-lg">
        <div className="text-center">
          <Loader2 className="animate-spin h-10 w-10 text-emerald-600 mx-auto mb-3" />
          <p className="text-emerald-800 font-medium text-lg">
            Loading supplications...
          </p>
          <p className="text-sm text-emerald-700 mt-1">
            অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 p-4 rounded-lg">
        <div className="text-center">
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
          <p className="text-red-600 font-medium mb-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!supplicationData || supplicationData.length === 0) {
    return (
      <div className="min-h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 p-4 rounded-lg">
        <div className="text-center">
          <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
          <p className="text-red-600 font-medium">
            No supplications found for "{type}".
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h2
        className={`text-4xl font-bold text-center mb-6 ${supplicationData.color}`}
      >
        {supplicationData.title}
      </h2>

      <div className="space-y-8">
        {supplicationData.items.map((item, index) => (
          <div key={index} className="p-4 bg-green-50 rounded-lg">
            <p className="text-right text-2xl mb-2 font-arabic">
              {item.arabic}
            </p>
            <p className="text-gray-700 italic mb-2">{item.transliteration}</p>
            <p className="text-gray-600">{item.translation}</p>

            {item.reference && (
              <div className="mt-2 p-2 bg-green-100 rounded">
                <p className="text-sm text-green-800">{item.reference}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
