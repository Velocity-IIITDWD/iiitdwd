"use client";

import { ReactNode } from "@tabler/icons-react/dist/esm/types";
import { Building2, IndianRupee, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    prefix: "",
    value: 82,
    suffix: "%",
    suffixColor: "crimson", // navy number, crimson suffix
    label: "Placement Rate",
    sub: "Batch of 2024",
  },
  {
    icon: IndianRupee,
    prefix: "₹78",
    prefixColor: "navy",
    value: null,
    suffix: "LPA",
    suffixColor: "crimson",
    label: "Highest Package",
    sub: "CTC Offered",
  },
  {
    icon: Building2,
    prefix: "",
    value: 94,
    suffix: "+",
    suffixColor: "crimson",
    label: "Companies Visited",
    sub: "Campus Recruiters",
  },
  {
    icon: Users,
    prefix: "",
    value: 1200,
    suffix: "+",
    suffixColor: "crimson",
    label: "Students",
    sub: "Across All Programs",
  },
];

function useCountUp(target: number, duration = 1800, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);

  return count;
}

function StatCard({
  stat,
  triggered,
  index,
}: {
  stat: (typeof stats)[0];
  triggered: boolean;
  index: number;
}) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value ?? 0, 1800, triggered);

  return (
    <div
      className="group relative flex flex-col items-center justify-center px-3 py-6 sm:px-6 sm:py-8 md:py-10 border-r border-gray-200 last:border-r-0 max-md:odd:border-r max-md:even:border-r-0 bg-white hover:bg-[#fafafa] transition-colors duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top crimson dash */}
      <span className="block w-6 sm:w-8 h-[3px] bg-[#8b1c2e] rounded-full mb-3 sm:mb-4" />

      {/* Icon circle with green dot */}
      <div className="relative mb-3 sm:mb-5">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" strokeWidth={1.5} />
        </div>
        {/* Green live dot */}
        <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white" />
      </div>

      {/* Stat number with brackets */}
      <div className="flex items-center gap-1 mb-2 sm:mb-3">
        <span className="text-[#8b1c2e] text-lg sm:text-2xl font-bold leading-none">
          [
        </span>
        <div className="flex items-baseline">
          {/* prefix (e.g. ₹78) */}
          {stat.prefix && (
            <span className="text-[#1a2744] font-black text-2xl sm:text-3xl md:text-5xl leading-none tracking-tight">
              {stat.prefix}
            </span>
          )}
          {/* animated count */}
          {stat.value !== null && (
            <span className="text-[#1a2744] font-black text-2xl sm:text-3xl md:text-5xl leading-none tracking-tight">
              {triggered ? count.toLocaleString() : 0}
            </span>
          )}
          {/* suffix */}
          <span
            className={`font-black text-2xl sm:text-3xl md:text-5xl leading-none tracking-tight ${
              stat.suffixColor === "crimson"
                ? "text-[#8b1c2e]"
                : "text-[#1a2744]"
            }`}
          >
            {stat.suffix}
          </span>
        </div>
        <span className="text-[#8b1c2e] text-lg sm:text-2xl font-bold leading-none">
          ]
        </span>
      </div>

      {/* Label */}
      <p className="font-grotesk font-bold text-gray-800 text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 text-center">
        {stat.label}
      </p>

      {/* Sub label */}
      <p className="text-[10px] sm:text-[11px] text-gray-400 tracking-wider font-mono text-center">
        // {stat.sub}
      </p>
    </div>
  );
}

export default function StatsSection(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-13 mb-10">
      <div
        ref={ref}
        className="w-full border border-gray-200 rounded-xl overflow-hidden mx-auto max-w-5xl shadow-xs"
        style={{ maxWidth: "80rem" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              triggered={triggered}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
