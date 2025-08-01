"use client";
import ProgramCards from "@/components/academics-components/programCards";
import SectionHeading from "@/components/layout/section-heading";
import { ArrowRightCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProgrammesPage() {
  const words = [
    "DISCOVERY",
    "EXCELLENCE",
    "KNOWLEDGE",
    "INNOVATION",
    "LEARNING",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="px-4 md:px-8 pt-16 flex flex-col items-center gap-5 md:gap-10 lg:gap-14">
      <SectionHeading title="Programmes" className="w-fit" free reverse />

      <div className="space-y-3">
        <div className="flex flex-col items-center">
          <h2 className="text-main-title font-bold">
            THE PERSISTENT PURSUIT OF
          </h2>

          <AnimatePresence mode="wait">
            <motion.h2
              key={words[currentWordIndex]}
              className="text-main-title font-bold"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {words[currentWordIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="text-title-2 font-medium max-w-2xl mx-auto text-center">
          We&apos;re driven by our meaningful land-grant mission to provide an
          education that propels our state, nation and world forward.
        </div>
      </div>
      <ProgramCards />

      <div className="w-[87.5vw] max-w-[1680px] mx-auto py-8 md:py-16 flex flex-col items-center">
        <div className="text-large-title font-semibold text-main mb-10">
          More Resources
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <Link
            href="https://iiitdwd.ac.in/docs/Academic_Calendar_2025-26_Aug-Nov_25.pdf"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative max-md:hidden">
              <Image
                src="https://www.iiitdwd.ac.in/images/curriculum.JPG"
                alt="Academic Calendar for Year 2-4"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-title-1 text-main font-semibold">
                  Academic Calendar 2025-26 (August - November)
                </span>
                <span className="text-body font-normal">
                  Stay on schedule and upto date throughout the year.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>

          <Link
            href="/released-soon"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative max-md:hidden">
              <Image
                src="https://www.iiitdwd.ac.in/images/curriculum.JPG"
                alt="Academic Calendar for Year 2-4"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-title-1 text-main font-semibold">
                  Academic Calendar 2025-26 for First Year B.Tech Students
                  (August - November)
                </span>
                <span className="text-body font-normal">
                  Stay on schedule and upto date throughout the year.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>

          <Link
            href="https://iiitdwd.ac.in/docs/Curricula_16May23.pdf"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative max-md:hidden">
              <Image
                src="https://www.iiitdwd.ac.in/images/calendar.JPG"
                alt="Curriculum Document"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-title-1 text-main font-semibold">
                  Curriculum
                </span>
                <span className="text-body font-normal">
                  Explore the detailed curriculum for all programmes.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
