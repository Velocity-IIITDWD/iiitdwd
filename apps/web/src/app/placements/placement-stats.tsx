import { IconCurrencyRupee } from "@tabler/icons-react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Briefcase, Building, Users } from "lucide-react";
import { useState } from "react";
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

// Define types
type Year = "2023" | "2024" | "2025" | "2026";
type TabType = Year | "compare";

interface YearData {
  companies: number;
  offers: number | string;
  highestCTC: number;
  averageCTC: number;
  medianCTC: number;
  placementPercentage: number;
}

interface PlacementDataType {
  "2023": YearData;
  "2024": YearData;
  "2025": YearData;
  "2026": YearData;
}

export default function PlacementStatistics() {
  const [activeTab, setActiveTab] = useState<TabType>("2026");

  const placementData: PlacementDataType = {
    "2023": {
      companies: 96,
      offers: 126,
      highestCTC: 35,
      averageCTC: 10.31,
      medianCTC: 7.85,
      placementPercentage: 86,
    },
    "2024": {
      companies: 87,
      offers: 128,
      highestCTC: 46,
      averageCTC: 9.57,
      medianCTC: 8,
      placementPercentage: 62,
    },
    "2025": {
      companies: 94,
      offers: 214,
      highestCTC: 78.12,
      averageCTC: 12,
      medianCTC: 9.34,
      placementPercentage: 82,
    },
    "2026": {
      companies: 106,
      offers: "-",
      highestCTC: 65,
      averageCTC: 12.365,
      medianCTC: 10,
      placementPercentage: 69,
    },
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          font: { size: 12 },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#f1f5f9" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  const createYearChartData = (year: Year) => {
    return {
      labels: ["Companies", "Offers", "Highest CTC (LPA)"],
      datasets: [
        {
          label: `${year} Statistics`,
          data: [
            placementData[year].companies,
            placementData[year].offers === "-" ? 0 : placementData[year].offers,
            placementData[year].highestCTC,
          ],
          backgroundColor: "#1e3a8a", // Clean dark blue
          borderRadius: 4,
          barThickness: 40,
        },
      ],
    };
  };

  // Comparison chart data
  const comparisonChartData = {
    labels: ["Companies", "Offers", "Highest CTC (LPA)", "Placement %"],
    datasets: [
      {
        label: "2023",
        data: [
          placementData["2023"].companies,
          placementData["2023"].offers,
          placementData["2023"].highestCTC,
          placementData["2023"].placementPercentage,
        ],
        backgroundColor: "#94a3b8", // Slate 400
        borderRadius: 4,
      },
      {
        label: "2024",
        data: [
          placementData["2024"].companies,
          placementData["2024"].offers,
          placementData["2024"].highestCTC,
          placementData["2024"].placementPercentage,
        ],
        backgroundColor: "#64748b", // Slate 500
        borderRadius: 4,
      },
      {
        label: "2025",
        data: [
          placementData["2025"].companies,
          placementData["2025"].offers,
          placementData["2025"].highestCTC,
          placementData["2025"].placementPercentage,
        ],
        backgroundColor: "#3b82f6", // Blue 500
        borderRadius: 4,
      },
      {
        label: "2026",
        data: [
          placementData["2026"].companies,
          placementData["2026"].offers === "-" ? 0 : placementData["2026"].offers,
          placementData["2026"].highestCTC,
          placementData["2026"].placementPercentage,
        ],
        backgroundColor: "#1e3a8a", // Blue 900
        borderRadius: 4,
      },
    ],
  };

  // CTC comparison chart data
  const ctcChartData = {
    labels: ["Average CTC", "Median CTC", "Highest CTC"],
    datasets: [
      {
        label: "2023",
        data: [
          placementData["2023"].averageCTC,
          placementData["2023"].medianCTC,
          placementData["2023"].highestCTC,
        ],
        backgroundColor: "#94a3b8",
        borderRadius: 4,
      },
      {
        label: "2024",
        data: [
          placementData["2024"].averageCTC,
          placementData["2024"].medianCTC,
          placementData["2024"].highestCTC,
        ],
        backgroundColor: "#64748b",
        borderRadius: 4,
      },
      {
        label: "2025",
        data: [
          placementData["2025"].averageCTC,
          placementData["2025"].medianCTC,
          placementData["2025"].highestCTC,
        ],
        backgroundColor: "#3b82f6",
        borderRadius: 4,
      },
      {
        label: "2026",
        data: [
          placementData["2026"].averageCTC,
          placementData["2026"].medianCTC,
          placementData["2026"].highestCTC,
        ],
        backgroundColor: "#1e3a8a",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div id="placement-statistics" className="w-full mt-12 mb-20">
      <div className="flex flex-col mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Placement Statistics</h2>
        <p className="text-gray-500 mt-2">Comprehensive data on campus recruitment and student placements.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(placementData) as Year[]).map(year => (
          <button
            key={year}
            className={`px-5 py-2.5 text-sm font-semibold rounded-md border transition-colors ${
              activeTab === year
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab(year)}
          >
            {year}
          </button>
        ))}
        <button
          className={`px-5 py-2.5 text-sm font-semibold rounded-md border transition-colors ${
            activeTab === "compare"
              ? "bg-blue-50 border-blue-200 text-blue-700"
              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("compare")}
        >
          Compare All Years
        </button>
      </div>

      {/* Tab Content */}
      {activeTab !== "compare" ? (
        <div className="space-y-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">Companies Visited</p>
                <Building className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {placementData[activeTab as Year].companies}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">Total Offers</p>
                <Briefcase className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {placementData[activeTab as Year].offers}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">Highest CTC</p>
                <IconCurrencyRupee className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {placementData[activeTab as Year].highestCTC} <span className="text-lg font-medium text-gray-500">LPA</span>
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">Placement %</p>
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {placementData[activeTab as Year].placementPercentage}%
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Compensation Details */}
            <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-6">Compensation Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Average CTC</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {placementData[activeTab as Year].averageCTC} <span className="text-base font-medium text-gray-500">LPA</span>
                    </p>
                  </div>
                  <div className="h-px bg-gray-100 w-full" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Median CTC</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {placementData[activeTab as Year].medianCTC} <span className="text-base font-medium text-gray-500">LPA</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {activeTab === "2026" && (
                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <p className="text-xs font-medium text-blue-800">
                    * Statistics for 2026 are based on the latest available data.
                  </p>
                </div>
              )}
            </div>

            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-6">
                Overview ({activeTab})
              </h3>
              <div className="h-[300px] w-full">
                <Bar
                  options={chartOptions}
                  data={createYearChartData(activeTab as Year)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Placement Metrics Comparison
            </h3>
            <div className="h-[400px] w-full">
              <Bar
                options={{
                  ...chartOptions,
                }}
                data={comparisonChartData}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-6">CTC Comparison (LPA)</h3>
            <div className="h-[300px] w-full">
              <Bar
                options={{
                  ...chartOptions,
                }}
                data={ctcChartData}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
