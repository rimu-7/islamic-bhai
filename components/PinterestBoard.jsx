"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function PinterestBoard({ boardUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPinterestScript = () => {
      if (
        !document.querySelector(
          'script[src="https://assets.pinterest.com/js/pinit.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = "https://assets.pinterest.com/js/pinit.js";
        script.onload = () => {
          setIsLoading(false);
          if (window.PinUtils) {
            window.PinUtils.build();
          }
        };
        script.onerror = () => {
          setError("⚠️ Failed to load Pinterest board");
          setIsLoading(false);
        };
        document.body.appendChild(script);
      } else {
        setIsLoading(false);
        if (window.PinUtils) {
          window.PinUtils.build();
        }
      }
    };

    loadPinterestScript();

    return () => {
      const script = document.querySelector(
        'script[src="https://assets.pinterest.com/js/pinit.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="flex min-h-96 justify-center items-center w-full p-4">
      {isLoading && (
        <Card className="w-full max-w-5xl rounded-2xl shadow-md border">
          <CardContent className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-40 w-full rounded-lg" />
            ))}
          </CardContent>
        </Card>
      )}

      {error && (
        <div className="text-red-600 font-medium text-center">{error}</div>
      )}

      {!isLoading && !error && (
        <div className="w-full flex justify-center">
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="1200"
            data-pin-scale-height="400"
            data-pin-scale-width="150"
            href={boardUrl}
            className="w-full max-w-6xl"
          ></a>
        </div>
      )}
    </div>
  );
}
