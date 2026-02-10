"use client";

import CommonCarousel from "@/components/carousel/common-carousel";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  url?: string;
  caption?: string;
  link?: string;
  _createdAt?: string;
}

export default function EventsSection({ events }: { events: EventItem[] }) {
  return (
    <CommonCarousel>
      {events?.slice(0, 5).map((item, index) => (
        <div className="embla__slide" key={index}>
          {/* Event card container */}
          <div className="event-card mx-auto w-full h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Event image container with fixed aspect ratio */}
            <div className="event-image-container relative w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={`https://iiitdwd.ac.in${item?.url!}`}
                  alt={item?.caption || "Event image"}
                  fill
                  sizes="(max-width: 800px) 100vw, (max-width: 1400px) 80vw, 900px"
                  className="object-contain"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Event details */}
            <div className="event-details p-4 flex-shrink-0">
              <h3 className="text-title-2 text-black font-semibold mb-4 line-clamp-2">
                {item?.caption}
              </h3>

              <Link
                href={item?.link!}
                className="inline-flex gap-4 uppercase w-fit text-title-3 text-amber-50 hover:bg-main/90 transition-colors bg-main rounded px-6 py-3 items-center"
              >
                Read More
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </CommonCarousel>
  );
}
