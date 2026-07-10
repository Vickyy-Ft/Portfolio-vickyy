import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import vigneshPhoto from "../../assets/vignesh.jpg";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">

      {/* ── Main layout: left content | right 3D canvas ── */}
      <div className="absolute inset-0 flex flex-row">

        {/* LEFT — takes up ~50% width on large screens to prevent overlap */}
        <div
          className={`relative z-10 flex flex-col justify-center w-full lg:w-[50%] sm:w-[55%] h-full ${styles.paddingX} pt-[100px] pb-10 gap-0`}
        >
          {/* Purple accent line + text row */}
          <div className="flex flex-row items-start gap-4">
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center mt-2">
              <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
              <div className="violet-gradient w-1 flex-1 min-h-[80px]" />
            </div>

            {/* Name & tagline */}
            <div>
              <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                Hi, I'm{" "}
                <span className="text-[#915EFF] whitespace-nowrap">{config.hero.name}</span>
              </h1>
              <p className={`${styles.heroSubText} text-white-100 mt-4 max-w-xl leading-relaxed`}>
                {config.hero.p.join(" • ")}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex gap-4 mt-8 ml-9"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#915EFF] text-white font-semibold text-[15px] shadow-[0_0_15px_rgba(145,94,255,0.5)] hover:bg-[#7b46e6] hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
            <a
              href="#work"
              className="px-6 py-2.5 rounded-full bg-transparent border-2 border-[#915EFF] text-[#915EFF] font-semibold text-[15px] hover:bg-[#915EFF] hover:text-white hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          {/* Profile photo — below the text and buttons, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            className="mt-8 ml-9"
          >
            <div className="relative w-[180px] sm:w-[220px] md:w-[240px]">
              {/* Glow behind image */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#915EFF] via-[#6b3fa0] to-[#00b4d8] blur-lg opacity-70" />
              <img
                src={vigneshPhoto}
                alt="Vignesh K"
                className="relative rounded-2xl w-full object-cover object-top shadow-2xl border-2 border-[#915EFF]/60"
                style={{ height: "280px" }}
              />
              {/* Name badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1d1836] border border-[#915EFF]/50 rounded-full px-4 py-1 whitespace-nowrap">
                <p className="text-[#915EFF] text-[13px] font-semibold">Vignesh K</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — 3D computer canvas takes remaining ~55% */}
        <div className="hidden sm:block sm:w-[55%] h-full">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 flex w-full items-center justify-center z-10">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
