import ToTop from "@/components/layout/to-top";
import reviews from "@/data/alumni.json";
import { ReactElement } from "react";
import AlumniSection from "./alumni";
import Hero from "./hero";
import InfoSection from "./info-section";
import MainCarousel from "./main-carousel";

async function fetchFloatingImages() {
  try {
    const res = await fetch(
      "https://assets.iiitdwd.ac.in/api/floating-images.php"
    );
    if (!res.ok) throw new Error("Failed to fetch images");
    const response = await res.json();
    if (response.success && Array.isArray(response.data)) {
      return response.data.map((item: any) => item.url);
    }
    throw new Error("Unexpected API response format");
  } catch (err) {
    return [];
  }
}

export default async function HomePage(): Promise<ReactElement> {
  const images = await fetchFloatingImages();
  return (
    <main className="min-h-screen w-full">
      <Hero images={images} />
      <InfoSection />
      <MainCarousel />
      <AlumniSection reviews={reviews} />
      <ToTop />
    </main>
  );
}
