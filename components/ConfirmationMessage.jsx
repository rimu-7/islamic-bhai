"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import ErrorReportPopup from "./ErrorReportPopup";
import { AlertTriangle } from "lucide-react";

export default function ConfirmationMessage() {
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  return (
    <div className="max-w-6xl mx-auto my-10 px-4 sm:px-6 md:px-8 py-8 sm:py-10  bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-4 mb-6 text-center">
        ✦ আলহামদুলিল্লাহ ✦
      </h2>
      <div className="text-start">
        {/* Description */}
        <p className="text-gray-800 leading-relaxed text-start text-base sm:text-lg md:text-xl">
          আমরা আমাদের সর্বোচ্চ চেষ্টা করেছি আপনাদের কাছে{" "}
          <span className="font-semibold text-green-700">
            প্রমাণ-সহ, বিশ্বস্ত হাদিস
          </span>{" "}
          এবং{" "}
          <span className="font-semibold text-green-700">
            আসল ইসলামিক কনটেন্ট
          </span>{" "}
          পৌঁছে দিতে।
        </p>

        {/* Highlights */}
        <ul className="mt-6 list-disc list-inside text-gray-700 space-y-4">
          <li className="text-sm sm:text-base md:text-lg">
            প্রতিটি হাদিসের সাথে উৎস এবং রেফারেন্স প্রদর্শিত হয়েছে।
          </li>

          <li className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm sm:text-base md:text-lg">
            সন্দেহজনক বা দুর্বল হাদিস সহজেই
            <Button
              onClick={() => setShowErrorPopup(true)}
              className="font-semibold px-5 py-2 rounded-2xl bg-red-500 text-white shadow-md hover:shadow-lg hover:bg-red-600 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base md:text-lg"
            >
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
              ভুল রিপোর্ট
            </Button>{" "}
            বোতামের মাধ্যমে রিপোর্ট করতে পারবেন।
          </li>

          <li className="text-sm sm:text-base md:text-lg">
            আপনার রিপোর্ট আমাদেরকে উন্নত এবং নির্ভরযোগ্য কনটেন্ট তৈরি করতে
            সাহায্য করবে।
          </li>
        </ul>

        {/* Additional info */}
        <p className="text-gray-800 mt-6 text-start text-sm sm:text-base md:text-lg">
          আপনার মতামত এবং রিপোর্ট আমাদের জন্য অমূল্য। আমরা চেষ্টা করছি
          প্রতিনিয়ত উন্নত এবং পরিষ্কার তথ্য সরবরাহ করার।
        </p>

        {/* Footer */}
        <p className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text mt-6 font-semibold text-center text-lg sm:text-xl md:text-2xl">
          জাযাকাল্লাহ খাইরান 🌿
        </p>
      </div>
      {/* Popup */}
      <ErrorReportPopup
        isOpen={showErrorPopup}
        onClose={() => setShowErrorPopup(false)}
      />
    </div>
  );
}
