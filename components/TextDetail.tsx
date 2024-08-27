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
        I am a student in the field of Informatics Engineering who has a great
        passion in web and mobile development. With a high desire to continue
        learning and developing, I always try to keep up with the latest
        technological developments and apply my knowledge in real projects.{" "}
      </p>
    </motion.section>
  );
};

export default TextDetail;
