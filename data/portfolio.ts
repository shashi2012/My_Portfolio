import {
  Atom,
  Binary,
  Bot,
  Braces,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Rocket,
  Server,
  TerminalSquare,
  Triangle
} from "lucide-react";


export const profile = {
  name: "Shashi Raj",
  role: "Full Stack MERN Developer",
  education:
    "Pre-Final Year Student at Indian Institute of Information Technology Ranchi",
  tagline:
    "Building modern web applications using MERN, Next.js, scalable APIs, and AI-powered integrations.",
  status: "Available for internships and development opportunities",
  location: "IIIT Ranchi",
  email: "shashiraj5342@gmail.com",
  github: "https://github.com/shashi2012",
  linkedin: "https://www.linkedin.com/in/shashi-raj001"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const interests = [
  "Full Stack Development",
  "MERN Stack",
  "Next.js",
  "Problem Solving",
  "Data Structures & Algorithms",
  "AI Integrations",
  "REST APIs",
  "Scalable Web Applications"
];

export const skills = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB","PostgreSQL","MySQL"]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript","C++/C","Python"]
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    items: ["Git", "GitHub", "VS Code", "Postman","Clerk","Vercel","Render"]
  },
  {
    title: "AI & APIs",
    icon: Bot,
    items: ["OpenAI API", "REST APIs"]
  }
];

export const projects = [
  {
    title: "Streamify Chat App",
     image:"/streamify.png",
    description:
      "A real-time chat application built with the MERN stack, featuring secure authentication, one-to-one and group messaging, online presence indicators, media sharing through Cloudinary, and seamless real-time communication powered by Stream APIs.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
      "Stream API"
    ],
    github: "https://github.com/Shashi4432/Streamify_Chat_App.git",
    demo: "https://streamify-chat-app-1q3u.onrender.com",
    accent: "from-blue-500 via-cyan-400 to-indigo-400",
    icon: Rocket
  },
  {
    title: "DentWise",
    image:"/dentwise.png",
    description:
      "An AI-powered dental assistant platform that helps users understand dental concerns through intelligent conversations, voice interactions, appointment workflows, and personalized guidance using modern AI technologies.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Vapi",
      "Clerk",
      "Tailwind CSS"
    ],
    github: "YOUR_REPO_LINK",
    demo: "https://dent-wise-eight.vercel.app/",
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    icon: Bot
  },
  {
    title: "Notes Management System",
     image:"/streamify.png",
    description:
      "A full-stack note management platform with secure authentication, role-based access control, CRUD operations, organized note management, and scalable REST APIs built using modern backend architecture principles.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API"
    ],
    github: "YOUR_REPO_LINK",
    demo: "YOUR_DEPLOYED_LINK",
    accent: "from-indigo-400 via-blue-500 to-cyan-300",
    icon: Server
  }
];

export const githubShowcase = {
  profile: profile.github,
  repositoryCount: "20+",
  contributionSummary:
    "Focused on full stack projects, MERN foundations, REST API design, DSA practice, and modern frontend craft.",
  featuredRepositories: [
    "mern-product-platform",
    "nextjs-ai-workspace",
    "express-api-starter"
  ]
};

export const achievements = [
  { title: "Solved DSA Problems", icon: Binary },
  { title: "Built Full Stack Projects", icon: Braces },
  { title: "Participated in Coding Contests", icon: Globe2 },
  { title: "Learned Modern Web Technologies", icon: GraduationCap }
];

export const techOrbit = [
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Triangle },
  { label: "Node.js", icon: Server },
  { label: "MongoDB", icon: Database },
  { label: "GitHub", icon: Github },
  { label: "TypeScript", icon: Braces }
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Portfolio Source", href: profile.github, icon: Figma }
];
