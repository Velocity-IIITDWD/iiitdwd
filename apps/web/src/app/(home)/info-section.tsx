import { get } from "@/sanity/lib/client";
import { queryCarousel } from "@/sanity/lib/queries";
import { MainCarouselImage } from "@/sanity/types";
import { IconArrowUpRight, IconSchool, IconUsers, IconQuote, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import DepartmentsSection from "./departments-section";
import EventsSection from "./events";
import NotificationSection from "./notification";
import PlacementCard from "./placement-card";
import ModernSocialMediaGrid from "./social-media";
import VideoPlayer from "./video-player";
import CareerUpdatesSection from "./career-updates";
import AnnouncementsTabs from "./announcements-tabs";

export default async function InfoSection(): Promise<JSX.Element> {
  const orientationLink =
    "https://www.instagram.com/reel/DRG3BLyDC8J/?igsh=dmJ3YnN3cW5zNWFj";
  const campusTourLink = "https://youtu.be/WCCyKN9dNeQ?si=CfP7HeE6hWh8U7rH";
  const campusTourEmbed = "https://www.youtube.com/embed/WCCyKN9dNeQ";
  const convocationMessageLink = "https://youtu.be/A8n2L3trKrE?si=OPEcGV1LY2epQkMU";
  const convocationMessageEmbed = "https://www.youtube.com/embed/A8n2L3trKrE";

  const carouselData = (await get<MainCarouselImage[]>(queryCarousel)) || [];

  const parseEventDate = (dateString?: string): Date | null => {
    if (!dateString) return null;

    const parsed = new Date(dateString);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const datedEvents = carouselData
    .map(item => ({
      item,
      eventDate:
        parseEventDate(item.eventDate) || parseEventDate(item._createdAt),
    }))
    .filter(({ eventDate }) => !!eventDate)
    .sort((a, b) => b.eventDate!.getTime() - a.eventDate!.getTime());

  const latestEvents = datedEvents
    .filter(({ eventDate }) => eventDate! < today)
    .map(({ item, eventDate }) => ({
      ...item,
      _createdAt: eventDate!.toISOString(),
    }))
    .filter(item => !!item.url && !!item.link && !!item.caption);

  const upcomingEvents = datedEvents
    .filter(({ eventDate }) => eventDate! >= today)
    .sort((a, b) => a.eventDate!.getTime() - b.eventDate!.getTime())
    .map(({ item, eventDate }) => ({
      ...item,
      _createdAt: eventDate!.toISOString(),
    }))
    .filter(item => !!item.url && !!item.link && !!item.caption);

  return (
    <div className="w-full py-16 md:py-24 relative bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#193654_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        
        {/* Soft glowing orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] aspect-square rounded-full bg-[#193654]/[0.02] blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] aspect-square rounded-full bg-[#CCE70B]/[0.04] blur-[100px]" />
        
        {/* Geometric accents */}
        <div className="absolute top-[35%] right-[8%] w-48 h-48 rounded-full border border-[#193654]/5 border-dashed" />
        <div className="absolute top-[38%] right-[11%] w-24 h-24 rounded-full border border-[#CCE70B]/20" />
        <div className="absolute bottom-[25%] left-[5%] w-32 h-32 bg-gradient-to-tr from-[#193654]/5 to-transparent rounded-2xl rotate-12 blur-sm" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 relative z-10">
        {/* Top Section: Classic Clean University Grid */}
        <div className="flex flex-col gap-8 mb-16">
          
          {/* Hero About Banner */}
          <div className="bg-gradient-to-br from-white via-white to-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden group">
            {/* Abstract Watermarks */}
            <div className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-gradient-to-br from-[#193654]/[0.03] to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-tr from-[#CCE70B]/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
            
            <div className="flex-1 z-10 relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#CCE70B]/20 to-[#CCE70B]/5 text-[#193654] font-bold text-[11px] mb-8 border border-[#CCE70B]/30 uppercase tracking-widest shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCE70B] shadow-[0_0_8px_rgba(204,231,11,0.8)] animate-pulse"></span>
                Institute of National Importance
              </div>
              <h2 className="text-4xl md:text-[46px] leading-tight font-black text-[#193654] mb-6 tracking-tight drop-shadow-sm">About IIIT Dharwad</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-8 max-w-3xl font-medium">
                Established under the Indian Institutes of Information Technology (PPP) Act 2017, IIIT Dharwad is committed to excellence in technology education and research, nurturing the next generation of innovators.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="px-7 py-3.5 rounded-xl bg-[#193654] hover:bg-[#193654]/90 text-sm font-bold text-white transition-all shadow-[0_8px_20px_rgba(25,54,84,0.15)] hover:shadow-[0_10px_25px_rgba(25,54,84,0.25)] hover:-translate-y-1">Explore Institute</Link>
                <Link href="/director" className="px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-sm font-bold text-[#193654] transition-all border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1">Vision & Mission</Link>
              </div>
            </div>

            <div className="w-full lg:w-[450px] shrink-0 grid grid-cols-2 gap-4 z-10 relative">
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col justify-center items-center group/card hover:border-[#CCE70B]/50 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCE70B]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                <p className="text-[44px] font-black text-[#193654] mb-1 group-hover/card:scale-110 transition-transform duration-500 drop-shadow-sm">2015</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest relative z-10">Established</p>
              </div>
              
              <div className="bg-[#193654] p-6 rounded-2xl shadow-[0_8px_25px_rgba(25,54,84,0.2)] text-left flex flex-col justify-between relative overflow-hidden group/loc">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover/loc:scale-150 transition-transform duration-1000" />
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover/loc:scale-150 transition-transform duration-1000" />
                
                <div className="relative z-10 flex items-center justify-between mb-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover/loc:bg-[#CCE70B]/20 transition-colors">
                     <IconMapPin size={20} className="text-[#CCE70B]" />
                   </div>
                   <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Location</p>
                </div>
                
                <div className="relative z-10 mt-auto">
                   <p className="text-[22px] font-black text-white leading-tight drop-shadow-md">Dharwad</p>
                   <p className="text-[13px] font-medium text-[#CCE70B]">Karnataka, India</p>
                </div>
              </div>
              
              <div className="col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between gap-5 group/prog hover:border-[#CCE70B]/50 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#193654] group-hover/prog:bg-[#CCE70B] transition-colors shadow-sm" />
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Academic Programs</p>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <Link href="/admission/btech" className="flex-1 bg-gray-50 border border-gray-100 hover:border-[#193654] hover:bg-[#193654] hover:text-white text-[#193654] transition-all duration-300 rounded-xl py-3 text-center text-[13px] font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    B.Tech
                  </Link>
                  <Link href="/admission/mtech" className="flex-1 bg-gray-50 border border-gray-100 hover:border-[#193654] hover:bg-[#193654] hover:text-white text-[#193654] transition-all duration-300 rounded-xl py-3 text-center text-[13px] font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    M.Tech
                  </Link>
                  <Link href="/admission/phd" className="flex-1 bg-gray-50 border border-gray-100 hover:border-[#193654] hover:bg-[#193654] hover:text-white text-[#193654] transition-all duration-300 rounded-xl py-3 text-center text-[13px] font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    Ph.D
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Equal Height Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Director */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 lg:h-[640px] relative hover:-translate-y-1">
              <div className="relative h-[45%] w-full bg-[#193654] overflow-hidden shrink-0">
                <Image src="https://assets.iiitdwd.ac.in/images/SRMahadevaPrasanna.jpg" alt="Director" fill className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[13px] font-black text-[#193654] shadow-lg border border-white/20">
                    Prof. S. R. Mahadeva Prasanna
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative overflow-hidden">
                <IconQuote size={140} className="absolute -bottom-6 -right-6 text-gray-50 -rotate-12 pointer-events-none group-hover:-rotate-6 transition-transform duration-700" />
                
                <div className="inline-flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-2 h-6 bg-[#CCE70B] rounded-full shadow-[0_0_10px_rgba(204,231,11,0.5)]" />
                  <h3 className="text-[24px] font-black text-[#193654] tracking-tight">Director's Message</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-[16px] line-clamp-6 flex-1 relative z-10 font-medium">
                  Welcome to IIIT Dharwad - a hub of innovation, learning, and excellence. We are committed to nurturing future leaders in technology and research.
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
                  <div className="flex gap-3">
                    <a href="https://www.youtube.com/@profmahadevaprasanna" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300 text-gray-400 hover:shadow-md hover:scale-110">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all duration-300 text-gray-400 hover:shadow-md hover:scale-110">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.866-3.061-1.867 0-2.154 1.459-2.154 2.968v5.697h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.561 2.842-1.561 3.04 0 3.602 2.002 3.602 4.605v5.589z" /></svg>
                    </a>
                  </div>
                  <Link href="/director" className="text-[14px] font-bold text-[#193654] hover:text-[#CCE70B] transition-colors flex items-center gap-1.5 group/link">Read Full Message <IconArrowUpRight size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" /></Link>
                </div>
              </div>
            </div>

            {/* Column 2: Videos */}
            <div className="flex flex-col gap-8 lg:h-[640px]">
              {/* Convocation */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex-1 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="p-5 border-b border-gray-50 flex items-center gap-4 shrink-0 bg-gradient-to-r from-gray-50/50 to-white">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#193654] group-hover:bg-[#193654] group-hover:text-white transition-colors duration-300">
                    <IconSchool size={20} stroke={2} />
                  </div>
                  <h3 className="font-bold text-[#193654] text-[16px] tracking-wide">Convocation Address</h3>
                </div>
                <div className="relative flex-1 bg-black w-full min-h-[180px]">
                  <VideoPlayer externalLink={convocationMessageLink} embedSrc={convocationMessageEmbed} className="!absolute !inset-0 !w-full !h-full !rounded-none border-none !block" />
                </div>
              </div>

              {/* Induction */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex-1 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="p-5 border-b border-gray-50 flex items-center gap-4 shrink-0 bg-gradient-to-r from-gray-50/50 to-white">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#193654] group-hover:bg-[#193654] group-hover:text-white transition-colors duration-300">
                    <IconUsers size={20} stroke={2} />
                  </div>
                  <h3 className="font-bold text-[#193654] text-[16px] tracking-wide">Induction 2025</h3>
                </div>
                <div className="relative flex-1 bg-black w-full min-h-[180px]">
                  <VideoPlayer externalLink={orientationLink} className="!absolute !inset-0 !w-full !h-full !rounded-none border-none !block" />
                </div>
              </div>
            </div>

            {/* Column 3: Announcements */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden lg:h-[640px] flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
              <AnnouncementsTabs 
                announcements={<NotificationSection />} 
                careerUpdates={<CareerUpdatesSection />} 
              />
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
          {latestEvents.length > 0 ? (
            <EventsSection events={latestEvents} />
          ) : (
            <p className="text-sm text-gray-600">No latest events right now.</p>
          )}
        </div>

        {/* Upcoming Events - Future Dates */}
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#193654]">
                Upcoming Events
              </h2>
              <div className="h-0.5 w-12 bg-[#CCE70B] rounded-full mt-1.5"></div>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <EventsSection events={upcomingEvents} />
          ) : (
            <p className="text-sm text-gray-600">
              No upcoming events right now.
            </p>
          )}
        </div>


        {/* Campus Tour (Moved from middle column) */}
        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group transition-all duration-300 mb-8">
          <VideoPlayer
            externalLink={campusTourLink}
            embedSrc={campusTourEmbed}
            title="IIIT Dharwad Campus Tour"
            className="md:flex-[0_0_50%] lg:flex-[0_0_56%]"
          />

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#193654] mb-3 group-hover:text-[#CCE70B] transition-colors duration-300">
              Explore Our Campus
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Take a virtual tour of IIIT Dharwad and explore our
              state-of-the-art infrastructure, academic facilities, and vibrant
              campus life.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#193654] hover:text-[#CCE70B] transition-colors duration-300"
            >
              Learn more about the institute
              <IconArrowUpRight size={18} />
            </Link>
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
