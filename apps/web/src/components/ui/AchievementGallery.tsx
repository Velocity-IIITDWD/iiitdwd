// This file reuses the EventGallery component for achievements.
// It helps in maintaining a cleaner code structure without duplication.
"use client";

import React from "react";
import { EventGallery } from "./EventGallery";

interface Achievement {
  title: string;
  description: string;
  images?: Array<{ image: string }>;
}

interface AchievementGalleryProps {
  achievements: Achievement[];
  clubName: string;
}

export const AchievementGallery: React.FC<AchievementGalleryProps> = ({
  achievements,
  clubName,
}) => {
  const events = achievements.map(achievement => ({
    title: achievement.title,
    description: achievement.description,
    images: achievement.images,
    videos: [], // Achievements don't have videos, so we provide an empty array
  }));

  // Reusing the EventGallery component with achievements data and a custom title
  return (
    <EventGallery
      events={events}
      clubName={clubName}
      title="Past Achievements of" // Corrected title
    />
  );
};