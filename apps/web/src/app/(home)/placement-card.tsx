"use client";

import {
  IconArrowUpRight,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconChartLine,
  IconTrendingUp,
} from "@tabler/icons-react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { animate, motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// ─── Data ────────────────────────────────────────────────────────────────────

const YEARS = ["2023", "2024", "2025"] as const;
type Year = (typeof YEARS)[number];

const DATA: Record<
  Year,
  {
    companies: number;
    offers: number;
    placement: number;
    highestCTC: number;
    avgCTC: number;
    medianCTC: number;
  }
> = {
  "2023": {
    companies: 50,
    offers: 152,
    placement: 78,
    highestCTC: 35,
    avgCTC: 10.31,
    medianCTC: 7.85,
  },
  "2024": {
    companies: 70,
    offers: 180,
    placement: 80,
    highestCTC: 46,
    avgCTC: 9.57,
    medianCTC: 8,
  },
  "2025": {
    companies: 94,
    offers: 214,
    placement: 82,
    highestCTC: 78.12,
    avgCTC: 12,
    medianCTC: 9.34,
  },
};

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, decimals = 0, shouldStart = false) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!shouldStart) return;
    const ctrl = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: v => setDisplay(v.toFixed(decimals)),
    });
    return ctrl.stop;
  }, [target, decimals, shouldStart]);
  return display;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  value,
  suffix,
  decimals,
  started,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  started: boolean;
  accent: string;
}) {
  const count = useAnimatedCounter(value, decimals ?? 0, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm p-5 flex flex-col gap-3"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: accent + "20" }}
      >
        <span style={{ color: accent }}>{icon}</span>
      </div>
      <p className="text-[11px] font-medium text-gray-400">{label}</p>
      <p className="text-[26px] font-bold text-[#193654] leading-none tracking-tight">
        {started ? count : "0"}
        {suffix}
      </p>
      <div
        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10"
        style={{ background: accent }}
      />
    </motion.div>
  );
}

function PlacementBar({
  pct,
  started,
  ongoing,
}: {
  pct: number;
  started: boolean;
  ongoing: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-medium text-gray-400">Placement Rate</p>
        <span className="text-[22px] font-bold text-[#193654] tracking-tight">
          {pct}%
        </span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #193654 0%, #2a6496 100%)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: started ? `${pct}%` : "0%" }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-2 font-medium">
        {ongoing ? "Ongoing season" : "Final"}
      </p>
    </div>
  );
}

