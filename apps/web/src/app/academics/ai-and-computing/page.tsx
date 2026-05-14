"use client";

import SectionHeading from "@/components/layout/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { aicData } from "@/data/academics/aic-landing-data";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  CheckCircle,
  Cpu,
  GraduationCap,
  Layers,
  Network,
  Users,
} from "lucide-react";

export default function AIAndComputingPage() {
  return (
    <main className="px-4 md:px-8 pt-16 flex flex-col items-center gap-10 md:gap-14 lg:gap-20 mb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 transition-colors duration-300">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">
        <div className="flex-1 space-y-6">
          <SectionHeading title="New Program" className="w-fit" free />
          <h1 className="text-4xl md:text-6xl font-black text-[#193654] leading-[1.05]">
            B.Tech in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Artificial Intelligence and Computing (AIC)
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
            {aicData.heroTagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#curriculum"
              className="px-4 py-2 rounded-full bg-[#193654] text-white text-sm md:text-base font-semibold hover:bg-[#0f2740] transition-colors"
            >
              Explore Curriculum
            </a>
            <a
              href="#pathways"
              className="px-4 py-2 rounded-full bg-white text-[#193654] text-sm md:text-base font-semibold border border-slate-200 hover:border-slate-300 transition-colors"
            >
              AI Pathways: AIC and DSAI
            </a>
            <a
              href="#faculty"
              className="px-4 py-2 rounded-full bg-white text-[#193654] text-sm md:text-base font-semibold border border-slate-200 hover:border-slate-300 transition-colors"
            >
              Faculty
            </a>
            <a
              href="#faq"
              className="px-4 py-2 rounded-full bg-white text-[#193654] text-sm md:text-base font-semibold border border-slate-200 hover:border-slate-300 transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Cpu className="text-blue-500 w-5 h-5" />
              <span className="font-semibold text-gray-800">Hardware</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <BrainCircuit className="text-indigo-500 w-5 h-5" />
              <span className="font-semibold text-gray-800">Algorithms</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Network className="text-emerald-500 w-5 h-5" />
              <span className="font-semibold text-gray-800">Systems</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md md:max-w-none relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-100 to-indigo-50 p-8 flex flex-col justify-center relative overflow-hidden shadow-xl border border-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-bold text-[#193654]">Why AIC?</h3>
              <div className="space-y-3">
                {aicData.whyProgram.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-base text-gray-700 leading-relaxed font-medium"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* At a glance */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-3xl px-6 py-6 md:px-10 md:py-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aicData.atGlance.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {item.label}
                </p>
                <p className="text-base md:text-lg font-bold text-[#193654]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What is AIC */}
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading title="What is AIC?" className="mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {aicData.about}
            </p>
          </div>
          <div className="space-y-4">
            {aicData.programPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#193654]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading title="Key Features" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {aicData.keyFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                <Layers className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#193654] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AIC vs DSAI Comparison */}
      <div className="w-full max-w-7xl mx-auto" id="pathways">
        <SectionHeading title="AI Pathways: AIC and DSAI" className="mb-8" />
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100 mb-12">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            {aicData.aicVsDsai.description}
          </p>
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#193654]">
              IIIT Dharwad BTech Programs
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
              IIIT Dharwad offers BTech Programs in both AI Pathways, DSAI and
              AIC, along with Computer Science & Engineering, and Electronics &
              Communication Engineering.
            </p>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-6">
              <div className="rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-6 md:p-8">
                <h4 className="text-base md:text-lg font-bold text-[#193654] text-center">
                  AI Capability Pyramid and Educational Coverage
                </h4>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="w-[72%] bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-2xl px-4 py-3 text-center shadow-sm">
                    <p className="text-sm md:text-base font-semibold">
                      AI Applications
                    </p>
                    <p className="text-[11px] md:text-xs text-white/90">
                      NLP Systems, Computer Vision, Healthcare AI, FinTech AI
                    </p>
                  </div>
                  <div className="w-[84%] bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-2xl px-4 py-3 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/15 px-3 py-2 text-center">
                        <p className="text-sm font-semibold">AI Models</p>
                        <p className="text-[11px] md:text-xs text-white/90">
                          Machine Learning, Generative AI
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/15 px-3 py-2 text-center">
                        <p className="text-sm font-semibold">AI Models</p>
                        <p className="text-[11px] md:text-xs text-white/90">
                          Deep Learning, Reinforcement
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[94%] bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <p className="text-sm md:text-base font-semibold">
                          AI Infrastructure & Systems
                        </p>
                        <p className="text-[11px] md:text-xs text-white/90">
                          Cloud AI Platforms, HPC Clusters for AI, Distributed
                          Systems, Edge AI Computing
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/30 bg-white/15 px-3 py-2 text-center">
                        <p className="text-[11px] md:text-xs font-semibold text-white">
                          Critical skill gap
                        </p>
                        <p className="text-[11px] md:text-xs text-white/90">
                          in modern AI systems engineering
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-2xl px-4 py-3 text-center shadow-sm">
                    <p className="text-sm md:text-base font-semibold">
                      Computing Systems
                    </p>
                    <p className="text-[11px] md:text-xs text-white/90">
                      Computer Architecture, Operating Systems, Networking,
                      Storage Systems
                    </p>
                  </div>
                  <div className="w-full bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-2xl px-4 py-3 text-center shadow-sm">
                    <p className="text-sm md:text-base font-semibold">
                      Electronic Hardware & Devices
                    </p>
                    <p className="text-[11px] md:text-xs text-white/90">
                      Semiconductors, Sensors, Embedded Systems, Communication
                      hardware
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-[11px] md:text-xs text-slate-600 text-center">
                  Modern AI progress increasingly depends on scalable computing
                  infrastructure, creating a demand for engineers trained in AI
                  systems and infrastructure.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#193654]">
                    B.Tech Data Science & AI
                  </p>
                  <p className="text-xs text-slate-600">
                    Models & Applications
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-orange-700">
                    B.Tech AI & Computing
                  </p>
                  <p className="text-xs text-orange-700/80">
                    AI Infrastructure
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#193654]">
                    Computer Science & Engineering (CSE)
                  </p>
                  <p className="text-xs text-slate-600">Computing Systems</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-[#193654]">
                    Electronics & Communication Engineering (ECE)
                  </p>
                  <p className="text-xs text-slate-600">Hardware</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 border border-slate-100 text-sm md:text-base text-[#193654] font-semibold">
            {aicData.aicVsDsai.programsNote}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {aicData.aicVsDsai.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
              >
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {highlight.title}
                </p>
                <p className="mt-2 text-sm md:text-base text-[#193654] font-semibold">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h4 className="text-2xl font-bold text-[#193654]">
                  Data Science & AI (DSAI)
                </h4>
                <Badge variant="outline" className="text-sm bg-gray-50">
                  {aicData.aicVsDsai.dsaiCoreCredits} Core Credits
                </Badge>
              </div>
              <ul className="space-y-3">
                {aicData.aicVsDsai.dsaiCourses.map((course, idx) => (
                  <li
                    key={idx}
                    className="flex items-start justify-between bg-gray-50/50 p-3 rounded-lg border border-gray-100"
                  >
                    <span className="text-gray-700 font-medium">
                      {course.name}
                    </span>
                    <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded">
                      {course.credits} Cr
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h4 className="text-2xl font-bold text-blue-700">
                  AI and Computing (AIC)
                </h4>
                <Badge
                  variant="default"
                  className="text-sm bg-blue-100 text-blue-800 hover:bg-blue-200"
                >
                  {aicData.aicVsDsai.aicCoreCredits} Core Credits
                </Badge>
              </div>
              <ul className="space-y-3">
                {aicData.aicVsDsai.aicCourses.map((course, idx) => (
                  <li
                    key={idx}
                    className="flex items-start justify-between bg-blue-50/30 p-3 rounded-lg border border-blue-100"
                  >
                    <span className="text-[#193654] font-medium">
                      {course.name}
                    </span>
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded">
                      {course.credits} Cr
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading title="Career Opportunities" className="mb-8" />
        <div className="bg-[#193654] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold">Future-Proof Your Career</h3>
              <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
                Training in full AI stack systems engineering opens doors to
                highly sought-after roles at top technology companies, cloud
                providers, and semiconductor giants.
              </p>
            </div>
            <div className="flex-[1.5] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aicData.jobOpportunities.map((job, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Briefcase className="text-[#CCE70B] w-5 h-5 shrink-0" />
                    <span className="font-semibold text-white">{job}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm md:text-base text-blue-100 font-medium">
                {aicData.outcomesLine}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Overview */}
      <div className="w-full max-w-7xl mx-auto" id="curriculum">
        <SectionHeading title="Curriculum Overview" className="mb-8" />
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 md:p-10">
          <p className="text-sm md:text-base text-gray-600 mb-6">
            {aicData.curriculumNote}
          </p>
          <Accordion
            type="multiple"
            defaultValue={["sem-1", "sem-2"]}
            className="w-full space-y-4"
          >
            {aicData.curriculum.map((sem, idx) => (
              <AccordionItem
                key={idx}
                value={`sem-${sem.semester}`}
                className="border rounded-xl px-2"
              >
                <AccordionTrigger className="hover:no-underline px-4 py-4">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                        {sem.semester}
                      </div>
                      <span className="text-xl font-bold text-[#193654]">
                        Semester {sem.semester}
                      </span>
                    </div>
                    {sem.totalCredits && (
                      <Badge variant="outline" className="bg-gray-50 text-sm">
                        {sem.totalCredits} Credits
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2">
                  <div className="overflow-x-auto rounded-lg border border-gray-100">
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="font-bold text-gray-700">
                            Course Name
                          </TableHead>
                          <TableHead className="font-bold text-gray-700">
                            Type
                          </TableHead>
                          <TableHead className="text-right font-bold text-gray-700">
                            Credits
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sem.courses.map((course, cIdx) => (
                          <TableRow key={cIdx}>
                            <TableCell className="font-medium text-[#193654]">
                              {course.name}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className="text-xs bg-gray-50 text-gray-600"
                              >
                                {course.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right font-semibold text-blue-600">
                              {course.credits}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 border border-slate-100">
            <span className="text-sm md:text-base font-semibold text-[#193654]">
              Total Program Credits
            </span>
            <span className="text-xl font-black text-blue-700">
              {aicData.totalCredits}
            </span>
          </div>
        </div>
      </div>

      {/* FAQs and Parents */}
      <div
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10"
        id="faq"
      >
        <div className="lg:col-span-2">
          <SectionHeading title="Frequently Asked Questions" className="mb-8" />
          <div className="space-y-4">
            {aicData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-2xl p-5 shadow-sm"
              >
                <h3 className="text-base md:text-lg font-bold text-[#193654]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div id="faculty">
            <SectionHeading title="Faculty" className="mb-6" />
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 leading-relaxed font-medium">
                Meet the faculty shaping AI, systems engineering, and
                large-scale computing at IIIT Dharwad.
              </p>
              <a
                href={aicData.facultyLink}
                className="mt-4 inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View all faculty
              </a>
            </div>
          </div>
          <div>
            <SectionHeading title="For Parents" className="mb-6" />
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-800 leading-relaxed font-medium">
                {aicData.forParents}
              </p>
            </div>
          </div>

          <div>
            <SectionHeading title="Contact" className="mb-6" />
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                {aicData.contact.role}
              </p>
              <h4 className="text-lg font-bold text-[#193654] mb-1">
                {aicData.contact.name}
              </h4>
              <a
                href={`mailto:${aicData.contact.email}`}
                className="text-blue-600 hover:underline font-medium"
              >
                {aicData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-r from-slate-900 via-[#193654] to-slate-900 p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold">
              Explore the AIC program
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Get the full curriculum details or connect with the programme
              coordinator.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={aicData.cta.primary.href}
              className="px-5 py-2.5 rounded-full bg-white text-[#193654] text-sm md:text-base font-semibold hover:bg-slate-100 transition-colors"
            >
              {aicData.cta.primary.label}
            </a>
            <a
              href={aicData.cta.secondary.href}
              className="px-5 py-2.5 rounded-full border border-white/40 text-white text-sm md:text-base font-semibold hover:border-white transition-colors"
            >
              {aicData.cta.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
