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
      <span className="text-xl">Web Developer & Mobile Developer</span>
      <p className="max-w-[500px] mb-9 text-white/80">
        I am an Informatics Engineering student passionate about web
        development, with a strong focus on frontend. While I also explore
        mobile and backend development, I enjoy creating intuitive and engaging
        user interfaces and continuously seek to grow through real-world
        projects.{" "}
      </p>
    </motion.section>
  );
};

export default TextDetail;
