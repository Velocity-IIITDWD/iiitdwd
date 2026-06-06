"use client";

import Link from "next/link";
import { bTechAdmissionLinks } from "./admissionLinkData";
import AdmissionNotice from "./AdmissionNotice-component";
import CutoffRanks from "./CutoffRanks-component";
import InstituteContent from "./InstituteContent-component";
import SeatMatrix from "./seatMatrix-component";

export default function Page() {
  return (
    <div className="py-10">
      <div className="space-y-6 w-[87.5vw] max-w-[1680px] mx-auto">
        <SeatMatrix />

        <AdmissionNotice />

        <CutoffRanks />

        <div className="bg-gradient-to-b from-white/30 to-white hover:shadow p-6 rounded">
          <h2 className="text-xl font-semibold text-main mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>B.Tech Admission 2026</span>
          </h2>
          <div className="space-y-4">
            {bTechAdmissionLinks.map((link, linkIndex) => (
              <div
                className="p-3 border border-main/10 rounded-md hover:bg-secondary/30 transition-colors flex items-center"
                key={linkIndex}
              >
                <svg
                  className="w-5 h-5 text-main mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M5 7l5 5-5 5"
                  />
                </svg>
                <Link
                  href={link?.href}
                  className="text-title-3 text-gray-500 hover:text-main flex-grow"
                >
                  {link?.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <InstituteContent />
      </div>
    </div>
  );
}
