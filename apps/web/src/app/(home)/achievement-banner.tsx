"use client";

import { motion } from "framer-motion";
import { IconTrophy, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function AchievementBanner() {
  return (
    <section className="w-full bg-[#193654] relative overflow-hidden py-12 md:py-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCE70B]/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-10 backdrop-blur-sm shadow-2xl">
          
          {/* Left Side: Text & Celebration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCE70B]/20 text-[#CCE70B] font-bold text-[12px] mb-6 border border-[#CCE70B]/30 uppercase tracking-widest shadow-[0_0_15px_rgba(204,231,11,0.2)]">
              <IconTrophy size={16} />
              Student Achievement
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-[54px] leading-tight font-black text-white mb-6 tracking-tight">
              Best of luck to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCE70B] to-yellow-400">
                Team ICARUS
              </span>
            </h2>
            
            <div className="text-gray-300 leading-relaxed text-[16px] md:text-[18px] mb-8 max-w-2xl font-medium space-y-4">
              <p>
                We are proud to announce that our students have advanced to the finals of the ISRO Robotics Challenge (IROC) 2026, securing a spot among the top 20 teams nationwide.
              </p>
              <p>
                This is a great achievement for the team and reflects the strong technical foundation fostered at IIIT Dharwad. Wishing Team ICARUS the very best in the final round!
              </p>
            </div>
            
            <a 
              href="https://www.instagram.com/p/Da2DPFaTDSG/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#CCE70B] hover:bg-[#b5cc0a] text-[#193654] text-[15px] font-black transition-all shadow-[0_8px_20px_rgba(204,231,11,0.25)] hover:shadow-[0_10px_25px_rgba(204,231,11,0.35)] hover:-translate-y-1"
            >
              View on Instagram
              <IconArrowRight size={20} stroke={3} />
            </a>
          </motion.div>
          
          {/* Right Side: Poster Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[400px] shrink-0 flex justify-center relative group"
          >
            {/* Glow effect behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#CCE70B] to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-full max-w-[400px] rounded-xl overflow-hidden shadow-2xl relative z-10 border-4 border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
              <Image
                src="https://assets.iiitdwd.ac.in/images/TEAM_ICARUS.jpg.jpeg"
                alt="Team Icarus Poster"
                width={800}
                height={1067}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
