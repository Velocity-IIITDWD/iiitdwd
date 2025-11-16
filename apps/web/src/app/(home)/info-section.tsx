import director from "@/assets/director.jpg";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AppointmentDialog from "./appointment-dialog";
import EventsSection from "./events";
import NotificationSection from "./notification";
import PlacementCard from "./placement-card";
import ModernSocialMediaGrid from "./social-media";

export default function InfoSection() {
  const externalLink =
    "https://www.instagram.com/reel/DRG3BLyDC8J/?igsh=dmJ3YnN3cW5zNWFj";

  return (
    <div className="px-6 w-full relative overflow-x-hidden">
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none before:right-auto before:absolute before:inset-0 before:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] before:h-full before:bg-[linear-gradient(to_right,var(--background)_0,transparent_100%)] after:left-auto after:absolute after:inset-0 after:w-[calc(calc(100vw-min(calc(100vw-30px*2),1265px))/2)] after:h-full after:bg-[linear-gradient(to_left,var(--background)_0,transparent_100%)]"></div>
        <div className="absolute inset-0 z-[1] pointer-events-none before:bottom-auto before:absolute before:inset-0 before:w-full before:h-[90px] before:bg-[linear-gradient(to_bottom,var(--background)_0,transparent_100%)] after:top-auto after:absolute after:inset-0 after:w-full after:h-[90px] after:bg-[linear-gradient(to_top,var(--background)_0,transparent_100%)]"></div>

        <div
          className="
            gap-[1px] 
            [counter-reset:fig] 
            z-[0] 
            relative 
            grid
            grid-cols-[1fr_repeat(1,calc(min(calc(100vw-30px*2),1265px)/1))_1fr] 
            md:grid-cols-[1fr_repeat(2,calc(min(calc(100vw-30px*2),1265px)/2))_1fr] 
            lg:grid-cols-[1fr_repeat(3,calc(min(calc(100vw-30px*2),1265px)/3))_1fr] 
            [&>*]:min-h-8 
            [&>*]:[box-shadow:0_0_0_1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-background)]
          "
        >
          <div className="!h-[90px]"></div>

          {Array.from({ length: 14 }, (_, i) => (
            <div key={i}></div>
          ))}

          <div className="relative [grid-area:3/2] lg:[grid-area:2/2] group transition-all duration-300 flex flex-col justify-end p-6 overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

            <div className="relative w-full h-[220px] mb-4 overflow-hidden rounded-md flex items-center justify-center bg-gray-100">
              <Image
                src={director}
                alt="Director of IIIT Dharwad"
                width={220}
                height={220}
                className="object-cover object-center rounded transition-transform duration-500 group-hover:scale-105"
                style={{ maxHeight: 200, width: "auto", maxWidth: "100%" }}
                priority
              />
            </div>

            <div className="relative z-10">
              <Link href="/director">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-title-1 font-bold text-gray-900">
                    Director's Message
                  </h3>
                  <IconArrowUpRight
                    className="transition-all duration-300 text-gray-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </div>

                <p className="text-title-2 text-gray-600 mb-4 line-clamp-3">
                  Welcome to IIIT Dharwad — a hub of innovation, learning, and
                  excellence. We are committed to nurturing future leaders in
                  technology and research.
                </p>
              </Link>

              <AppointmentDialog />

              <div className="flex items-center gap-3 mt-auto">
                <a
                  href="https://www.youtube.com/@profmahadevaprasanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 z-50"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#FF0000]">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0077B5]">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.866-3.061-1.867 0-2.154 1.459-2.154 2.968v5.697h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.561 2.842-1.561 3.04 0 3.602 2.002 3.602 4.605v5.589z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="[grid-area:2/2] h-full md:[grid-area:2/2/span_1/span_2] lg:[grid-area:2/3/span_1/span_2] min-h-[400px] p-6 relative">
            <div className="absolute inset-0 flex items-center justify-center [background-image:radial-gradient(var(--color-gray-300)_0.8px,transparent_0)] [background-repeat:repeat] [background-position:-8.5px_-8.5px] [background-size:17px_17px]"></div>
            <EventsSection />
          </div>

          <div className="[grid-area:4/2] md:[grid-area:4/2/span_1/span_2] lg:[grid-area:3/2/span_1/span_2] p-6 relative">
            <div className="absolute inset-0 flex items-center justify-center [background-image:radial-gradient(var(--color-gray-300)_0.8px,transparent_0)] [background-repeat:repeat] [background-position:-8.5px_-8.5px] [background-size:17px_17px]"></div>
            <NotificationSection />
          </div>

          <div className="relative [grid-area:5/2] md:[grid-area:3/3] lg:[grid-area:3/4] hover:bg-secondary/30 group transition-all duration-300 flex flex-col justify-between p-6">
            <div>
              <div className="text-title-1 font-semibold">
                IIIT Dharwad Socials
              </div>
              <div className="text-title-2 text-gray-600 mt-2">
                Stay updated with the latest news, events, and innovations from
                IIIT Dharwad. Follow us on social media to join our vibrant
                community.
              </div>
            </div>
            <ModernSocialMediaGrid />
          </div>

          <div className="contents">
            <div
              className="
              md:col-span-2 lg:col-span-3
              [grid-area:6/2] 
              md:[grid-area:6/2/span_1/span_2] 
              lg:[grid-area:4/2/span_1/span_3]   /* ← 3 columns on lg */
              flex flex-col md:flex-row gap-6 p-6
              hover:bg-secondary/30 group transition-all duration-300
            "
            >
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-[0_0_60%] lg:flex-[0_0_70%] relative overflow-hidden rounded-lg"
              >
                {/* 16:9 aspect‑ratio box */}
                <div className="relative w-full pt-[56.25%]">
                  <video
                    src="https://iiitdwd.ac.in/images/orientation.mp4"
                    autoPlay
                    muted={false}
                    loop
                    playsInline
                    preload="auto"
                    poster={"/images/thumnail.png"}
                    className="
                      absolute inset-0 w-full h-full object-cover
                      transition-transform duration-500 group-hover:scale-105
                    "
                    style={
                      { imageRendering: "crisp-edges" } as React.CSSProperties
                    }
                  />
                </div>

                <IconArrowUpRight
                  className="
                    absolute top-4 right-4 z-10 text-gray-500
                    group-hover:text-black transition-all
                  "
                  size={20}
                />
              </a>

              <div className="flex-1 flex flex-col justify-center">
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-title-1 font-semibold">
                    IIIT Dharwad Induction Program 2025 — A Journey Beyond
                    Classrooms! ✨
                  </h3>
                  <p className="text-title-2 text-gray-600 mt-2">
                    From stepping into nature to discovering human values… From
                    the energy of freshers' events to the rhythm of music,
                    dance, sports… From inspiring expert talks to unforgettable
                    friendships — this induction wasn't just a program, it was
                    an experience that shaped us.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3 [grid-area:7/2] md:[grid-area:7/2/span_1/span_2] lg:[grid-area:5/2/span_1/span_3] p-6">
            <PlacementCard />
          </div>

          <div className="!h-[90px]"></div>
        </div>
      </div>
    </div>
  );
}
