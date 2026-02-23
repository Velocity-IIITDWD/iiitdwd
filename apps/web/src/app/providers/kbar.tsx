"use client";

import data from "@/data/navigation";
import { trackEvent } from "@/lib/ga";
import { type NavigationItem } from "@/types/navigation";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
  useKBar,
  useMatches,
} from "kbar";
import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Action generation â€” fully indexes all nav items recursively
// ---------------------------------------------------------------------------

const generateActions = () => {
  interface Action {
    id: string;
    name: string;
    subtitle?: string;
    section: string;
    perform: () => void;
  }

  const actions: Action[] = [];
  const seenIds = new Set<string>();

  const navTabMapping: Record<string, string> = {
    Administration: "Institute",
    "Public disclosures": "Institute",
    Admissions: "Academics",
    "Career Guidance Cell": "Student life",
    "Faculty Careers": "Careers & Tenders",
    "Staff Careers": "Careers & Tenders",
    "PHD/123 Careers": "Careers & Tenders",
  };

  const mainMenuItems = new Set(["Home", "Gallery"]);
  const quickLinkItems = new Set(["Online"]);

  const processMenuItem = (
    item: NavigationItem,
    navTab: string,
    breadcrumb: string[]
  ) => {
    if (item.href && item.href !== "#") {
      if (!seenIds.has(item.href)) {
        seenIds.add(item.href);
        actions.push({
          id: item.href,
          name: item.title,
          subtitle: breadcrumb.length > 0 ? breadcrumb.join(" › ") : undefined,
          section: navTab,
          perform: () => {
            trackEvent({
              action: "kbar_navigation",
              category: "navigation",
              label: `${navTab} → ${breadcrumb.length > 0 ? breadcrumb.join(" › ") + " › " : ""}${item.title}`,
            });
            if (item.href.startsWith("/")) window.location.pathname = item.href;
            else window.open(item.href, "_blank");
          },
        });
      }
    }

    if (item.items) {
      item.items.forEach(subItem => {
        processMenuItem(subItem, navTab, [...breadcrumb, item.title]);
      });
    }
  };

  data.forEach(item => {
    let navTab: string;
    if (mainMenuItems.has(item.title)) navTab = "Main Menu";
    else if (quickLinkItems.has(item.title)) navTab = "Quick Links";
    else navTab = navTabMapping[item.title] ?? item.title;
    processMenuItem(item, navTab, []);
  });

  return actions;
};

// ---------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            style={{
              backgroundColor: "#fde68a",
              color: "#1a1a1a",
              borderRadius: "2px",
              padding: "0 1px",
              fontWeight: 700,
            }}
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Provider shell
// ---------------------------------------------------------------------------

export default function CustomKBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KBarProvider actions={generateActions()}>
      <KBarPortal>
        <KBarPositioner className="z-50 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-[10vh]">
          <KBarAnimator className="w-[92vw] max-w-[980px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200/60">
            {/* â”€â”€ Search input row â”€â”€ */}
            <div className="flex items-center gap-4 px-6 border-b border-gray-100">
              <svg
                className="w-6 h-6 text-gray-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <KBarSearch
                className="flex-1 py-5 text-[18px] font-normal outline-none border-none bg-transparent text-gray-800 placeholder-gray-400 tracking-[-0.01em]"
                defaultPlaceholder="Search pages, sections, and more…"
              />
              <CloseButton />
            </div>
            {/* â”€â”€ Results grid â”€â”€ */}
            <GridResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function CloseButton() {
  const { query } = useKBar();
  return (
    <button
      onClick={() => query.toggle()}
      aria-label="Close search"
      className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-150"
    >
      <X size={18} />
    </button>
  );
}

// ---------------------------------------------------------------------------
// Grid results â€” multi-column, no scroll, keyboard-navigable
// ---------------------------------------------------------------------------

const MAX_PER_SECTION = 6;

type ActionItem = {
  id: string;
  name: string;
  subtitle?: string;
  section?: string | { name: string };
  perform?: (item: unknown) => unknown;
};

