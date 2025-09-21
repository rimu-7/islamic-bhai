"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import SurahDetails from "../SurahDetails";
import ImportantSection from "@/components/ImportantSection";

export default function SurahNumberPage() {
  const params = useParams();
  const router = useRouter();
  const surahNumber = Array.isArray(params.surahNumber)
    ? params.surahNumber[0]
    : params.surahNumber;

  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [fullSurahPlaying, setFullSurahPlaying] = useState(false);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    fetchSurah();
    return () => stopAudio();
  }, [surahNumber]);

  const fetchSurah = async () => {
    if (!surahNumber) return;

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

  const handleNextSurah = () => {
    if (!surahNumber) return;
    const nextSurah = parseInt(surahNumber) + 1;
    if (nextSurah <= 114) {
      router.push(`/impojfgbfb/quran/${nextSurah}`);
    }
  };

  const handlePreviousSurah = () => {
    if (!surahNumber) return;
    const prevSurah = parseInt(surahNumber) - 1;
    if (prevSurah >= 1) {
      router.push(`/impojfgbfb/quran/${prevSurah}`);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="min-h-screen py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              surahNumber={surahNumber}
              onNextSurah={handleNextSurah}
              onPreviousSurah={handlePreviousSurah}
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
