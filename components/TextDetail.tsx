"use client";
import { motion } from "framer-motion";
import React from "react";
const TextDetail = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
    >
      <span className="text-xl">Full Stack Developer</span>
      <p className="max-w-[500px] mb-9 text-white/80">
        I am a Full Stack Developer with 2+ years of experience delivering
        end-to-end web applications across both professional and freelance
        environments. With a Bachelor's degree in Informatics Engineering, my
        expertise spans frontend and backend engineering, DevOps workflows, and
        AI integration. I focus on translating business requirements into
        scalable, practical solutions while ensuring smooth deployment and
        production reliability.{" "}
      </p>
    </motion.section>
  );
};

export default TextDetail;
