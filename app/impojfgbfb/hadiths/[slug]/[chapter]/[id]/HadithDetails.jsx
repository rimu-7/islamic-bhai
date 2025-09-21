// components/HadithDetail.jsx
"use client";

import Link from "next/link";
import { Skeleton } from "../../../../../../components/ui/skeleton";
import { MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function HadithDetail({
  initialHadith,
  slug,
  chapter,
  id,
  bookName,
}) {
  const [hadith, setHadith] = useState(initialHadith);
  const [loading, setLoading] = useState(!initialHadith);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialHadith) {
      async function fetchHadith() {
        try {
          setLoading(true);
          setError(null);

          const res = await fetch(
            `/api/books/${slug}/chapters/${chapter}/hadiths/${id}`
          );
          if (!res.ok) throw new Error(`হাদিস আনা যায়নি: ${res.status}`);

          const data = await res.json();
          setHadith(data.hadith || null);

          if (!data.hadith) {
            setError("হাদিস পাওয়া যায়নি।");
          }
        } catch (err) {
          console.error("হাদিস আনার সময় সমস্যা:", err);
          setError("হাদিস লোড করতে ব্যর্থ। আবার চেষ্টা করুন।");
          setHadith(null);
        } finally {
          setLoading(false);
        }
      }

      fetchHadith();
    }
  }, [initialHadith, slug, chapter, id]);

  // বইয়ের নাম ফরম্যাট
  const formatBookName = (book) => {
    if (typeof book === "string") return book.replace(/-/g, " ");
    return slug.replace(/-/g, " "); // fallback
  };

  if (loading) {
    return (
      <div>
        <Header
          slug={slug}
          chapter={chapter}
          id={id}
          formatBookName={formatBookName}
        />

        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="pt-4 mt-4 border-t">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-1/3 mt-2" />
          </div>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div>
        <Header
          slug={slug}
          chapter={chapter}
          id={id}
          formatBookName={formatBookName}
        />

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <BackLink
            slug={slug}
            chapter={chapter}
            text="হাদিস তালিকায় ফিরে যান"
          />
        </div>
      </div>
    );
  }


  if (!hadith) {
    return (
      <div>
        <Header
          slug={slug}
          chapter={chapter}
          id={id}
          formatBookName={formatBookName}
        />

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-red-500">হাদিস পাওয়া যায়নি।</p>
          <BackLink slug={slug} chapter={chapter} />
        </div>
      </div>
    );
  }


  return (
    <div>
      <Header
        slug={slug}
        chapter={chapter}
        id={id}
        formatBookName={formatBookName}
      />

      <div className="bg-green-50 p-6 rounded-lg shadow">
        {/* বাংলা অনুবাদ (ইংরেজি টেক্সটের জায়গায় বাংলায় পরিবর্তন) */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">ইংরেজি</h3>
          <p className="text-gray-800 leading-relaxed">
            {hadith.hadithEnglish || "কোনো ইংরেজি অনুবাদ পাওয়া যায়নি।"}
          </p>
        </div>

        {/* আরবি */}
        {hadith.hadithArabic && (
          <div className="mb-6 border-t pt-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">আরবি</h3>
            <p
              className="text-gray-800 text-right text-xl leading-loose"
              dir="rtl"
            >
              {hadith.hadithArabic}
            </p>
          </div>
        )}

        {/* মেটা তথ্য */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t">
          {hadith.grade && (
            <MetaItem label="হাদিসের মান" value={hadith.grade} />
          )}
          {hadith.narratedBy && (
            <MetaItem label="বর্ণনাকারী" value={hadith.narratedBy} />
          )}
          {hadith.book && (
            <MetaItem label="কিতাব" value={formatBookName(hadith.book)} />
          )}
          {hadith.chapterNumber && (
            <MetaItem label="অধ্যায়" value={hadith.chapterNumber} />
          )}
        </div>
      </div>
    </div>
  );
}


function Header({ slug, chapter, id, formatBookName }) {
  return (
    <div className="mb-6">
      <BackLink slug={slug} chapter={chapter} />
      <h2 className="text-3xl md:text-5xl py-2 font-bold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">হাদিস #{id}</h2>
      <p className="text-gray-600 capitalize mt-1">
        {formatBookName(slug)} • অধ্যায় {chapter}
      </p>
    </div>
  );
}

function BackLink({ slug, chapter, text = "ফিরে যান" }) {
  return (
    <Link
      href={`/impojfgbfb/hadiths/${slug}/${chapter}`}
      className="text-blue-500 inline-flex items-center mt-4 gap-1 hover:underline"
    >
      <span className="transform transition-transform duration-150 ease-out hover:-translate-x-1">
        <MoveLeft className="w-4 h-4" />
      </span>
      {text}
    </Link>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-700">{label}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
