"use client";
export default function HadithChapterSelect({ chapters, selectedChapterNo, onSelect }) {
  return (
    <div className="p-4">
      <label className="font-medium">অধ্যায় নির্বাচন:</label>
      <select
        className="ml-2 p-2 border rounded"
        value={selectedChapterNo || ""}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="">-- নির্বাচন করুন --</option>
        {chapters.map((c) => (
          <option key={c.chapter_no} value={c.chapter_no}>
            {c.chapter_title_bangla || `অধ্যায় ${c.chapter_no}`}
          </option>
        ))}
      </select>
    </div>
  );
}
