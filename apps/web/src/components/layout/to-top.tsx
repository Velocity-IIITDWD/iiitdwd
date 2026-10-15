"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="to-top"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 p-3 sm:p-3.5 text-white rounded-full bg-main/90 hover:bg-main shadow-lg border border-white/20 z-30 transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      aria-label="Back to Top Button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} className="sm:w-5 sm:h-5" />
    </button>
  );
}
