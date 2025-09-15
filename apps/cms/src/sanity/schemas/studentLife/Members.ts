import { SearchSlashIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

// const clubNames = [
//   "Velocity",
//   "Iridescence",
//   "Return 0",
//   "BlocSoc",
//   "GDSC IIIT Dharwad",
//   "E cell",
//   "IEEE SB & CS",
//   "Inquizitive",
//   "IRIS",
//   "DSAI Society",
//   "Quantum Computing Club",
//   "Techniosys",
//   "Zeitgeist",
//   "440 Hz",
//   "Dance Club",
//   "Prabodhini",
//   "Mosaic Club",
//   "In Motion",
//   "LimeLight",
// ];

const techClubNames = [
  "Velocity",
  "Return 0",
  "BlocSoc",
  "GDSC IIIT Dharwad",
  "E cell",
  "IEEE SB",
  "Inquizitive",
  "IRIS",
  "DSAI Society",
  "Quantum Computing Club",
  "Techniosys",
  "GND_0 VLSI Club IIIT Dharwad",
  "MSA IIIT Dharwad",
  "accelAIrate",
  "Vidkarya"
]

const nonTechClubNames = [
  "Cricket Club",
  "Badminton Club",
  "Volleyball Club",
  "Basketball Club",
  "Athletics Club",
  "Counselling Cell",
  "Magazine Committee",
]

const culturalClubNames = [
  "Zeitgeist",
  "Iridescence",
  "440 Hz",
  "In Motion",
  "Dynamight",
  "Prabodhini",
  "Mosaic Club",
  "LimeLight",
]

export const techClubs = defineType({
  name: "techClub",
  title: "Technical Club",
  type: "document",
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: "name",
      title: "Club Name",
      type: "string",
      description: "Name of the technical club",
      options: {
        list: techClubNames.map(name => ({ title: name, value: name })),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of the technical club in under 50 words",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
      description: "Logo of the technical club",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
      description: "Landscape Image of the technical club (for clubcard)",
    }),
    defineField({
      name: "memberCount",
      title: "Member Count",
      type: "number",
      description: "Number of members in the technical club",
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      description: "Important Member Positions of the technical club",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "string",
              description: "Image of the member"
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "alumni",
      title: "Alumni",
      type: "array",
      description: "Alumni Info of the technical club",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "string",
              description: "Image of the member"
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      description: "Vision of the technical club",
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      description: "Mission of the technical club",
    }),
    defineField({
      name: "meetingDetails",
      title: "Meeting Details",
      type: "object",
      description: "Details about the meetings of the technical club",
      fields: [
        defineField({
          name: "schedule",
          title: "Schedule",
          type: "string",
          description: "Meeting schedule (e.g., Weekly Fridays, 7:00 PM)",
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
          description: "Location of the meetings (e.g., E Block - Room 310)",
        }),
      ],
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      description: "Recent events that the club has conducted",
      of:[
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title of the event",
              type: "string",
              description: "Title of the event that the club has conducted"
            }),
            defineField({
              name: "description",
              title: "Description on the event",
              type: "text",
              description: "Description of the event that the club has conducted"
            }),
            defineField({
              name: "images",
              title: "Images of the event",
              type: "array",
              description: "Snapshots of the event that the club has conducted",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Image of the event",
                      type: "string",
                      description: "Image of the event"
                    }),
                  ]
                }
              ]
            }),
            defineField({
              name: "videos",
              title: "Videos of the event",
              type: "array",
              description: "Video Snapshots of the event that the club has conducted",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "video",
                      title: "Video of the event",
                      type: "string",
                      description: "Video of the event"
                    }),
                  ]
                }
              ]
            }),
          ]
        }
      ]
    }),
    defineField({
      name:"upcomingEvents",
      title: "Details of upcoming evennts",
      type: "array",
      description: "Details about upcoming events that the club is going to conduct",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title of the event",
              type: "string",
              description: "Name of the upcoming event"
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Small one line description about the event"
            }),
            defineField({
              name: "schedule",
              title: "Schedule",
              type: "string",
              description: "Tentative Schedule of the upcoming events"
            }),
          ]
        },
      ]
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      description: "Social media and other links of the technical club",
      fields: [
        defineField({
          name: "gmail",
          title: "Gmail",
          type: "string",
          description: "Gmail of the technical club",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "string",
          description: "LinkedIn handle of the technical club",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "string",
          description: "Instagram handle of the technical club",
        }),
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "string",
          description: "Twitter of the technical club",
        }),
        defineField({
          name: "website",
          title: "Website",
          type: "string",
          description: "Website of the technical club",
        }),
        defineField({
          name: "github",
          title: "GitHub",
          type: "string",
          description: "GitHub of the technical club",
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
});

