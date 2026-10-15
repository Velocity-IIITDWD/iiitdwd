"use client";
import { Button } from "@/components/ui/button";
import { Review } from "@/types/alumni";
import { RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlumniCard } from "./alumni-card";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeReviews = (reviews: Review[], columns: number) => {
  const distributed: Review[][] = Array.from({ length: columns }, () => []);

  reviews.forEach((review, index) => {
    const columnIndex = index % columns;
    distributed[columnIndex].push(review);
  });

  return distributed;
};

interface AlumniSectionProps {
  reviews: Review[];
}

export default function AlumniSection({
  reviews: initialReviews,
}: AlumniSectionProps) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setReviews(
        shuffleArray(reviews.filter(review => review.graduationYear <= 2024))
      );
      setIsShuffling(false);
    }, 600);
  };

  useEffect(() => {
    // Do the initial shuffle only once during mount
    const filteredAndShuffled = shuffleArray(
      initialReviews.filter(review => review.graduationYear <= 2024)
    );
    setReviews(filteredAndShuffled);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [initialReviews]);

  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4;
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const columnCount = getColumnCount();
  const distributedReviews = distributeReviews(reviews, columnCount);

  return (
    <div className="relative">
      <div className="z-[2] relative py-8 sm:py-10 md:py-12 w-full flex flex-col items-center">
        <div className="mt-2 sm:mt-4 w-full text-primary text-center px-4 font-semibold text-lg sm:text-2xl md:text-large-title leading-snug">
          <h1>Explore inspiring journeys and achievements</h1>
          <h2>from our thriving alumni community.</h2>
        </div>

        <div className="flex justify-center mt-4 sm:mt-6">
          <Button
            onClick={handleShuffle}
            variant="outline"
            className="flex items-center gap-2 text-xs sm:text-sm"
            disabled={isShuffling}
          >
            <RefreshCw
              className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isShuffling ? "animate-spin" : ""}`}
            />
            Shuffle Alumni
          </Button>
        </div>

        <div className="max-h-[80vh] max-w-[1960px] w-[92vw] sm:w-[87.5vw] mx-auto py-6 sm:py-12 md:py-20 relative overflow-hidden flex gap-4">
          <div className="w-full flex gap-4">
            {distributedReviews.map((column, columnIndex) => (
              <div key={columnIndex} className="flex-1 flex flex-col gap-4">
                {column.map((review, reviewIndex) => (
                  <AlumniCard
                    key={`${review._id || `${columnIndex}-${reviewIndex}`}`}
                    {...review}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link href="/alumni-testimonials">
            <Button className="cursor-pointer">View All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
