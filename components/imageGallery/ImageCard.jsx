"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // shadcn skeleton

const ImageCard = ({ image, onDownload }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative group break-inside-avoid rounded-lg overflow-hidden shadow-md">
      {/* Skeleton while loading */}
      {loading && (
        <Skeleton className="w-full h-60 rounded-lg" />
      )}

      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={`w-full h-auto rounded-lg transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />

      {/* Download Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDownload(image);
        }}
        className="
          absolute bottom-3 right-3 
          bg-white/90 backdrop-blur-sm 
          p-2 md:p-3 rounded-full shadow-md 
          transition hover:bg-gray-100 
          active:scale-95 
          flex items-center justify-center
          opacity-100 md:opacity-0 group-hover:opacity-100
        "
      >
        <Download size={20} className="text-gray-700" />
      </button>
    </div>
  );
};

export default ImageCard;
