"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import perofile from "../public/assets/profile.png";
const Photo = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="pt-[25px] pl-1 xl:pt-[26px] xl:pl-[6px] absolute"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
              }}
              className="pt-[25px] pl-1 xl:pt-[26px] xl:pl-[6px] absolute"
            >
              <Image
                alt="profile"
                src={perofile}
                priority
                quality={100}
                className="w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] object-cover rounded-full border-4 border-[#23232b] shadow-[0_4px_32px_0_rgba(0,255,153,0.10),0_1.5px_8px_0_rgba(99,102,241,0.10)] hover:shadow-[0_8px_32px_0_rgba(0,255,153,0.18),0_1.5px_8px_0_rgba(99,102,241,0.12)] transition-shadow duration-300"
              />
            </motion.div>
            <motion.svg
              className="ml-[3px] w-[211px] h-[257px] xl:w-[313px] xl:h-[354px]"
              fill="transparent"
              viewBox="0 0 513 513"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="251"
                cy="251"
                r="250"
                stroke="#000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 15 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 20 11",
                    "16 25 92 22",
                    "4 250 22 22",
                  ],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
        <motion.svg
          className=" w-[219px] h-[303px] xl:w-[325px] xl:h-[402px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, -360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
