"use client";

import { PremiumCarousel } from "@/components/Carousel";
import IslamicTopicsGrid from "@/components/IslamicTopicsGrid";
import React, { useState, useEffect } from "react";
import ErrorReportPopup from "@/components/ErrorReportPopup";
import Time from "@/components/prayer-time/Time";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem("hasSeenPopup") === "true";
      if (!hasSeen) {
        setShowPopup(true);
        localStorage.setItem("hasSeenPopup", "true");
      }
    } catch (e) {
      console.warn("localStorage unavailable", e);
    }
  }, []);

  return (
    <div>
      <div>
        <PremiumCarousel />
        <Time/>
        <IslamicTopicsGrid />
      </div>

      {showPopup && (
        <ErrorReportPopup
          onClose={() => {
            setShowPopup(false);
            try {
              localStorage.setItem("hasSeenPopup", "true");
            } catch {}
          }}
        />
      )}
    </div>
  );
}
