"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FadeInOnScroll } from "./FadeInOnScroll";

interface UpcomingEvent {
  title: string;
  description?: string;
  schedule?: string;
}

interface UpcomingEventsProps {
  events: UpcomingEvent[];
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);

  const toggleEvent = (index: number) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="mb-12 w-full max-w-xl rounded-2xl bg-gray-100 p-8 shadow-lg">
      <FadeInOnScroll>
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-6">
          Quick Peek at our Upcoming Events
        </h2>
      </FadeInOnScroll>
      <div className="flex flex-col gap-4">
        {events.map((event, index) => (
          <FadeInOnScroll key={index} delay={index * 0.1}>
            <div className="flex flex-col rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg">
              <button
                className="flex items-center justify-between p-4 focus:outline-none"
                onClick={() => toggleEvent(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <motion.div
                  animate={{ rotate: openEventIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown size={24} className="text-gray-600" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openEventIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-700">
                      {event.description && (
                        <p className="text-md mb-2">{event.description}</p>
                      )}
                      {event.schedule && (
                        <p className="text-sm italic">Schedule: {event.schedule}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
};