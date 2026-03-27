// quick-links.tsx
import { Award, Building2, ClipboardList, GraduationCap } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "/academics/programmes",
    label: "Academics",
    icon: GraduationCap,
    accent: "navy", // dark navy
  },
  {
    href: "/admission",
    label: "Admissions",
    icon: ClipboardList,
    accent: "crimson",
  },
  {
    href: "/amenities",
    label: "Campus",
    icon: Building2,
    accent: "navy",
  },
  {
    href: "/scholarship/",
    label: "Scholarships",
    icon: Award,
    accent: "crimson",
  },
];

export default function QuickLinksSection(): JSX.Element {
  return (
    <div id="quick-links" className="w-full mb-10 px-5 md:px-13">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5 font-grotesk">
          Quick Links
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map(({ href, label, icon: Icon, accent }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#f0f1f3] px-4 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
            >
              {/* Icon container */}
              <span
                className={`flex items-center justify-center w-16 h-16 rounded-xl transition-colors duration-300 ${
                  accent === "navy"
                    ? "text-[#1a2744] group-hover:text-[#1a2744]"
                    : "text-[#8b1c2e] group-hover:text-[#8b1c2e]"
                }`}
              >
                <Icon strokeWidth={1.5} className="w-12 h-12" />
              </span>

              {/* Label */}
              <span className="font-grotesk font-bold text-[15px] uppercase tracking-wide text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                {label}
              </span>

              {/* Bottom accent bar */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 rounded-full transition-all duration-300 group-hover:w-2/3 ${
                  accent === "navy" ? "bg-[#1a2744]" : "bg-[#8b1c2e]"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
