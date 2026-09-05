type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Vignesh K — Full-Stack Developer & AI Builder",
    fullName: "Vignesh K",
    email: "mrvicks67@gmail.com",
  },
  hero: {
    name: "Vignesh K",
    p: [
      "Full-Stack Developer",
      "AI Agent Builder",
      "AWS Cloud Enthusiast"
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Full-Stack Developer and AI Agent Builder with hands-on experience designing serverless AWS 
      architectures, agentic AI systems, and workflow automation pipelines. Skilled in Python, Java, React.js, 
      AWS (Lambda, S3, DynamoDB, Bedrock, API Gateway, CloudFront, Cognito), LLM integration (Amazon Bedrock, 
      Groq/LLaMA 3.3 70B, Ollama), and n8n-based orchestration. Passionate about building intelligent, scalable, 
      production-style applications. Active in the tech community — hosted AWS workshops, attended AWS Community 
      Day Bengaluru 2026, participated in hackathons. Let's build something great together!`,
    },
    experience: {
      p: "My Academic Journey",
      h2: "Education & Certifications.",
    },
    feedbacks: {
      p: "What I bring to the table",
      h2: "Core Competencies.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Here are some of the projects I've built — each one demonstrates my skills across
    AI agent development, serverless cloud deployment, and full-stack engineering. From building 
    cross-region serverless architectures with AWS Bedrock and Lambda, to creating agentic AI systems 
    with n8n orchestration and LLaMA 3.3 70B, to deploying production-ready streaming platforms and 
    Java MVC systems — these projects reflect my ability to work across the full technology stack 
    and deliver intelligent, scalable solutions.`,
    },
  },
};
