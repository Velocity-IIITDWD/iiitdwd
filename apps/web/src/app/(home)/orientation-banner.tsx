import { IconBrandYoutubeFilled, IconCalendarEvent, IconClock, IconFileText, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function OrientationBanner() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-13">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Image/Poster */}
          <div className="w-full lg:w-1/2 shrink-0">
            <Image
              src="https://assets.iiitdwd.ac.in/images/2026_orientation.jpeg"
              alt="Orientation Program 2026 Poster"
              width={1200}
              height={675}
              className="w-full h-auto border border-gray-300 shadow-sm"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4">
              Orientation Program 2026
            </h2>
            
            <p className="text-gray-800 mb-6 text-lg leading-relaxed">
              We are delighted to invite you to the Orientation Program for the newly admitted batch of students. Join us as we begin this new journey together, introducing you to the opportunities and vibrant academic environment at IIIT Dharwad.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mb-8 text-gray-900 text-base">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <IconCalendarEvent size={20} className="text-gray-700" />
                <span>20th Aug 2026</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <IconClock size={20} className="text-gray-700" />
                <span>9:30 AM</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <IconMapPin size={20} className="text-gray-700" />
                <span>M-Block, IIIT Dharwad</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                href="https://www.youtube.com/live/uKqevHqO-24?si=i0hcucBgyer8x9fq" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#cc0000] hover:bg-[#aa0000] text-white font-medium text-base transition-colors border border-transparent w-full sm:w-auto">
                  <IconBrandYoutubeFilled size={20} />
                  Watch Live
                </button>
              </Link>

              <Link 
                href="https://docs.google.com/spreadsheets/d/1UczkWhhygCAGxH4N7NJTgAunTk3Ru8Bj/edit?usp=sharing&ouid=1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium text-base transition-colors border border-gray-400 w-full sm:w-auto">
                  <IconFileText size={20} className="text-gray-700" />
                  Program Schedule
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
