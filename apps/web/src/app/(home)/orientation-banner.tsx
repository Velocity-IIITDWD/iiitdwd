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
  IconRocket,
  IconCpu,
  IconUsers,
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
    <section className="w-full bg-slate-50/70 border-y border-gray-200 py-8 sm:py-12 md:py-16 relative overflow-hidden antialiased font-grotesk">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#193654_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#193654]/5 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center flex flex-col items-center">
          <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#193654] mb-1.5">
            IIIT Dharwad Milestones
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black text-[#193654] tracking-tight uppercase leading-tight">
            Highlights of the year
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-[#193654] mt-2.5 sm:mt-3 rounded-full" />
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {/* Slide 1: Team ICARUS (ISRO Robotics Challenge - 4th Place & ₹2 Lakh Prize) */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
                {/* Left: Graphic / Infographic */}
                <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0 flex items-center justify-center">
                  <a
                    href="https://assets.iiitdwd.ac.in/images/icarus_info.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group h-[320px] sm:h-[440px] md:h-[500px] lg:h-[540px] cursor-pointer w-full max-w-[440px] lg:max-w-none"
                    title="Click to view full graphic in new tab"
                  >
                    <div className="w-full h-full overflow-hidden relative">
                      <Image
                        src="https://assets.iiitdwd.ac.in/images/icarus_info.jpeg"
                        alt="Team ICARUS - ISRO Robotics Challenge Visual Story"
                        width={946}
                        height={1600}
                        className="w-full h-auto transition-transform duration-[4000ms] ease-in-out group-hover:-translate-y-[55%]"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#193654]/95 via-[#193654]/60 to-transparent p-3.5 sm:p-4.5 flex items-center justify-between text-white pointer-events-none">
                        <span className="text-[10px] sm:text-xs font-extrabold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full">
                          IRoC-U 2026 Visual Story
                        </span>
                        <span className="text-[11px] sm:text-xs font-black flex items-center gap-1">
                          View Full Graphic ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-left lg:pl-2 xl:pl-4">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs text-[#193654] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#193654]" />
                    <span>Student Achievement · IRoC-U 2026</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] xl:text-[2.25rem] font-black text-[#193654] leading-[1.25] mb-2.5 tracking-tight">
                    Team ICARUS: 4th Place &amp; ₹2 Lakh Prize at ISRO Robotics Challenge
                  </h3>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#193654] rounded-full mb-3.5 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-800 mb-5 text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal">
                    Team ICARUS of IIIT Dharwad secured 4th place nationally and a ₹2 Lakh cash prize at the ISRO Robotics Challenge (IRoC-U 2026) organized by U R Rao Satellite Centre (URSC), Bengaluru. Competing among ~590 teams nationwide, the team developed an autonomous, GPS-denied UAV and base station system for planetary exploration.
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 sm:mb-5">
                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconTrophy size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Award</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">4th Place (₹2 Lakh)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconRocket size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Competition</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">IRoC-U 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconUsers size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Finalists</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">Top 20 of ~590 Teams</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-xl bg-white border border-gray-200 shadow-xs p-4 sm:p-4.5 text-left mb-4">
                    <p className="text-xs font-black text-[#193654] uppercase tracking-wider mb-2.5">
                      Challenge Highlights
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-gray-900 font-medium">
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={17} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">4th Place national finish with ₹2 Lakh cash award</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={17} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Selected among top 20 finalists from ~590 registered teams</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={17} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Built GPS-denied autonomous UAV with base station docking</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={17} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Successfully detected all visual instances in competition arena</span>
                      </div>
                    </div>
                  </div>

                  {/* Team & Mentorship Card */}
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-xs mb-5">
                    <div className="flex items-center gap-2 mb-2 text-xs font-black uppercase tracking-wider text-[#193654]">
                      <IconUsers size={17} className="text-[#193654]" />
                      <span>Project Mentorship &amp; Student Team</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-[13px] text-gray-900">
                      <div>
                        <span className="font-extrabold text-[#193654]">Faculty Mentor:</span>{" "}
                        <span className="text-gray-800 font-medium">Prof. Mallikarjun Kande</span>
                      </div>
                      <div>
                        <span className="font-extrabold text-[#193654]">Team Lead:</span>{" "}
                        <span className="text-gray-800 font-medium">Jayesh Patil (3rd-yr CSE)</span>
                      </div>
                      <div className="sm:col-span-2 pt-1 border-t border-gray-100 mt-1">
                        <span className="font-extrabold text-[#193654]">Team Members:</span>{" "}
                        <span className="text-gray-800 font-medium leading-relaxed">
                          Aswin Joseph Sunny, Priyanshu Mittal, Ankit Dash, Raskin Verma, Muhammad Rehan, Saksham
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="https://youtu.be/BfdvYrgCoVQ?si=BYiqFg2FmzYJhf0T"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer">
                        <IconBrandYoutubeFilled size={18} />
                        <span>Watch Video</span>
                      </button>
                    </Link>

                    <Link
                      href="https://assets.iiitdwd.ac.in/docs/Story_ICARUS_Award_In_Main_Title.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-slate-50 text-[#193654] font-bold text-xs sm:text-sm rounded-xl transition-all border border-gray-300 shadow-xs hover:shadow-md cursor-pointer">
                        <IconFileText size={18} className="text-[#193654]" />
                        <span>Read Full Story (PDF)</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: SIDHARUD1 (First Silicon Chip) */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
                {/* Left: Chip Presentation Visual Card */}
                <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-[#0c1a29] text-white flex flex-col justify-between p-6 sm:p-8 h-[320px] sm:h-[440px] md:h-[500px] lg:h-[540px] cursor-default w-full max-w-[440px] lg:max-w-none group">
                    {/* Background circuit grid effect with white dots */}
                    <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Card Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase px-3 py-1 rounded bg-white/10 text-white border border-white/20">
                        VLSI Club · MPW Shuttle
                      </span>
                      <span className="text-[11px] sm:text-xs text-white font-mono font-black tracking-wide">
                        GF 180nm Node
                      </span>
                    </div>

                    {/* Center: Chip Illustration */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[#193654] to-[#08121d] border-2 border-white/40 shadow-2xl flex flex-col items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105">
                        {/* Crisp White Corner Pins */}
                        <div className="absolute -top-1 left-3 right-3 flex justify-between">
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                        </div>
                        <div className="absolute -bottom-1 left-3 right-3 flex justify-between">
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                          <span className="w-2.5 h-1 bg-white/80 rounded-xs" />
                        </div>
                        <IconCpu size={44} className="text-white mb-2" />
                        <span className="text-sm sm:text-base font-black tracking-widest text-white font-mono">
                          SIDHARUD1
                        </span>
                        <span className="text-[10px] text-gray-200 font-mono tracking-wider font-extrabold">
                          GPIO EXTENDER
                        </span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-gray-200">
                      <span className="font-semibold">Synopsys RTL-to-GDSII</span>
                      <span className="text-white font-black">GlobalFoundries</span>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-left lg:pl-2 xl:pl-4">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs text-[#193654] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#193654]" />
                    <span>Student Achievement · VLSI Design</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] xl:text-[2.25rem] font-black text-[#193654] leading-[1.25] mb-2.5 tracking-tight">
                    SIDHARUD1: First Silicon Chip from IIIT Dharwad
                  </h3>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#193654] rounded-full mb-3.5 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-800 mb-5 text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal">
                    Students from the VLSI Club designed SIDHARUD1, a GPIO Extender chip built using a complete RTL-to-GDSII design flow, fabricated through Synopsys and GlobalFoundries' MPW Shuttle Program.
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 sm:mb-5">
                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCpu size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Technology</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">180nm CMOS</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconRocket size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Foundry</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">GlobalFoundries</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCircleCheck size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Flow</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">RTL to GDSII</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-xl bg-white border border-gray-200 shadow-xs p-4 sm:p-4.5 text-left mb-4">
                    <p className="text-xs font-black text-[#193654] uppercase tracking-wider mb-2.5">
                      Design Highlights
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-gray-900 font-medium">
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Fabricated on GlobalFoundries 180nm process</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Final GDS successfully submitted for tape-out</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">End-to-end student design using Synopsys EDA tools</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Synopsys University MPW Shuttle Program participant</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Members Card */}
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-xs mb-5">
                    <div className="flex items-center gap-2 mb-2 text-xs font-black uppercase tracking-wider text-[#193654]">
                      <IconUsers size={17} className="text-[#193654]" />
                      <span>VLSI Design Team (Students)</span>
                    </div>
                    <div className="text-xs sm:text-[13px] text-gray-900 leading-relaxed">
                      <span className="font-extrabold text-[#193654]">Student Designers:</span>{" "}
                      <span className="text-gray-800 font-medium">
                        Shiva Shankar B, Mithil A, Rakesh Patidar, Aditya V S, Divyansh M, Sumeet P, and team members.
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7409605993732698112/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#193654] hover:bg-[#12273d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer">
                        <IconExternalLink size={16} />
                        <span>View on LinkedIn</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: LEAP Hackathon 2nd Place Achievement */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
                {/* Left: Poster / Infographic */}
                <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0 flex items-center justify-center">
                  <a
                    href="https://assets.iiitdwd.ac.in/images/TieHackathon-IIITdwd.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group h-[320px] sm:h-[440px] md:h-[500px] lg:h-[540px] cursor-pointer w-full max-w-[440px] lg:max-w-none"
                    title="Click to view full infographic in new tab"
                  >
                    <div className="w-full h-full overflow-hidden relative">
                      <Image
                        src="https://assets.iiitdwd.ac.in/images/TieHackathon-IIITdwd.png"
                        alt="IIIT Dharwad Secures 2nd Place in LEAP Hackathon Hubballi Edition - Wins 3 Lakh Cash Prize"
                        width={1600}
                        height={4708}
                        className="w-full h-auto transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[65%]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#193654]/95 via-[#193654]/60 to-transparent p-3.5 sm:p-4.5 flex items-center justify-between text-white pointer-events-none">
                        <span className="text-[10px] sm:text-xs font-extrabold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full">
                          LEAP Hackathon Story
                        </span>
                        <span className="text-[11px] sm:text-xs font-black flex items-center gap-1">
                          View Full Story ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-left lg:pl-2 xl:pl-4">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs text-[#193654] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#193654]" />
                    <span>Student Achievement · LEAP Hackathon 2026</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] xl:text-[2.25rem] font-black text-[#193654] leading-[1.25] mb-2.5 tracking-tight">
                    IIIT Dharwad Secures 2nd Place in LEAP Hackathon
                  </h3>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#193654] rounded-full mb-3.5 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-800 mb-5 text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal">
                    IIIT Dharwad secured 2nd place and a ₹3 Lakh cash prize at the LEAP Hackathon Hubballi Edition, recognized for practical innovation and problem-solving in Smart Logistics and Urban Commerce.
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Date</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">7-8 Oct 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconTrophy size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Award</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">₹3 Lakh Prize</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Venue</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">IIIT Dharwad</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-xl bg-white border border-gray-200 shadow-xs p-4 sm:p-5 text-left mb-5">
                    <p className="text-xs font-black text-[#193654] uppercase tracking-wider mb-3">
                      Event Highlights
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-gray-900 font-medium">
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Won ₹3,00,000 Cash Prize</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">2nd Place among 25 competing teams</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Theme: Smart Logistics &amp; Urban Commerce</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Organised by TiE Bangalore &amp; K-tech</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="https://assets.iiitdwd.ac.in/images/TieHackathon-IIITdwd.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#193654] hover:bg-[#12273d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer">
                        <IconExternalLink size={16} />
                        <span>View Full Infographic</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4: Visit of Ms. Garima Sharma, IRS */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
                {/* Left: Poster */}
                <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group max-h-[340px] sm:max-h-[460px] lg:max-h-[540px] flex items-center justify-center w-full max-w-[440px] lg:max-w-none">
                    <Image
                      src="https://assets.iiitdwd.ac.in/images/IIIT_Dharwad_Visit__A_Visual_Story.png"
                      alt="Visit of Ms Garima Sharma, IRS - Director (IIITs), Ministry of Education to IIIT Dharwad"
                      width={1222}
                      height={1287}
                      className="w-full h-auto max-h-[340px] sm:max-h-[460px] lg:max-h-[540px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full text-left lg:pl-2 xl:pl-4">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs text-[#193654] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#193654]" />
                    <span>Campus Update · Distinguished Visit</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] xl:text-[2.25rem] font-black text-[#193654] leading-[1.25] mb-2.5 tracking-tight">
                    Visit of Ms. Garima Sharma, IRS
                  </h3>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#193654] rounded-full mb-3.5 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-800 mb-5 text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal">
                    Ms. Garima Sharma, IRS, Director (IIITs), Ministry of Education, Government of India, visited IIIT Dharwad on 7 October 2026. During the visit, she reviewed ongoing Phase-II campus infrastructure development, toured academic facilities, and interacted with faculty and students.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Date</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">7th Oct 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Venue</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">IIIT Dharwad</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Card */}
                  <div className="rounded-xl bg-white border border-gray-200 shadow-xs p-4 sm:p-5 text-left">
                    <p className="text-xs font-black text-[#193654] uppercase tracking-wider mb-3">
                      Key Highlights of the Visit
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-gray-900 font-medium">
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Phase-II Development Review</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">R&amp;D Labs &amp; Research Showcase</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Campus Facilities Tour</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <IconCircleCheck size={16} className="text-[#193654] shrink-0 mt-0.5" />
                        <span className="leading-snug">Faculty &amp; Student Interaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 5: Orientation Program 2026 */}
            <div className="flex-[0_0_100%] min-w-0">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
                {/* Image/Poster */}
                <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-200/90 bg-white group w-full max-w-[440px] lg:max-w-none">
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
                <div className="flex-1 w-full text-left lg:pl-2 xl:pl-4">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs text-[#193654] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#193654]" />
                    <span>Institute Event · Academic Year 2026-27</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2rem] xl:text-[2.25rem] font-black text-[#193654] leading-[1.25] mb-2.5 tracking-tight">
                    Orientation Program 2026
                  </h3>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#193654] rounded-full mb-3.5 sm:mb-4" />

                  {/* Description */}
                  <p className="text-gray-800 mb-5 text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal">
                    Annual orientation program for the incoming batch of undergraduate students, welcoming students and parents to IIIT Dharwad and providing comprehensive introductions to academic curriculums and campus facilities.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconCalendarEvent size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Date</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">20th Aug 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconClock size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Time</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">9:30 AM</p>
                      </div>
                    </div>

                    <div className="col-span-1 sm:col-span-1 flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#193654]/10 flex items-center justify-center text-[#193654] shrink-0">
                        <IconMapPin size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider font-extrabold text-[#193654]/75">Venue</p>
                        <p className="text-sm font-black text-[#193654] leading-snug">M-Block Campus</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="https://www.youtube.com/live/uKqevHqO-24?si=i0hcucBgyer8x9fq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer">
                        <IconBrandYoutubeFilled size={18} />
                        <span>Watch Live</span>
                      </button>
                    </Link>

                    <Link
                      href="https://docs.google.com/spreadsheets/d/1UczkWhhygCAGxH4N7NJTgAunTk3Ru8Bj/edit?usp=sharing&ouid=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-slate-50 text-[#193654] font-bold text-xs sm:text-sm rounded-xl transition-all border border-gray-300 shadow-xs hover:shadow-md cursor-pointer">
                        <IconFileText size={18} className="text-[#193654]" />
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
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
          <button
            onClick={scrollPrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-[#193654] flex items-center justify-center transition-all cursor-pointer border border-gray-200 shadow-sm hover:shadow-md active:scale-95"
            aria-label="Previous slide"
          >
            <IconChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-xs",
                  selectedIndex === index
                    ? "w-7 sm:w-9 bg-[#193654]"
                    : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-[#193654] flex items-center justify-center transition-all cursor-pointer border border-gray-200 shadow-sm hover:shadow-md active:scale-95"
            aria-label="Next slide"
          >
            <IconChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
