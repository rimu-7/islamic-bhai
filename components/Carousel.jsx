"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { useRouter } from "next/navigation";
import { data } from "@/public/data";

const islamicContent = data.islamicContent;

export function PremiumCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState();
  const router = useRouter();

  // Set up the carousel API
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality using the API
  useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to the beginning
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const handleImageClick = (path) => {
    router.push(path);
  };

  return (
    <div className=" max-w-5xl mx-auto py-8 px-4">
      <Carousel
        setApi={setApi}
        className=" relative group"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="">
          {islamicContent.map((item, index) => (
            <CarouselItem key={index} className="">
              <div className="">
                <Card className=" mx-auto overflow-hidden cursor-pointer transition-all duration-300">
                  <CardContent
                    className="p-0 relative h-96 lg:h-[32rem]"
                    onClick={() => handleImageClick(item.path)}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />

                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base opacity-90 max-w-md mb-3">
                        {item.description}
                      </p>
                      <div className="border-l-4 border-amber-400 pl-3 mt-4">
                        <p className="text-lg italic font-light">
                          {item.quote}
                        </p>
                      </div>
                    </div>

                    {/* Overlay for better text visibility */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation controls - Hidden on small devices, visible on sm and up */}
        <div className="absolute inset-0 hidden sm:flex items-center justify-between p-4 pointer-events-none">
          <CarouselPrevious className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
