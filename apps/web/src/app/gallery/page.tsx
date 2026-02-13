"use client";

import { motion } from "framer-motion";
import { ImageIcon, Loader2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageData {
  url: string;
  caption?: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(
          "https://assets.iiitdwd.ac.in/api/floating-images.php"
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const response = await res.json();
        if (response.success && Array.isArray(response.data)) {
          setImages(response.data.map((item: any) => item.url));
        }
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  const openLightbox = (url: string, index: number) => {
    setSelectedImage(url);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, imageIndex]);

  return (
    <main className="min-h-screen w-full bg-background font-grotesk">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-main via-primary to-main/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,231,11,0.3),transparent_50%)]" />
        </div>
        <div className="relative w-[87.5vw] max-w-[1680px] mx-auto py-16 md:py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-bold uppercase tracking-[0.15em] text-xs md:text-sm">
                Campus Life
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              Campus Gallery
            </h1>
            <p className="text-base md:text-lg opacity-95 max-w-2xl leading-relaxed font-medium">
              Explore the vibrant life, stunning architecture, and memorable
              moments at IIIT Dharwad through our curated collection of campus
              photographs.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="opacity-90">
                  {loading ? "Loading..." : `${images.length} Photos`}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-[87.5vw] max-w-[1680px] mx-auto px-6 py-12 md:py-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-main" />
            <p className="text-gray-500 text-lg font-semibold">
              Loading gallery...
            </p>
          </div>
        ) : images.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 text-xl font-semibold">
              No images available at the moment.
            </p>
            <p className="text-gray-400 text-base mt-2 font-medium">
              Check back soon for updates!
            </p>
          </motion.div>
        ) : (
          <>
            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-main mb-2 tracking-tight">
                  All Photos
                </h2>
                <p className="text-gray-600 text-base font-medium">
                  Showcasing campus moments and memories
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-5 py-2.5 rounded-lg bg-main/5 border border-main/10">
                  <span className="text-main font-extrabold text-2xl">
                    {images.length}
                  </span>
                  <span className="text-gray-600 text-sm ml-2 font-semibold">
                    Images
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {images.map((url: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50"
                  onClick={() => openLightbox(url, index)}
                >
                  <Image
                    src={url}
                    alt={`Campus Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-main/80 via-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-bold tracking-wide">
                        Photo {index + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/100 transition-all duration-500 rounded-tr-lg" />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`Campus Image ${imageIndex + 1}`}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              quality={95}
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-white text-base font-bold tracking-wide">
                {imageIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
