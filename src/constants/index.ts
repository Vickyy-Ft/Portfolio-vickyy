import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  tailwind,
  nodejs,
  threejs,
  git,
  css,
  html,
  python,
  java,
  aws,
  mysql,
  sqlite,
  c,
  kit,
  baybot,
  cloudapp,
  restaurant,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Agent Builder",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS Cloud Enthusiast",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences: TExperience[] = [
  {
    title: "B.Tech – Information Technology",
    companyName: "Karpagam Institute of Technology",
    icon: kit,
    iconBg: "#1d3557",
    date: "2021 – 2025",
    points: [
      "Pursuing Bachelor of Technology in Information Technology from Karpagam Institute of Technology, Coimbatore, India.",
      "Achieved a CGPA of 7.7/10 with a strong focus on software engineering and cloud computing.",
      "Developed hands-on skills in full-stack development, database systems, and AI application building.",
      "Completed major projects in AI agent development, cloud-hosted web apps, and Java MVC systems.",
    ],
  },
  {
    title: "Cisco Networking Essentials",
    companyName: "Cisco Networking Academy",
    icon: kit,
    iconBg: "#1c4d8e",
    date: "Certified",
    points: [
      "Completed the Cisco Networking Essentials course covering fundamental networking concepts.",
      "Gained understanding of TCP/IP protocols, network topologies, and cybersecurity basics.",
      "Learned to configure and troubleshoot network devices in simulated environments.",
    ],
  },
  {
    title: "Introduction to SQL",
    companyName: "Simplilearn",
    icon: kit,
    iconBg: "#2d6a4f",
    date: "Certified",
    points: [
      "Completed SQL fundamentals certification covering relational database design and querying.",
      "Learned DDL, DML, and advanced SQL queries including joins, subqueries, and aggregations.",
      "Applied SQL knowledge in real-world projects including the Restaurant Reservation System.",
    ],
  },
  {
    title: "Human Computer Interaction",
    companyName: "NPTEL",
    icon: kit,
    iconBg: "#6b3fa0",
    date: "Certified",
    points: [
      "Completed NPTEL certification on Human Computer Interaction principles and practices.",
      "Studied UX design fundamentals, user research methods, and usability evaluation techniques.",
      "Applied HCI principles to build more user-friendly and accessible web interfaces.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "REST APIs, MVC Architecture, Object-Oriented Programming — the backbone of every robust application I build.",
    name: "Core Concepts",
    designation: "Software Engineering",
    company: "Fundamentals",
    image: "https://ui-avatars.com/api/?name=CC&background=915EFF&color=fff",
  },
  {
    testimonial:
      "AWS S3, EC2, IAM — deploying cloud-native applications and managing scalable infrastructure is where I thrive.",
    name: "Cloud Deployment",
    designation: "AWS Cloud",
    company: "Infrastructure",
    image: "https://ui-avatars.com/api/?name=AWS&background=FF9900&color=fff",
  },
  {
    testimonial:
      "Integrating LLMs, REST APIs, and memory management systems to build truly intelligent AI-powered solutions.",
    name: "AI & Automation",
    designation: "AI Agent Development",
    company: "Intelligence Layer",
    image: "https://ui-avatars.com/api/?name=AI&background=00b4d8&color=fff",
  },
];

const projects: TProject[] = [
  {
    name: "BayBot – Personal AI Assistant",
    description:
      "A local-first AI assistant integrating Google Drive, Gmail, and Google Calendar APIs. Features memory management, personalized user preference learning, and LLM-powered natural language interaction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: baybot,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "Cloud Meal Search Platform",
    description:
      "A cloud-hosted meal search platform built with React.js and deployed on AWS S3. Integrates the MealDB API to dynamically retrieve and display 1000+ recipes with an optimized, responsive frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws-s3",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: cloudapp,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "Restaurant Reservation & Ordering",
    description:
      "A full-featured restaurant reservation and food ordering platform using Java MVC architecture with JSP, Servlets, and SQL. Features secure order processing, menu management, and reservation handling.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "jsp-servlets",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
];

export { services, technologies, experiences, testimonials, projects };
