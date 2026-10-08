"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  IconBrandYoutubeFilled,
  IconCalendarEvent,
  IconClock,
  IconFileText,
  IconMapPin,
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheck,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function OrientationBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [
      Autoplay({
        delay: 6500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="w-full bg-slate-50/70 border-y border-gray-200 py-12 md:py-16 relative overflow-hidden antialiased">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#193654_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#CCE70B]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#193654]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-13 relative">
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {/* Slide 1: Visit of Ms. Garima Sharma, IRS */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                {/* Left: Poster */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/90 bg-white group">
                    <Image
                      src="https://assets.iiitdwd.ac.in/images/IIIT_Dharwad_Visit__A_Visual_Story.png"
                      alt="Visit of Ms Garima Sharma, IRS - Director (IIITs), Ministry of Education to IIIT Dharwad"
                      width={1222}
                      height={1287}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                      priority
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-center lg:text-left">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#193654]/5 border border-[#193654]/10 text-[#193654] text-xs font-semibold uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#CCE70B]" />
                    <span>Distinguished Campus Visit</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-[#193654] leading-tight mb-2 tracking-tight">
                    Visit of Ms. Garima Sharma, IRS
                  </h2>
                  <div className="h-1 w-16 bg-[#CCE70B] rounded-full mb-4 mx-auto lg:mx-0" />

                  {/* Description */}
                  <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed font-grotesk">
                    Ms. Garima Sharma, IRS, Director (IIITs), Ministry of Education, Government of India, visited IIIT Dharwad on 7 October 2026. During her visit, she toured various campus facilities, reviewed the ongoing Phase-II development activities, and interacted with faculty, staff and students. The visit provided an opportunity to showcase the Institute’s progress, ongoing initiatives and future development plans. We sincerely thank her for the visit and continued support.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-3 p-3 bg-white/90 rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">Date</p>
                        <p className="text-sm font-bold text-gray-800">7th October 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/90 rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">Venue</p>
                        <p className="text-sm font-bold text-gray-800">IIIT Dharwad Campus</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-xl bg-white/80 border border-gray-200/80 p-4 shadow-xs text-left">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                      Key Highlights of the Visit
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0" />
                        <span>Phase-II Development Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0" />
                        <span>R&D Labs & Research Showcase</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0" />
                        <span>Campus Facilities Tour</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0" />
                        <span>Faculty & Student Interaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Orientation Program 2026 */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                {/* Image/Poster */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/90 bg-white group">
                    <Image
                      src="https://assets.iiitdwd.ac.in/images/2026_orientation.jpeg"
                      alt="Orientation Program 2026 Poster"
                      width={1200}
                      height={675}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                      priority
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 w-full text-center lg:text-left">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#193654]/5 border border-[#193654]/10 text-[#193654] text-xs font-semibold uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#CCE70B]" />
                    <span>Academic Year 2026-27</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-[#193654] leading-tight mb-2 tracking-tight">
                    Orientation Program 2026
                  </h2>
                  <div className="h-1 w-16 bg-[#CCE70B] rounded-full mb-4 mx-auto lg:mx-0" />

                  {/* Description */}
                  <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed font-grotesk">
                    We are delighted to invite you to the Orientation Program for the newly admitted batch of students. Join us as we begin this new journey together, introducing you to the opportunities and vibrant academic environment at IIIT Dharwad.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-white/90 rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">Date</p>
                        <p className="text-sm font-bold text-gray-800">20th Aug 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/90 rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconClock size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">Time</p>
                        <p className="text-sm font-bold text-gray-800">9:30 AM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/90 rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">Venue</p>
                        <p className="text-sm font-bold text-gray-800">M-Block Campus</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <Link
                      href="https://www.youtube.com/live/uKqevHqO-24?si=i0hcucBgyer8x9fq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#cc0000] hover:bg-[#aa0000] text-white font-medium text-base rounded-xl transition-all shadow hover:shadow-md cursor-pointer">
                        <IconBrandYoutubeFilled size={20} />
                        <span>Watch Live</span>
                      </button>
                    </Link>

                    <Link
                      href="https://docs.google.com/spreadsheets/d/1UczkWhhygCAGxH4N7NJTgAunTk3Ru8Bj/edit?usp=sharing&ouid=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium text-base rounded-xl transition-all border border-gray-300 shadow-xs hover:shadow-md cursor-pointer">
                        <IconFileText size={20} className="text-gray-700" />
                        <span>Program Schedule</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination & Navigation Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={scrollPrev}
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-all cursor-pointer border border-gray-200 shadow-xs hover:border-gray-300"
            aria-label="Previous slide"
          >
            <IconChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                  selectedIndex === index
                    ? "w-8 bg-[#193654]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-all cursor-pointer border border-gray-200 shadow-xs hover:border-gray-300"
            aria-label="Next slide"
          >
            <IconChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
