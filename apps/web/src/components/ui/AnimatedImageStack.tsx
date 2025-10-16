"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface AnimatedImageStackProps {
  images: string[];
}

export function AnimatedImageStack({ images }: AnimatedImageStackProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const validImages = images.filter(Boolean);

  const imageSize = 225; // This corresponds to Tailwind's w-24, h-24
  const gap = 15;
  const totalWidth = validImages.length * imageSize + (validImages.length - 1) * gap;

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const itemVariants = (index: number, total: number) => ({
    hidden: { 
      // All images start stacked and hidden in the center
      x: 0, 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      // ✅ The animated state spreads them out with the correct gap and centering
      x: (index - (total - 1) / 2) * (imageSize + gap),
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  });

  if (validImages.length === 0) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex justify-center items-center h-24 relative"
      // ✅ Set the width to be dynamic based on the calculated total width
      style={{ width: `${totalWidth}px` }}
    >
      {validImages.slice(0, 5).map((src, index) => (
        <motion.div
          key={index}
          variants={itemVariants(index, validImages.length)}
          className="relative w-50 h-50 rounded-4xl overflow-hidden border-4 border-white shadow-lg" // ✅ Set a consistent size here
          style={{
            zIndex: validImages.length - index,
            position: "absolute",
          }}
        >
          <Image
            src={src}
            alt={`Member image ${index + 1}`}
            fill
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}