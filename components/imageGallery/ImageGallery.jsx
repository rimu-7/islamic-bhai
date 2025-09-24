"use client";

import ImageCard from "./ImageCard";

// Dummy images
const dummyImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/17228834/pexels-photo-17228834.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "A wide landscape",
    width: 800,
    height: 533,
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/9407824/pexels-photo-9407824.jpeg",
    alt: "A square image",
    width: 400,
    height: 400,
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "A portrait image",
    width: 400,
    height: 600,
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7440297/pexels-photo-7440297.jpeg",
    alt: "A portrait image",
    width: 400,
    height: 600,
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/28367444/pexels-photo-28367444.jpeg",
    alt: "A portrait image",
    width: 400,
    height: 600,
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/28367463/pexels-photo-28367463.jpeg",
    alt: "A portrait image",
    width: 400,
    height: 600,
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/10771989/pexels-photo-10771989.jpeg",
    alt: "A portrait image",
    width: 400,
    height: 600,
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/6017050/pexels-photo-6017050.jpeg",
    alt: "A portrait image",
    width: 400,
    height: 600,
  },
];

export default function ImageGallery() {
  // Download helper
  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image.src;
    link.download = `image-${image.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Next.js Image Gallery
      </h1>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4">
        {dummyImages.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
}
