"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SurahList from "./SurahList";

export default function QuranPage() {
  const [surahs, setSurahs] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchSurahs();
  }, []);

  const fetchSurahs = async () => {
    try {
      const res = await axios.get("/api/surahs");
      setSurahs(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch Surahs.");
    }
  };

  const handleSelect = (number) => {
    // Navigate to dynamic route
    router.push(`/impojfgbfb/quran/${number}`);
  };

  return (
    <div className="min-h-screen p-4">
      <SurahList
        surahs={surahs}
        error={error}
        fetchSurahs={fetchSurahs}
        onSelect={handleSelect}
      />
    </div>
  );
}
