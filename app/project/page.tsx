"use client";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Mobile App",
    description:"Health Fit, Aplikasi Kosultasi kesehatan berbasis chat.",
    stack: [{ name: "React Native" }, { name: "Javascript" },{ name: "Expo" },  { name: "CSS" }, { name: "Firebasae" },{ name: "Res API" },{ name: "asyncstorage," },],
    image: "/assets/project/healthFit.png",
    github: "https://github.com/ahmdriyo/health.git",
  },
  {
    num: "02",
    category: "Mobile App",
    description:
      "Kalori Fit, Aplikasi penghitung dan pencatat asupan kalori harian.",
    stack: [ { name: "React Native" },{ name: "Javascript" }, { name: "Expo" }, { name: "CSS" }, { name: "CRUD" }, { name: "Data Json" }, { name: "Axios" }, { name: "asyncstorage,"},],
    image: "/assets/project/kaloriFit.png",
    github: "https://github.com/ahmdriyo/KaloriFit.git",
  },
  {
    num: "03",
    category: "Mobile App",
    description:
      "Aplikasi Kuis Tes Psikologi.",
    stack: [{ name: "React Native" },{ name: "Javascript" }, { name: "Expo" }, { name: "CSS" }, { name: "CRUD" }, { name: "Data Json" },],
    image: "/assets/project/kuis.png",
    github: "https://github.com/ahmdriyo/app-base.git",
  },
  {
    num: "04",
    category: "Mobile App",
    description:
      "Aplikasi Chat Saling bertukar pesan",
    stack: [{ name: "React Native" }, { name: "Javascript" },{ name: "Expo" },  { name: "CSS" }, { name: "Firebasae" }],
    image: "/assets/project/chatApp.png",
    github: "https://github.com/ahmdriyo/Firebase-Chat.git",
  },
  {
    num: "05",
    category: "Web App",
    description:
      "Website Trayek Angkutan Umum.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" },  { name: "Tailwind" },{ name: "Next Js" }, { name: "Firebase" }],
    image: "/assets/project/angkutan.png",
    github: "https://github.com/ahmdriyo/landing-pages-web-event.git",
  },
  {
    num: "06",
    category: "Web App",
    description:
      "Website Trayek Kereta.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "TypeScript" },  { name: "Tailwind" },{ name: "Next Js" }, { name: "Firebase" }],
    image: "/assets/project/kereta.png",
    github: "https://github.com/ahmdriyo/web-angkutan",
    demo : "https://web-angkutan.vercel.app/"
  },
  {
    num: "07",
    category: "Web App",
    description:
      "Website Events Bootcamp.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "TypeScript" },  { name: "Tailwind" },{ name: "Next Js" }, { name: "Node Js" }],
    image: "/assets/project/webEvent.png",
    github: "https://github.com/ahmdriyo/web-kereta.git",
    demo: "https://web-kereta.vercel.app/kereta",
  },
  {
    num: "08",
    category: "Web App",
    description:
      "Website Admin Events Bootcamp",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }, { name: "CRUD" },{ name: "React Bootstrap" },{ name: "React Js" }, { name: "Redux" }, { name: "Axios" }],
    image: "/assets/project/client.png",
    github: "https://github.com/ahmdriyo/administrator-client-web-event.git",
  },
  {
    num: "09",
    category: "Web App Clone",
    description:
      "Website Replika dari WhatsApp Download ",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/project/cloneWa.png",
    github: "https://github.com/ahmdriyo/wa-clone.git",
  },
  {
    num: "10",
    category: "Web App",
    description:
      "Website Portofolio sebelumnya",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" },  { name: "Tailwind" },{ name: "Next Js" }],
    image: "/assets/project/porto.png",
    github: "https://github.com/ahmdriyo/Porto_any.git",
  },
  {
    num: "11",
    category: "Web App",
    description:
      "Website Pemutar Musik",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/project/musik.png",
    github: "https://github.com/ahmdriyo/pemutarMusik.git",
  },
];
const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px]">
              <div className=" text-[50px] font-bold leading-none text-white hover:text-accent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <div className="gap-2 grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </div>
              {/* border */}
              <div className="border border-white/20"></div>
              <div className=" flex items-center gap-4">
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Git Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
