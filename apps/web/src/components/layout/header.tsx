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

const SPRING_CONFIG = { type: "spring" as const, stiffness: 300, damping: 35 };
const EXPANDED_LOGO_HEIGHT = "clamp(4rem, 6vw, 6rem)";
const COLLAPSED_LOGO_HEIGHT = "clamp(2.5rem, 3.5vw, 3.5rem)";
const PADDING_Y = "0.5rem";
const SCROLLED_HEADER_MAX_HEIGHT = "clamp(3.5rem, 4.5vw, 4.5rem)";
const EXPANDED_HEADER_MAX_HEIGHT = "clamp(11rem, 13vw, 13rem)";

function AnimatedNavbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { query } = useKBar();
  const { scrollY } = useScroll();
  const previousOverflow = useRef<string | undefined>(undefined);

  useMotionValueEvent(scrollY, "change", latest => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    if (!isMenuOpen || typeof window === "undefined") return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow.current ?? "";
    }
    return () => {
      document.body.style.overflow = previousOverflow.current ?? "";
    };
  }, [isMenuOpen]);

  const handleSearchToggle = () => {
    query.toggle();
    trackEvent({
      action: "click",
      category: "search",
      label: "command_palette",
    });
  };

  const [isMacOS, setIsMacOS] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMacOS(
      window.navigator.platform?.toLowerCase().includes("mac") ?? false
    );
  }, []);

  return (
    <>
      <TopBar />

      <motion.header
        initial={false}
        animate={{
          maxHeight: isScrolled
            ? SCROLLED_HEADER_MAX_HEIGHT
            : EXPANDED_HEADER_MAX_HEIGHT,
        }}
        transition={SPRING_CONFIG}
        className="sticky top-0 z-50 w-full bg-white shadow-md overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{
            paddingTop: PADDING_Y,
            paddingBottom: PADDING_Y,
          }}
          transition={SPRING_CONFIG}
          className="relative flex w-full items-center justify-between gap-2 px-4 md:px-8"
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <motion.div
              initial={false}
              animate={{
                height: isScrolled
                  ? COLLAPSED_LOGO_HEIGHT
                  : EXPANDED_LOGO_HEIGHT,
              }}
              transition={SPRING_CONFIG}
              className="flex-shrink-0 flex items-center"
            >
              <Link
                href="/"
                aria-label="Go to homepage"
                className="relative block h-full"
              >
                <Image
                  src={Logo}
                  alt="IIIT Dharwad logo"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            <AnimatePresence initial={false}>
              {!isScrolled && (
                <motion.div
                  key="institute-name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={SPRING_CONFIG}
                  className="flex flex-col max-xl:hidden text-primary text-left flex-shrink-0"
                >
                  <InstituteName />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence initial={false}>
            {isScrolled && (
              <motion.div
                key="compact-nav"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={SPRING_CONFIG}
                className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <DesktopHeader />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-4 flex-shrink-0">
            <AnimatePresence initial={false}>
              {!isScrolled && (
                <motion.div
                  key="search-button"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={SPRING_CONFIG}
                  className="hidden lg:flex items-center"
                >
                  <button
                    type="button"
                    onClick={handleSearchToggle}
                    className="group flex items-center justify-between gap-3 w-[420px] rounded-xl border border-gray-300 bg-white shadow-sm hover:border-primary/50 hover:shadow-md px-4 py-3 cursor-pointer transition-all duration-200 whitespace-nowrap select-none"
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <Search
                        size={16}
                        className="flex-shrink-0 text-primary/60 group-hover:text-primary transition-colors duration-150"
                      />
                      <span className="text-[14px] text-gray-500 group-hover:text-gray-700 transition-colors duration-150 truncate">
                        Search anything...
                      </span>
                    </span>
                    <span className="flex items-center gap-1 flex-shrink-0">
                      <kbd className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-2 py-1 text-[11px] font-mono text-gray-500 leading-none shadow-sm group-hover:border-primary/30 group-hover:text-primary/70 transition-colors">
                        {isMacOS ? <Command size={10} /> : "Ctrl"}
                      </kbd>
                      <kbd className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-2 py-1 text-[11px] font-mono text-gray-500 leading-none shadow-sm group-hover:border-primary/30 group-hover:text-primary/70 transition-colors">
                        K
                      </kbd>
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="lg:hidden z-10 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(prev => !prev)}
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
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: isScrolled ? 0 : 1,
            maxHeight: isScrolled ? 0 : "4rem",
            pointerEvents: isScrolled ? "none" : "auto",
          }}
          transition={SPRING_CONFIG}
          className="w-full border-t border-gray-200 hidden lg:flex justify-center overflow-hidden"
        >
          <div className="px-4 md:px-8 py-3 w-full flex justify-center items-center">
            <DesktopHeader />
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed left-0 right-0 bottom-0 z-40 overflow-y-auto bg-background px-4 pb-6"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              top: isScrolled ? "4rem" : "2.5rem",
            }}
          >
            <MobileHeader toggleMenu={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TopBar(): JSX.Element {
  return (
    <div className="z-50 flex w-full justify-between bg-primary px-4 py-2 text-callout text-slate-400 max-md:justify-end md:px-8">
      <div className="max-md:hidden">
        <a
          href="mailto:info@iiitdwd.ac.in"
          className="flex items-center gap-2"
          aria-label="Email info@iiitdwd.ac.in"
        >
          <Mail size={16} />
          <span>info@iiitdwd.ac.in</span>
        </a>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="https://aims.iiitdwd.ac.in/aims/">AIMS</Link>
        <Link href="/RTI">RTI</Link>
        <Link href="/academics/nirf">NIRF</Link>
        <Link href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=6862046">
          Students Fee Portal
        </Link>
      </div>
    </div>
  );
}

function InstituteName(): JSX.Element {
  return (
    <>
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
    </>
  );
}

export default AnimatedNavbar;
