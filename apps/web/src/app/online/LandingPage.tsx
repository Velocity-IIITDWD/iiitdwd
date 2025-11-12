"use client";

import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OnlineMTechLandingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e6f4f1] text-gray-900 py-16 px-6 sm:px-12 mx-auto max-w-[1200px]">
      {/* ---------- Hero Section ---------- */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#004E64] mb-4">
          Online M.Tech Programmes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Advance your career with IIIT Dharwad’s flexible, industry-relevant online M.Tech degrees.
        </p>
        <div className="mt-5 w-24 h-1 mx-auto bg-gradient-to-r from-[#00A896] to-[#004E64] rounded-full" />
      </section>

      {/* ---------- Program Cards (Simplified Vertical Layout) ---------- */}
      <div className="flex flex-col gap-10">
        {/* CSE Programme */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#004E64] backdrop-blur-sm rounded-2xl p-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-semibold text-[#004E64]">
                Online M.Tech in CSE
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Build advanced expertise in computer science and engineering.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                asChild
                className="bg-gradient-to-r from-[#00A896] to-[#004E64] text-white hover:opacity-90 transition"
              >
                <Link href="#">View Programme</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* DSAI Programme */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00A896] backdrop-blur-sm rounded-2xl p-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-semibold text-[#004E64]">
                Online M.Tech in DSAI
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Gain practical knowledge in Data Science and Artificial Intelligence.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                asChild
                className="bg-gradient-to-r from-[#004E64] to-[#00A896] text-white hover:opacity-90 transition"
              >
                <Link href="https://online.iiitdwd.ac.in">View Programme</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* ---------- Footer ---------- */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Indian Institute of Information Technology, Dharwad. All Rights Reserved.
      </footer>
    </div>
  );
}