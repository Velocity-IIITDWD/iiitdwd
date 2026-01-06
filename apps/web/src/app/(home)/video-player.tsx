"use client";

import {
  IconArrowUpRight,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  externalLink: string;
}

export default function VideoPlayer({
  externalLink,
}: VideoPlayerProps): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const hasPlayed = mounted ? localStorage.getItem("homeVideoPlayed") : null;
  const [isMuted, setIsMuted] = useState(true);
  const [shouldAutoplay, setShouldAutoplay] = useState(!hasPlayed);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !hasPlayed) {
      localStorage.setItem("homeVideoPlayed", "true");
    }
  }, [mounted, hasPlayed]);

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <a
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 md:flex-[0_0_60%] lg:flex-[0_0_70%] relative overflow-hidden rounded-lg"
    >
      <div className="relative w-full pt-[56.25%]">
        <video
          ref={videoRef}
          src="https://iiitdwd.ac.in/images/orientation.mp4"
          autoPlay={shouldAutoplay}
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          poster="/images/thumnail.png"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ imageRendering: "crisp-edges" } as React.CSSProperties}
        />
      </div>

      <button
        onClick={toggleMute}
        className="absolute top-4 right-14 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <IconVolumeOff className="text-gray-700" size={20} />
        ) : (
          <IconVolume className="text-gray-700" size={20} />
        )}
      </button>

      <IconArrowUpRight
        className="absolute top-4 right-4 z-10 text-gray-500 group-hover:text-black transition-all"
        size={20}
      />
    </a>
  );
}
