"use client";

import {
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function OpenHouseSection() {
  return (
    <section className="w-full py-16 bg-[#fafafa] border-y border-gray-200">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left Column: Image/Flyer Container */}
          <div className="flex-1 lg:max-w-[45%] flex flex-col justify-center">
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white p-3 transition-all duration-300 hover:shadow-2xl hover:border-main/20">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-50">
                <img
                  src="https://assets.iiitdwd.ac.in/images/Open_House_Admission.jpeg"
                  alt="Open House for Admission Year 2026 Flyer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          </div>

          {/* Right Column: Detailed Content */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-main/5 border border-main/10 text-main text-xs font-semibold uppercase tracking-wider">
                <span>Admissions 2026-27</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#193654] leading-tight">
                  JEE (Main) 2026 Qualified Students
                  <span className="block text-primary mt-1">Your Future Begins at IIIT Dharwad!</span>
                </h2>
                <div className="h-1 w-20 bg-[#CCE70B] rounded-full" />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed font-grotesk">
                Congratulations on qualifying <strong>JEE (Main) 2026</strong>!
                If you aspire to pursue high-quality engineering education in cutting-edge computing, AI, and electronics, we invite you to explore our undergraduate programmes.
              </p>

              {/* B.Tech Programs Grid */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  B.Tech Programmes Offered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Computer Science and Engineering (CSE)",
                    "Data Science and Artificial Intelligence (DSAI)",
                    "Electronics and Communication Engineering (ECE)",
                    "Artificial Intelligence and Computing (AIC)",
                  ].map((program, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-main/10 transition-all duration-300"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-main/5 flex items-center justify-center font-bold text-main">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        {program}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event details card */}
              <div className="rounded-2xl border border-main/10 bg-gradient-to-br from-white via-white to-secondary/35 p-6 shadow-md">
                <h4 className="text-lg font-bold text-main mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                  Join Our Online Open House
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-main/5 flex items-center justify-center text-main">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold">Date</p>
                      <p className="text-sm font-bold text-gray-800">10 June 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-main/5 flex items-center justify-center text-main">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold">Time</p>
                      <p className="text-sm font-bold text-gray-800">11:00 AM IST</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-main/5 flex items-center justify-center text-main">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold">Mode</p>
                      <p className="text-sm font-bold text-gray-800">Online</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                    Interactive Sessions & Discussions on:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    {[
                      "Academic curriculum & research",
                      "Industry collaborations & internships",
                      "Placements & career prospects",
                      "Campus life & student activities",
                      "JoSAA / CSAB Counselling process",
                      "Faculty & representative interaction",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button / Register */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://forms.gle/7iUjit5QoiFiuSyZA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#193654] to-[#12273d] hover:from-[#CCE70B] hover:to-[#CCE70B] text-white hover:text-main font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Register for Open House</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-gray-500 text-center sm:text-left max-w-xs">
                Registration is free but mandatory for JoSAA/CSAB counselling aspirants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
