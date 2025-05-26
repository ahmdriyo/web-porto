"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtn from "@/components/WorkSliderBtn";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const projects = [
  {
    num: "01",
    category: "Web App",
    description: "Dacapo (Elerning from korea)",
    stack: [
      { name: "Next js" },
      { name: "SCSS" },
      { name: "Typescript" },
      { name: "Firebase" },
      { name: "Tanstack Query" },
      { name: "Tiptap" },
      { name: "Antd" },
      { name: "Tosspayments" },
      { name: "Excalidraw" },
      { name: "Ckeditor" },
    ],
    image: "/assets/project/dacapo.png",
    demo: "https://flydacapo.com/",
  },
  {
    num: "02",
    category: "Web App",
    description: "Sistem Informasi Transportasi Kalsel",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Antd" },
      { name: "Supabase" },
      { name: "Prisma" },
      { name: "Leaflet" },
    ],
    image: "/assets/project/simt.png",
    github: "https://github.com/ahmdriyo/next-js-admin-template",
    demo: "https://sistem-informasi-transportasi.vercel.app/",
  },
  {
    num: "03",
    category: "Web App",
    description: "Mahakreatif Studio",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Mantine" },
      { name: "Supabase" },
      { name: "Prisma" },
      { name: "Tiptap" },
      { name: "Framer Motion" },
      { name: "Midtrans" },
    ],
    image: "/assets/project/Mahakreatif.png",
    github: "https://github.com/ahmdriyo/Fullstack-MahaKreatif",
    demo: "https://www.mahakreatif-studio.com/",
  },
  {
    num: "04",
    category: "Web App",
    description: "Website Trayek Angkutan Umum.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "Tailwind" },
      { name: "Next Js" },
      { name: "Firebase" },
    ],
    image: "/assets/project/angkutan.png",
    github: "https://github.com/ahmdriyo/web-angkutan.git",
    demo: "https://web-angkutan.vercel.app/",
  },
  {
    num: "05",
    category: "Web App",
    description: "Web GIS Kampus di Barito Kuala.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "React Js" },
      { name: "Firebase" },
      { name: "Openstreetmap" },
      { name: "Leaflet" },
    ],
    image: "/assets/project/gis.png",
    github: "https://github.com/ahmdriyo/web_sig_baritokuala.git",
    demo: "https://web-gis-kampusbaritokuala.vercel.app/",
  },
  {
    num: "06",
    category: "Web App",
    description: "Website Trayek Kereta.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Next Js" },
      { name: "Firebase" },
    ],
    image: "/assets/project/kereta.png",
    github: "https://github.com/ahmdriyo/web-angkutan",
    demo: "https://web-kereta.vercel.app/",
  },
  {
    num: "07",
    category: "Web App",
    description: "Website Events Bootcamp.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Next Js" },
      { name: "Node Js" },
    ],
    image: "/assets/project/webEvent.png",
    github: "https://github.com/ahmdriyo/web-kereta.git",
    demo: "https://web-kereta.vercel.app/kereta",
  },
  {
    num: "08",
    category: "Web App",
    description: "Website Admin Events Bootcamp.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "CRUD" },
      { name: "React Bootstrap" },
      { name: "React Js" },
      { name: "Redux" },
      { name: "Axios" },
    ],
    image: "/assets/project/client.png",
    github: "https://github.com/ahmdriyo/administrator-client-web-event.git",
  },
  {
    num: "09",
    category: "Web App Clone",
    description: "Website Replika dari WhatsApp Download. ",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/project/cloneWa.png",
    github: "https://github.com/ahmdriyo/wa-clone.git",
  },
  {
    num: "10",
    category: "Web App",
    description: "Website Pemutar Musik.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/project/musik.png",
    github: "https://github.com/ahmdriyo/pemutarMusik.git",
  },
  {
    num: "11",
    category: "Mobile App",
    description: "Health Fit, Aplikasi Kosultasi kesehatan berbasis chat.",
    stack: [
      { name: "React Native" },
      { name: "Javascript" },
      { name: "Expo" },
      { name: "CSS" },
      { name: "Firebasae" },
      { name: "Res API" },
      { name: "asyncstorage," },
    ],
    image: "/assets/project/healthFit.png",
    github: "https://github.com/ahmdriyo/health.git",
  },
  {
    num: "12",
    category: "Mobile App",
    description:
      "Kalori Fit, Aplikasi penghitung dan pencatat asupan kalori harian.",
    stack: [
      { name: "React Native" },
      { name: "Javascript" },
      { name: "Expo" },
      { name: "CSS" },
      { name: "CRUD" },
      { name: "Data Json" },
      { name: "Axios" },
      { name: "asyncstorage," },
    ],
    image: "/assets/project/kaloriFit.png",
    github: "https://github.com/ahmdriyo/KaloriFit.git",
  },
  {
    num: "13",
    category: "Mobile App",
    description: "Aplikasi Kuis Tes Psikologi.",
    stack: [
      { name: "React Native" },
      { name: "Javascript" },
      { name: "Expo" },
      { name: "CSS" },
      { name: "CRUD" },
      { name: "Data Json" },
    ],
    image: "/assets/project/kuis.png",
    github: "https://github.com/ahmdriyo/app-base.git",
  },
  {
    num: "14",
    category: "Mobile App",
    description: "Aplikasi Chat Saling bertukar pesan.",
    stack: [
      { name: "React Native" },
      { name: "Javascript" },
      { name: "Expo" },
      { name: "CSS" },
      { name: "Firebasae" },
    ],
    image: "/assets/project/chatApp.png",
    github: "https://github.com/ahmdriyo/Firebase-Chat.git",
  },
];
const ProjectPage = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
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
                {project.github && (
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
                )}
                {project.demo && (
                  <Link href={project.demo} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaLocationArrow className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Demo Web</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
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
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
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
    </motion.div>
  );
};

export default ProjectPage;
