"use client";

import { IoIosDesktop, IoIosRocket } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Mobile Developer",
    description:
      "I have expertise in a variety of modern technologies, including React Native, Expo, API Integration, Firebase, Redux, and Axios.",
    icon : <IoIosDesktop className="text-primary text-3xl"/>,
  },
  {
    num: "02",
    title: "Web Developer",
    description:
      "I have expertise in various modern technologies, including HTML5, CSS3, and JavaScript (ES6+), React Js, Next Js, Node.js, Express.js, Tailwind CSS, API Integration, MySQL.",
    icon: <IoPhonePortraitOutline className="text-primary text-3xl" />,
  },
  {
    num: "03",
    title: "UI&UX",
    description: "I have expertise in Figma, Canva",
    icon: <MdDesignServices className="text-primary text-3xl"/>,
  },
];

import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold hover:text-accent">
                  {service.num}
                </div>
                <div className="w-[50px] h-[50px] rounded-full group-hover:bg-accent transition-all duration-500 flex bg-white justify-center items-center hover:-rotate-12">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-whitegroup-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
