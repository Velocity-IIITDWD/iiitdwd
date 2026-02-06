"use client";
import ProgramList from "@/components/academics-components/ProgramList";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProgrammesPage(): JSX.Element {
  const words = [
    "COMPUTING",
    "INTELLIGENCE",
    "DESIGN",
    "INNOVATION",
    "ELECTRONICS",
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
      <div className="w-full max-w-7xl mx-auto py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start gap-6">
          {/* Custom Pill - Using 'main' color as requested */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 py-2 rounded-full bg-main text-white font-bold text-sm tracking-widest uppercase shadow-md"
          >
            Programmes
          </motion.div>

          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest"
            >
              Academic Excellence
            </motion.h2>

            <h1 className="text-5xl md:text-7xl font-black text-primary dark:text-white leading-[0.9] tracking-tight">
              SHAPING THE <br />
              <span className="relative inline-block text-primary dark:text-white">
                FUTURE OF
              </span>
            </h1>

            <div className="h-16 md:h-20 overflow-hidden relative w-full flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={words[currentWordIndex]}
                  className="text-4xl md:text-6xl font-black text-main drop-shadow-sm absolute top-0 left-0"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "backOut",
                  }}
                >
                  {words[currentWordIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-primary dark:text-gray-200 font-medium leading-relaxed max-w-xl border-l-4 border-main pl-6"
          >
            At IIIT Dharwad, we move beyond traditional engineering. We fuse
            technology with design and liberal arts to cultivate flexible,
            innovative thinkers ready to lead in a connected world.
          </motion.p>
        </div>

        {/* Decorative Graphic Side - Cybernetic Globe */}
        <div className="hidden lg:flex relative h-full min-h-[400px] w-full items-center justify-center perspective-[1200px]">
          {/* Abstract Horizon Glow */}
          <div className="absolute bottom-0 w-3/4 h-20 bg-main/20 blur-[60px] rounded-full"></div>

          {/* Central Core - Sphere Look (Static - Outside Rotation) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary/10 to-main/10 backdrop-blur-sm rounded-full shadow-[0_0_40px_rgba(var(--main),0.2)] z-0"></div>

          {/* The Globe Container */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-72 h-72 [transform-style:preserve-3d] z-10"
          >
            {/* Latitude/Longitude Lines (Wireframe) - Darker/Richer */}
            <div className="absolute inset-0 border border-primary/50 rounded-full"></div>
            <div className="absolute inset-0 border border-primary/50 rounded-full [transform:rotateY(45deg)]"></div>
            <div className="absolute inset-0 border border-primary/50 rounded-full [transform:rotateY(90deg)]"></div>
            <div className="absolute inset-0 border border-primary/50 rounded-full [transform:rotateY(135deg)]"></div>
            <div className="absolute inset-4 border border-main/40 rounded-full [transform:rotateX(60deg)]"></div>
            <div className="absolute inset-4 border border-main/40 rounded-full [transform:rotateX(-60deg)]"></div>

            {/* Orbiting Satellites - Internal Orbit 1 */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-main/30 flex items-center justify-start [transform:rotateX(75deg)] [transform-style:preserve-3d]"
            >
              {/* 3D Orb Construction (Teal) */}
              <div className="relative w-3 h-3 -ml-1.5 [transform-style:preserve-3d]">
                <div className="absolute inset-0 bg-main rounded-full shadow-[0_0_10px_var(--main)]"></div>
                <div className="absolute inset-0 bg-main rounded-full [transform:rotateX(90deg)]"></div>
                <div className="absolute inset-0 bg-main rounded-full [transform:rotateY(90deg)]"></div>
              </div>
            </motion.div>

            {/* Orbiting Satellites - Internal Orbit 2 (Complementary) */}
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] rounded-full border border-dotted border-primary/40 flex items-center justify-start [transform:rotateX(-45deg)rotateY(20deg)] [transform-style:preserve-3d]"
            >
              {/* 3D Orb Construction (Blue) */}
              <div className="relative w-2 h-2 -ml-1 [transform-style:preserve-3d]">
                <div className="absolute inset-0 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]"></div>
                <div className="absolute inset-0 bg-primary rounded-full [transform:rotateX(90deg)]"></div>
                <div className="absolute inset-0 bg-primary rounded-full [transform:rotateY(90deg)]"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Satellite 1 (Teal/Main) - External */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-96 h-96 rounded-full border border-dashed border-main/20 flex items-center justify-start [transform:rotateX(70deg)] pointer-events-none [transform-style:preserve-3d]"
          >
            {/* 3D Orb Construction (Teal) */}
            <div className="relative w-4 h-4 -ml-2 [transform-style:preserve-3d]">
              <div className="absolute inset-0 bg-main rounded-full shadow-[0_0_15px_var(--main)]"></div>
              <div className="absolute inset-0 bg-main rounded-full [transform:rotateX(90deg)]"></div>
              <div className="absolute inset-0 bg-main rounded-full [transform:rotateY(90deg)]"></div>
            </div>
          </motion.div>

          {/* Satellite 2 (Primary Blue) - External */}
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-[28rem] h-[28rem] rounded-full border border-dotted border-primary/30 flex items-center justify-start [transform:rotateY(60deg)rotateX(20deg)] pointer-events-none [transform-style:preserve-3d]"
          >
            {/* 3D Orb Construction (Blue) */}
            <div className="relative w-3 h-3 -ml-1.5 [transform-style:preserve-3d]">
              <div className="absolute inset-0 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"></div>
              <div className="absolute inset-0 bg-primary rounded-full [transform:rotateX(90deg)]"></div>
              <div className="absolute inset-0 bg-primary rounded-full [transform:rotateY(90deg)]"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <ProgramList />

      <div className="w-[87.5vw] max-w-[1680px] mx-auto py-8 md:py-16 flex flex-col items-center">
        <div className="text-large-title font-semibold text-main mb-10">
          More Resources
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <Link
            href="/docs/Academic_Calender_2026.pdf"
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
                  Academic Calendar 2025-26 (August - April)
                </span>
                <span className="text-body font-normal">
                  Stay on schedule and upto date throughout the year.
                </span>
              </div>
              <ArrowRightCircle className="text-main" size={30} />
            </div>
          </Link>

          <Link
            href="/docs/Academic_Calender_2026_Firts_Years.pdf"
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
                  (August - May)
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

          <Link
            href="/docs/6._CPI_to_Percentage_Conversion_notes.pdf"
            className="relative focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 hover:shadow-md cursor-pointer overflow-clip flex rounded-lg border w-full border-gray-400 bg-white hover:border-gray-500"
          >
            <div className="h-24 w-40 relative max-md:hidden">
              <Image
                src="https://www.iiitdwd.ac.in/images/calendar.JPG"
                alt="CPI Calculation Formula"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full flex items-center p-4">
              <div className="flex flex-col justify-center flex-1 gap-1">
                <span className="text-title-1 text-main font-semibold">
                  CPI to Percentage Conversion
                </span>
                <span className="text-body font-normal">
                  Learn how Cumulative Performance Index (CPI) translates to
                  percentage scores.
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
