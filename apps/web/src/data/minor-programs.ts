export interface Course {
  name: string;
  credits?: string;
  code?: string;
}

export interface MinorProgram {
  title: string;
  description: string;
  background?: string;
  structure: {
    core: Course[];
    electives: Course[];
    project: Course[];
  };
  syllabusLink?: string; // If we want to link to full PDF for details, or we can inline more info.
}

export const minorPrograms: MinorProgram[] = [
  {
    title: "Entrepreneurship",
    description:
      "Empowers students to think creatively and innovatively, equipping them with essential knowledge, tools, and frameworks to succeed in various careers.",
    background:
      "This minor empowers students to launch their own ventures, thrive in startups, and drive social change. It includes hands-on experience and mentorship.",
    structure: {
      core: [
        { name: "Innovation, Entrepreneurship and Technology", credits: "2" },
        { name: "Introduction to Sales and Marketing", credits: "2" },
        { name: "Business Plan Development", credits: "2" },
      ],
      electives: [
        { name: "Financial Engineering", credits: "2" },
        { name: "Market Research", credits: "2" },
        { name: "Consumer Psychology and Decision Making", credits: "2" },
        { name: "Managerial Economics", credits: "2" },
        { name: "Game Theory for Startups", credits: "2" },
        { name: "International Business", credits: "2" },
        { name: "Strategic Management", credits: "2" },
        { name: "Introduction to Finance for Engineers", credits: "2" },
      ],
      project: [
        {
          name: "Launch Your Startup: A Hands-on Learning Experience",
          credits: "4-8",
        },
      ],
    },
  },
  {
    title: "Generative AI",
    description:
      "Focus on enhancing industry-academia partnerships, internships, placements, and projects across all existing disciplines using GenAI.",
    background:
      "Proposed by a committee to reflect the institute's culture and enhance partnerships. Includes foundations of ML/GenAI and applications.",
    structure: {
      core: [
        { name: "Foundations of Machine Learning and Generative AI" },
        { name: "Generative AI Applications: From Concept to Implementation" },
      ],
      electives: [
        { name: "Text and Speech Generation with Advanced Models" },
        { name: "Visual Creativity with Generative AI" },
        { name: "Advanced Techniques in Prompt Engineering" },
        { name: "Operationalizing LLMs: Tools and Techniques" },
        { name: "Small Language Models" },
      ],
      project: [{ name: "Capstone Project in Generative AI" }],
    },
  },
  {
    title: "VLSI",
    description:
      "Designed for students from any discipline to gain expertise in Semiconductor and VLSI domains.",
    background:
      "Translation research in nature to bring industry-academia linkages. Minimum 20 credits required.",
    structure: {
      core: [
        { name: "Verilog Hardware Description Language", credits: "4" },
        { name: "CAD for VLSI", credits: "4" },
      ],
      electives: [
        { name: "RTL-to-GDS", credits: "4" },
        { name: "RISC V", credits: "4" },
        { name: "System-on-Chip", credits: "4" },
        { name: "VLSI Verification and Testing", credits: "4" },
      ],
      project: [
        { name: "Industry tie-up / relevant project(s)", credits: "4-8" },
      ],
    },
  },
  {
    title: "Undergraduate Research Experience",
    description:
      "Dedicated to Research that suits IIIT culture. Fosters interdisciplinary skill development, innovation, and creativity.",
    structure: {
      core: [
        { name: "Research Methodology", credits: "2" },
        {
          name: "Literature Survey and State of the Art Seminar",
          credits: "2",
        },
        { name: "Any core course suggested by supervising faculty" },
      ],
      electives: [
        {
          name: "Elective course(s) suggested by supervising faculty",
          credits: "4",
        },
      ],
      project: [
        { name: "Research Project under guidance of faculty", credits: "8" },
      ],
    },
  },
  {
    title: "Cybersecurity",
    description:
      "Equips students with critical skills to protect digital assets. Covers threat identification, mitigation, and industry-standard tools.",
    structure: {
      core: [
        { name: "Introduction to Cybersecurity", credits: "2" },
        { name: "Principles of Security Engineering", credits: "4" },
        { name: "Network Security Essentials", credits: "2" },
        {
          name: "Security Operations - Governance Risk & Compliance",
          credits: "4",
        },
        {
          name: "Computer Networks Basics and Operating Systems",
          credits: "2",
        },
        { name: "Software Engineering", credits: "2" },
      ],
      electives: [
        { name: "Web, Mobile and DevOps Security", credits: "4" },
        { name: "Network and Cloud Security", credits: "4" },
        { name: "Hardware Security / Asset Security", credits: "4" },
        { name: "Cyber Environment and Trustworthiness", credits: "4" },
        { name: "Cryptography", credits: "4" },
        { name: "AI for cybersecurity", credits: "4" },
      ],
      project: [
        { name: "Capstone Project(s) on cybersecurity", credits: "4-8" },
      ],
    },
  },
  {
    title: "Quantum Information Science and Technology",
    description:
      "Provides a comprehensive understanding of Quantum Principles and their applications across various domains.",
    background:
      "Translation research in nature. Minimum 20 credits required. Covers Quantum Computing, Communication, and Sensing.",
    structure: {
      core: [
        {
          name: "Introduction to Quantum Information Science and Technology",
          credits: "4",
        },
      ],
      electives: [
        {
          name: "Quantum Communication and Security / Networking",
          credits: "4",
        },
        {
          name: "Applications of Quantum Computing and Technology",
          credits: "4",
        },
        { name: "Quantum Natural Language Processing", credits: "4" },
      ],
      project: [
        {
          name: "Research Project with Quantum Computing Platforms",
          credits: "8",
        },
      ],
    },
  },
];
