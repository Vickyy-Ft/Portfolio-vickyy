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
      "Achieved a CGPA of 8.2/10 with a strong focus on software engineering and cloud computing.",
      "Developed hands-on skills in full-stack development, database systems, and AI application building.",
      "Completed major projects in AI agent development, cloud-hosted web apps, and Java MVC systems.",
      "Hosted hands-on AWS workshop on building AI-powered FAQ chatbot for CloudWeld – AWS User Group at Karpagam Institute of Technology.",
    ],
  },
  {
    title: "AWS Builders Skill Sprint – AI Agents",
    companyName: "Amazon Web Services",
    icon: kit,
    iconBg: "#FF9900",
    date: "Jul 2026",
    points: [
      "Built a Local LLM-Powered Intelligent Assistant using Python, Ollama, MCP, Mem0, FAISS, and Strands SDK.",
      "Implemented streaming responses and retrieval-augmented knowledge base for context-aware interactions.",
      "Created a memory-retaining AI assistant extensible with external tools and knowledge sources via Model Context Protocol.",
    ],
  },
  {
    title: "AWS Builders Skill Sprint – DevOps Challenge",
    companyName: "Amazon Web Services",
    icon: kit,
    iconBg: "#FF9900",
    date: "2026",
    points: [
      "Completed hands-on DevOps challenge focusing on CI/CD pipelines and cloud automation.",
      "Gained practical experience with AWS DevOps tools and best practices.",
      "Applied learned concepts to automate deployments with GitHub Actions in personal projects.",
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
      "REST APIs, MVC Architecture, Object-Oriented Programming, Serverless Architecture — the backbone of every robust application I build.",
    name: "Core Concepts",
    designation: "Software Engineering",
    company: "Fundamentals",
    image: "https://ui-avatars.com/api/?name=CC&background=915EFF&color=fff",
  },
  {
    testimonial:
      "AWS Lambda, S3, API Gateway, DynamoDB, CloudFront, Cognito, IAM, CloudWatch, Amplify — deploying cloud-native serverless applications is where I thrive.",
    name: "Cloud & DevOps",
    designation: "AWS Cloud",
    company: "Infrastructure",
    image: "https://ui-avatars.com/api/?name=AWS&background=FF9900&color=fff",
  },
  {
    testimonial:
      "Amazon Bedrock, Groq, LLaMA 3.3 70B, Ollama, MCP, Mem0, FAISS, n8n — building intelligent, agentic AI systems with memory and tool integration.",
    name: "AI & Automation",
    designation: "AI Agent Development",
    company: "Intelligence Layer",
    image: "https://ui-avatars.com/api/?name=AI&background=00b4d8&color=fff",
  },
  {
    testimonial:
      "Active AWS User Group Madurai member, attended AWS Community Day Bengaluru 2026, hackathon participant, workshop host — passionate about community and knowledge sharing.",
    name: "Leadership & Community",
    designation: "Community Engagement",
    company: "Tech Community",
    image: "https://ui-avatars.com/api/?name=LC&background=06b6d4&color=fff",
  },
];

const projects: TProject[] = [
  {
    name: "Roast My Project – AI Feedback Platform",
    description:
      "Full-stack app delivering structured AI feedback via Amazon Bedrock Nova Lite with 7 AI personalities and Battle Mode. Cross-region serverless architecture: React/Vite on AWS Amplify, Flask (Mangum) on Lambda, DynamoDB, Mumbai→Virginia Bedrock calls.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws-bedrock",
        color: "green-text-gradient",
      },
      {
        name: "lambda",
        color: "pink-text-gradient",
      },
    ],
    image: baybot,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "MovFlix – Serverless Video Streaming",
    description:
      "Production-style streaming platform using S3, CloudFront, Lambda (Node.js 20.x), API Gateway, DynamoDB, Cognito JWT auth. Least-privilege IAM, CloudWatch monitoring, GitHub Actions CI/CD.",
    tags: [
      {
        name: "aws-lambda",
        color: "blue-text-gradient",
      },
      {
        name: "cloudfront",
        color: "green-text-gradient",
      },
      {
        name: "dynamodb",
        color: "pink-text-gradient",
      },
    ],
    image: cloudapp,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "Nexus – Agentic AI Assistant",
    description:
      "Unified agentic assistant routing natural-language requests to Gmail, Drive, and Calendar through custom n8n orchestration. Groq (LLaMA 3.3 70B) for intent detection, React/Vite frontend with dynamic Tool Cards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "n8n",
        color: "green-text-gradient",
      },
      {
        name: "llama",
        color: "pink-text-gradient",
      },
    ],
    image: baybot,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "AI Email Assistant",
    description:
      "n8n workflow classifying Gmail messages into 5 categories via LLaMA 3.3 70B with confidence scoring. Auto-sends high-confidence replies, drafts others. Calendar integration for meeting slots, Sheets logging, weekly AI summary reports.",
    tags: [
      {
        name: "n8n",
        color: "blue-text-gradient",
      },
      {
        name: "groq",
        color: "green-text-gradient",
      },
      {
        name: "gmail-api",
        color: "pink-text-gradient",
      },
    ],
    image: baybot,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "Local LLM Intelligent Assistant",
    description:
      "Local, memory-retaining AI assistant extensible with MCP tools and knowledge sources. Built with Python, Ollama, Mem0, FAISS, Strands SDK. Features streaming responses and retrieval-augmented knowledge base for AWS Builders Skill Sprint.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ollama",
        color: "green-text-gradient",
      },
      {
        name: "mcp",
        color: "pink-text-gradient",
      },
    ],
    image: baybot,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
  {
    name: "Restaurant Reservation & Ordering",
    description:
      "Full-stack Java reservation and ordering platform with admin dashboard, role-based access, and reporting module using advanced SQL queries. Iteratively redesigned database schema and debugged authentication flows.",
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
  {
    name: "MealExplorer – Cloud Deployment",
    description:
      "Glassmorphism-styled recipe app with React Router and distraction-free Chef Mode using React Portals. Integrates TheMealDB API. Manually deployed production build to AWS S3 static hosting for hands-on cloud experience.",
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
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: cloudapp,
    sourceCodeLink: "https://github.com/Vickyy-Ft",
  },
];

export { services, technologies, experiences, testimonials, projects };
