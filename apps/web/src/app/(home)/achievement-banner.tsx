"use client";

import {
  IconArrowRight,
  IconCpu,
  IconRocket,
  IconCircleCheck,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

const cards = [
  {
    id: "icarus",
    icon: <IconRocket size={32} className="text-main" />,
    tag: "Robotics · IROC 2026",
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
  },
  {
    id: "vlsi",
    icon: <IconCpu size={32} className="text-main" />,
    tag: "VLSI Club · MPW Shuttle",
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
  },
];

export default function AchievementBanner() {
  return (
    <section 
      className="w-full bg-slate-50 border-y border-gray-200 py-12 antialiased"
      style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-main mb-2 tracking-tight uppercase">
            Student Achievements
          </h2>
          <div className="h-1 w-20 bg-main mb-4 rounded-full" />
          <p className="text-gray-600 text-base md:text-lg max-w-2xl font-medium">
            Highlighting the exceptional technical accomplishments of our students on a national and global stage.
          </p>
        </div>

        {/* Cards Grid - Horizontal Layout to Save Vertical Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 border border-gray-200 flex flex-col sm:flex-row overflow-hidden group"
            >
              {/* Left Side: Image / Icon */}
              <div className="w-full sm:w-[35%] bg-slate-50 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-gray-100 relative">
                {card.image ? (
                  <div className="relative w-full h-48 sm:h-full min-h-[200px] flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.imageAlt ?? ""}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center">
                    {card.icon}
                  </div>
                )}
              </div>

              {/* Right Side: Content */}
              <div className="w-full sm:w-[65%] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-main/10 text-main text-xs font-bold uppercase tracking-wider mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-main mb-4">
                    {card.subtitle}
                  </p>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 font-medium">
                    {card.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {card.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5">
                        <IconCircleCheck
                          size={18}
                          className="text-main shrink-0 mt-[2px]"
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {card.teamLine && (
                    <div className="flex items-start gap-2 pt-3 border-t border-gray-100 mb-4">
                      <IconUsers size={16} className="text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-gray-500 text-xs font-semibold leading-relaxed">
                        {card.teamLine}
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-main hover:text-opacity-80 font-bold text-sm transition-all group-hover:gap-2.5 bg-main/5 px-4 py-2 rounded-lg"
                  >
                    {card.linkLabel}
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
