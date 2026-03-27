"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageData {
  url: string;
}

interface ImageData {
  url: string;
}

export default function GalleryCarousel({
  images: initialImages,
}: {
  images: string[];
}): JSX.Element | null {
  // Double the images for a seamless loop
  const images = [...initialImages, ...initialImages];

  if (images.length === 0) return null;

  return (
    <section className="w-full pt-8 pb-16 bg-[#f8fafc] overflow-hidden">
      <div className="relative flex overflow-hidden">
        {/* Infinite Scrolling Container */}
        <motion.div
          className="flex gap-4 px-4"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((url, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 group"
            >
              <Image
                src={url}
                alt={`Gallery ${index}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
