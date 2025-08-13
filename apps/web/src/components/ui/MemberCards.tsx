"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Member {
  name: string;
  position: string;
  image?: string;
}

interface MemberCardsProps {
  members: Member[];
}

export function MemberCards({ members }: MemberCardsProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const validMembers = members.filter(member => member.name && member.image);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (validMembers.length === 0) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 w-full max-w-10xl"
    >
      {validMembers.slice(0, 10).map((member, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-square overflow-hidden">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
            )}
          </div>

          {/* Content Container */}
          <div className="p-4 text-center">
            {/* Name as title */}
            <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
              {member.name}
            </h3>

            {/* Position as badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {member.position}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
