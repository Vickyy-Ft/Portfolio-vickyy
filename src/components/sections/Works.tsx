import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <div className="w-full sm:w-[300px]">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 shadow-card hover:shadow-[#915EFF]/20 transition-all duration-300">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:scale-110 transition-transform"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white leading-tight">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] leading-relaxed">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color} font-medium`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "React & Web", "AI & Python", "Java & Backend"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    const tagNames = project.tags.map((t) => t.name.toLowerCase());
    
    if (activeFilter === "React & Web") {
      return tagNames.includes("react") || tagNames.includes("reactjs") || tagNames.includes("aws-s3");
    }
    if (activeFilter === "AI & Python") {
      return tagNames.includes("llm") || tagNames.includes("python");
    }
    if (activeFilter === "Java & Backend") {
      return tagNames.includes("java") || tagNames.includes("mysql") || tagNames.includes("jsp-servlets");
    }
    return true;
  });

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-3 mt-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? "bg-[#915EFF] text-white shadow-[0_0_10px_rgba(145,94,255,0.5)] scale-105"
                : "bg-tertiary text-secondary hover:bg-[#915EFF]/20 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 flex flex-wrap gap-7">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard index={index} {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
