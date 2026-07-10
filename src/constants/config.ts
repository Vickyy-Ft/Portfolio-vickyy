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
      content: `I'm a motivated Full-Stack Developer with hands-on experience building AI-powered
      applications, cloud-hosted web solutions, and database-driven systems. Skilled in Python,
      Java, React.js, AWS, and API integration — I'm passionate about creating scalable applications,
      intelligent automation systems, and cloud-native solutions that solve real-world problems.
      Let's build something great together!`,
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
    AI agent development, cloud deployment, and full-stack engineering. From integrating
    LLMs and Google APIs to deploying React apps on AWS and building MVC web systems in Java,
    these projects reflect my ability to work across the full technology stack.`,
    },
  },
};
