"use client";

import Logo from "@/assets/layout/Logo.webp";
import { trackEvent } from "@/lib/ga";
import { useKBar } from "kbar";
import { Command, Mail, Menu, Search, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

function AnimatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMacOS, setIsMacOS] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { query } = useKBar();

  // Detect macOS for Cmd key
  useEffect(() => {
    setIsMacOS(window.navigator.platform.toLowerCase().includes("mac"));
  }, []);

  // Scroll detection
  useMotionValueEvent(scrollY, "change", latest => {
    if (latest > 0 && !isScrolled) setIsScrolled(true);
    else if (latest === 0 && isScrolled) setIsScrolled(false);
  });

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      {/* Top bar */}
      <div
        id="top-bar"
        className="bg-primary text-slate-400 z-50 text-callout w-full flex justify-between max-md:justify-end px-4 md:px-8 py-2"
      >
        <div className="max-md:hidden">
          <a
            href="mailto:info@iiitdwd.ac.in"
            className="flex gap-2 items-center"
          >
            <Mail size={16} />
            info@iiitdwd.ac.in
          </a>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href="https://aims.iiitdwd.ac.in/aims/">AIMS</Link>
          <Link href="/RTI">RTI</Link>
          <Link href="/academics/nirf">NIRF</Link>
          <Link href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=6862046">
            Students Fee Portal
          </Link>
        </div>
      </div>

      {/* Sticky header */}
      <motion.header
        ref={headerRef}
        animate={{
          height: isScrolled ? "clamp(3rem, 4.5vw, 4.5rem)" : "auto",
        }}
        className="sticky top-0 flex flex-col left-0 w-full right-0 z-50 bg-white shadow-md overflow-hidden"
      >
        {/* Top row: logo + text + search (only when NOT scrolled) + mobile toggle */}
        <div className="w-full flex items-start justify-between px-4 md:px-8 py-2">
          <div className="flex gap-4 items-start flex-1">
            {/* Logo */}
            <motion.div
              animate={{
                height: isScrolled
                  ? "clamp(2.5rem, 3.5vw, 3.5rem)"
                  : "clamp(4rem, 6vw, 6rem)",
              }}
              transition={{ type: "spring", visualDuration: 0.8, bounce: 0.1 }}
            >
              <Link href="/" className="relative">
                <Image
                  src={Logo}
                  alt="IIIT Dharwad Logo"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="object-contain h-full w-auto"
                />
              </Link>
            </motion.div>

            {/* Institute name – hidden on scroll */}
            <motion.div
              className="flex flex-col max-xl:hidden w-fit text-primary text-left"
              animate={{
                opacity: isScrolled ? 0 : 1,
                x: isScrolled ? "-20px" : "0px",
              }}
              transition={{ type: "spring", visualDuration: 0.8, bounce: 0.1 }}
            >
              <span className="text-[16px] md:text-[18px] font-normal mb-[2px]">
                ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ, ಧಾರವಾಡ
              </span>
              <span className="text-[16px] md:text-[18px] font-normal">
                भारतीय सूचना प्रौद्योगिकी संस्थान, धारवाड़
              </span>
              <span className="text-[17px] md:text-[20px] font-semibold">
                Indian Institute of Information Technology, Dharwad
              </span>
              <div className="text-[14px] md:text-[16px] font-light">
                [Institute of National Importance by An Act of Parliament]
              </div>
            </motion.div>

            {/* Compact nav – appears beside logo when scrolled */}
            <motion.div
              className="hidden lg:flex items-start flex-1 justify-center px-4 whitespace-nowrap overflow-hidden"
              animate={{
                opacity: isScrolled ? 1 : 0,
                x: isScrolled ? "0px" : "-20px",
              }}
              transition={{ type: "spring", visualDuration: 0.8, bounce: 0.1 }}
              style={{ pointerEvents: isScrolled ? "auto" : "none" }}
            >
              <div className="flex gap-0.5 text-sm">
                <DesktopHeader hideSearch={true} />
              </div>
            </motion.div>
          </div>

          {/* Search button – visible ONLY when NOT scrolled */}
          <motion.div
            className="hidden lg:flex items-center"
            animate={{
              opacity: isScrolled ? 0 : 1,
              display: isScrolled ? "none" : "flex",
              x: isScrolled ? "20px" : "0px",
            }}
            transition={{ type: "spring", visualDuration: 0.8, bounce: 0.1 }}
          >
            <button
              className="text-gray-600 hover:text-primary rounded-full bg-tertiary/20 px-2 py-1 flex items-center text-body cursor-pointer"
              onClick={() => {
                query.toggle();
                trackEvent({
                  action: "click",
                  category: "search",
                  label: "command_palette",
                });
              }}
            >
              <Search size={14} className="mr-3" />
              {isMacOS ? (
                <Command size={14} className="mr-1" />
              ) : (
                <span className="mr-1">Ctrl</span>
              )}
              K
            </button>
          </motion.div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Bottom navigation row – hidden on scroll */}
        <motion.div
          className="w-full border-t border-gray-200 hidden lg:flex justify-center"
          animate={{
            opacity: isScrolled ? 0 : 1,
            height: isScrolled ? 0 : "auto",
          }}
          transition={{ type: "spring", visualDuration: 0.8, bounce: 0.1 }}
        >
          <div className="px-4 py-3 w-full flex justify-center items-center">
            <DesktopHeader hideSearch={true} />
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-40 pb-6 px-4 overflow-y-auto"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              visualDuration: 0.8,
            }}
            style={{
              top: isScrolled ? "clamp(3rem, 4.5vw, 4.5rem)" : "auto",
            }}
          >
            <MobileHeader toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatedNavbar;
