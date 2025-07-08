import ToTop from "@/components/layout/to-top";
import reviews from "@/data/alumni.json";
import AlumniSection from "./alumni";
import Hero from "./hero";
import InfoSection from "./info-section";
import MainCarousel from "./main-carousel";

export default async function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <InfoSection />
      <MainCarousel />
      <AlumniSection reviews={reviews} />
      <ToTop />
    </main>
  );
}
