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
    tag: "Robotics · IRoC-U 2026",
    title: "Team ICARUS",
    subtitle: "4th Place & ₹2 Lakh Prize | ISRO Robotics Challenge",
    description:
      "Team ICARUS secured 4th place nationally and a ₹2 Lakh prize at IRoC-U 2026 organized by URSC ISRO, developing a GPS-denied autonomous UAV and base station system.",
    highlights: [
      "4th Place nationally with ₹2 Lakh cash award",
      "Top 20 finalists from ~590 registered teams",
      "Autonomous GPS-denied UAV with base station",
    ],
    image: "https://assets.iiitdwd.ac.in/images/icarus_info.jpeg",
    imageAlt: "Team ICARUS",
    teamLine:
      "Mentored by Prof. Mallikarjun Kande | Team: Jayesh Patil (Lead), Aswin Joseph Sunny, Priyanshu Mittal, Ankit Dash, Raskin Verma, Muhammad Rehan, Saksham",
    link: "https://assets.iiitdwd.ac.in/docs/Story_ICARUS_Award_In_Main_Title.pdf",
    linkLabel: "Read Full Story (PDF)",
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
      className="w-full bg-slate-50 border-y border-gray-200 py-8 sm:py-12 md:py-16 antialiased font-grotesk"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-main mb-2 tracking-tight uppercase">
            Student Achievements
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-main mb-3 sm:mb-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl font-medium">
            Highlighting the exceptional technical accomplishments of our students on a national and global stage.
          </p>
        </div>

        {/* Cards Grid - Horizontal Layout to Save Vertical Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 border border-gray-200 flex flex-col sm:flex-row overflow-hidden group"
            >
              {/* Left Side: Image / Icon */}
              <div className="w-full sm:w-[35%] bg-slate-50 flex items-center justify-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-gray-100 relative">
                {card.image ? (
                  <div className="relative w-full h-44 sm:h-full min-h-[160px] sm:min-h-[200px] flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.imageAlt ?? ""}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center">
                    {card.icon}
                  </div>
                )}
              </div>

              {/* Right Side: Content */}
              <div className="w-full sm:w-[65%] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 sm:py-1 rounded bg-main/10 text-main text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-main mb-3 sm:mb-4">
                    {card.subtitle}
                  </p>
                  
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 font-medium">
                    {card.description}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                    {card.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <IconCircleCheck
                          size={16}
                          className="text-main shrink-0 mt-[2px]"
                        />
                        <span className="text-gray-700 text-xs sm:text-sm font-medium">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {card.teamLine && (
                    <div className="flex items-start gap-2 pt-3 border-t border-gray-100 mb-4">
                      <IconUsers size={16} className="text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-gray-500 text-[11px] sm:text-xs font-semibold leading-relaxed">
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
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 text-main hover:text-opacity-80 font-bold text-xs sm:text-sm transition-all group-hover:gap-2.5 bg-main/5 hover:bg-main/10 px-4 py-2.5 rounded-lg"
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
