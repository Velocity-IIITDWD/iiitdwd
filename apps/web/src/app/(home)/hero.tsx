"use client";
import { QuickLink } from "@/components/quick-link";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LandingSection(): JSX.Element {
  // State for images, loading, and error
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://assets.iiitdwd.ac.in/api/floating-images.php"
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const response = await res.json();

        // Handle the API response format: { success: true, data: [{ url, filename, ... }] }
        if (response.success && Array.isArray(response.data)) {
          const imageUrls = response.data.map((item: any) => item.url);
          setImages(imageUrls);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  // Split images into two rows
  const firstRowImages = images.slice(0, Math.ceil(images.length / 2));
  const secondRowImages = images.slice(Math.ceil(images.length / 2));

  return (
    <div className="flex relative flex-col items-center">
      <div className="flex-1 flex flex-col w-full">
        <div className="relative flex-1 flex w-full flex-col items-center justify-center overflow-hidden">
          {loading ? (
            <div className="text-center py-10 text-gray-400">
              Loading images...
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : (
            <>
              <Marquee className="!mt-0">
                {firstRowImages.map((url, index) => (
                  <Image
                    key={`first-${index}`}
                    src={url}
                    alt={`Campus Image ${index + 1}`}
                    className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                    height={144}
                    width={256}
                    loading="lazy"
                    quality={75}
                    priority={false}
                    sizes="(max-width: 768px) 33vw, 256px"
                    onError={e => {
                      console.warn(`Failed to load image: ${url}`);
                    }}
                  />
                ))}
              </Marquee>
              <Marquee className="!mt-0 pr-[calc(33vw-2.67px)] md:pr-64">
                {secondRowImages.map((url, index) => (
                  <Image
                    key={`second-${index}`}
                    src={url}
                    alt={`Campus Image ${index + 1 + firstRowImages.length}`}
                    className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                    height={144}
                    width={256}
                    loading="lazy"
                    quality={75}
                    priority={false}
                    sizes="(max-width: 768px) 33vw, 256px"
                    onError={e => {
                      console.warn(`Failed to load image: ${url}`);
                    }}
                  />
                ))}
              </Marquee>
            </>
          )}
        </div>
        <div className=" px-5 md:px-13 py-12 font-grotesk">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-main-title uppercase text-center font-bold">
              <div>Creating thinkers and leaders</div>
              <div>in technology to positively</div>
              <div>impact society</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="quick-links"
        className="w-fit uppercase my-10 flex max-md:flex-col max-md:w-full items-center gap-4 py-4"
      >
        <div className="hidden text-title-3 md:block whitespace-nowrap text-gray-500">
          Quick Links:
        </div>
        <div className="flex gap-1 md:gap-4 max-md:flex-col w-full max-md:max-w-[260px] items-center">
          <QuickLink href="/academics/programmes" label="Academics" />
          <QuickLink href="/admission" label="Admissions" />
          <QuickLink href="/amenities" label="Campus" />
          <QuickLink
            href="/docs/List_of_Scholarship.pdf"
            label="Scholarships"
          />
        </div>
      </div>
    </div>
  );
}
