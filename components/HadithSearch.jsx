"use client";
import { useState } from "react";

export default function HadithSearch({ onSearch }) {
  const [q, setQ] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="হাদিস খুঁজুন..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(q)}
      />
    </div>
  );
}
