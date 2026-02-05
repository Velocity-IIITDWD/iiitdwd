export interface Course {
  name: string;
  credits?: string;
  semester?: string;
}

export interface MajorProgram {
  title: string;
  description: string;
  background?: string;
  structure: {
    core: Course[];
    electives: Course[];
  };
  syllabusLink?: string;
}

export const majorPrograms: MajorProgram[] = [
  {
    title: "Computer Science and Engineering (CSE)",
    description:
      "Allows students from other departments (DSAI, ECE) to pursue a major in CSE. Equips them with in-depth knowledge in core Computer Science concepts.",
    background:
      "Combining a major in CSE offers advantages such as industry-relevant skills, broader career opportunities, and strong foundations for research and higher studies.",
    structure: {
      core: [
        { name: "Mathematical Foundations of Computing", credits: "3" },
        { name: "Operating Systems", credits: "2" },
        { name: "Systems and Usable Security", credits: "2" },
        { name: "Computer Networks", credits: "4" },
        { name: "Software Design Tools and Techniques", credits: "3" },
        { name: "Design & Analysis of Algorithms", credits: "4" },
        { name: "Software Engineering", credits: "2" },
        { name: "DBMS", credits: "4" },
        { name: "Artificial Intelligence", credits: "4" },
        { name: "Theory of Computing", credits: "4" },
      ],
      electives: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "Computer Graphics" },
        { name: "Image Processing and Computer Vision" },
        { name: "Human Computer Interaction" },
        { name: "Deep Computer Vision" },
        { name: "Bioinformatics" },
        { name: "Generative AI" },
        { name: "Natural Language Processing" },
        { name: "Information Retrieval" },
        { name: "Parallel Computing" },
        { name: "DevOps" },
        { name: "Virtualization and Cloud Computing" },
        { name: "AI for Cybersecurity" },
        { name: "Cryptography and Information Security" },
        { name: "Graph Theory" },
        { name: "Compiler Design" },
      ],
    },
  },
  {
    title: "Data Science and AI (DSAI)",
    description:
      "Equips students with in-depth knowledge and skills in AI, machine learning, and data science, giving them a significant advantage in the tech-driven job market.",
    background:
      "Ideal for careers such as machine learning engineers, data scientists, data analysts, or domain-specific AI specialists.",
    structure: {
      core: [
        { name: "Data Curation Techniques", credits: "3" },
        { name: "Statistical Programming", credits: "2" },
        { name: "Data Handling and Visualization", credits: "3" },
        { name: "Database Management and Warehousing", credits: "4" },
        { name: "Information Security and Privacy", credits: "4" },
        { name: "Artificial Intelligence", credits: "4" },
        { name: "Machine Learning", credits: "4" },
        { name: "Distributed AI Systems", credits: "4" },
        { name: "Signal Processing for Data Science and ML", credits: "4" },
        { name: "Systems Engineering Approaches to AI", credits: "4" },
      ],
      electives: [
        { name: "Financial Data Analytics" },
        { name: "Numerical Methods in Finance" },
        { name: "Cloud Computing" },
        { name: "Time-series Analysis" },
        { name: "Internet of Things" },
        { name: "Healthcare Data Analytics" },
        { name: "Human-Computer Interaction" },
        { name: "Generative AI" },
        { name: "Reinforcement Learning" },
        { name: "Large Language Models" },
      ],
    },
  },
  {
    title: "Electronics and Communication (ECE)",
    description:
      "Equips students with in-depth knowledge in Electronics, Communications, Embedded Systems, and VLSI.",
    background:
      "Expands career opportunities in fields like Signal Processing, VLSI, IoT, and related domains.",
    structure: {
      core: [
        { name: "Network Analysis", credits: "3", semester: "II" },
        { name: "Random Process", credits: "2", semester: "III" },
        { name: "Signals & Systems", credits: "3", semester: "III" },
        { name: "Semiconductor Devices", credits: "2", semester: "IV" },
        { name: "Analog Electronics Circuits", credits: "2", semester: "IV" },
        {
          name: "ML / Any ECE Discipline Elective",
          credits: "4",
          semester: "IV",
        },
        {
          name: "Analog and Digital Communication",
          credits: "3",
          semester: "IV",
        },
        { name: "Introduction to VLSI Design", credits: "4", semester: "V" },
        { name: "Digital Signal Processing", credits: "2", semester: "V" },
        { name: "Control System", credits: "2", semester: "VI" },
        { name: "Linear Integrated Circuits", credits: "2", semester: "VI" },
        { name: "Embedded System Design", credits: "3", semester: "VI" },
      ],
      electives: [
        { name: "Analog & Mixed Signal Design" },
        { name: "RFIC Design" },
        { name: "Digital System Design" },
        { name: "System on Chip (SoC)" },
        { name: "Low Power VLSI Design" },
        { name: "VLSI Testing & Verification" },
        { name: "Wireless Communication" },
        { name: "5G and Beyond Systems" },
        { name: "Information Theory Coding" },
        { name: "Optical Communication" },
        { name: "Real Time Systems" },
        { name: "Embedded AI" },
        { name: "Robotics" },
        { name: "Biomedical Signal & Image Processing" },
        { name: "Speech Processing" },
        { name: "Deep Learning" },
      ],
    },
  },
];
