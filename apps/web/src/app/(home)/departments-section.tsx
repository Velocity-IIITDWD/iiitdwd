"use client";

import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const DEPARTMENTS = [
  {
    id: "cse",
    abbr: "CSE",
    num: "01",
    name: "Computer Science & Engineering",
    description:
      "Blending theoretical foundations with practical applications — algorithms, data structures, AI, and machine learning.",
    href: "/academics/departments",
    highlights: ["Algorithms & DS", "AI / ML", "Systems & Networks"],
  },
  {
    id: "ece",
    abbr: "ECE",
    num: "02",
    name: "Electronics & Communication Engineering",
    description:
      "Circuit design, signal processing, communications, and embedded systems with strong emphasis on hands-on laboratory experience.",
    href: "/academics/departments",
    highlights: ["Signal Processing", "Embedded Systems", "VLSI Design"],
  },
  {
    id: "dsai",
    abbr: "DSAI",
    num: "03",
    name: "Data Science & Artificial Intelligence",
    description:
      "An interdisciplinary program combining computer science, mathematics, and domain knowledge for data analytics and AI applications.",
    href: "/academics/departments",
    highlights: ["Data Analytics", "Deep Learning", "Statistical Modeling"],
  },
];

function DeptCard({
  dept,
  index,
}: {
  dept: (typeof DEPARTMENTS)[number];
  index: number;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(25,54,84,0.14)] hover:-translate-y-1.5 transition-all duration-300 bg-white"
    >
      {/* Navy header with watermark abbr */}
      <div className="relative flex items-end justify-between px-6 pt-6 pb-5 bg-[#193654] overflow-hidden select-none">
        {/* Large watermark */}
        <span className="absolute -right-3 -bottom-4 text-[88px] font-black tracking-tighter text-white/[0.07] leading-none pointer-events-none">
          {dept.abbr}
        </span>

        {/* Number index */}
        <span className="text-[10px] font-mono tracking-[0.15em] text-white/35">
          {dept.num}
        </span>

        {/* Abbr badge */}
        <span className="text-[22px] font-bold text-white leading-none">
          {dept.abbr}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        {/* Department name */}
        <h3 className="text-[15px] font-semibold text-[#193654] leading-[1.3] mb-2.5">
          {dept.name}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed mb-5 flex-1">
          {dept.description}
        </p>

        {/* Highlight tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {dept.highlights.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-medium rounded bg-gray-50 text-gray-500 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <Link
          href={dept.href}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-[#193654]/70 hover:text-[#193654] underline-offset-2 hover:underline transition-all duration-200"
        >
          Explore department
          <IconChevronRight
            size={13}
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default function DepartmentsSection(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="p-6 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] mb-8"
    >
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#193654] shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#193654]">
              Departments in IIIT Dharwad
            </h2>
            <div className="h-0.5 w-12 bg-[#CCE70B] rounded-full mt-1.5" />
          </div>
        </div>

        <Link
          href="/academics/departments"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#193654]/70 hover:text-[#193654] transition-colors duration-200"
        >
          View all
          <IconArrowUpRight size={15} />
        </Link>
      </div>

      {/* Department cards */}
      {inView && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DEPARTMENTS.map((dept, i) => (
            <DeptCard key={dept.id} dept={dept} index={i} />
          ))}
        </div>
      )}

      {/* Mobile "View all" link */}
      <div className="sm:hidden mt-5 text-center">
        <Link
          href="/academics/departments"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#193654]"
        >
          View all departments
          <IconChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