export const nonTechClubs = defineType({
  name: "nonTechClub",
  title: "Non-Technical Club",
  type: "document",
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: "name",
      title: "Club Name",
      type: "string",
      description: "Name of the non-technical club",
      options: {
        list: nonTechClubNames.map(name => ({ title: name, value: name })),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of the non-technical club in under 50 words",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
      description: "Logo of the non-technical club",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
      description: "Landscape Image of the non-technical club (for clubcard)",
    }),
    defineField({
      name: "memberCount",
      title: "Member Count",
      type: "number",
      description: "Number of members in the non-technical club",
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      description: "Important Member Position of the non-technical club",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "string",
              description: "Image of the member"
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "Alumni",
      title: "alumni",
      type: "array",
      description: "Alumni Info of the non-technical club",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "string",
              description: "Image of the member"
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      description: "Achievements of the Club",
      of: [
        {
          type: "object",
          fields:[
            defineField({
              name: "title",
              title: "Title of the Achievement",
              type: "string",
              description: "One line Title of the Achievement",
            }),
            defineField({
              name: "description",
              title: "Description of the Title",
              type: "text",
              description: "A small Description About the Achievement",
            }),
            defineField({
              name: "images",
              title: "Images of the Achievement",
              type: "array",
              description: "Snapshots of the Achievement that the club has Achieved",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Image of the Achievement",
                      type: "string",
                      description: "Image of the Achievemnt"
                    }),
                  ]
                }
              ]
            }),
          ]
        }
      ]
    }),
    defineField({
      name: "meetingDetails",
      title: "Meeting Details",
      type: "object",
      description: "Details about the meetings of the non-technical club",
      fields: [
        defineField({
          name: "schedule",
          title: "Schedule",
          type: "string",
          description: "Meeting schedule (e.g., Weekly Fridays, 7:00 PM)",
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
          description: "Location of the meetings (e.g., E Block - Room 310)",
        }),
      ],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      description: "Social media and other links of the non-technical club",
      fields: [
        defineField({
          name: "gmail",
          title: "Gmail",
          type: "string",
          description: "Gmail of the non-technical club",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "string",
          description: "Instagram handle of the non-technical club",
        }),
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "string",
          description: "Twitter of the non-technical club",
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
});

export const culturalClubs = defineField({
  name: "culturalClub",
  title: "Cultural Club",
  type: "document",
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: "name",
      title: "Club Name",
      type: "string",
      description: "Name of the Cultural club",
      options: {
        list: culturalClubNames.map(name => ({ title: name, value: name })),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of the Cultural club in under 50 words",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
      description: "Logo of the cultural club",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
      description: "Landscape Image of the cultural club (for clubcard)",
    }),
    defineField({
      name: "memberCount",
      title: "Member Count",
      type: "number",
      description: "Number of members in the cultural club",
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      description: "Important Member Positions of the cultural club",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "string",
              description: "Image of the member"
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "Alumni",
      title: "alumni",
      type: "array",
      description: "Alumni Info of the cultural club",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "string",
              description: "Image of the member"
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      description: "Vision of the cultural club",
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      description: "Mission of the cultural club",
    }),
    defineField({
      name: "meetingDetails",
      title: "Meeting Details",
      type: "object",
      description: "Details about the meetings of the cultural club",
      fields: [
        defineField({
          name: "schedule",
          title: "Schedule",
          type: "string",
          description: "Meeting schedule (e.g., Weekly Fridays, 7:00 PM)",
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
          description: "Location of the meetings (e.g., E Block - Room 310)",
        }),
      ],
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      description: "Recent events that the club has conducted",
      of:[
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title of the event",
              type: "string",
              description: "Title of the event that the club has conducted"
            }),
            defineField({
              name: "description",
              title: "Description on the event",
              type: "text",
              description: "Description of the event that the club has conducted"
            }),
            defineField({
              name: "images",
              title: "Images of the event",
              type: "array",
              description: "Snapshots of the event that the club has conducted",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Image of the event",
                      type: "string",
                      description: "Image of the event"
                    }),
                  ]
                }
              ]
            }),
            defineField({
              name: "videos",
              title: "Videos of the event",
              type: "array",
              description: "Video Snapshots of the event that the club has conducted",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "video",
                      title: "Video of the event",
                      type: "string",
                      description: "Video of the event"
                    }),
                  ]
                }
              ]
            }),
          ]
        }
      ]
    }),
    defineField({
      name:"upcomingEvents",
      title: "Details of upcoming evennts",
      type: "array",
      description: "Details about upcoming events that the club is going to conduct",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title of the event",
              type: "string",
              description: "Name of the upcoming event"
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Small one line description about the event"
            }),
            defineField({
              name: "schedule",
              title: "Schedule",
              type: "string",
              description: "Tentative Schedule of the upcoming events"
            }),
          ]
        },
      ]
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      description: "Social media and other links of the cultural club",
      fields: [
        defineField({
          name: "gmail",
          title: "Gmail",
          type: "string",
          description: "Gmail of the cultural club",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "string",
          description: "LinkedIn handle of the cultural club",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "string",
          description: "Instagram handle of the cultural club",
        }),
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "string",
          description: "Twitter of the cultural club",
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
});


/*
export const Club = defineType({
  name: "club",
  title: "Club",
  type: "document",
  icon: SearchSlashIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the club",
      options: {
        list: clubNames.map(name => ({ title: name, value: name })),
      },
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "text",
      description: "About Text",
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the member",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              description: "Position of the member",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "imagePath",
      title: "Image Path",
      type: "string",
      description: "Path of the image",
    }),
    defineField({
      name: "isTechnical",
      title: "Is Technical",
      type: "boolean",
      description: "Is the club technical",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
      description: "Instagram handle of the club",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
      description: "LinkedIn handle of the club",
    }),
    defineField({
      name: "gmail",
      title: "Gmail",
      type: "string",
      description: "Gmail of the club",
    }),
    defineField({
      name: "gmail2",
      title: "Gmail2",
      type: "string",
      description: "Secondary Gmail of the club",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "string",
      description: "Website of the club",
    }),
    defineField({
      name: "github",
      title: "GitHub",
      type: "string",
      description: "GitHub of the club",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
      description: "Twitter of the club",
    }),
    defineField({
      name: "linktree",
      title: "Linktree",
      type: "string",
      description: "Linktree of the club",
    }),
  ],
});
*/