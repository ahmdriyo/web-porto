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
      <span className="text-xl">Full Stack Developer & Mobile Developer</span>
      <p className="max-w-[500px] mb-9 text-white/80">
        I am an Informatics Engineering student and a Full Stack Developer with
        experience in frontend and backend development. I enjoy building
        intuitive and engaging user interfaces while also developing robust
        server-side logic. In addition, I actively explore mobile development
        and continuously grow my skills through real-world projects.{" "}
      </p>
    </motion.section>
  );
};

export default TextDetail;
