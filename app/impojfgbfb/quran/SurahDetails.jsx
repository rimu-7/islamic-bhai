"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Play, Pause, MoveLeft, ChevronRight, ChevronLeft } from "lucide-react";

export default function SurahDetails({
  selectedSurah,
  verses,
  playAudio,
  stopAudio,
  currentAudio,
  fullSurahPlaying,
  currentVerseIndex,
  onBack,
  surahNumber,
  onNextSurah,
  onPreviousSurah,
}) {
  if (!selectedSurah) return null;

  // Assuming 114 surahs in the Quran
  const isFirstSurah = parseInt(surahNumber) === 1;
  const isLastSurah = parseInt(surahNumber) === 114;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-red-600 flex items-center gap-1 mb-3"
        >
          <MoveLeft /> Back
        </button>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="text-center sm:text-left flex-1">
            {selectedSurah ? (
              <>
                <h2 className="text-xl font-bold">
                  {selectedSurah.englishName}
                </h2>
                <p className="text-gray-600">
                  {selectedSurah.englishNameTranslation}
                </p>
              </>
            ) : (
              <>
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-32" />
              </>
            )}
          </div>
          <div className="flex justify-center sm:justify-end">
            {!fullSurahPlaying ? (
              <button
                onClick={() => playAudio(verses[0]?.audio, 0, true)}
                className="bg-emerald-100 px-3 py-1 rounded flex items-center gap-1"
              >
                <Play /> Full Surah
              </button>
            ) : (
              <button
                onClick={stopAudio}
                className="bg-red-100 px-3 py-1 rounded flex items-center gap-1 text-red-600"
              >
                <Pause /> Stop
              </button>
            )}
          </div>
        </div>
        {/* Next and Previous Surah Navigation */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onPreviousSurah}
            disabled={isFirstSurah}
            className={`flex items-center gap-1 px-3 py-1 rounded ${
              isFirstSurah
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            <ChevronLeft /> পূর্ববর্তী সূরা
          </button>
          <button
            onClick={onNextSurah}
            disabled={isLastSurah}
            className={`flex items-center gap-1 px-3 py-1 rounded ${
              isLastSurah
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            {}
            পরবর্তী সূরা <ChevronRight />
          </button>
        </div>
      </div>

      {/* Verses */}
      {!verses
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 mb-3 border rounded">
              <Skeleton className="h-6 w-8 mb-2" />
              <Skeleton className="h-6 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))
        : verses.map((v, i) => (
            <div
              key={v.number}
              className={`p-4 mb-3 border rounded ${
                fullSurahPlaying && i === currentVerseIndex
                  ? "bg-emerald-50"
                  : ""
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  {v.numberInSurah}
                </div>
                <button
                  onClick={() =>
                    currentAudio === v.audio ? stopAudio() : playAudio(v.audio)
                  }
                  className={`p-2 rounded-full ${
                    currentAudio === v.audio
                      ? "bg-red-100 text-red-600"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {currentAudio === v.audio ? <Pause /> : <Play />}
                </button>
              </div>
              <p className="text-3xl font-bold text-right mb-2">
                {v.arabicText}
              </p>
              <p>{v.englishText}</p>
              <p className="text-gray-600 mt-2">{v.bengaliText}</p>
            </div>
          ))}
    </div>
  );
}
