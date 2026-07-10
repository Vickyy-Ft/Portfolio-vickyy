import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:bg-[#100d25] transition-all duration-300 shadow-card hover:shadow-[#915EFF]/10 hover:-translate-y-2"
  >
    {/* Background glow element */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#915EFF] opacity-5 rounded-bl-[100px] transition-all duration-500 group-hover:opacity-20 group-hover:scale-110" />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-5 gap-3">
        <img
          src={image}
          alt={`competency-${name}`}
          className="h-14 w-14 rounded-full object-cover border-2 border-[#915EFF]/40 shadow-sm"
        />
        <div className="text-right flex-1">
          <p className="text-[17px] font-bold text-white leading-tight">
            {name}
          </p>
          <p className="text-[#915EFF] mt-1 text-[11px] font-semibold tracking-widest uppercase">
            {designation}
          </p>
        </div>
      </div>
      
      <p className="text-[15px] tracking-wide text-white-100 leading-relaxed border-t border-white/10 pt-5">
        {testimonial}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
