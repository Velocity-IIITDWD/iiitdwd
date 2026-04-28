"use client";

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
    <div className="flex flex-col h-full w-full min-h-0">
      <div className="flex items-center gap-6 mb-5 border-b border-gray-100 pb-2">
        <button
          onClick={() => setActiveTab("announcements")}
          className={`flex flex-col items-start transition-all duration-300 ${
            activeTab === "announcements" ? "opacity-100" : "opacity-50 hover:opacity-80"
          }`}
        >
          <div className="flex items-center gap-2">
            <h2
              className={`text-xl font-bold transition-colors ${
                activeTab === "announcements" ? "text-[#193654]" : "text-gray-500"
              }`}
            >
              Announcements
            </h2>
          </div>
          <div
            className={`h-0.5 bg-[#CCE70B] rounded-full mt-1.5 transition-all duration-300 ${
              activeTab === "announcements" ? "w-12" : "w-0"
            }`}
          ></div>
        </button>

        <button
          onClick={() => setActiveTab("careers")}
          className={`flex flex-col items-start transition-all duration-300 ${
            activeTab === "careers" ? "opacity-100" : "opacity-50 hover:opacity-80"
          }`}
        >
          <div className="flex items-center gap-2">
            <h2
              className={`text-xl font-bold transition-colors ${
                activeTab === "careers" ? "text-[#193654]" : "text-gray-500"
              }`}
            >
              Careers
            </h2>
          </div>
          <div
            className={`h-0.5 bg-[#CCE70B] rounded-full mt-1.5 transition-all duration-300 ${
              activeTab === "careers" ? "w-12" : "w-0"
            }`}
          ></div>
        </button>
      </div>
      
      <div className="overflow-y-auto flex-1 custom-scrollbar pr-1 min-h-0">
        <div className={activeTab === "announcements" ? "block" : "hidden"}>
          {announcements}
        </div>
        <div className={activeTab === "careers" ? "block" : "hidden"}>
          {careerUpdates}
        </div>
      </div>
    </div>
  );
}
