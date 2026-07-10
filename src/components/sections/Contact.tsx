import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "mrvicks67@gmail.com",
    href: "mailto:mrvicks67@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 90874 24449",
    href: "tel:+919087424449",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/ft-vignesh-k",
    href: "https://www.linkedin.com/in/ft-vignesh-k",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Vickyy-Ft",
    href: "https://github.com/Vickyy-Ft",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: null,
  },
];

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm(INITIAL_STATE);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className={`flex flex-col gap-10 overflow-hidden xl:mt-12`}>
      {/* Contact Info Cards */}
      <motion.div
        variants={slideIn("up", "tween", 0.1, 0.8)}
        className="flex flex-wrap justify-center gap-4"
      >
        {contactDetails.map((detail) => (
          <div
            key={detail.label}
            className="bg-black-100 flex items-center gap-3 rounded-2xl px-5 py-4 min-w-[200px]"
          >
            <span className="text-[24px]">{detail.icon}</span>
            <div>
              <p className="text-secondary text-[12px] uppercase tracking-wider">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-white text-[14px] font-medium hover:text-[#915EFF] transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-white text-[14px] font-medium">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Form + Earth */}
      <div className="flex flex-col-reverse gap-10 xl:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <Header useMotion={false} {...config.contact} />

          <form
            // @ts-expect-error
            ref={formRef}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            {Object.keys(config.contact.form).map((input) => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === "message" ? "textarea" : "input";

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 font-medium text-white">{span}</span>
                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                    {...(input === "message" && { rows: 7 })}
                  />
                </label>
              );
            })}
            <button
              type="submit"
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none hover:bg-[#915EFF] transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
