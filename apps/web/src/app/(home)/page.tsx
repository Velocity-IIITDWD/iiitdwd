import ToTop from "@/components/layout/to-top";
import reviews from "@/data/alumni.json";
import { ReactElement } from "react";
import AlumniSection from "./alumni";
import GalleryCarousel from "./gallery-carousel";
import InfoSection from "./info-section";
import QuickLinksSection from "./quick-links";
import StatsSection from "./stats-section";

async function getGalleryImages() {
  try {
    const res = await fetch(
      "https://assets.iiitdwd.ac.in/api/floating-images.php",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    if (!res.ok) return [];
    const response = await res.json();
    if (response.success && Array.isArray(response.data)) {
      return response.data.map((item: any) => item.url);
    }
    return [];
  } catch (err) {
    console.error("Error fetching gallery images on server:", err);
    return [];
  }
}

export default async function HomePage(): Promise<ReactElement> {
  const images = await getGalleryImages();

  return (
    <main className="min-h-screen w-full">
      <GalleryCarousel images={images} />
      <div className="flex flex-col items-center">
        <div className="px-5 md:px-13 py-8 font-grotesk">
          <div className="mx-auto max-w-7xl w-full">
            <div className="text-main-title uppercase text-center font-bold">
              <div>Creating thinkers and leaders in technology</div>
              <div>to positively impact society</div>
            </div>
          </div>
        </div>
        <p className="text-center text-m tracking-widest text-gray-600 font-semibold mb-5 font-grotesk">
          Indian Institute of Information Technology Dharwad - Shaping
          tomorrow's Innovators Since 2015
        </p>
        <QuickLinksSection />
        <StatsSection />
      </div>
      <InfoSection />
      <AlumniSection reviews={reviews} />
      <ToTop />
    </main>
  );
}
