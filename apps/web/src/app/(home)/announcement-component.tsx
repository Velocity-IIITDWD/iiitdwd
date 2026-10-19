"use client";
import Link from "next/link";
import { AnnouncementItem } from "./notification";
import {
  IconArrowRight,
  IconCalendarEvent,
  IconPinned,
} from "@tabler/icons-react";

export default function AnnouncementComponent({
  announcements,
  viewAllLink = "/announcements",
  viewAllText = "View all Announcements",
}: {
  announcements: AnnouncementItem[];
  viewAllLink?: string;
  viewAllText?: string;
}): JSX.Element {
  const pinnedAnnouncementItems = announcements
    .filter(item => item.isPinned)
    .slice(0, 3);

  const regularAnnouncementItems = [
    ...announcements.filter(item => item.isPinned).slice(2),
    ...announcements.filter(item => !item.isPinned),
  ];

  // Improved date formatter that returns an object for the calendar block
  const parseDateForBlock = (dateString: string | null | undefined) => {
    if (!dateString) return null;

    let parsedDate: Date | null = null;

    // Try DD-MM-YYYY
    const ddmmyyyyRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    const ddmmyyyyMatch = dateString.match(ddmmyyyyRegex);

    if (
      ddmmyyyyMatch &&
      ddmmyyyyMatch[1] &&
      ddmmyyyyMatch[2] &&
      ddmmyyyyMatch[3]
    ) {
      const day = parseInt(ddmmyyyyMatch[1], 10);
      const month = parseInt(ddmmyyyyMatch[2], 10) - 1;
      const year = parseInt(ddmmyyyyMatch[3], 10);
      parsedDate = new Date(year, month, day);
    } else {
      parsedDate = new Date(dateString);
    }

    if (parsedDate && !isNaN(parsedDate.getTime())) {
      const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        parsedDate
      );
      const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(
        parsedDate
      );
      const year = parsedDate.getFullYear();
      return { month, day, year };
    }
    return null;
  };

  return (
    <div className="relative flex flex-col h-full">
      {/* Scrollable list container */}
      <div className="space-y-3 mb-5">
        {/* Pinned Items */}
        {pinnedAnnouncementItems.map((item, idx) => {
          const dateBlock = parseDateForBlock(item.date);
          return (
            <a href={item.link} key={`pinned-${idx}`} className="block group">
              <div className="relative p-3.5 rounded-xl bg-white border border-gray-200/90 hover:border-[#193654]/40 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 overflow-hidden">
                {/* Navy accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#193654] rounded-l-xl" />

                <div className="flex items-start gap-3.5 pl-2">
                  {/* Calendar Block */}
                  {dateBlock ? (
                    <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#193654]/5 border border-[#193654]/10 group-hover:bg-[#193654] group-hover:border-[#193654] transition-colors duration-300">
                      <span className="text-[#193654] group-hover:text-white font-black text-base leading-none transition-colors">
                        {dateBlock.day}
                      </span>
                      <span className="text-[#193654]/75 group-hover:text-white/80 text-[10px] font-bold uppercase tracking-wider mt-0.5 transition-colors">
                        {dateBlock.month}
                      </span>
                    </div>
                  ) : (
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-[#193654]/5 border border-[#193654]/10 text-[#193654]">
                      <IconCalendarEvent stroke={1.5} size={22} />
                    </div>
                  )}

                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-[#193654] text-white uppercase tracking-wider flex items-center gap-1 shadow-xs">
                        <IconPinned size={10} stroke={2.5} /> Featured
                      </span>
                      {dateBlock && (
                        <span className="text-[11px] text-gray-400 font-semibold">
                          {dateBlock.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[13.5px] text-gray-800 line-clamp-2 font-bold group-hover:text-[#193654] transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          );
        })}

        {/* Regular Items */}
        {regularAnnouncementItems.slice(0, 6).map((item, idx) => {
          const dateBlock = parseDateForBlock(item.date);
          return (
            <a href={item.link} key={`regular-${idx}`} className="block group">
              <div className="p-3.5 rounded-xl bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-start gap-3.5">
                  {/* Calendar Block */}
                  {dateBlock ? (
                    <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 group-hover:bg-[#193654]/5 group-hover:border-[#193654]/15 transition-colors duration-300">
                      <span className="text-gray-700 group-hover:text-[#193654] font-black text-base leading-none transition-colors">
                        {dateBlock.day}
                      </span>
                      <span className="text-gray-500 group-hover:text-[#193654]/80 text-[10px] font-bold uppercase tracking-wider mt-0.5 transition-colors">
                        {dateBlock.month}
                      </span>
                    </div>
                  ) : (
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 text-gray-400 group-hover:text-[#193654]">
                      <IconCalendarEvent stroke={1.5} size={20} />
                    </div>
                  )}

                  <div className="flex-1 min-w-0 pt-0.5">
                    {dateBlock && (
                      <div className="text-[11px] text-gray-400 font-semibold mb-0.5">
                        {dateBlock.year}
                      </div>
                    )}
                    <h3 className="text-[13.5px] text-gray-700 line-clamp-2 font-medium group-hover:text-[#193654] transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* View All Link */}
      <div className="mt-auto pt-3 border-t border-gray-100">
        <Link
          href={viewAllLink}
          className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#193654] hover:underline transition-colors"
        >
          {viewAllText}
          <IconArrowRight
            size={15}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
