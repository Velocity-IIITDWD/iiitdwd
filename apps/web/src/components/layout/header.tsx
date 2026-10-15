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
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const SPRING_CONFIG = { type: "spring" as const, stiffness: 300, damping: 35 };
const EXPANDED_LOGO_HEIGHT = "clamp(3rem, 5vw, 6rem)";
const COLLAPSED_LOGO_HEIGHT = "clamp(2.25rem, 3.5vw, 3.5rem)";
const PADDING_Y = "0.5rem";
const SCROLLED_HEADER_MAX_HEIGHT = "clamp(3.5rem, 4.5vw, 4.5rem)";
const EXPANDED_HEADER_MAX_HEIGHT = "clamp(8rem, 13vw, 13rem)";

function AnimatedNavbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { query } = useKBar();
  const { scrollY } = useScroll();
  const previousOverflow = useRef<string | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);
  const [headerBottom, setHeaderBottom] = useState(0);

  const updateHeaderPosition = useCallback(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setHeaderBottom(rect.bottom);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", latest => {
    setIsScrolled(latest > 10);
    updateHeaderPosition();
  });

  useEffect(() => {
    updateHeaderPosition();
    window.addEventListener("resize", updateHeaderPosition);
    window.addEventListener("scroll", updateHeaderPosition, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeaderPosition);
      window.removeEventListener("scroll", updateHeaderPosition);
    };
  }, [updateHeaderPosition, isScrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      updateHeaderPosition();
    }
  }, [isMenuOpen, updateHeaderPosition]);

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
        ref={headerRef}
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
          className="relative flex w-full items-center justify-between gap-2 px-3 sm:px-4 md:px-8"
        >
          <div className="flex items-center gap-2.5 sm:gap-4 flex-1 min-w-0">
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
                  className="flex flex-col text-primary text-left flex-1 min-w-0 pr-2 md:pr-0"
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
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white/98 backdrop-blur-md px-3 sm:px-4 pb-8 border-t border-gray-100 shadow-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              top: `${headerBottom || (isScrolled ? 56 : 96)}px`,
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
    <div className="z-50 w-full bg-primary px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-callout text-slate-300 md:px-8 border-b border-primary/20">
      <div className="hidden md:flex">
        <a
          href="mailto:info@iiitdwd.ac.in"
          className="flex items-center gap-2 hover:text-white transition-colors"
          aria-label="Email info@iiitdwd.ac.in"
        >
          <Mail size={15} />
          <span>info@iiitdwd.ac.in</span>
        </a>
      </div>
      <div className="flex items-center justify-center sm:justify-end gap-x-2.5 sm:gap-x-3.5 gap-y-1 w-full sm:w-auto overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap text-center">
        <Link
          href="https://iiitdwd.samarth.edu.in/index.php/site/login"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors whitespace-nowrap"
        >
          Samarth Portal
        </Link>
        <span className="text-slate-600 hidden xs:inline">•</span>
        <Link
          href="https://aims.iiitdwd.ac.in/aims/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors whitespace-nowrap"
        >
          AIMS
        </Link>
        <span className="text-slate-600 hidden xs:inline">•</span>
        <Link
          href="/RTI"
          className="hover:text-white transition-colors whitespace-nowrap"
        >
          RTI
        </Link>
        <span className="text-slate-600 hidden xs:inline">•</span>
        <Link
          href="/academics/nirf"
          className="hover:text-white transition-colors whitespace-nowrap"
        >
          NIRF
        </Link>
        <span className="text-slate-600 hidden xs:inline">•</span>
        <Link
          href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=6862046"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors whitespace-nowrap"
        >
          Students Fee Portal
        </Link>
      </div>
    </div>
  );
}

function InstituteName(): JSX.Element {
  return (
    <>
      <span className="block w-full text-[9px] sm:text-[11px] md:text-[16px] xl:text-[18px] font-normal leading-tight text-slate-700">
        ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ ಧಾರವಾಡ
      </span>
      <span className="block w-full text-[9px] sm:text-[11px] md:text-[16px] xl:text-[18px] font-normal leading-tight text-slate-700">
        भारतीय सूचना प्रौद्योगिकी संस्थान धारवाड़
      </span>
      <span className="block w-full text-[11px] sm:text-[13px] md:text-[17px] xl:text-[20px] font-bold leading-tight mt-0.5 text-primary text-balance">
        Indian Institute of Information Technology Dharwad
      </span>
      <div className="hidden xs:block w-full text-[8px] sm:text-[10px] md:text-[13px] xl:text-[15px] font-light mt-0.5 text-gray-500">
        [Institute of National Importance by An Act of Parliament]
      </div>
    </>
  );
}

export default AnimatedNavbar;
