"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CgPlayButtonO } from "react-icons/cg";
import { FadeInOnScroll } from "./FadeInOnScroll";

interface Event {
  title: string;
  description: string;
  images?: Array<{ image: string }>;
  videos?: Array<{ video: string }>;
}

const EventCarouselModal = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => {
  const allMedia = [
    ...(event.images || []).map((img) => ({
      type: "image",
      url: img.image,
    })),
    ...(event.videos || []).map((vid) => ({
      type: "video",
      url: vid.video,
    })),
  ];
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(
      (prevIndex) => (prevIndex - 1 + allMedia.length) % allMedia.length
    );
  };

  const currentMedia = allMedia[currentMediaIndex];

  if (!currentMedia) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-[90vh] w-full max-w-[1200px] gap-4 rounded-2xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/20 p-1 text-white transition-colors hover:bg-white/40"
          aria-label="Close"
        >
          <IoCloseCircleOutline size={32} />
        </button>

        {/* Media Display Area */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-l-2xl">
          {allMedia.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Previous media"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Next media"
              >
                <FaChevronRight size={24} />
              </button>
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMediaIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              {currentMedia.type === "image" && (
                <Image
                  src={currentMedia.url}
                  alt={event.title}
                  fill
                  className="object-contain"
                />
              )}
              {currentMedia.type === "video" && (
                <video
                  src={currentMedia.url}
                  controls
                  className="h-full w-full object-contain"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Event Info Area */}
        <div className="flex w-1/3 flex-col overflow-hidden rounded-r-2xl bg-black text-white">
          <div className="overflow-y-auto p-8">
            <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
            <p className="text-lg text-gray-300">{event.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface EventGalleryProps {
  events: Event[];
  clubName: string;
}

export const EventGallery: React.FC<EventGalleryProps> = ({ events, clubName }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (!events || events.length === 0) {
    return null;
  }

  const toId = (text: string) => text.replace(/\s+/g, "-").toLowerCase();

  return (
    <section id={toId("Past Events")} className="mb-12 w-full">
      <FadeInOnScroll>
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
          Past Events of {clubName}
        </h2>
      </FadeInOnScroll>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => {
          const allMedia = [
            ...(event.images || []).map((img) => ({
              type: "image",
              url: img.image,
            })),
            ...(event.videos || []).map((vid) => ({
              type: "video",
              url: vid.video,
            })),
          ];
          const totalMedia = allMedia.length;
          const thumbnail = allMedia[0]?.url;
          const thumbnailType = allMedia[0]?.type;

          if (!thumbnail) return null; // Don't render card if no media exists

          return (
            <FadeInOnScroll key={index} delay={index * 0.1}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-64 w-full bg-gray-200">
                  {thumbnailType === "image" && (
                    <Image
                      src={thumbnail}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  {thumbnailType === "video" && (
                    <>
                      <video
                        src={thumbnail}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <CgPlayButtonO size={64} />
                      </div>
                    </>
                  )}
                  <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-white backdrop-blur-sm">
                    +{totalMedia}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          );
        })}
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <EventCarouselModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};