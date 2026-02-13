"use client";
import Link from "next/link";
import { AnnouncementItem } from "./notification";

export default function AnnouncementComponent({
  announcements,
}: {
  announcements: AnnouncementItem[];
}) {
  const pinnedAnnouncementItems = announcements
    .filter(item => item.isPinned)
    .slice(0, 3);

  const regularAnnouncementItems = [
    ...announcements.filter(item => item.isPinned).slice(2),
    ...announcements.filter(item => !item.isPinned),
  ];

  // Improved date formatter that handles various formats and edge cases
  // Fixed formatDate function for announcement-component.tsx
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "";

    // First: Try parsing known DD-MM-YYYY format *before* using new Date()
    const ddmmyyyyRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    const ddmmyyyyMatch = dateString.match(ddmmyyyyRegex);

    if (ddmmyyyyMatch) {
      const [_, day, month, year] = ddmmyyyyMatch;
      const parsedDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );

      if (!isNaN(parsedDate.getTime())) {
        return new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(parsedDate);
      }
    }

    // Then try native ISO or RFC 2822 formats
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(date);
      }
    } catch (e) {
      // Skip to fallback
    }

    // Handle partial dates (month-year or just year)
    const parts = dateString.split("-").filter(part => part !== "");

    if (parts.length === 1) {
      return parts[0];
    } else if (parts.length === 2) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const monthIndex = parseInt(parts[0], 10);
      if (!isNaN(monthIndex) && monthIndex >= 1 && monthIndex <= 12) {
        return `${monthNames[monthIndex - 1]} ${parts[1]}`;
      } else {
        return parts.join(" ");
      }
    }

    return dateString;
  };

  return (
    <div className="relative">
      {/* First show pinned items in a 2-row grid */}
      <div className="grid grid-cols-1 gap-4 mb-5">
        {pinnedAnnouncementItems.map((item, idx) => (
          <div key={idx} className="group">
            <a href={item.link} className="block">
              <div className="p-4 rounded-lg bg-[#CCE70B]/10 border border-[#CCE70B]/30 hover:border-[#CCE70B]/50 transition-all duration-300 hover:shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5 flex-shrink-0">📌</span>
                  <div className="flex-1 min-w-0">
                    {item.date && (
                      <div className="text-base text-[#193654] font-medium mb-1.5">
                        {formatDate(item.date)}
                      </div>
                    )}
                    <h3 className="text-base text-gray-800 line-clamp-2 font-semibold group-hover:text-[#193654] transition-colors duration-300 leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Show regular announcements as a scrollable list */}
      <div className="space-y-3 mb-4">
        {regularAnnouncementItems.slice(0, 3).map((item, idx) => (
          <a href={item.link} key={idx} className="block">
            <div className="py-3 px-4 rounded-lg bg-blue-50/40 hover:bg-blue-100/50 transition-colors duration-300 border border-blue-100/50">
              {item.date && (
                <div className="text-base text-gray-500 mb-1.5 font-medium">
                  {formatDate(item.date)}
                </div>
              )}
              <h3 className="text-base text-gray-700 line-clamp-2 font-semibold hover:text-[#193654] cursor-pointer transition-colors duration-300 leading-relaxed">
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      <Link
        href="/announcements"
        className="text-[#193654] hover:underline flex text-base items-center font-medium"
      >
        View all Announcements <span className="ml-1.5">→</span>
      </Link>
    </div>
  );
}
