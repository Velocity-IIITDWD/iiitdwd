"use client";
import { QuickLink } from "@/components/quick-link";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useMemo } from "react";

export default function LandingSection({
  data,
}: {
  data: string[];
}): JSX.Element {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  // Create array of all image numbers (1-91) in a deterministic order
  const { firstRowImages, secondRowImages, thirdRowImages } = useMemo(() => {
    // Use a simple deterministic pattern instead of random shuffle
    const allImageNumbers = Array.from({ length: 91 }, (_, i) => i + 1);

    // Create a deterministic but varied order by interleaving
    const shuffledImages: number[] = [];
    const step = 7; // Prime number for better distribution
    let current = 0;

    for (let i = 0; i < 91; i++) {
      const imageNum = allImageNumbers[current];
      if (imageNum !== undefined) {
        shuffledImages.push(imageNum);
      }
      current = (current + step) % 91;
    }

    return {
      firstRowImages: shuffledImages.slice(0, 30),
      secondRowImages: shuffledImages.slice(30, 61),
      thirdRowImages: shuffledImages.slice(61, 91),
    };
  }, []);

  return (
    <div className="flex relative flex-col items-center">
      <div className="flex-1 flex flex-col w-full">
        <div className="relative flex-1 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee className="!mt-0">
            {firstRowImages.map((imageNum, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in/images/CAMPUS_${imageNum}.webp`}
                alt={`Campus Image ${imageNum}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                loading="lazy"
                quality={75}
                priority={false}
                sizes={"100%"}
              />
            ))}
          </Marquee>
          <Marquee className="!mt-0 pr-[calc(33vw-2.67px)] md:pr-64">
            {secondRowImages.map((imageNum, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in/images/CAMPUS_${imageNum}.webp`}
                alt={`Campus Image ${imageNum}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                loading="lazy"
                quality={75}
                priority={false}
                sizes={"100%"}
              />
            ))}
          </Marquee>
          <Marquee className="!mt-0">
            {thirdRowImages.map((imageNum, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in/images/CAMPUS_${imageNum}.webp`}
                alt={`Campus Image ${imageNum}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                loading="lazy"
                quality={75}
                priority={false}
                sizes={"100%"}
              />
            ))}
          </Marquee>
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
