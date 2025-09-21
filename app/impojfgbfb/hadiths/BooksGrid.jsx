// components/BooksGrid.jsx
"use client";

import { Skeleton } from "../../../components/ui/skeleton";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BooksGrid({ initialBooks }) {
  const [books, setBooks] = useState(initialBooks || []);
  const [loading, setLoading] = useState(!initialBooks);

  useEffect(() => {
    // If no initial books were provided, fetch them
    if (!initialBooks) {
      async function fetchBooks() {
        try {
          const res = await fetch("/api/books");
          if (!res.ok) throw new Error(`Books fetch failed: ${res.status}`);
          const data = await res.json();
          setBooks(data.books || []);
        } catch (err) {
          console.error("Error fetching books:", err);
          setBooks([]);
        } finally {
          setLoading(false);
        }
      }
      
      fetchBooks();
    }
  }, [initialBooks]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4 h-27 rounded shadow">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (!books) {
    return <p className="text-red-500">Failed to load books. Please try again later.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
      {books.map((book) => (
        <Link
          key={book.bookSlug}
          href={`/impojfgbfb/hadiths/${book.bookSlug}`}
          className=" border-2 h-27 border-green-50 hover:bg-green-50 p-4 rounded shadow transition-colors"
        >
          <h3 className="text-xl font-semibold">{book.bookName}</h3>
          <p>
            {book.totalChapters ?? "—"} Chapters |{" "}
            {book.totalHadiths ?? "—"} Hadiths
          </p>
        </Link>
      ))}
    </div>
  );
}