"use client";

import SectionHeading from "@/components/layout/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { minorPrograms } from "@/data/minor-programs";
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

export default function MinorProgramsPage(): JSX.Element {
  return (
    <main className="px-4 md:px-8 pt-16 flex flex-col items-center gap-10 md:gap-14 lg:gap-20 mb-32 bg-gray-50/50 dark:bg-neutral-950 font-sans transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-5xl mx-auto">
        <SectionHeading
          title="Minor Programs"
          className="w-fit mx-auto"
          free
          reverse
        />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary dark:text-white tracking-tight transition-colors">
          Diversify Your{" "}
          <span className="bg-gradient-to-r from-primary via-main to-primary dark:from-blue-300 dark:via-orange-400 dark:to-blue-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-flow relative inline-block">
            Academic Portfolio
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
          Gain expertise in an additional field of study. Complement your major,
          enhance your skill set, and open up new career pathways with our
          specialized minor programs.
        </p>
      </div>

      {/* General Information Grid - Professional Cards */}
      <div className="w-[87.5vw] max-w-[1680px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Eligibility",
            icon: CheckCircle,
            content:
              "Students can enroll from 3rd Semester up to the start of 5th Semester.",
            subtext: "MIN. CPI: 6.00",
          },
          {
            title: "Structure",
            icon: BookOpen,
            content:
              "Total 16 credits required. Maximum of 4 minor credits allowed per semester.",
            subtext: "CORE + ELECTIVES + PROJECT",
          },
          {
            title: "Flexibility",
            icon: GraduationCap,
            content:
              "Exit anytime. Completed courses will still appear on your transcript.",
            subtext: "NO PENALTY FOR DROPPING",
          },
          {
            title: "Duration",
            icon: Calendar,
            content:
              "Completed alongside your major degree within the standard 4-year timeline.",
            subtext: "PARALLEL PROGRESSION",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-primary/5 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
              <item.icon className="w-6 h-6 text-primary dark:text-blue-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 min-h-[40px]">
              {item.content}
            </p>
            <div className="text-xs font-bold text-main uppercase tracking-wider">
              {item.subtext}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Credit Requirements & Structure Info */}
      <div className="w-[87.5vw] max-w-[1680px] mx-auto">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm overflow-hidden">
          <div className="bg-gray-50 dark:bg-neutral-800/50 border-b border-gray-200 dark:border-neutral-800 px-8 py-4 flex items-center gap-3">
            <Layers className="text-primary dark:text-blue-300 w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Credit Structure & Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 text-sm md:text-base">
            {/* Discipline Minor */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary dark:text-blue-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-main"></span>
                Discipline Minor Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A student must complete <strong>16 credits</strong> from the
                core course basket, elective course basket, and project.
              </p>

              <div className="space-y-4">
                {[
                  {
                    id: "01",
                    title: "Core Courses",
                    desc: "From Discipline core basket",
                    credits: "Min 4",
                    color: "bg-blue-500",
                    border: "group-hover:border-blue-500/30",
                    gradient: "from-blue-500/5 to-transparent",
                    text: "text-blue-600 dark:text-blue-400",
                  },
                  {
                    id: "02",
                    title: "Elective Courses",
                    desc: "From Elective basket",
                    credits: "Min 4",
                    color: "bg-purple-500",
                    border: "group-hover:border-purple-500/30",
                    gradient: "from-purple-500/5 to-transparent",
                    text: "text-purple-600 dark:text-purple-400",
                  },
                  {
                    id: "03",
                    title: "Project",
                    desc: "Min 4, Max 8 credits",
                    credits: "Min 4",
                    color: "bg-orange-500",
                    border: "group-hover:border-orange-500/30",
                    gradient: "from-orange-500/5 to-transparent",
                    text: "text-orange-600 dark:text-orange-400",
                  },
                ].map(row => (
                  <div
                    key={row.id}
                    className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ${row.border} gap-4 sm:gap-0`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${row.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex items-center gap-5 sm:gap-8">
                      <span
                        className="text-4xl sm:text-5xl font-grotesk font-bold tracking-tighter transition-colors duration-500 text-gray-100 dark:text-neutral-800"
                        style={{
                          WebkitTextStroke: "1px var(--primary)",
                        }}
                      >
                        {row.id}
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg md:text-xl tracking-tight mb-1">
                          {row.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium font-mono uppercase tracking-wide opacity-80">
                          {row.desc}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 self-start sm:self-center pl-[3.25rem] sm:pl-0">
                      <div className="flex items-center gap-3 bg-gray-50 dark:bg-neutral-800 px-4 py-2 rounded-lg border border-gray-100 dark:border-neutral-700">
                        <span
                          className={`w-2 h-2 rounded-full ${row.color} animate-pulse`}
                        ></span>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                          {row.credits} Credits
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="relative overflow-hidden p-6 sm:p-8 bg-primary dark:bg-neutral-900 rounded-2xl mt-6 shadow-xl shadow-primary/20 dark:shadow-none group">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-row items-center justify-between gap-4">
                    <div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/80 dark:text-neutral-500 text-sm font-medium uppercase tracking-[0.2em] mb-1 flex"
                      >
                        {Array.from("Total Requirement").map((char, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.p>
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-white dark:text-neutral-100 text-xl sm:text-2xl font-bold tracking-tight"
                      >
                        Program Credits
                      </motion.h4>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-black text-white dark:text-white tracking-tighter">
                      16
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interdisciplinary Minor */}
            <div className="p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary dark:text-blue-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Interdisciplinary Minor Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Designed for students from other disciplines. Any course cannot
                be considered for dual credit (B.Tech & Minor).
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    id: "01",
                    title: "Core Courses",
                    desc: "From Core basket",
                    credits: "Min 4",
                    color: "bg-green-500",
                    border: "group-hover:border-green-500/30",
                    gradient: "from-green-500/5 to-transparent",
                  },
                  {
                    id: "02",
                    title: "Elective Courses",
                    desc: "From Elective basket",
                    credits: "Min 4",
                    color: "bg-teal-500",
                    border: "group-hover:border-teal-500/30",
                    gradient: "from-teal-500/5 to-transparent",
                  },
                  {
                    id: "03",
                    title: "Project",
                    desc: "Min 4, Max 8 credits",
                    credits: "Min 4",
                    color: "bg-lime-500",
                    border: "group-hover:border-lime-500/30",
                    gradient: "from-lime-500/5 to-transparent",
                  },
                ].map(row => (
                  <div
                    key={row.id}
                    className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ${row.border} gap-4 sm:gap-0`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${row.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex items-center gap-5 sm:gap-8">
                      <span
                        className="text-4xl sm:text-5xl font-grotesk font-bold tracking-tighter transition-colors duration-500 text-gray-100 dark:text-neutral-800"
                        style={{
                          WebkitTextStroke: "2px var(--secondary)",
                        }}
                      >
                        {row.id}
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg md:text-xl tracking-tight mb-1">
                          {row.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium font-mono uppercase tracking-wide opacity-80">
                          {row.desc}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 self-start sm:self-center pl-[3.25rem] sm:pl-0">
                      <div className="flex items-center gap-3 bg-gray-50 dark:bg-neutral-800 px-4 py-2 rounded-lg border border-gray-100 dark:border-neutral-700">
                        <span
                          className={`w-2 h-2 rounded-full ${row.color} animate-pulse`}
                        ></span>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                          {row.credits} Credits
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="relative overflow-hidden p-6 sm:p-8 bg-primary dark:bg-neutral-900 rounded-2xl mt-6 shadow-xl shadow-primary/20 dark:shadow-none group">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                  <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-row items-center justify-between gap-4">
                    <div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/80 dark:text-neutral-500 text-sm font-medium uppercase tracking-[0.2em] mb-1 flex"
                      >
                        {Array.from("Total Requirement").map((char, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.p>
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-white dark:text-neutral-100 text-xl sm:text-2xl font-bold tracking-tight"
                      >
                        Program Credits
                      </motion.h4>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-black text-white dark:text-white tracking-tighter">
                      16
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg text-sm border border-yellow-200">
                <strong>Note:</strong> Attendance policy is same as B.Tech
                program. Max 4 minor credits/semester.
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
                Available Programs
              </h2>
              <p className="text-gray-500 mt-1">
                Explore our diverse range of minor specifications
              </p>
            </div>
            <Link
              href="/docs/MinorPrograms.pdf"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-main hover:text-main/80 transition-colors bg-main/5 px-4 py-2 rounded-full hover:bg-main/10"
            >
              <FileText size={16} />
              Official Regulations PDF
            </Link>
          </div>

          <Tabs
            defaultValue={minorPrograms[0]?.title}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]"
          >
            {/* Sidebar Navigation */}
            <TabsList className="flex flex-col h-auto w-full lg:w-80 bg-transparent space-y-2 justify-start items-start p-0 shrink-0">
              {minorPrograms.map(program => (
                <TabsTrigger
                  key={program.title}
                  value={program.title}
                  className="w-full justify-between group px-5 py-4 text-left border-l-[4px] border-transparent 
                  data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900 data-[state=active]:text-primary dark:data-[state=active]:text-blue-300 data-[state=active]:font-bold data-[state=active]:border-main 
                  data-[state=active]:shadow-lg data-[state=active]:shadow-gray-100 dark:data-[state=active]:shadow-none rounded-r-xl transition-all 
                  hover:bg-white dark:hover:bg-neutral-900 hover:text-primary dark:hover:text-blue-300 text-gray-500 dark:text-gray-400 font-medium text-base whitespace-normal h-auto leading-tight"
                >
                  <span className="flex-1 pr-2">{program.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-data-[state=active]:opacity-100 transition-opacity text-main shrink-0 mt-0.5" />
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content Panel */}
            <div className="flex-1 min-w-0">
              {minorPrograms.map(program => (
                <TabsContent
                  key={program.title}
                  value={program.title}
                  className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-xl shadow-gray-200/40 dark:shadow-none overflow-hidden">
                    {/* Program Header */}
                    <div className="p-8 md:p-10 border-b border-gray-100 dark:border-neutral-800 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-4 tracking-tight">
                        {program.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                        {program.description}
                      </p>
                      {program.background && (
                        <div className="mt-6 flex gap-3 items-start p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30 text-sm text-blue-800 dark:text-blue-200">
                          <Info className="w-5 h-5 shrink-0 mt-0.5" />
                          <p>{program.background}</p>
                        </div>
                      )}
                    </div>

                    {/* Program Details */}
                    <div className="p-8 md:p-10 bg-white dark:bg-black">
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
                        {/* Course Structure Column 1 */}
                        <div className="space-y-8">
                          <div className="relative pl-6 border-l-[3px] border-green-500/30">
                            <div className="absolute -left-[10px] top-0 w-[18px] h-[18px] rounded-full bg-green-50 dark:bg-green-900 border-4 border-green-500 dark:border-green-600"></div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                              Core Courses
                            </h4>
                            <ul className="space-y-4">
                              {program.structure.core.map((course, idx) => (
                                <li
                                  key={idx}
                                  className="flex justify-between items-start group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-neutral-800"
                                >
                                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-blue-300 transition-colors text-sm md:text-base">
                                    {course.name}
                                  </span>
                                  {course.credits && (
                                    <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded ml-3 shrink-0 uppercase tracking-wide">
                                      {course.credits} Credits
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Course Structure Column 2 */}
                        <div className="space-y-8">
                          <div className="relative pl-6 border-l-[3px] border-purple-500/30">
                            <div className="absolute -left-[10px] top-0 w-[18px] h-[18px] rounded-full bg-purple-50 dark:bg-purple-900 border-4 border-purple-500 dark:border-purple-600"></div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                              Electives
                            </h4>
                            <ul className="space-y-4">
                              {program.structure.electives.map(
                                (course, idx) => (
                                  <li
                                    key={idx}
                                    className="flex justify-between items-start group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-neutral-800"
                                  >
                                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-blue-300 transition-colors text-sm md:text-base">
                                      {course.name}
                                    </span>
                                    {course.credits && (
                                      <span className="text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded ml-3 shrink-0 uppercase tracking-wide">
                                        {course.credits} Credits
                                      </span>
                                    )}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div className="relative pl-6 border-l-[3px] border-orange-500/30">
                            <div className="absolute -left-[10px] top-0 w-[18px] h-[18px] rounded-full bg-orange-50 dark:bg-orange-900 border-4 border-orange-500 dark:border-orange-600"></div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                              Capstone Project
                            </h4>
                            <ul className="space-y-4">
                              {program.structure.project.map((course, idx) => (
                                <li
                                  key={idx}
                                  className="flex justify-between items-start group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-neutral-800"
                                >
                                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-blue-300 transition-colors text-sm md:text-base">
                                    {course.name}
                                  </span>
                                  {course.credits && (
                                    <span className="text-xs font-bold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded ml-3 shrink-0 uppercase tracking-wide">
                                      {course.credits} Credits
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-8 md:px-10 py-6 bg-gray-50 dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800 flex justify-end">
                      <Link
                        href="/docs/MinorPrograms.pdf"
                        target="_blank"
                        className="text-white bg-primary hover:bg-primary/90 font-semibold inline-flex items-center gap-2 transition-all px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30"
                      >
                        <FileText size={18} />
                        Download Detailed Syllabus PDF
                      </Link>
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
