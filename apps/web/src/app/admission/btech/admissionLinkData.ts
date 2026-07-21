export interface LinkItem {
  title: string;
  href: string;
}

export const josaaLinks: LinkItem[] = [
  {
    title: "B.Tech Admission Fee Structure (JoSAA/CSAB)",
    href: "https://drive.google.com/file/d/1vemIWkvls_5Ynx31uEo2fyacJyHDgZXa/view?usp=sharing",
  },
  {
    title: "Hostel Fee Structure for JoSAA/CSAB",
    href: "https://drive.google.com/file/d/1TZNjK_GEjStjE2HAEQ58fUguoJR6E94z/view?usp=sharing",
  },
  {
    title:
      "Physical Reporting for JoSAA/CSAB 2026 (13th–18th August 2026, Additional Day: 19th August)",
    href: "https://assets.iiitdwd.ac.in/docs/Physical_reporting_2026.pdf",
  },
  /* Commented out previous year (2025) link
  {
    title:
      "Admission form for B.Tech students allotted through JoSAA/CSAB Counselling 2025",
    href: "https://forms.gle/HhFLbufmLBh8FwW56",
  },
  */
  {
    title: "Fee Refund Policy",
    href: "/docs/Fee-Refund.pdf",
  },
  {
    title: "PM Vidya Laxmi Education Loan Scheme (Canara Bank)",
    href: "/docs/PM_VIDYA_LAXMI_EDUCATION_LOAN_-CANARA_BANK_FOR_IIIT_DHARWAD.pdf",
  },
  {
    title: "Scholarships & Financial Aid",
    href: "/scholarship/",
  },
  {
    title: "Frequently Asked Questions (FAQs)",
    href: "/faq/",
  },
  {
    title:
      "Class XII Performance & Eligibility Criteria for 2026 Admissions",
    href: "/docs/Performance_in%20Class_XII_2026.pdf",
  },
  {
    title:
      "Category-wise Top 20 Percentile Cut-off Marks (Class XII 2026)",
    href: "https://cdnbbsr.s3waas.gov.in/s313111c20aee51aeb480ecbd988cd8cc9/uploads/2026/06/2026060941.pdf",
  },
];

export const dasaLinks: LinkItem[] = [
  {
    title: "B.Tech Admission Fee Structure for DASA",
    href: "https://drive.google.com/file/d/1ExyeIsTPS2GCtol5W53ZbEk29YP9xfHb/view?usp=sharing",
  },
  {
    title: "Hostel Fee Structure for DASA",
    href: "https://drive.google.com/file/d/1TZNjK_GEjStjE2HAEQ58fUguoJR6E94z/view?usp=sharing",
  },
  {
    title:
      "Physical Reporting for DASA 2026 (13th–18th August 2026, Additional Day: 19th August)",
    href: "https://assets.iiitdwd.ac.in/docs/Physical_reporting_2026.pdf",
  },
];

export const siiLinks: LinkItem[] = [
  {
    title: "B.Tech Admission Fee Structure for Study in India (SII)",
    href: "https://drive.google.com/file/d/1ExyeIsTPS2GCtol5W53ZbEk29YP9xfHb/view?usp=sharing",
  },
  {
    title: "Hostel Fee Structure for Study in India (SII)",
    href: "https://drive.google.com/file/d/1TZNjK_GEjStjE2HAEQ58fUguoJR6E94z/view?usp=sharing",
  },
  {
    title: "Study in India (SII) Official Portal",
    href: "https://www.studyinindia.gov.in/",
  },
  {
    title: "General Admission Guidelines for International Students (SII)",
    href: "https://docs.google.com/document/d/1VMB7NvKJVvlVTA4_EvtELzk9ikDXHH3_7lGwrtoOl3w/edit?usp=sharing",
  },
];

export const sportsLinks: LinkItem[] = [
  {
    title: "B.Tech Admission Fee Structure for Sports Excellence",
    href: "https://drive.google.com/file/d/1vemIWkvls_5Ynx31uEo2fyacJyHDgZXa/view?usp=sharing",
  },
  {
    title: "Hostel Fee Structure for Sports Excellence",
    href: "https://drive.google.com/file/d/1TZNjK_GEjStjE2HAEQ58fUguoJR6E94z/view?usp=sharing",
  },
  {
    title: "Application Form for Sports Excellence Admission",
    href: "https://forms.gle/rWUJz8UECf2KLnAA8",
  },
  {
    title: "General Admission Guidelines for Sports Category",
    href: "https://docs.google.com/document/d/1VMB7NvKJVvlVTA4_EvtELzk9ikDXHH3_7lGwrtoOl3w/edit?usp=sharing",
  },
];

export const olympiadLinks: LinkItem[] = [
  {
    title: "B.Tech Admission Fee Structure for Olympiad Excellence",
    href: "https://drive.google.com/file/d/1vemIWkvls_5Ynx31uEo2fyacJyHDgZXa/view?usp=sharing",
  },
  {
    title: "Hostel Fee Structure for Olympiad Excellence",
    href: "https://drive.google.com/file/d/1TZNjK_GEjStjE2HAEQ58fUguoJR6E94z/view?usp=sharing",
  },
  {
    title: "Application Form for Olympiad Excellence Admission",
    href: "https://forms.gle/rWUJz8UECf2KLnAA8",
  },
  {
    title: "General Admission Guidelines for Olympiad Category",
    href: "https://docs.google.com/document/d/1VMB7NvKJVvlVTA4_EvtELzk9ikDXHH3_7lGwrtoOl3w/edit?usp=sharing",
  },
];

// Fallback export to prevent build break in other potential imports
export const bTechAdmissionLinks = josaaLinks;
