"use client";
export default function HadithBookSelect({ books, selectedBookKey, onSelect }) {
  return (
    <div className="p-4">
      <label className="font-medium">বই নির্বাচন:</label>
      <select
        className="ml-2 p-2 border rounded"
        value={selectedBookKey || ""}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- নির্বাচন করুন --</option>
        {books.map((b) => (
          <option key={b.book_key} value={b.book_key}>
            {b.nameBengali}
          </option>
        ))}
      </select>
    </div>
  );
}
