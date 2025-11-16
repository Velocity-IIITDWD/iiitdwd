"use client";

import image1 from "@/assets/home/image1.webp";
import image2 from "@/assets/home/image2.webp";
import image3 from "@/assets/home/image3.webp";

import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type Slide = { type: "image" | "video"; src: string };

type PropType = { options?: EmblaOptionsType };

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [autoplayDelay] = useState(7000); // longer for video
  const [playProgress, setPlayProgress] = useState(0);
  const startTimeRef = useRef(0);
  const rafIdRef = useRef(0);

  // Remote video from Sanity
  const videoUrl = "https://iiitdwd.ac.in/images/orientation.mp4";

  const slides: Slide[] = [
    { type: "video", src: videoUrl },
    { type: "image", src: image1.src },
    { type: "image", src: image2.src },
    { type: "image", src: image3.src },
  ];

  const autoplayPlugin = useRef(
    Autoplay({ playOnInit: true, delay: autoplayDelay })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayPlugin.current]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);
  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  // Progress bar
  useEffect(() => {
    if (!emblaApi || !autoplayIsPlaying) {
      setPlayProgress(0);
      cancelAnimationFrame(rafIdRef.current);
      return;
    }
    startTimeRef.current = performance.now();
    const update = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const progress = Math.min(elapsed / autoplayDelay, 1);
      setPlayProgress(progress);
      if (progress < 1) rafIdRef.current = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(rafIdRef.current);
  }, [emblaApi, autoplayDelay, autoplayIsPlaying, selectedIndex]);

  useEffect(() => {
    if (autoplayIsPlaying) {
      setPlayProgress(0);
      startTimeRef.current = performance.now();
    }
  }, [selectedIndex]);

  return (
    <div className="embla h-full relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, i) => (
            <div className="embla__slide relative border" key={i}>
              <div className="w-full h-full">
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                ) : (
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={image1.src} // Crisp poster until video loads
                    className="w-full h-full object-contain md:object-cover"
                    // Optional: Force native resolution
                    style={{ imageRendering: "crisp-edges" } as React.CSSProperties}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/30 backdrop-blur py-2 px-4 rounded">
        <PrevButton
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <div className="flex gap-2">
          {scrollSnaps.map((_, i) => (
            <React.Fragment key={i}>
              {i === selectedIndex ? (
                <div className="w-8 h-2 bg-primary rounded-full border border-white" />
              ) : (
                <DotButton
                  onClick={() => onDotButtonClick(i)}
                  className="w-2 h-2 rounded-full border border-white bg-tertiary/30"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <NextButton
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </div>

      {/* Play/Pause */}
      <button
        className="embla__play absolute bottom-4 right-4 bg-white rounded-full border border-slate-400 p-2"
        onClick={() => {
          toggleAutoplay();
          if (!autoplayIsPlaying) {
            setPlayProgress(0);
            startTimeRef.current = performance.now();
          }
        }}
        type="button"
      >
        {autoplayIsPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
      </button>
    </div>
  );
};

export default EmblaCarousel;