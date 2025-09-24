"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Add this import
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "@/public/ok.json";

const islamicContent = data.islamicContent;

export function PremiumCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState();

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
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  // Remove the handleImageClick function and use Link instead

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <Carousel
        setApi={setApi}
        className="relative group"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {islamicContent.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="mx-auto overflow-hidden cursor-pointer transition-all duration-300">
                  {/* Use Link instead of router.push */}
                  <Link href={item.path} className="block">
                    <CardContent className="p-0 relative h-96 lg:h-[32rem]">
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
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation controls */}
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
