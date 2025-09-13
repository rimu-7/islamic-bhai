// Hadiths.jsx
"use client";
import React, { useEffect, useState } from "react";

export default function Hadiths() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey="NbVqFtzDKuUO6VANIGhnOOkt05IiCgs24N2TEHKGrLfuKmjkKOY6";
  const apiUrl = `https://www.hadithapi.com/api/books?apiKey=${apiKey}`;

  useEffect(() => {
    if (!apiKey) {
      setError("Missing API key");
      return;
    }

    let mounted = true;
    setLoading(true);
    setError(null);

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch((err) => {
        if (mounted) setError(err.message || "Fetch error");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [apiKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Hadith API — Books</h2>
      <p>
        Returned <strong>{Array.isArray(data) ? data.length : "1+"}</strong> item(s).
      </p>
      <pre
        style={{
          background: "#f6f8fa",
          padding: 12,
          borderRadius: 6,
          overflowX: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
