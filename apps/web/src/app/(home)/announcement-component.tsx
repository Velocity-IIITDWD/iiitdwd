"use client";
import Link from "next/link";
import { AnnouncementItem } from "./notification";
import { IconArrowRight, IconCalendarEvent, IconPinned } from "@tabler/icons-react";

export default function AnnouncementComponent({
  announcements,
  viewAllLink = "/announcements",
  viewAllText = "View all Announcements",
}: {
  announcements: AnnouncementItem[];
  viewAllLink?: string;
  viewAllText?: string;
}) {
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

    if (ddmmyyyyMatch) {
      const [_, day, month, year] = ddmmyyyyMatch;
      parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else {
      parsedDate = new Date(dateString);
    }

    if (parsedDate && !isNaN(parsedDate.getTime())) {
      const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(parsedDate);
      const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(parsedDate);
      const year = parsedDate.getFullYear();
      return { month, day, year };
    }
    return null;
  };

  return (
    <div className="relative flex flex-col h-full">
      {/* Scrollable list container */}
      <div className="space-y-4 mb-6">
        
        {/* Pinned Items */}
        {pinnedAnnouncementItems.map((item, idx) => {
          const dateBlock = parseDateForBlock(item.date);
          return (
            <a href={item.link} key={`pinned-${idx}`} className="block group">
              <div className="relative p-4 rounded-xl bg-gradient-to-r from-white to-[#CCE70B]/[0.02] border border-[#CCE70B]/30 hover:border-[#CCE70B]/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(204,231,11,0.15)] hover:-translate-y-0.5 overflow-hidden">
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CCE70B] rounded-l-xl" />
                
                <div className="flex items-start gap-4 pl-2">
                  {/* Calendar Block */}
                  {dateBlock ? (
                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-[#193654]/5 border border-[#193654]/10 group-hover:bg-[#193654] group-hover:border-[#193654] transition-colors duration-300">
                       <span className="text-[#193654] group-hover:text-white font-bold text-lg leading-none transition-colors">{dateBlock.day}</span>
                       <span className="text-[#193654]/70 group-hover:text-[#CCE70B] text-[10px] font-bold uppercase tracking-wider mt-0.5 transition-colors">{dateBlock.month}</span>
                    </div>
                  ) : (
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-[#193654]/5 border border-[#193654]/10 text-[#193654]">
                       <IconCalendarEvent stroke={1.5} size={24} />
                    </div>
                  )}

                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#CCE70B] text-[#193654] uppercase tracking-wider flex items-center gap-1">
                        <IconPinned size={10} stroke={2.5} /> Featured
                      </span>
                      {dateBlock && (
                        <span className="text-[11px] text-gray-400 font-medium">{dateBlock.year}</span>
                      )}
                    </div>
                    <h3 className="text-[14px] text-gray-800 line-clamp-2 font-semibold group-hover:text-[#193654] transition-colors duration-300 leading-relaxed pr-4">
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
              <div className="p-4 rounded-xl bg-white border border-gray-100 hover:border-[#193654]/20 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  {/* Calendar Block */}
                  {dateBlock ? (
                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-[#193654]/5 group-hover:border-[#193654]/10 transition-colors duration-300">
                       <span className="text-gray-700 group-hover:text-[#193654] font-bold text-base leading-none transition-colors">{dateBlock.day}</span>
                       <span className="text-gray-500 group-hover:text-[#193654]/70 text-[9px] font-bold uppercase tracking-wider mt-0.5 transition-colors">{dateBlock.month}</span>
                    </div>
                  ) : (
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-[#193654]/60">
                       <IconCalendarEvent stroke={1.5} size={20} />
                    </div>
                  )}

                  <div className="flex-1 min-w-0 pt-0.5">
                    {dateBlock && (
                       <div className="text-[11px] text-gray-400 font-medium mb-1">{dateBlock.year}</div>
                    )}
                    <h3 className="text-[14px] text-gray-600 line-clamp-2 font-medium group-hover:text-[#193654] transition-colors duration-300 leading-relaxed pr-2">
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
      <div className="mt-auto pt-4 border-t border-gray-100">
        <Link
          href={viewAllLink}
          className="group inline-flex items-center gap-2 text-sm font-bold text-[#193654] hover:text-[#CCE70B] transition-colors"
        >
          {viewAllText} 
          <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
