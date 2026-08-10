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
import Link from "next/link";
import { useState } from "react";
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

const YEARS = ["2023", "2024", "2025", "2026"] as const;
type Year = (typeof YEARS)[number];

const DATA: Record<
  Year,
  {
    companies: number;
    offers: number | string;
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
  "2026": {
    companies: 106,
    offers: "-",
    placement: 69,
    highestCTC: 65,
    avgCTC: 12.365,
    medianCTC: 10,
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number | string;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">
        {value}
        {value !== "-" && suffix}
      </p>
    </div>
  );
}

function CTCChart() {
  return (
    <Line
      data={{
        labels: ["2022", "2023", "2024", "2025", "2026"],
        datasets: [
          {
            label: "Highest CTC",
            data: [28, 35, 46, 78.12, 65],
            borderColor: "#1e3a8a",
            backgroundColor: "rgba(30, 58, 138, 0.05)",
            tension: 0.1,
            fill: true,
            pointRadius: 4,
            borderWidth: 2,
          },
          {
            label: "Average CTC",
            data: [7.5, 10.31, 9.57, 12, 12.365],
            borderColor: "#2563eb",
            backgroundColor: "transparent",
            tension: 0.1,
            fill: false,
            pointRadius: 4,
            borderWidth: 2,
          },
          {
            label: "Median CTC",
            data: [6.5, 7.85, 8, 9.34, 10],
            borderColor: "#64748b",
            backgroundColor: "transparent",
            tension: 0.1,
            fill: false,
            pointRadius: 4,
            borderWidth: 2,
            borderDash: [5, 5],
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
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              font: { size: 12 },
            },
          },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y} LPA`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: "#f1f5f9" },
            ticks: { callback: v => `${v} LPA` },
          },
          x: {
            grid: { display: false },
          },
        },
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PlacementCard() {
  const [activeYear, setActiveYear] = useState<Year>("2026");
  const d = DATA[activeYear];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Placement Statistics
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track record of our students' placements over the years.
          </p>
        </div>
        <Link
          href="/placements"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View detailed report
          <IconArrowUpRight size={16} />
        </Link>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {YEARS.map(yr => (
            <button
              key={yr}
              onClick={() => setActiveYear(yr)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors border ${
                activeYear === yr
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {yr}
              {yr === "2026" && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                  New
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Stats */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Companies" value={d.companies} />
              <StatCard label="Offers" value={d.offers} />
              <StatCard label="Highest CTC" value={d.highestCTC} suffix=" LPA" />
              <StatCard label="Average CTC" value={d.avgCTC} suffix=" LPA" />
              <StatCard label="Median CTC" value={d.medianCTC} suffix=" LPA" />
              <StatCard label="Placement Rate" value={d.placement} suffix="%" />
            </div>
            {activeYear === "2026" && (
              <p className="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded-md border border-gray-100">
                * Note: Data for 2026 is based on the latest available statistics.
              </p>
            )}
          </div>

          {/* Right: Chart */}
          <div className="lg:col-span-2 border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">CTC Growth Trend</h3>
            <div className="h-64">
              <CTCChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
