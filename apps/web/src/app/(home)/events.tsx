import CommonCarousel from "@/components/carousel/common-carousel";
import { get } from "@/sanity/lib/client";
import { queryCarousel } from "@/sanity/lib/queries";
import { QueryCarouselResult } from "@/sanity/types";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function EventsSection() {
  let carouselData = await get<QueryCarouselResult>(queryCarousel);
  carouselData = carouselData?.sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  return (
    <CommonCarousel>
      {carouselData?.slice(0, 5).map((item, index) => (
        <div className="embla__slide" key={index}>
          {/* Main card container */}
          <div className="mx-auto max-w-4xl w-full">
            {/* Image container */}
            <div className="relative w-full h-96 md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={`https://iiitdwd.ac.in${item?.url!}`}
                alt={item?.caption || "Event image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                className="object-contain bg-black"
                priority={index === 0}
              />
            </div>

            {/* Caption + Button – directly below the image */}
            <div className="mt-6 text-center md:text-left">
              <h3 className="text-title-2 text-black mb-6">{item?.caption}</h3>

              <Link
                href={item?.link!}
                className="inline-flex gap-4 uppercase w-fit text-title-3 text-amber-50 hover:bg-main/90 transition-colors bg-main rounded px-6 py-3 items-center"
              >
                Read More
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </CommonCarousel>
  );
}
