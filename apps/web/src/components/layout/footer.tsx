"use client";

import Background from "@/assets/layout/Alumni_Background.webp";
import FooterLogo from "@/assets/layout/FooterLogo.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { footerLinks } from "@/data/footer-links";
import { trackEvent } from "@/lib/ga";
import {
  ArrowRightIcon,
  Instagram,
  Linkedin,
  LucideIcon,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    onClick={() =>
      trackEvent({
        action: "click",
        category: "Footer Navigation",
        label: text,
      })
    }
    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
  >
    <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
    {text}
  </Link>
);

const SocialLink = ({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) => (
  <a
    href={href}
    className="hover:text-white transition-colors duration-200"
    onClick={() =>
      trackEvent({
        action: "click",
        category: "Social Media",
        label,
      })
    }
  >
    <Icon size={24} />
  </a>
);

export default function Footer() {
  return (
    <footer className="text-body flex flex-col bg-cover bg-center py-8 px-5 lg:px-13 relative">
      <Image
        src={Background}
        width={0}
        height={0}
        sizes="100%"
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
        alt="Footer Background"
        priority={false}
      />
      <div className="h-full absolute top-0 left-0 w-full bg-[#193654] opacity-95 z-[1]" />

      <div className="flex flex-col z-[2] text-[#a7a8b2] max-w-7xl mx-auto w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
          {/* Logo and Address - Takes 5 of 12 columns on large screens */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <Image
              src={FooterLogo}
              width={0}
              height={0}
              sizes="100%"
              className="h-14 lg:h-12 w-fit"
              alt="IIIT Dharwad Logo"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <p className="hover:underline">
                  IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony,
                  Dharwad 580009
                </p>
              </div>

              <div className="flex items-start gap-2 text-white">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="hover:underline">0836 2250879</p>
                  <p className="hover:underline">9449732959</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media - Takes 3 of 12 columns on large screens */}
          <div className="lg:col-span-3 flex items-center">
            <div className="space-y-2">
              <div className="font-bold text-title-3 text-white">FOLLOW US</div>
              <div className="flex gap-6 flex-wrap">
                <SocialLink
                  href="https://www.instagram.com/iiit.dharwad/"
                  label="Instagram"
                  icon={Instagram}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/iiitdharwad/"
                  label="LinkedIn"
                  icon={Linkedin}
                />
                <SocialLink
                  href="https://www.youtube.com/@socialmediaiiitdharwad2584"
                  label="YouTube"
                  icon={Youtube}
                />
                <SocialLink
                  href="https://x.com/dharwad_iiit"
                  label="Twitter"
                  icon={Twitter}
                />
              </div>
            </div>
          </div>

          {/* Explore Button - Takes 4 of 12 columns on large screens */}
          <div className="lg:col-span-4 flex items-center">
            <Link
              href={"/student-life/clubs/tech/"}
              onClick={() =>
                trackEvent({
                  action: "click",
                  category: "Navigation",
                  label: "Explore Button",
                })
              }
              className="bg-white/10 border border-white/40 text-title-2 font-medium group w-full px-5 py-3 rounded flex justify-between items-center text-white hover:bg-white/20 transition-colors duration-200"
            >
              <span>Explore</span>
              <ArrowRightIcon className="animate-pulse group-hover:translate-x-1/2 transition duration-500" />
            </Link>
          </div>
        </div>

        {/* Mobile and tablet view with shadcn Accordions */}
        <div className="block lg:hidden mt-6">
          <Accordion type="multiple" className="w-full">
            {footerLinks.map((group, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/20 last:border-b-0"
              >
                <AccordionTrigger className="text-body font-medium tracking-wider py-4 text-white">
                  {group.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1.5 py-1 pl-2">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <FooterLink href={link.href} text={link.text} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop view - Links Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-4">
          {footerLinks.map((group, index) => (
            <div key={index} className="space-y-2">
              <h2 className="font-bold text-title-3 text-white tracking-wider pb-2 border-b border-white/20 inline-block">
                {group.title}
              </h2>
              <ul className="space-y-1.5">
                {group.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="transition-transform duration-200 hover:translate-x-1"
                  >
                    <FooterLink href={link.href} text={link.text} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-5 pt-4 border-t border-white/20 text-headline font-medium text-center">
          <p>
            © {new Date().getFullYear()} Indian Institute of Information
            Technology, Dharwad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