function GridResults() {
  const { results } = useMatches();
  const { query, searchQuery } = useKBar(state => ({
    searchQuery: state.searchQuery,
  }));

  // Group kbar results (interleaved string + ActionImpl) into sections
  const sections = useMemo(() => {
    const groups: { title: string; items: ActionItem[] }[] = [];
    let current: { title: string; items: ActionItem[] } | null = null;
    for (const r of results) {
      if (typeof r === "string") {
        current = { title: r, items: [] };
        groups.push(current);
      } else {
        if (!current) {
          current = { title: "Results", items: [] };
          groups.push(current);
        }
        current.items.push(r as ActionItem);
      }
    }
    return groups.filter(g => g.items.length > 0);
  }, [results]);

  // Flat list of visible (shown) items for keyboard nav
  const visibleItems = useMemo(
    () => sections.flatMap(s => s.items.slice(0, MAX_PER_SECTION)),
    [sections]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Reset active index when query changes
  useEffect(() => setActiveIndex(0), [searchQuery]);

  // Scroll active item into view
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const open = useCallback(
    (item: ActionItem) => {
      item.perform?.(item);
      query.toggle();
    },
    [query]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex(i => Math.min(i + 1, visibleItems.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(i => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (visibleItems[activeIndex]) open(visibleItems[activeIndex]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visibleItems, activeIndex, open]);

  const hasResults = visibleItems.length > 0;
  const isEmpty = !searchQuery.trim();

  // No matches (only when user has actually typed something)
  if (!hasResults && !isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center select-none">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
          <svg
            className="h-7 w-7 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="text-[17px] font-semibold text-gray-700 tracking-tight">
          No pages found
        </p>
        <p className="mt-1.5 text-[14px] text-gray-400">
          Try different keywords
        </p>
      </div>
    );
  }

  // Determine column count (max 4, min 1)
  const colCount = Math.min(sections.length, 4);
  const gridClass =
    colCount === 1
      ? "grid-cols-1"
      : colCount === 2
        ? "grid-cols-2"
        : colCount === 3
          ? "grid-cols-3"
          : "grid-cols-4";

  // Running index across sections for keyboard nav
  let runningIndex = 0;

  return (
    <div role="listbox" aria-label="Search results">
      {/* â”€â”€ Column grid â”€â”€ */}
      <div
        className={`grid ${gridClass} divide-x divide-gray-100 border-b border-gray-100`}
      >
        {sections.map(section => {
          const shown = section.items.slice(0, MAX_PER_SECTION);
          const extra = section.items.length - shown.length;
          const sectionStartIdx = runningIndex;
          runningIndex += shown.length;

          return (
            <div key={section.title} className="flex flex-col py-5 px-5">
              {/* Section header */}
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-primary select-none">
                {section.title}
              </p>

              {/* Items */}
              <ul className="flex flex-col gap-0.5">
                {shown.map((item, i) => {
                  const globalIdx = sectionStartIdx + i;
                  const isActive = globalIdx === activeIndex;
                  return (
                    <li key={item.id}>
                      <button
                        ref={isActive ? activeRef : null}
                        role="option"
                        aria-selected={isActive}
                        onClick={() => open(item)}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className={`w-full text-left rounded-lg px-2.5 py-2 transition-colors duration-100 group ${
                          isActive
                            ? "bg-primary/8 text-primary"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span
                          className={`block text-[13.5px] font-medium leading-snug ${
                            isActive ? "text-primary" : "text-gray-900"
                          }`}
                        >
                          <HighlightedText
                            text={item.name}
                            query={searchQuery}
                          />
                        </span>
                        {item.subtitle && (
                          <span
                            className={`mt-0.5 flex items-center gap-1 text-[11px] leading-tight ${
                              isActive ? "text-primary/60" : "text-gray-400"
                            }`}
                          >
                            {item.subtitle
                              .split(" › ")
                              .map((crumb, ci, arr) => (
                                <span
                                  key={ci}
                                  className="flex items-center gap-1"
                                >
                                  <span>{crumb}</span>
                                  {ci < arr.length - 1 && (
                                    <span
                                      className={
                                        isActive
                                          ? "text-primary/30"
                                          : "text-gray-300"
                                      }
                                    >
                                      ›
                                    </span>
                                  )}
                                </span>
                              ))}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Overflow indicator */}
              {extra > 0 && (
                <p className="mt-2 px-2.5 text-[11px] text-gray-400 select-none">
                  +{extra} more — refine your search
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* â”€â”€ Footer â”€â”€ */}
      <div className="flex items-center justify-between px-6 py-2.5 text-[11px] text-gray-400 select-none bg-gray-50/60">
        <span className="text-gray-400">
          {isEmpty
            ? "Browse all pages — start typing to filter"
            : `${visibleItems.length} result${visibleItems.length !== 1 ? "s" : ""}${sections.length > 1 ? ` across ${sections.length} sections` : ""}`}
        </span>
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[10px] shadow-sm">
              ↑
            </kbd>
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[10px] shadow-sm">
              ↓
            </kbd>
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[10px] shadow-sm">
              ↵
            </kbd>
            open
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[10px] shadow-sm">
              ESC
            </kbd>
            close
          </span>
        </span>
      </div>
    </div>
  );
}
