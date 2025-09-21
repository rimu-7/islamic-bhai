import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function ChaptersGrid({ chapters, slug, bookName }) {

  if (!chapters) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-red-500 text-lg">No chapters found.</p>
        <Link
          href="/impojfgbfb/hadiths"
          className="text-blue-500 inline-flex items-center mb-4 gap-1 mt-4"
        >
          <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
            <MoveLeft className="w-4 h-4" />
          </span>
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {chapters.map((chapter) => (
        <div
          key={chapter.chapterNumber}
          className="p-4 rounded-lg border-2 h-full hover:bg-green-50 transition-shadow"
        >
          <Link
            href={`/impojfgbfb/hadiths/${slug}/${chapter.chapterNumber}`}
            className="block"
          >
            <h3 className="text-xl font-semibold">
              Chapter {chapter.chapterNumber}:
              {chapter.chapterEnglish || chapter.chapterArabic || "Untitled"}
            </h3>
            {chapter.chapterSummary && (
              <p className="text-gray-600 mt-2 text-sm">
                {chapter.chapterSummary}
              </p>
            )}
            <div className="mt-2 text-xs text-green-500 font-medium">
              View Hadiths →
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
