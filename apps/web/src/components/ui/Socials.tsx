import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FadeInOnScroll } from "./FadeInOnScroll";

interface SocialsProps {
  links: {
    gmail?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
    github?: string;
  };
  clubName: string; // Add clubName prop
}

export const Socials: React.FC<SocialsProps> = ({ links, clubName }) => {
  if (!links) return null;

  const socialLinks = [
    { name: "linkedin", icon: <FaLinkedinIn size={32} />, url: links.linkedin },
    { name: "github", icon: <FaGithub size={32} />, url: links.github },
    { name: "website", icon: <BsGlobe size={32} />, url: links.website },
    { name: "instagram", icon: <FaInstagram size={32} />, url: links.instagram },
    { name: "twitter", icon: <FaTwitter size={32} />, url: links.twitter },
    { name: "gmail", icon: <HiOutlineMail size={32} />, url: links.gmail },
  ];

  const filteredLinks = socialLinks.filter((link) => link.url);

  if (filteredLinks.length === 0) {
    return null;
  }

  return (
    <section className="mb-12 w-full max-w-xl">
      <FadeInOnScroll>
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-6">
          Connect with {clubName} at
        </h2>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {filteredLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label={`Link to ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  );
};