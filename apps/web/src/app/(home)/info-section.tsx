import { get } from "@/sanity/lib/client";
import { queryCarousel } from "@/sanity/lib/queries";
import { MainCarouselImage } from "@/sanity/types";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AppointmentDialog from "./appointment-dialog";
import DepartmentsSection from "./departments-section";
import EventsSection from "./events";
import NotificationSection from "./notification";
import PlacementCard from "./placement-card";
import ModernSocialMediaGrid from "./social-media";
import VideoPlayer from "./video-player";

export default async function InfoSection(): Promise<JSX.Element> {
  const externalLink =
    "https://www.instagram.com/reel/DRG3BLyDC8J/?igsh=dmJ3YnN3cW5zNWFj";

  let carouselData = await get<MainCarouselImage[]>(queryCarousel);
  carouselData = carouselData?.sort(
    (a: MainCarouselImage, b: MainCarouselImage) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  return (
    <div className="w-full py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Top Section: Three-column grid - Director + About + Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Director's Message */}
          <div className="group transition-all duration-300 flex flex-col overflow-hidden rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] min-h-[500px]">
            <div className="relative flex-1 min-h-0">
              <Image
                src="https://assets.iiitdwd.ac.in/images/SRMahadevaPrasanna.jpg"
                alt="Director of IIIT Dharwad"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="p-6">
              <Link href="/director">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#193654] mb-2.5">
                      Director's Message
                    </h3>
                    <div className="h-0.5 w-12 bg-[#CCE70B] rounded-full"></div>
                  </div>
                  <IconArrowUpRight
                    className="transition-all duration-300 text-gray-400 group-hover:text-[#193654] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={22}
                  />
                </div>

                <p className="text-base text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                  Welcome to IIIT Dharwad — a hub of innovation, learning, and
                  excellence. We are committed to nurturing future leaders in
                  technology and research.
                </p>
              </Link>

              <AppointmentDialog />

              <div className="flex items-center gap-4 mt-5 pt-5 border-t border-gray-100">
                <a
                  href="https://www.youtube.com/@profmahadevaprasanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-50 to-red-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 z-50"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF0000]">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0077B5]">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.866-3.061-1.867 0-2.154 1.459-2.154 2.968v5.697h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.561 2.842-1.561 3.04 0 3.602 2.002 3.602 4.605v5.589z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle column: About Us + Campus Tour */}
          <div className="flex flex-col gap-8">
            {/* About Us */}
            <div className="group flex flex-col rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
              {/* Header strip */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#193654] mb-2">
                      About IIIT Dharwad
                    </h3>
                    <div className="h-0.5 w-10 bg-[#CCE70B] rounded-full" />
                  </div>
                  <IconArrowUpRight
                    className="transition-all duration-300 text-gray-400 group-hover:text-[#193654] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={22}
                  />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-6 py-5 gap-4">
                <p className="text-[14px] text-[#193654]/70 leading-relaxed">
                  Established under the Indian Institutes of Information
                  Technology (PPP) Act 2017, IIIT Dharwad is an Institute of
                  National Importance committed to excellence in technology
                  education and research.
                </p>

                {/* Quick facts */}
                <div className="grid grid-cols-2 gap-3 mt-1">
                  {[
                    { label: "Est.", value: "2015" },
                    { label: "Status", value: "Deemed University" },
                    { label: "Location", value: "Dharwad, Karnataka" },
                    { label: "Programs", value: "B.Tech · M.Tech · Ph.D" },
                  ].map(fact => (
                    <div
                      key={fact.label}
                      className="rounded-md bg-gray-50 border border-gray-100 px-3 py-2"
                    >
                      <p className="text-[10px] font-medium text-[#193654]/45 uppercase tracking-wider mb-0.5">
                        {fact.label}
                      </p>
                      <p className="text-[13px] font-semibold text-[#193654] leading-tight">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-1.5 mt-auto pt-2">
                  {[
                    { label: "About the Institute", href: "/about" },
                    { label: "Vision & Mission", href: "/about" },
                    { label: "Institute Leadership", href: "/director" },
                  ].map(link => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="flex items-center justify-between px-3 py-2.5 rounded-md bg-[#193654]/[0.04] hover:bg-[#193654]/[0.09] text-[13px] font-medium text-[#193654]/70 hover:text-[#193654] transition-all duration-200 group/link"
                    >
                      {link.label}
                      <IconArrowUpRight
                        size={14}
                        className="text-[#193654]/30 group-hover/link:text-[#193654] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200 shrink-0"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Campus Tour */}
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
              <div className="px-5 pt-5 pb-3 bg-white flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#193654]">
                    Campus Tour
                  </h3>
                  <div className="h-0.5 w-8 bg-[#CCE70B] rounded-full mt-1.5" />
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#193654]/60 hover:text-[#193654] transition-colors duration-200"
                >
                  About the institute
                  <IconArrowUpRight size={13} />
                </Link>
              </div>
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src="https://www.youtube.com/embed/_QLrIgjopCg?si=GrjaKptEy4LEp2uW&autoplay=0"
                  title="IIIT Dharwad Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
          {/* end middle column */}
          <div className="flex flex-col p-6 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 min-h-[500px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#193654] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#193654]">
                  Announcements
                </h2>
                <div className="h-0.5 w-12 bg-[#CCE70B] rounded-full mt-1.5"></div>
              </div>
            </div>
            <div className="overflow-y-auto flex-1">
              <NotificationSection />
            </div>
          </div>
        </div>

        {/* Social Media - Horizontal Strip */}
        <div className="py-6 px-6 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#193654] mb-2">
                Connect With Us
              </h2>
              <div className="h-0.5 w-12 bg-[#CCE70B] rounded-full mb-2"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay updated with the latest news, events, and innovations from
                IIIT Dharwad.
              </p>
            </div>
            <div className="md:flex-shrink-0">
              <ModernSocialMediaGrid />
            </div>
          </div>
        </div>

        {/* Latest News & Events - 3 Column Grid */}
        <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#193654] shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#193654]">
                Latest News & Events
              </h2>
              <div className="h-0.5 w-12 bg-[#CCE70B] rounded-full mt-1.5"></div>
            </div>
          </div>
          <EventsSection events={carouselData || []} />
        </div>

        {/* Video Section */}
        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group transition-all duration-300 mb-8">
          <VideoPlayer externalLink={externalLink} />

          <div className="flex-1 flex flex-col justify-center">
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-lg font-bold text-[#193654] mb-3 group-hover:text-[#CCE70B] transition-colors duration-300">
                IIIT Dharwad Induction Program 2025 — A Journey Beyond
                Classrooms! ✨
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                From stepping into nature to discovering human values… From the
                energy of freshers' events to the rhythm of music, dance,
                sports… From inspiring expert talks to unforgettable friendships
                — this induction wasn't just a program, it was an experience
                that shaped us.
              </p>
            </a>
          </div>
        </div>

        {/* Departments Section */}
        <DepartmentsSection />

        {/* Placement Card */}
        <PlacementCard />
      </div>
    </div>
  );
}
