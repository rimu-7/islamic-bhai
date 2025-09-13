"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import SurahDetails from "../SurahDetails";
import ImportantSection from "@/components/ImportantSection";

export default function SurahNumberPage() {
  const { surahNumber } = useParams(); // Next.js hook for dynamic params
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [fullSurahPlaying, setFullSurahPlaying] = useState(false);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(null);
  const audioRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    fetchSurah();
    return () => stopAudio();
  }, [surahNumber]);

  const fetchSurah = async () => {
    try {
      const res = await axios.get(`/api/surah/${surahNumber}`);
      setSelectedSurah(res.data.surah);
      setVerses(res.data.verses);
    } catch (err) {
      console.error(err);
    }
  };

  const playAudio = (url, index = null, isFull = false) => {
    if (audioRef.current) audioRef.current.pause();

    audioRef.current = new Audio(url);
    audioRef.current.play().then(() => {
      setCurrentAudio(url);
      if (isFull && index !== null) {
        setFullSurahPlaying(true);
        setCurrentVerseIndex(index);
      }
    });

    audioRef.current.onended = () => {
      if (isFull && index !== null) {
        const next = index + 1;
        if (next < verses.length) playAudio(verses[next].audio, next, true);
        else stopAudio();
      } else stopAudio();
    };
  };

  const stopAudio = () => {
    if (audioRef.current) audioRef.current.pause();
    setCurrentAudio(null);
    setFullSurahPlaying(false);
    setCurrentVerseIndex(null);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="min-h-screen py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-8">
          {/* Left side (Feelings grid, takes 2/3 space) */}
          <div className="lg:col-span-2">
            <SurahDetails
              selectedSurah={selectedSurah}
              verses={verses}
              playAudio={playAudio}
              stopAudio={stopAudio}
              currentAudio={currentAudio}
              fullSurahPlaying={fullSurahPlaying}
              currentVerseIndex={currentVerseIndex}
              onBack={() => router.push("/impojfgbfb/quran")}
            />
          </div>

          {/* Right side (ImportantSection, takes 1/3 space) */}
          <div>
            <ImportantSection />
          </div>
        </div>
      </div>
    </div>
  );
}
