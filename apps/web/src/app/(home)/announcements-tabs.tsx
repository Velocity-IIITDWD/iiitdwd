"use client";

import { IconBell, IconBriefcase } from "@tabler/icons-react";
import { useState } from "react";

export default function AnnouncementsTabs({
  announcements,
  careerUpdates,
}: {
  announcements: React.ReactNode;
  careerUpdates: React.ReactNode;
}): JSX.Element {
  const [activeTab, setActiveTab] = useState<"announcements" | "careers">(
    "announcements"
  );

  return (
    <div className="flex flex-col h-full w-full bg-white relative p-5 sm:p-6">
      {/* Sleek Tab Header */}
      <div className="flex items-center gap-4 xl:gap-3 mb-5 border-b border-gray-100 flex-wrap shrink-0">
        <button
          onClick={() => setActiveTab("announcements")}
          className={`relative pb-3 transition-all duration-300 flex items-center gap-2 font-bold cursor-pointer ${
            activeTab === "announcements"
              ? "text-[#193654]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <IconBell
            size={18}
            className={`transition-colors ${
              activeTab === "announcements" ? "text-[#193654]" : "text-gray-400"
            }`}
          />
          <span className="text-[15px] xl:text-[14.5px] tracking-wide">
            Announcements
          </span>
          {activeTab === "announcements" && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#193654] rounded-t-full" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("careers")}
          className={`relative pb-3 transition-all duration-300 flex items-center gap-2 font-bold cursor-pointer ${
            activeTab === "careers"
              ? "text-[#193654]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <IconBriefcase
            size={18}
            className={`transition-colors ${
              activeTab === "careers" ? "text-[#193654]" : "text-gray-400"
            }`}
          />
          <span className="text-[15px] xl:text-[14.5px] tracking-wide">
            Careers
          </span>
          {activeTab === "careers" && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#193654] rounded-t-full" />
          )}
        </button>
      </div>

      {/* Custom Scrollable Area */}
      <div className="overflow-y-auto flex-1 custom-scrollbar pr-1 min-h-0 relative">
        <div
          className={`transition-opacity duration-300 ${
            activeTab === "announcements"
              ? "opacity-100 block"
              : "opacity-0 hidden"
          }`}
        >
          {announcements}
        </div>
        <div
          className={`transition-opacity duration-300 ${
            activeTab === "careers" ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {careerUpdates}
        </div>
      </div>
    </div>
  );
}
