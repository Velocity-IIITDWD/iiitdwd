"use client";

import {
  IconArrowRight,
  IconTrophy,
  IconCpu,
  IconRocket,
  IconCircleCheck,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: "icarus",
    icon: <IconRocket size={26} className="text-[#CCE70B]" />,
    iconBg: "bg-[#CCE70B]/10 border-[#CCE70B]/20",
    accentClass: "via-[#CCE70B]",
    textAccent: "text-[#CCE70B]",
    borderClass: "border-white/10",
    bgClass: "bg-white/5",
    tag: "Robotics · IROC 2026",
    tagClass: "text-[#CCE70B]",
    title: "Team ICARUS",
    subtitle: "ISRO Robotics Challenge Finalists",
    description:
      "Our students advanced to the finals of IROC 2026, securing a spot among the top 20 teams nationwide — a defining moment for IIIT Dharwad's robotics culture.",
    highlights: [
      "Top 20 teams selected across India",
      "Cleared multiple competitive rounds",
      "Represents IIIT Dharwad nationally",
    ],
    image: "https://assets.iiitdwd.ac.in/images/TEAM_ICARUS.jpg.jpeg",
    imageAlt: "Team ICARUS",
    teamLine: null,
    link: "https://www.instagram.com/p/Da2DPFaTDSG/",
    linkLabel: "View on Instagram",
    linkClass: "text-[#CCE70B]",
  },
  {
    id: "vlsi",
    icon: <IconCpu size={26} className="text-violet-300" />,
    iconBg: "bg-violet-600/15 border-violet-500/25",
    accentClass: "via-violet-400",
    textAccent: "text-violet-300",
    borderClass: "border-violet-500/20",
    bgClass: "bg-gradient-to-br from-violet-950/30 to-blue-950/20",
    tag: "VLSI Club · MPW Shuttle · 180nm",
    tagClass: "text-violet-300",
    title: "SIDHARUD1",
    subtitle: "First-Ever Silicon Chip from IIIT Dharwad",
    description:
      "A GPIO Extender chip built via a complete RTL-to-GDSII flow, fabricated through Synopsys & GlobalFoundries' MPW Shuttle Program — a historic milestone in student-led chip design.",
    highlights: [
      "Final GDS submitted, heading to tape-out",
      "Fabricated at GlobalFoundries 180nm node",
      "End-to-end student execution using EDA tools",
    ],
    image: null,
    imageAlt: null,
    teamLine:
      "Shiva Shankar B, Mithil A, Rakesh Patidar, Aditya V S, Divyansh M, Sumeet P +7 more",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7409605993732698112/",
    linkLabel: "View on LinkedIn",
    linkClass: "text-violet-300",
  },
];

export default function AchievementBanner() {
  return (
    <section className="w-full bg-[#0f2236] relative overflow-hidden py-8 md:py-10">
      {/* Ambient glows – hidden on very small screens for perf */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-[#CCE70B]/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-3 mb-4 sm:mb-5"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCE70B]/10 text-[#CCE70B] font-bold text-[10px] border border-[#CCE70B]/20 uppercase tracking-widest whitespace-nowrap">
            <IconTrophy size={12} />
            Student Achievements
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        {/* Cards — single col on mobile, 2-col on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border ${card.borderClass} ${card.bgClass} backdrop-blur-sm flex flex-col`}
            >
              {/* Accent top line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${card.accentClass} to-transparent opacity-50`}
              />

              <div className="p-4 sm:p-5 flex flex-col gap-3 h-full">
                {/* ── Header row ── */}
                <div className="flex gap-3 items-start">
                  {/* Thumbnail or icon */}
                  {card.image ? (
                    <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-white/10 shadow-md">
                      <Image
                        src={card.image}
                        alt={card.imageAlt ?? ""}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`shrink-0 w-14 h-14 rounded-xl ${card.iconBg} border flex items-center justify-center shadow-md`}
                    >
                      {card.icon}
                    </div>
                  )}

                  {/* Title block */}
                  <div className="flex-1 min-w-0">
                    {/* Tag — wraps gracefully on small screens */}
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${card.tagClass} opacity-70 block leading-snug`}
                    >
                      {card.tag}
                    </span>
                    <h3 className="text-white font-black text-base sm:text-[17px] leading-tight mt-0.5 truncate">
                      {card.title}
                    </h3>
                    <p className={`text-[11.5px] font-medium mt-0.5 ${card.textAccent} opacity-70 leading-snug`}>
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* ── Description ── */}
                <p className="text-gray-400 text-[12.5px] sm:text-[13px] leading-relaxed">
                  {card.description}
                </p>

                {/* ── Highlights ── */}
                <div className="space-y-1.5 flex-1">
                  {card.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <IconCircleCheck
                        size={13}
                        className={`${card.textAccent} shrink-0 mt-[1px] opacity-80`}
                      />
                      <span className="text-gray-300 text-[12px] sm:text-[12.5px] leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ── Team line (VLSI only) ── */}
                {card.teamLine && (
                  <div className="flex items-start gap-1.5 pt-2 border-t border-white/10">
                    <IconUsers size={12} className="text-gray-500 shrink-0 mt-[2px]" />
                    <p className="text-gray-500 text-[11px] leading-snug break-words">
                      {card.teamLine}
                    </p>
                  </div>
                )}

                {/* ── CTA ── */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 ${card.linkClass} text-[12px] font-bold mt-auto transition-all duration-200 hover:gap-2`}
                >
                  {card.linkLabel}
                  <IconArrowRight size={13} stroke={2.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
