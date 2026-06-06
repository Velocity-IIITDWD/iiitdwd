"use client";

import { Album, Building, Lightbulb, User } from "lucide-react";

const cards = [
  {
    icon: Building,
    title: "IIIT Dharwad",
    body: "IIIT Dharwad is an Institute of National Importance by an act of Parliament (23 of 2017) set up in PPP mode between the Ministry of Education, Government of India, Government of Karnataka, and KEONICS. The Institute’s Board and Senate include eminent leaders from academia and industry, steering the institute with a visionary outlook.",
  },
  {
    icon: User,
    title: "Faculty",
    body: "Faculty at IIIT Dharwad are highly qualified with PhDs and Postdocs from reputed Indian and international institutes. They combine academic excellence with industry experience to deliver cutting-edge education and research.",
  },
  {
    icon: Lightbulb,
    title: "Research and Innovation",
    body: "IIIT Dharwad thrives on innovation across curriculum, pedagogy, and R&D. Faculty research spans fields like ML, data science, computer vision, robotics, embedded systems, VLSI, cloud, IoT, and social sciences. The Institute fosters multidisciplinary problem-solving.",
  },
  {
    icon: Album,
    title: "Curriculum",
    body: "The evolving curriculum ensures relevance, eliminating outdated modules. It features early IT exposure with electives in AI, ML, blockchain, and more, delivered through hands-on projects and hackathons. IIIT-D promotes experiential, future-ready learning.",
  },
];

export default function InstituteContent() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map(card => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="p-6 flex flex-col bg-gradient-to-b from-white/30 to-white hover:shadow rounded"
            >
              <div className="flex items-center text-main gap-3 mb-4">
                <Icon className="w-6 h-6" />
                <h2 className="text-title-1 font-semibold">{card.title}</h2>
              </div>
              <p className="text-gray-700 text-title-3">{card.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
