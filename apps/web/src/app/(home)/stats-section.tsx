"use client";

import { ReactNode } from "@tabler/icons-react/dist/esm/types";
import { TrendingUp, DollarSign, Building2, Users } from "lucide-react";
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
    icon: DollarSign,
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
      className="group relative flex flex-col items-center justify-center px-6 py-10 border-r border-gray-200 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0 bg-white hover:bg-[#fafafa] transition-colors duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top crimson dash */}
      <span className="block w-8 h-[3px] bg-[#8b1c2e] rounded-full mb-4" />

      {/* Icon circle with green dot */}
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
        </div>
        {/* Green live dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
      </div>

      {/* Stat number with brackets */}
      <div className="flex items-center gap-1 mb-3">
        <span className="text-[#8b1c2e] text-2xl font-bold leading-none">[</span>
        <div className="flex items-baseline">
          {/* prefix (e.g. ₹78) */}
          {stat.prefix && (
            <span className="text-[#1a2744] font-black text-4xl md:text-5xl leading-none tracking-tight">
              {stat.prefix}
            </span>
          )}
          {/* animated count */}
          {stat.value !== null && (
            <span className="text-[#1a2744] font-black text-4xl md:text-5xl leading-none tracking-tight">
              {triggered ? count.toLocaleString() : 0}
            </span>
          )}
          {/* suffix */}
          <span
            className={`font-black text-4xl md:text-5xl leading-none tracking-tight ${
              stat.suffixColor === "crimson"
                ? "text-[#8b1c2e]"
                : "text-[#1a2744]"
            }`}
          >
            {stat.suffix}
          </span>
        </div>
        <span className="text-[#8b1c2e] text-2xl font-bold leading-none">]</span>
      </div>

      {/* Label */}
      <p className="font-grotesk font-bold text-gray-800 text-base mb-1">
        {stat.label}
      </p>

      {/* Sub label */}
      <p className="text-[11px] text-gray-400 tracking-widest font-mono">
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full border border-gray-200 rounded-xl overflow-hidden mx-auto max-w-5xl mb-10 px-5 md:px-13"
      style={{ maxWidth: "80rem", margin: "0 auto 2.5rem" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} triggered={triggered} index={i} />
        ))}
      </div>
    </div>
  );
}