function CTCChart({ year }: { year: Year }) {
  void year;
  return (
    <Line
      key={year}
      data={{
        labels: ["2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Highest CTC",
            data: [28, 35, 46, 78.12],
            borderColor: "#193654",
            backgroundColor: "rgba(25,54,84,0.10)",
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#193654",
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2.5,
          },
          {
            label: "Average CTC",
            data: [7.5, 10.31, 9.57, 12],
            borderColor: "#4A90D9",
            backgroundColor: "rgba(74,144,217,0.10)",
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#4A90D9",
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2.5,
          },
          {
            label: "Median CTC",
            data: [6.5, 7.85, 8, 9.34],
            borderColor: "#94a3b8",
            backgroundColor: "rgba(148,163,184,0.08)",
            tension: 0.4,
            fill: false,
            pointBackgroundColor: "#94a3b8",
            pointRadius: 4,
            pointHoverRadius: 6,
            borderWidth: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              font: { size: 11 },
              padding: 12,
            },
          },
          title: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y} LPA`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: { color: "rgba(0,0,0,0.05)" },
            ticks: { font: { size: 11 }, callback: v => `${v} LPA` },
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 } },
          },
        },
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PlacementCard() {
  const [activeYear, setActiveYear] = useState<Year>("2025");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const d = DATA[activeYear];

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-[#f8fafc]"
    >
      {/* ── Header ── */}
      <div className="bg-[#193654] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <h3 className="text-[20px] font-bold text-white leading-tight flex items-center gap-2">
            <IconChartLine size={20} className="text-white/70" />
            Placement Highlights
          </h3>
          <p className="text-[13px] text-white/50 mt-1">
            Data-driven placement story of IIIT Dharwad
          </p>
        </div>
        <Link
          href="/placements"
          className="flex items-center gap-1 text-white/70 hover:text-white text-[13px] font-medium hover:underline underline-offset-2 transition-all self-start sm:self-auto"
        >
          View all placements
          <IconArrowUpRight size={16} />
        </Link>
      </div>

      {/* ── Year Tabs ── */}
      <div className="px-6 pt-5">
        <div className="inline-flex rounded-xl bg-white border border-gray-200 p-1 gap-1 shadow-sm">
          {YEARS.map(yr => (
            <button
              key={yr}
              onClick={() => setActiveYear(yr)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeYear === yr
                  ? "bg-[#193654] text-white shadow"
                  : "text-gray-500 hover:text-[#193654]"
              }`}
            >
              {yr}
              {yr === "2025" && (
                <span
                  className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${
                    activeYear === "2025"
                      ? "bg-white/90 text-[#193654] border-white/60"
                      : "bg-[#193654] text-white border-[#193654]"
                  }`}
                >
                  Latest
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ── LEFT COLUMN ── */}
        <div className="xl:col-span-2 flex flex-col gap-5">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard
              icon={<IconBuildingSkyscraper size={20} />}
              label="Companies"
              value={d.companies}
              suffix={activeYear === "2025" ? "+" : ""}
              started={inView}
              accent="#193654"
            />
            <StatCard
              icon={<IconBriefcase size={20} />}
              label="Offers"
              value={d.offers}
              suffix={activeYear === "2025" ? "+" : ""}
              started={inView}
              accent="#0EA5E9"
            />
            <StatCard
              icon={<IconTrendingUp size={20} />}
              label="Highest CTC"
              value={d.highestCTC}
              suffix=" LPA"
              decimals={d.highestCTC % 1 !== 0 ? 2 : 0}
              started={inView}
              accent="#10B981"
            />
            <StatCard
              icon={<IconTrendingUp size={20} />}
              label="Avg CTC"
              value={d.avgCTC}
              suffix=" LPA"
              decimals={2}
              started={inView}
              accent="#F59E0B"
            />
          </div>

          {/* Placement Rate Bar */}
          <PlacementBar
            pct={d.placement}
            started={inView}
            ongoing={activeYear === "2025"}
          />

          {/* CTC Growth Chart */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <IconChartLine size={14} className="text-[#193654]/60" />
              <p className="text-[13px] font-semibold text-[#193654]">
                CTC Growth Trend
              </p>
              <span className="text-[11px] text-gray-400 font-medium">
                in LPA
              </span>
            </div>
            <div className="h-64">
              <CTCChart year={activeYear} />
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-5">
          {/* CTC Breakdown */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
            <p className="text-[13px] font-semibold text-[#193654] mb-4">
              CTC Breakdown
              <span className="ml-1.5 text-[11px] font-normal text-gray-400">
                {activeYear}
              </span>
            </p>
            {[
              {
                label: "Highest",
                value: d.highestCTC,
                color: "#193654",
                pct: 100,
              },
              {
                label: "Average",
                value: d.avgCTC,
                color: "#4A90D9",
                pct: Math.round((d.avgCTC / d.highestCTC) * 100),
              },
              {
                label: "Median",
                value: d.medianCTC,
                color: "#94a3b8",
                pct: Math.round((d.medianCTC / d.highestCTC) * 100),
              },
            ].map(item => (
              <div key={item.label} className="mb-5 last:mb-0">
                <div className="flex justify-between text-[12px] mb-1.5">
                  <span className="text-gray-400 font-medium">
                    {item.label}
                  </span>
                  <span className="font-semibold text-[#193654]">
                    {item.value} LPA
                  </span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${item.pct}%` : 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/placements"
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white text-[#193654] text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            Explore Full Placement Report
            <IconArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
