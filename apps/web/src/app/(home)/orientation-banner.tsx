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
  IconTrophy,
  IconExternalLink,
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
    <section className="w-full bg-slate-50/70 border-y border-gray-200 py-8 sm:py-12 md:py-16 relative overflow-hidden antialiased">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#193654_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#CCE70B]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#193654]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-13 relative">
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {/* Slide 1: LEAP Hackathon 2nd Place Achievement */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14">
                {/* Left: Poster / Infographic */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <a
                    href="https://assets.iiitdwd.ac.in/images/TieHackathon-IIITdwd.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group h-[280px] sm:h-[400px] md:h-[480px] lg:h-[560px] cursor-pointer w-full"
                    title="Click to view full infographic in new tab"
                  >
                    <div className="w-full h-full overflow-hidden relative">
                      <Image
                        src="https://assets.iiitdwd.ac.in/images/TieHackathon-IIITdwd.png"
                        alt="IIIT Dharwad Secures 2nd Place in LEAP Hackathon Hubballi Edition - Wins 3 Lakh Cash Prize"
                        width={1600}
                        height={4708}
                        className="w-full h-auto transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[65%]"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#193654]/95 via-[#193654]/50 to-transparent p-3 sm:p-4 flex items-center justify-between text-white pointer-events-none">
                        <span className="text-[10px] sm:text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                          LEAP Hackathon Story
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold flex items-center gap-1">
                          View Full Story ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-left">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#193654]/5 border border-[#193654]/10 text-[#193654] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#CCE70B]" />
                    <span>Student Achievement · LEAP Hackathon 2026</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#193654] leading-tight mb-2 tracking-tight">
                    IIIT Dharwad Secures 2nd Place in LEAP Hackathon
                  </h2>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#CCE70B] rounded-full mb-3 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed font-grotesk">
                    IIIT Dharwad Secures 2nd Place in LEAP Hackathon Hubballi Edition wins 3 Lakh Cash Prize — Hearty Congratulations to the team for their outstanding innovation and problem-solving in Smart Logistics &amp; Urban Commerce.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Date</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">7-8 Oct 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconTrophy size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Award</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">₹3 Lakh Prize</p>
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Venue</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">IIIT Dharwad</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-lg sm:rounded-xl bg-white/80 border border-gray-200/80 p-3 sm:p-4 shadow-xs text-left mb-4 sm:mb-5">
                    <p className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 sm:mb-2.5">
                      Event Highlights
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>Won ₹3,00,000 Cash Prize</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>2nd Place among 25 competing teams</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>Theme: Smart Logistics &amp; Urban Commerce</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>Organised by TiE Bangalore &amp; K-tech</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3">
                    <Link
                      href="https://assets.iiitdwd.ac.in/images/TieHackathon-IIITdwd.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-[#193654] hover:bg-[#12273d] text-white font-medium text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all shadow hover:shadow-md cursor-pointer">
                        <IconExternalLink size={16} />
                        <span>View Full Infographic</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Visit of Ms. Garima Sharma, IRS */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14">
                {/* Left: Poster */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group max-h-[340px] sm:max-h-[460px] lg:max-h-none flex items-center justify-center">
                    <Image
                      src="https://assets.iiitdwd.ac.in/images/IIIT_Dharwad_Visit__A_Visual_Story.png"
                      alt="Visit of Ms Garima Sharma, IRS - Director (IIITs), Ministry of Education to IIIT Dharwad"
                      width={1222}
                      height={1287}
                      className="w-full h-auto max-h-[340px] sm:max-h-[460px] lg:max-h-none object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-left">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#193654]/5 border border-[#193654]/10 text-[#193654] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#CCE70B]" />
                    <span>Distinguished Campus Visit</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#193654] leading-tight mb-2 tracking-tight">
                    Visit of Ms. Garima Sharma, IRS
                  </h2>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#CCE70B] rounded-full mb-3 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed font-grotesk">
                    Ms. Garima Sharma, IRS, Director (IIITs), Ministry of Education, Government of India, visited IIIT Dharwad on 7 October 2026. During her visit, she toured various campus facilities, reviewed the ongoing Phase-II development activities, and interacted with faculty, staff and students. The visit provided an opportunity to showcase the Institute’s progress, ongoing initiatives and future development plans. We sincerely thank her for the visit and continued support.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Date</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">7th Oct 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Venue</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">IIIT Dharwad</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-lg sm:rounded-xl bg-white/80 border border-gray-200/80 p-3 sm:p-4 shadow-xs text-left">
                    <p className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 sm:mb-2.5">
                      Key Highlights of the Visit
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>Phase-II Development Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>R&D Labs &amp; Research Showcase</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>Campus Facilities Tour</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCircleCheck size={15} className="text-[#193654] shrink-0" />
                        <span>Faculty &amp; Student Interaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: Orientation Program 2026 */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14">
                {/* Image/Poster */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group">
                    <Image
                      src="https://assets.iiitdwd.ac.in/images/2026_orientation.jpeg"
                      alt="Orientation Program 2026 Poster"
                      width={1200}
                      height={675}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 w-full text-left">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#193654]/5 border border-[#193654]/10 text-[#193654] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#CCE70B]" />
                    <span>Academic Year 2026-27</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#193654] leading-tight mb-2 tracking-tight">
                    Orientation Program 2026
                  </h2>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#CCE70B] rounded-full mb-3 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed font-grotesk">
                    We are delighted to invite you to the Orientation Program for the newly admitted batch of students. Join us as we begin this new journey together, introducing you to the opportunities and vibrant academic environment at IIIT Dharwad.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Date</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">20th Aug 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconClock size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Time</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">9:30 AM</p>
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#193654]/5 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-gray-400">Venue</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-800 truncate">M-Block Campus</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-4">
                    <Link
                      href="https://www.youtube.com/live/uKqevHqO-24?si=i0hcucBgyer8x9fq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-[#cc0000] hover:bg-[#aa0000] text-white font-medium text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all shadow hover:shadow-md cursor-pointer">
                        <IconBrandYoutubeFilled size={18} />
                        <span>Watch Live</span>
                      </button>
                    </Link>

                    <Link
                      href="https://docs.google.com/spreadsheets/d/1UczkWhhygCAGxH4N7NJTgAunTk3Ru8Bj/edit?usp=sharing&ouid=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all border border-gray-300 shadow-xs hover:shadow-md cursor-pointer">
                        <IconFileText size={18} className="text-gray-700" />
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
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-all cursor-pointer border border-gray-200 shadow-xs hover:border-gray-300 active:scale-95"
            aria-label="Previous slide"
          >
            <IconChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                  selectedIndex === index
                    ? "w-6 sm:w-8 bg-[#193654]"
                    : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-all cursor-pointer border border-gray-200 shadow-xs hover:border-gray-300 active:scale-95"
            aria-label="Next slide"
          >
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
