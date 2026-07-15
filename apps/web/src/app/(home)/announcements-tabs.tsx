"use client";

import { IconBell, IconBriefcase } from "@tabler/icons-react";
import { useState } from "react";

export default function AnnouncementsTabs({
  announcements,
  careerUpdates,
}: {
  announcements: React.ReactNode;
  careerUpdates: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<"announcements" | "careers">(
    "announcements"
  );

  return (
    <div className="flex flex-col h-full w-full bg-white relative p-6 xl:p-5">
      {/* Sleek Tab Header */}
      <div className="flex items-center gap-4 xl:gap-3 mb-6 border-b border-gray-100 flex-wrap">
        <button
          onClick={() => setActiveTab("announcements")}
          className={`relative pb-4 transition-all duration-300 flex items-center gap-2 group ${
            activeTab === "announcements"
              ? "text-[#193654]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <IconBell
            size={18}
            className={`transition-colors ${activeTab === "announcements" ? "text-[#CCE70B]" : "text-gray-400 group-hover:text-gray-500"}`}
          />
          <span className="text-[16px] xl:text-[14.5px] font-bold tracking-wide">
            Announcements
          </span>
          {activeTab === "announcements" && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#CCE70B] rounded-t-lg shadow-[0_-2px_10px_rgba(204,231,11,0.5)]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("careers")}
          className={`relative pb-4 transition-all duration-300 flex items-center gap-2 group ${
            activeTab === "careers"
              ? "text-[#193654]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <IconBriefcase
            size={18}
            className={`transition-colors ${activeTab === "careers" ? "text-[#CCE70B]" : "text-gray-400 group-hover:text-gray-500"}`}
          />
          <span className="text-[16px] xl:text-[14.5px] font-bold tracking-wide">Careers</span>
          {activeTab === "careers" && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#CCE70B] rounded-t-lg shadow-[0_-2px_10px_rgba(204,231,11,0.5)]" />
          )}
        </button>
      </div>

      {/* Custom Scrollable Area */}
      <div className="overflow-y-auto flex-1 custom-scrollbar pr-2 min-h-0 relative">
        <div
          className={`transition-opacity duration-300 ${activeTab === "announcements" ? "opacity-100 block" : "opacity-0 hidden"}`}
        >
          {announcements}
        </div>
        <div
          className={`transition-opacity duration-300 ${activeTab === "careers" ? "opacity-100 block" : "opacity-0 hidden"}`}
        >
          {careerUpdates}
        </div>
      </div>
    </div>
  );
}
