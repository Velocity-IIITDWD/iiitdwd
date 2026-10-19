"use client";

import { useState } from "react";
import {
  IconSchool,
  IconUsers,
  IconBrandYoutubeFilled,
  IconArrowUpRight,
} from "@tabler/icons-react";
import VideoPlayer from "./video-player";

interface MediaCardProps {
  convocationLink: string;
  convocationEmbed: string;
  orientationLink: string;
}

export default function MediaCard({
  convocationLink,
  convocationEmbed,
  orientationLink,
}: MediaCardProps): JSX.Element {
  const [activeMedia, setActiveMedia] = useState<"convocation" | "induction">(
    "convocation"
  );

  return (
    <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden h-[500px] md:h-[550px] xl:h-[620px] flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      {/* Tab Header */}
      <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between gap-2 shrink-0 bg-white">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMedia("convocation")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMedia === "convocation"
                ? "bg-[#193654] text-white shadow-xs"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <IconSchool size={15} />
            <span>Convocation</span>
          </button>

          <button
            onClick={() => setActiveMedia("induction")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMedia === "induction"
                ? "bg-[#193654] text-white shadow-xs"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <IconUsers size={15} />
            <span>Induction</span>
          </button>
        </div>

        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hidden sm:inline-block">
          Video
        </span>
      </div>

      {/* Video Viewport */}
      <div className="relative flex-1 bg-black w-full min-h-[220px]">
        {activeMedia === "convocation" ? (
          <VideoPlayer
            externalLink={convocationLink}
            embedSrc={convocationEmbed}
            className="!absolute !inset-0 !w-full !h-full !rounded-none border-none !block"
          />
        ) : (
          <VideoPlayer
            externalLink={orientationLink}
            className="!absolute !inset-0 !w-full !h-full !rounded-none border-none !block"
          />
        )}
      </div>

      {/* Card Info Footer */}
      <div className="p-4 sm:p-5 border-t border-gray-100 bg-white shrink-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-sm font-bold text-[#193654] truncate">
            {activeMedia === "convocation"
              ? "Convocation Ceremony Address"
              : "Induction & Orientation 2025"}
          </h4>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#193654]/70 px-2 py-0.5 rounded bg-[#193654]/5 shrink-0">
            {activeMedia === "convocation" ? "Keynote" : "Campus Reel"}
          </span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
          {activeMedia === "convocation"
            ? "Annual convocation address celebrating graduate milestones and technological achievements."
            : "Highlights and orientation welcoming the incoming undergraduate batch to IIIT Dharwad."}
        </p>
        <a
          href={
            activeMedia === "convocation" ? convocationLink : orientationLink
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#193654] hover:underline"
        >
          <span>Watch Full Video</span>
          <IconArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
