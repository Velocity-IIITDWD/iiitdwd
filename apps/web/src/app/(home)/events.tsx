"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export interface EventItem {
  url?: string;
  caption?: string;
  link?: string;
  eventDate?: string;
  _createdAt?: string;
}

function getEventImageUrl(url?: string): string {
  if (!url) return "/images/default.jpg";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  if (url.startsWith("/")) {
    return `https://assets.iiitdwd.ac.in${url}`;
  }
  return `https://assets.iiitdwd.ac.in/${url}`;
}

function formatDisplayDate(dateStr?: string): string | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventsSection({
  events,
}: {
  events: EventItem[];
}): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-300 hover:shadow-lg -ml-4 hidden md:block"
        aria-label="Scroll left"
      >
        <ChevronLeftIcon size={20} className="text-[#193654]" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-300 hover:shadow-lg -mr-4 hidden md:block"
        aria-label="Scroll right"
      >
        <ChevronRightIcon size={20} className="text-[#193654]" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events?.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="group flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            {/* Event card container with modern compact design */}
            <div className="relative h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
              {/* Event image container with 16:9 aspect ratio */}
              <div className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={getEventImageUrl(item?.url)}
                    alt={item?.caption || "Event image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                {item?.eventDate && (
                  <div className="absolute top-2.5 left-2.5 bg-[#193654]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm border border-white/20 flex items-center gap-1.5">
                    <CalendarIcon size={12} className="text-[#CCE70B]" />
                    <span>{formatDisplayDate(item.eventDate)}</span>
                  </div>
                )}
              </div>

              {/* Event details */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base text-[#193654] font-semibold mb-4 line-clamp-2 leading-snug group-hover:text-[#193654]/80 transition-colors duration-300">
                  {item?.caption}
                </h3>

                {item?.link ? (
                  <Link
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex gap-2 uppercase w-fit text-xs font-semibold text-white hover:bg-[#193654]/90 transition-all duration-300 bg-[#193654] rounded-md px-4 py-2.5 items-center shadow-sm hover:shadow-md mt-auto"
                  >
                    Read More
                    <ArrowRightIcon size={14} />
                  </Link>
                ) : (
                  <span className="text-xs text-gray-400 mt-auto font-medium">
                    Event Details
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
