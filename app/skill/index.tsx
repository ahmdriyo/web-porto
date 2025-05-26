"use client";

import { IoIosDesktop } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import React from "react";

const services = [
  {
    num: "01",
    title: "Web Developer",
    description:
      "I have expertise in various modern technologies, including HTML5, CSS3, SCSS, JavaScript, Typescript, React Js, Next Js, Node.js, Express.js, Tailwind CSS, API Integration.",
    icon: <IoPhonePortraitOutline className="text-primary text-3xl" />,
    
  },
  {
    num: "02",
    title: "Mobile Developer",
    description:
      "I have expertise in a variety of modern technologies, including React Native, Expo, API Integration, Firebase, Redux, and Axios.",
    icon : <IoIosDesktop className="text-primary text-3xl"/>,
  },
  {
    num: "03",
    title: "UI&UX",
    description: "I have expertise in Figma, Canva",
    icon: <MdDesignServices className="text-primary text-3xl"/>,
  },
];

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const SkillPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.3,   
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);
  return (
    <section ref={ref} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-20">
      <div className="container mx-auto mt-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              className="flex-1 flex flex-col justify-center gap-6 group bg-[#202026] p-5 rounded-xl"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold hover:text-accent">
                  {service.num}
                </div>
                <div className="w-[50px] h-[50px] rounded-full group-hover:bg-accent transition-all duration-500 flex bg-white justify-center items-center hover:-rotate-12">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillPage;
