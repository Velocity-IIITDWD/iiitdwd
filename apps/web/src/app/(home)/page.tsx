import ToTop from "@/components/layout/to-top";
import { QuickLink } from "@/components/quick-link";
import reviews from "@/data/alumni.json";
import { ReactElement } from "react";
import AlumniSection from "./alumni";
import InfoSection from "./info-section";
import MainCarousel from "./main-carousel";

export default async function HomePage(): Promise<ReactElement> {
  return (
    <main className="min-h-screen w-full">
      <MainCarousel />
      <div className="flex flex-col items-center">
        <div className="px-5 md:px-13 py-8 font-grotesk">
          <div className="mx-auto max-w-7xl w-full">
            <div className="text-main-title uppercase text-center font-bold">
              <div>Creating thinkers and leaders in technology</div>
              <div>to positively impact society</div>
            </div>
          </div>
        </div>
        <div
          id="quick-links"
          className="w-fit uppercase mb-8 flex max-md:flex-col max-md:w-full items-center gap-6 py-4"
        >
          <div className="hidden text-title-3 md:block whitespace-nowrap text-gray-500">
            <strong>Quick Links:</strong>
          </div>
          <div className="flex gap-3 md:gap-6 max-md:flex-col w-full max-md:max-w-[260px] items-center">
            <QuickLink href="/academics/programmes" label="Academics" />
            <QuickLink href="/admission" label="Admissions" />
            <QuickLink href="/amenities" label="Campus" />
            <QuickLink href="/scholarship/" label="Scholarships" />
          </div>
        </div>
      </div>
      <InfoSection />
      <AlumniSection reviews={reviews} />
      <ToTop />
    </main>
  );
}
