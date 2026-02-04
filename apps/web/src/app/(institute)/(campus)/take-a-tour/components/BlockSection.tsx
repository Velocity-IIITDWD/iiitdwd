"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface BlockData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
}

interface BlockSectionProps {
  block: BlockData;
  index: number;
}

const BlockSection = ({ block, index }: BlockSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const isEven = index % 2 === 0;

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % block.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      prev => (prev - 1 + block.images.length) % block.images.length
    );
  };

  return (
    <section
      id={block.id}
      className={`py-20 ${isEven ? "bg-background" : "section-alt"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${!isEven ? "lg:grid-flow-dense" : ""}`}
        >
          {/* Image Gallery */}
          <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded bg-secondary">
              <img
                src={block.images[currentImage]}
                alt={`${block.name} - Image ${currentImage + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                loading="lazy"
              />

              {/* Navigation Arrows */}
              {block.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/90 hover:bg-background rounded-full shadow-md transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-heading" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/90 hover:bg-background rounded-full shadow-md transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-heading" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {block.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {block.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`relative w-20 h-14 overflow-hidden rounded transition-all ${
                      currentImage === idx
                        ? "ring-2 ring-accent ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${block.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-10 bg-accent rounded-full" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif text-heading">
                  {block.name}
                </h2>
                <p className="text-body-muted text-sm uppercase tracking-widest mt-1">
                  {block.subtitle}
                </p>
              </div>
            </div>

            <p className="text-body text-lg leading-relaxed mb-8 pl-5 border-l-2 border-transparent">
              {block.description}
            </p>

            <div>
              <h3 className="text-lg font-semibold text-heading mb-4 font-sans">
                Key Facilities
              </h3>
              <ul className="space-y-3">
                {block.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-body leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockSection;
