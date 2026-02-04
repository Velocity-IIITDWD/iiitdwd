"use client";

import {
  Award,
  Building,
  FlaskConical,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <MapPin className="w-5 h-5" />, value: "60", label: "Acre Campus" },
  {
    icon: <Users className="w-5 h-5" />,
    value: "1200+",
    label: "Students Enrolled",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    value: "50+",
    label: "Expert Faculty",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    value: "8+",
    label: "Research Laboratories",
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: "₹78.12 LPA",
    label: "Highest Package",
  },
  {
    icon: <Building className="w-5 h-5" />,
    value: "2015",
    label: "Year Established",
  },
];

const RollingStats = () => {
  // Triple the list → animate only 1/3 of the total width
  const tripledStats = [...stats, ...stats, ...stats];

  return (
    <section className="py-6 border-y section-border overflow-hidden bg-background">
      {/* Inline keyframes – no tailwind.config needed */}
      <style jsx>{`
        @keyframes rolling-stats {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-63.333%);
          }
        }

        .animate-rolling {
          animation: rolling-stats 25s linear infinite; /* adjust 50s → slower/faster */
        }

        .animate-rolling:hover {
          animation-play-state: paused; /* nice UX: pause on hover */
        }
      `}</style>

      <div className="relative w-full">
        <div className="flex animate-rolling whitespace-nowrap will-change-transform">
          {tripledStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-10 md:px-16 lg:px-20 flex-shrink-0"
            >
              <span className="text-accent">{stat.icon}</span>
              <div className="flex flex-col items-start min-w-[140px]">
                <span className="text-2xl md:text-3xl font-bold text-heading font-serif">
                  {stat.value}
                </span>
                <span className="text-body-muted text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>

              {/* Separator – skip after very last item */}
              {idx < tripledStats.length - 1 && (
                <span className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RollingStats;
