"use client";

import SectionHeading from "@/components/layout/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { majorPrograms } from "@/data/major-programs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  FileText,
  GraduationCap,
  Info,
  Layers,
} from "lucide-react";
import Link from "next/link";

export default function MajorProgramsPage(): JSX.Element {
  return (
    <main className="px-4 md:px-8 pt-16 flex flex-col items-center gap-10 md:gap-14 lg:gap-20 mb-32 bg-gray-50/50 dark:bg-neutral-950 font-sans transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-5xl mx-auto">
        <SectionHeading
          title="Major Programs"
          className="w-fit mx-auto"
          free
          reverse
        />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary dark:text-white tracking-tight transition-colors">
          Expand Your{" "}
          <span className="bg-gradient-to-r from-primary via-main to-primary dark:from-sky-300 dark:via-indigo-400 dark:to-sky-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-flow relative inline-block">
            {Array.from("Impact & Potential").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
          The Double Major Program is designed to provide students from other
          departments with the opportunity to gain expertise in an additional
          discipline.
        </p>
      </div>

      {/* General Information Grid - Professional Cards */}
      <div className="w-[87.5vw] max-w-[1680px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Eligibility",
            icon: CheckCircle,
            content:
              "Apply after 2nd Semester. CGPA ≥ 8.0 required. Selection based on merit.",
            subtext: "TOP 25% INTAKE",
          },
          {
            title: "Structure",
            icon: BookOpen,
            content:
              "Total 32 additional credits required. Core (20) + Electives (12).",
            subtext: "CORE + ELECTIVES",
          },
          {
            title: "Flexibility",
            icon: GraduationCap,
            content:
              "Can slide to Minor (16 credits) if unable to complete full Double Major.",
            subtext: "SECURE EXIT OPTIONS",
          },
          {
            title: "Duration",
            icon: Calendar,
            content:
              "Completed typically within 4+1 years, dependent on credit completion pace.",
            subtext: "ACCELERATED LEARNING",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            className="relative p-6 rounded-2xl overflow-hidden group transition-all duration-300"
          >
            {/* Liquid/Gradient Blob Effect */}
            <div className="absolute -inset-1/2 bg-gradient-to-tr from-primary/20 via-main/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 animate-spin-slow pointer-events-none"></div>

            {/* Glass Background & Border */}
            <div className="absolute inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-white/80 to-white/20 dark:from-white/10 dark:to-transparent rounded-xl flex items-center justify-center mb-5 shadow-inner border border-white/40 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary dark:text-indigo-300 drop-shadow-sm" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-grotesk tracking-tight group-hover:text-primary dark:group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 min-h-[40px] font-roboto leading-relaxed flex-grow">
                {item.content}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="text-xs font-black text-main uppercase tracking-widest font-grotesk">
                  {item.subtext}
                </div>
                <div className="w-8 h-8 rounded-full bg-main/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-main" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Credit Requirements Card */}
      <div className="w-[87.5vw] max-w-[1680px] mx-auto">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 space-y-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Layers className="text-secondary w-8 h-8" />
              Credit Structure Requirement
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              A total of{" "}
              <strong className="text-primary dark:text-indigo-300">
                32 credits
              </strong>{" "}
              are required beyond your primary major. This ensures a deep dive
              into the second discipline, equivalent to a full major core.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 text-sm font-bold border border-blue-200 dark:border-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Core Basket: 20 Credits
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 text-sm font-bold border border-purple-200 dark:border-purple-800">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                Elective Basket: 12 Credits
              </span>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl shadow-blue-900/20 animate-spin-slow">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center flex-col">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary font-grotesk tracking-tighter">
                  32
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                  Total Credits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-[87.5vw] max-w-[1680px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-4 border-b border-gray-200 pb-4">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Double Major Curriculum
              </h2>
              <p className="text-gray-500 mt-1">
                Explore the course requirements for each discipline
              </p>
            </div>
            <Link
              href="/docs/MajorPrograms.pdf"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:opacity-80 transition-opacity px-5 py-2.5 rounded-full shadow-lg"
            >
              <FileText size={16} />
              Full Regulation PDF
            </Link>
          </div>

          <Tabs
            defaultValue={majorPrograms[0]?.title}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]"
          >
            {/* Sidebar Navigation */}
            <TabsList className="flex flex-col h-auto w-full lg:w-80 bg-transparent space-y-3 justify-start items-start p-0 shrink-0">
              {majorPrograms.map(program => (
                <TabsTrigger
                  key={program.title}
                  value={program.title}
                  className="w-full justify-between group px-6 py-5 text-left border border-gray-100 dark:border-neutral-800 rounded-xl
                  data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black
                  data-[state=active]:shadow-xl data-[state=active]:shadow-primary/20 dark:data-[state=active]:shadow-white/10 data-[state=active]:border-transparent
                  hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300
                   font-bold text-base whitespace-normal h-auto leading-tight"
                >
                  <span className="flex-1 pr-2">{program.title}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-data-[state=active]:opacity-100 group-data-[state=active]:translate-x-0 transition-all text-white dark:text-black shrink-0 mt-0.5" />
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content Panel */}
            <div className="flex-1 min-w-0">
              {majorPrograms.map(program => (
                <TabsContent
                  key={program.title}
                  value={program.title}
                  className="mt-0 outline-none animate-in fade-in slide-in-from-right-4 duration-500"
                >
                  <div className="bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden ring-1 ring-black/5">
                    {/* Program Header */}
                    <div className="p-8 md:p-12 border-b border-gray-100 dark:border-neutral-800 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight relative z-10">
                        {program.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl relative z-10">
                        {program.description}
                      </p>
                      {program.background && (
                        <div className="mt-8 flex gap-4 items-start p-5 bg-gray-50/80 dark:bg-neutral-900/80 rounded-2xl border border-gray-100 dark:border-neutral-800 text-sm text-gray-600 dark:text-gray-400 relative z-10 backdrop-blur-sm">
                          <Info className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                          <p>{program.background}</p>
                        </div>
                      )}
                    </div>

                    {/* Program Details */}
                    <div className="p-8 md:p-12 bg-white dark:bg-black">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Core Courses */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                              <Layers className="w-5 h-5" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              Core Courses
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {program.structure.core.map((course, idx) => (
                              <li
                                key={idx}
                                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors border border-gray-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-900 group"
                              >
                                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm md:text-base">
                                  {course.name}
                                </span>
                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                  {course.semester && (
                                    <span className="text-[10px] font-bold bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md uppercase tracking-wider">
                                      Sem {course.semester}
                                    </span>
                                  )}
                                  {course.credits && (
                                    <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md uppercase tracking-wider min-w-[60px] text-center">
                                      {course.credits} Credits
                                    </span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Elective Courses */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              Electives
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {program.structure.electives.map((course, idx) => (
                              <li
                                key={idx}
                                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors border border-gray-100 dark:border-neutral-800 hover:border-purple-200 dark:hover:border-purple-900 group"
                              >
                                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm md:text-base">
                                  {course.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
