export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

/* ---------- CURRENT TEAM ---------- */
export const currentTeam: TeamMember[] = [
  {
    id: "barghav",
    name: "Barghav Abhilash B R",
    role: "Lead",
    bio: "Lazy Full-Stack Dev and still exploring",
    skills: ["Js", "Ts", "Angular", "Next.js", "PostgreSQL"],
    image: "/images/website_m1.jpg",
    social: {
      twitter: "https://x.com/GFless_Kurrodu",
      github: "https://github.com/Meow-Codes",
      linkedin: "https://www.linkedin.com/in/barghav-abhilash-b-r-2ab2ba29a/",
      email: "barghavabhilash@gmail.com",
    },
  },
  {
    id: "shardendu",
    name: "Shardendu Mishra",
    role: "Lead",
    bio: "I’m Shardendu Mishra, a Software Engineer who learns by coding and codes by learning. I engineer software and products that solve real problems and deliver optimized solutions.",
    skills: ["Golang", "Linux", "Git", "Low Level Design and Database", "Architecture", "SvelteKit", "NextJS"],
    image: "/images/website_m2.png",
    social: {
      twitter: "https://x.com/Shardendu_M",
      github: "https://github.com/MishraShardendu22/",
      linkedin: "https://www.linkedin.com/in/shardendumishra22/",
      email: "mishrashardendu22@gmail.com",
    },
  },
];

/* ---------- ALUMNI ---------- */
export const alumniTeam: TeamMember[] = [
  {
    id: "pratik",
    name: "Pratik Pakhale",
    role: "Alumni",
    bio: "Web Enthusiast",
    skills: ["Infra", "JS", "Python", "Go"],
    image: "https://iiitdwd.ac.in/images/pratik-pakhale.webp",
    social: {
      twitter: "https://twitter.com/_pratikpakhale",
      github: "https://github.com/pratikpakhale",
      linkedin: "https://linkedin.com/in/pratikpakhale",
      email: "pratikpakhale20@gmail.com",
    },
  },
  {
    id: "nikhil",
    name: "Nikhil Karthik",
    role: "Alumni",
    bio: "Web and Game Developer",
    skills: ["JS", "Python", "Java", "OpenGL", "Metal"],
    image: "https://iiitdwd.ac.in/images/nikhil-karthik.jpg",
    social: {
      twitter: "https://twitter.com/nikhilkarthik24",
      github: "https://github.com/C-NikhilKarthik",
      linkedin: "https://linkedin.com/in/nikhilkarthik24",
      email: "nikhilkarthik241103@gmail.com",
    },
  },
  {
    id: "shreyansh",
    name: "Shreyansh Tiwari",
    role: "Alumni",
    bio: "",
    skills: ["NextJS"],
    image: "https://iiitdwd.ac.in/images/shreyansh-tiwari.jpeg",
    social: {},
  },
  {
    id: "ashith",
    name: "Ashith Shetty",
    role: "Alumni",
    bio: "",
    skills: ["NextJS"],
    image: "https://iiitdwd.ac.in/images/ashith-shetty.jpg",
    social: {},
  },
  {
    id: "karan",
    name: "Karan Naik",
    role: "Alumni",
    bio: "",
    skills: ["NextJS"],
    image: "https://iiitdwd.ac.in/images/karan-naik.jpg",
    social: {},
  },
  {
    id: "ashitosh",
    name: "Ashitosh Sable",
    role: "Alumni",
    bio: "Contributor",
    skills: ["UI"],
    image: "https://iiitdwd.ac.in/images/ashitosh-sable.jpg",
    social: {},
  },
  {
    id: "vineeth",
    name: "Pj Vineeth Kumar",
    role: "Alumni",
    bio: "Designer and Developer",
    skills: ["Figma", "React", "NextJS"],
    image: "https://iiitdwd.ac.in/images/pj-vineeth-kumar.jpg",
    social: {
      github: "https://github.com/PjVineeth",
      linkedin: "https://www.linkedin.com/in/pj-vineeth-kumar-88610927b/",
      email: "pjkvm123@gmail.com",
      twitter: "https://x.com/Pj_Vineeth_",
    },
  },
  {
    id: "harsh",
    name: "Harsh Soni",
    role: "Alumni",
    bio: `I'm a passionate full-stack developer with an interest in cybersecurity and Web3, currently pursuing BTech in Computer Science and Engineering at IIIT Dharwad. I've led teams to develop dynamic web applications`,
    skills: ["Javascript", "MERN", "AWS", "Docker", "Wagmi", "Viem"],
    image: "https://iiitdwd.ac.in/images/harsh-soni.jpeg",
    social: {
      twitter: "https://x.com/harshsoni_harsh",
      github: "https://github.com/harshsoni-harsh",
      linkedin: "http://linkedin.com/in/harsh-soni-/",
    },
  },
  {
    id: "abhigyan",
    name: "Abhigyan Niranjan",
    role: "Alumni",
    bio: "I love solving technical problems and exploring new technologies. I am a fullstack developer with a strong focus and expertise in backend development.",
    skills: [
      "TypeScript",
      "Go",
      "Next.js",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Vue",
      "Nuxt",
    ],
    image: "https://iiitdwd.ac.in/images/abhigyan-niranjan.jpeg",
    social: {
      github: "https://github.com/SlightlyEpic",
      linkedin: "https://www.linkedin.com/in/abhigyan-niranjan",
    },
  },
];