"use client";
import { motion } from "framer-motion";
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const TextMotion = () => (
  <motion.h1
    className="h2 mb-2"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 2.4,
          staggerChildren: 0.08, 
          duration: 0.5,
          ease: "easeIn",
        },
      },
    }}
  >
    {"Hello I'm".split("").map((char, index) => (
      <motion.span key={index} variants={letter}>
        {char}
      </motion.span>
    ))}
    <br />
    {("Ahmad Riyo Kusuma").split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letter}
        className="text-accent"
      >
        {char}
      </motion.span>
    ))}
  </motion.h1>
);

export default TextMotion;
