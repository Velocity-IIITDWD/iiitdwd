import { CalendarIcon, CarIcon, ClipboardIcon } from "lucide-react";

import { defineField, defineType } from "sanity";

export const MainCarouselImage = defineType({
  name: "mainCarouselImage",
  title: "News & Events",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "caption",
      title: "Event Title / Caption",
      description: "Headline or title of the event displayed on the card",
      type: "string",
      validation: Rule => Rule.required().error("Event title is required"),
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      description:
        "Date of the event. Dates today or in the future automatically display under 'Upcoming Events'. Past dates display under 'Latest News & Events'.",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: Rule =>
        Rule.required().error(
          "Event date is required to position under Upcoming or Latest Events"
        ),
    }),
    defineField({
      name: "image",
      title: "Event Image / Poster (Upload)",
      description:
        "Upload the event flyer, banner, or photo (16:9 ratio recommended). If provided, this image is used automatically on the website.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "url",
      title: "Image URL / Path (Alternative / Legacy)",
      description:
        "Optional fallback: Local path (/images/...) or external image URL (https://...). Leave empty if you uploaded an image above.",
      type: "string",
      validation: Rule =>
        Rule.custom((url, context) => {
          const doc = context?.document as
            | { image?: unknown; url?: string }
            | undefined;
          if (!doc?.image && !url) {
            return "Please either upload an Image or provide an Image URL";
          }
          return true;
        }),
    }),
    defineField({
      name: "link",
      title: "Read More Link",
      description:
        "Destination URL or document link when clicked (e.g., https://... or /docs/brochure.pdf)",
      type: "string",
    }),
  ],
  orderings: [
    {
      title: "Event Date, Newest First",
      name: "eventDateDesc",
      by: [{ field: "eventDate", direction: "desc" }],
    },
    {
      title: "Event Date, Oldest First",
      name: "eventDateAsc",
      by: [{ field: "eventDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "caption",
      eventDate: "eventDate",
      media: "image",
      url: "url",
    },
    prepare({ title, eventDate, media, url }) {
      return {
        title: title || "Untitled Event",
        subtitle: eventDate
          ? `Date: ${eventDate}`
          : url
            ? `Path: ${url}`
            : "No date set",
        media: media,
      };
    },
  },
});

export const HomeEvent = MainCarouselImage;

export const UpcomingEvent = defineType({
  name: "upcomingEvent",
  title: "Upcoming Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      description:
        "Title of the upcoming event (e.g. 'National Hackathon 2026', 'Cybersecurity Workshop')",
      type: "string",
      validation: Rule => Rule.required().error("Event title is required"),
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      description: "Date of the upcoming event",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: Rule => Rule.required().error("Event date is required"),
    }),
    defineField({
      name: "image",
      title: "Event Poster / Banner (Upload)",
      description:
        "Upload the event flyer, banner, or photo (16:9 ratio recommended). If provided, this image will automatically be shown on the website.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "url",
      title: "Image URL / Path (Alternative)",
      description:
        "Optional fallback: Local path (/images/...) or external image URL (https://...). Leave empty if you uploaded an image above.",
      type: "string",
      validation: Rule =>
        Rule.custom((url, context) => {
          const doc = context?.document as
            | { image?: unknown; url?: string }
            | undefined;
          if (!doc?.image && !url) {
            return "Please either upload an Image or provide an Image URL";
          }
          return true;
        }),
    }),
    defineField({
      name: "link",
      title: "Read More / Registration Link",
      description:
        "Link for registration form, brochure PDF, or event page (e.g., https://... or /docs/...)",
      type: "string",
      validation: Rule =>
        Rule.required().error("Registration or Read More link is required"),
    }),
  ],
  orderings: [
    {
      title: "Event Date (Soonest first)",
      name: "eventDateAsc",
      by: [{ field: "eventDate", direction: "asc" }],
    },
    {
      title: "Event Date (Latest first)",
      name: "eventDateDesc",
      by: [{ field: "eventDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      eventDate: "eventDate",
      media: "image",
      url: "url",
    },
    prepare({ title, eventDate, media, url }) {
      return {
        title: title || "Untitled Event",
        subtitle: eventDate
          ? `Date: ${eventDate}`
          : url
            ? `Path: ${url}`
            : "No date set",
        media: media,
      };
    },
  },
});

export const ProgramCards = defineType({
  name: "programCards",
  title: "Program Cards",
  type: "document",
  icon: CarIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image URL",
      type: "url",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "Header1",
      title: "Header 1",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "Header2",
      title: "Header 2",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
});

export const ProgramsType = defineType({
  name: "programsType",
  title: "Programs Type",
  type: "document",
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image URL",
      type: "url",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.required(),
    }),
  ],
});
