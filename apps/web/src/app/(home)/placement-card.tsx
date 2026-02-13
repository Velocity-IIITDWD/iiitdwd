"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import Link from "next/link";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PlacementCard() {
  return (
    <div className="p-6 md:p-8 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-[#193654]">
            Placement Highlights
          </h3>
          <p className="text-sm md:text-base text-gray-600 mt-2 line-clamp-2">
            Our 2025 placement season has shown remarkable growth with
            record-breaking packages
          </p>
        </div>
        <Link
          href="/placements"
          className="flex items-center text-[#193654] hover:text-[#193654]/80 transition-colors whitespace-nowrap"
        >
          <span className="text-sm font-medium">View all</span>
          <IconArrowUpRight size={18} className="ml-1" />
        </Link>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-5">
        <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-center border border-gray-100 overflow-hidden">
          <p className="text-xs text-gray-500 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            Companies
          </p>
          <p className="text-lg md:text-2xl font-bold text-[#193654]">94</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-center border border-gray-100 overflow-hidden">
          <p className="text-xs text-gray-500 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            Offers
          </p>
          <p className="text-lg md:text-2xl font-bold text-[#193654]">214</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-center border border-gray-100 overflow-hidden">
          <p className="text-xs text-gray-500 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            Placement
          </p>
          <p className="text-lg md:text-2xl font-bold text-[#193654]">82%</p>
          <p className="text-xs text-gray-500">ongoing</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-center border border-gray-100 overflow-hidden">
          <p className="text-xs text-gray-500 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            Highest CTC
          </p>
          <p className="text-base md:text-lg font-bold text-[#193654]">
            78.12 LPA
          </p>
        </div>
      </div>

      {/* CTC Chart */}
      <div className="mt-6">
        <div className="text-lg font-semibold mb-4 text-[#193654]">
          CTC Comparison (in LPA)
        </div>
        <div className="h-72 md:h-80">
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                padding: {
                  top: 10,
                  bottom: 10,
                },
              },
              plugins: {
                legend: {
                  position: "top",
                  align: "end",
                  labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    font: {
                      size: 13,
                    },
                    padding: 15,
                  },
                },
                title: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    display: true,
                  },
                  ticks: {
                    font: {
                      size: 12,
                    },
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    font: {
                      size: 12,
                    },
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                  },
                },
              },
            }}
            data={{
              labels: ["Average CTC", "Median CTC", "Highest CTC"],
              datasets: [
                {
                  label: "2023",
                  data: [10.31, 7.85, 35],
                  backgroundColor: "rgba(136, 132, 216, 0.8)",
                },
                {
                  label: "2024",
                  data: [9.57, 8, 46],
                  backgroundColor: "rgba(130, 202, 157, 0.8)",
                },
                {
                  label: "2025",
                  data: [12, 9.34, 78.12],
                  backgroundColor: "rgba(255, 198, 88, 0.8)",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
