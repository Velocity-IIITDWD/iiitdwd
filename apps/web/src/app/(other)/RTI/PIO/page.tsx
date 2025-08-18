import { DynamicProfileSections } from "@/components/committee";
import React from "react";

// You'll need to define the interfaces if they aren't already imported.
// For this example, I'll assume they're defined in the committee.tsx file
// you referenced.
interface ProfileCardProps {
  title: string | null;
  content: Array<string> | null;
  imageURL: string | null;
  index?: number;
}

interface ProfileSectionProps {
  title: string | null;
  profiles: Array<ProfileCardProps> | null;
}

const testData: ProfileSectionProps[] = [
  {
    title: "Public Information Officers (PIO)",
    profiles: [
      {
        title: "Dr. Muruganantham Ponnusamy",
        content: [
          "First Appellate Authority (FAA)",
          "Registrar",
          "registrar@iiitdwd.ac.in",
        ],
        imageURL: "/images/Muruganatham_Ponnusamy.jpeg",
      },
      {
        title: "Mr. Ravi B Vitlapur",
        content: [
          "Chief Public Information Officer (CPIO)",
          "Senior Assistant Registrar",
          "assistantregistrar@iiitdwd.ac.in",
        ],
        imageURL: "/images/ravi_b_vitlapur.jpg",
      },
    ],
  },
];

export default async function Page(): React.ReactElement {
  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={testData} />
    </main>
  );
}
