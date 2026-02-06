"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define types
interface Program {
  title: string;
  description: string;
  details?: string[];
  imageSrc?: string;
  link: string;
}

interface ProgramListProps {
  programs?: Program[];
}

// Remove export default at bottom if replacing entire file context or just targeting the definition
export default function ProgramList({ programs }: ProgramListProps) {
  const defaultPrograms: Program[] = [
    {
      title: "Under-Graduate Programs",
      description:
        "Explore top ranked master's, doctoral and professional degrees. Our B.Tech programs are designed to foster innovation and technical excellence.",
      details: ["B.Tech in CSE", "B.Tech in DSAI", "B.Tech in ECE"],
      link: "/academics/departments",
      imageSrc: "https://iiitdwd.ac.in/images/undergrad_programs.JPG",
    },
    {
      title: "Major Programs",
      description:
        "Double your impact with our comprehensive Major Programs. Gain expertise in a second discipline with structured core and elective courses.",
      details: ["Interdisciplinary", "32 Additional Credits", "Career Edge"],
      link: "/academics/major-programs",
      imageSrc: "https://iiitdwd.ac.in/images/minors.JPG",
    },
    {
      title: "Minor Programs",
      description:
        "Add breadth to your degree with a Minor. Customize your learning path by exploring specialized fields outside your primary major.",
      details: ["16 Credits", "Flexible Options", "Specialized Skills"],
      link: "/academics/minor-programs",
      imageSrc: "https://iiitdwd.ac.in/images/course_catalog.JPG",
    },
    {
      title: "Online Programs",
      description:
        "Access IIIT Dharwad's rigorous curriculum from anywhere. Flexible online certifications and courses designed for working professionals and lifelong learners.",
      details: ["Remote Learning", "Flexible Schedule", "Certification"],
      link: "https://online.iiitdwd.ac.in/",
      imageSrc: "https://iiitdwd.ac.in/images/online_programs.JPG",
    },
  ];

  const displayPrograms = programs || defaultPrograms;

  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto py-12 flex flex-col gap-8 md:gap-12">
      {displayPrograms.map((program, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={program.link}
            className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white/60 dark:bg-neutral-900/40 border border-white/50 dark:border-white/10 shadow-lg backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] min-h-[300px]"
          >
            {/* Gradient Blob Background Effect */}
            <div className="absolute -inset-1/2 bg-gradient-to-tr from-primary/5 via-main/5 to-primary/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 animate-spin-slow pointer-events-none z-0"></div>

            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {program.imageSrc ? (
                <Image
                  src={program.imageSrc}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-800 dark:to-neutral-900" />
              )}
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-12">
              <div className="mb-4 flex items-center gap-3">
                {/* Decorative Line instead of Icon */}
                <div className="h-8 w-1 bg-main rounded-full group-hover:h-12 transition-all duration-500 ease-out" />

                <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white font-grotesk tracking-tight group-hover:text-main transition-colors duration-300">
                  {program.title}
                </h3>
              </div>

              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 font-roboto leading-relaxed w-[95%]">
                {program.description}
              </p>

              {/* Tags/Details */}
              {program.details && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {program.details.map((detail, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/10 text-gray-600 dark:text-gray-400 backdrop-blur-sm group-hover:border-main/20 group-hover:text-main transition-colors duration-300"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary dark:text-white transition-all group-hover:text-main group-hover:gap-4">
                View Details
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
