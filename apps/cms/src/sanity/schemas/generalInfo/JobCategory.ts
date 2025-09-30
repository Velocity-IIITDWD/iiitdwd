import { Tag } from "lucide-react";
import { defineField, defineType } from "sanity";

export const JobCategory = defineType({
  name: "jobCategory",
  title: "Job Category",
  type: "document",
  icon: Tag,
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "Machine value saved in jobs (e.g., 'phd/m.tech')",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Human-friendly title for the category",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Optional sort order for display",
    }),
  ],
});


