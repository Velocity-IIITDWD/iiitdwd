import { Marquee } from "@/components/ui/marquee";
import { IconExternalLink, IconSpeakerphone } from "@tabler/icons-react";
import Link from "next/link";

export default function ScrollingNoticeBanner() {
  return (
    <div className="w-full bg-[#193654] text-white border-y border-[#CCE70B]/30 relative z-50 overflow-hidden">
      <Link
        href="https://assets.iiitdwd.ac.in/docs/Physical_reporting_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full hover:bg-[#1f4266] transition-colors group cursor-pointer"
      >
        <Marquee pauseOnHover={true} className="py-2.5 max-sm:py-2 [--duration:40s]" repeat={4}>
          <div className="flex items-center gap-3 px-8 text-sm md:text-base font-medium tracking-wide">
            <span className="flex items-center justify-center bg-[#CCE70B] text-[#193654] p-1 rounded-full shrink-0">
              <IconSpeakerphone size={16} />
            </span>
            <span>
              <span className="font-bold text-[#CCE70B]">Notice – Physical Reporting and Admission (JoSAA/CSAB/DASA 2026):</span> 13 August to 18 August 2026. Additional Day: 19 August 2026.
            </span>
            <span className="flex items-center text-[#CCE70B] gap-1 ml-2 underline underline-offset-4 opacity-80 group-hover:opacity-100 transition-opacity">
              Click here for details <IconExternalLink size={14} />
            </span>
          </div>
        </Marquee>
      </Link>
    </div>
  );
}
