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
    category: "Web App",
    title: "Dacapo (Elerning from korea)",
    description: "Dacapo is an e-learning platform from Korea specifically designed for pilot learning. This application provides exam features, daily quizzes, and an interactive learning system. Dacapo supports four login methods, namely Google, Naver, Apple, and Kakao. In addition, integration with TossPayments allows users to make payments easily and securely.",
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
    category: "Web App",
    title: "Hand Gesture Navigation using MediaPipe & Real-Time AI Detection",
    description: "This website is an interactive project that allows users to navigate pages using hand gestures in real-time, with the help of MediaPipe technology and AI to improve detection accuracy. Built using React, Next.js, and Tailwind CSS, and supported by GitHub Copilot Pro and a free domain from the GitHub Student Pack, this project aims to be a case study in the application of gesture recognition and human-computer interaction (HCI) on the modern web.",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Zustand" },
      { name: "React Icons" },
      { name: "Mediapipe" },
    ],
    image: "/assets/project/hand-gestur.png",
    github: "https://github.com/ahmdriyo/navigation-hand-gesture-recognition",
    demo: "https://www.handgesturenavigationwithmediapipe.live",
  },
  {
    category: "Web App",
    title: "Sistem Pendukung Keputusan Pemilihan Perumahan Terbaik",
    description: "This project is a web-based application designed to assist users in determining the most ideal housing options based on several assessment criteria such as price, distance to the city center, amenities, and transportation access. The system utilizes the Simple Additive Weighting (SAW) method, a weighted summation method widely used in multi-criteria decision-making (MCDM).",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Axios" },
      { name: "Mysql" },
      { name: "Radix UI" },
      { name: "Prisma" },
      { name: "Jspdf Autotable" },
    ],
    image: "/assets/project/spk-saw.png",
    github: "https://github.com/ahmdriyo/spk-saw-perumahan2",
  },
  {
    category: "Web App",
    title: "Sistem Informasi Transportasi Kalsel",
    description: "South Kalimantan Transportation Information System is a website that provides complete information about transportation in the South Kalimantan region. This application is equipped with a geographic map feature (GeoMap) that displays terminal locations, as well as interactive navigation using gesture recognition, allowing users to navigate pages with just hand movements in real-time.",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Antd" },
      { name: "Supabase" },
      { name: "Mediapipe" },
      { name: "Prisma" },
      { name: "Leaflet" },
    ],
    image: "/assets/project/simt.png",
    github: "https://github.com/ahmdriyo/next-js-admin-template",
    demo: "https://sistem-informasi-transportasi.vercel.app/",
  },
  {
    category: "Web App",
    title: "Mahakreatif Studio",
    description: "Mahakreatif Studio is a freelance platform specifically for students, designed while participating in the Independent Campus Entrepreneurship (WMK) program. This website is a creative platform for students to offer digital services or projects, build portfolios, and connect with potential clients professionally and easily.",
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
    category: "Web App",
    title: "Company Profile",
    description: "This company profile website was developed using Copilot Agent from GitHub, where 90% of the code was written by Ai from AI prompts in less than 1 hour. Manual adjustments were made to adjust the design and content. This website is open-source and free to be developed according to your needs.",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Antd" },
      { name: "Framer Motion" },
    ],
    image: "/assets/project/company-profile.png",
    github: "https://github.com/ahmdriyo/company-profile",
    demo: "https://company-profile-dummy.vercel.app/",
  },
  {
    category: "Web App",
    title: "Website Trayek Angkutan Umum.",
    description: "Public Transportation Route Website is a web-based platform that provides route information for various types of public transportation. This website is designed to make it easier to see available transportation routes, especially in areas with many transportation options.",
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
    category: "Web App",
    title: "Web GIS Kampus di Barito Kuala.",
    description: "Web GIS Campus in Barito Kuala is a website based on Geographic Information System (GIS) that displays details of campuses in the Barito Kuala area. This application is equipped with an interactive map that marks the location of each campus accurately using markers.",
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
    category: "Web App",
    title: "Website Trayek Kereta.",
    description: "Train Track Website is an informative website that displays train routes or tracks. Users can see the train tracks visually and clearly, helping in planning a trip or simply recognizing the available train transportation network.",
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
    category: "Web App",
    title: "Website Events Bootcamp.",
    description: "This website is created to display bootcamp event information such as schedules, speakers, and participant registration. Designed with a modern and user-friendly appearance so that users can easily access information.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Next Js" },
      { name: "Node Js" },
    ],
    image: "/assets/project/webEvent.png",
    github: "https://github.com/ahmdriyo/landing-pages-web-event",
  },
  {
    category: "Web App",
    title: "Website Admin Events Bootcamp.",
    description: "is an admin dashboard to manage bootcamp event data, starting from adding/editing events, participant management, to viewing statistical data. Made using React and Redux.",
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
    category: "Web App Clone",
    title: "Website Replika dari WhatsApp Download.",
    description: "This website is a replication of the official WhatsApp download page display. This project was created as a front-end exercise to deepen the understanding of HTML, CSS, and JavaScript structures",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/project/cloneWa.png",
    github: "https://github.com/ahmdriyo/wa-clone.git",
  },
  {
    category: "Web App",
    title: "Website Pemutar Musik.",
    description: "A music player web application that allows users to select songs and control playback (play, pause, stop). Built with HTML, CSS, and JavaScript as an interactive application creation exercise.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/project/musik.png",
    github: "https://github.com/ahmdriyo/pemutarMusik.git",
  },
  {
    category: "Mobile App",
    title: "Health Fit, Aplikasi Kosultasi kesehatan berbasis chat.",
    description: "A mobile application that allows users to consult directly with medical personnel through a chat feature. Designed to provide easy access to digital health services.",
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
    category: "Mobile App",
    title: "Kalori Fit, Aplikasi penghitung dan pencatat asupan kalori harian.",
    description: "Aplikasi untuk mencatat dan memantau asupan kalori harian berdasarkan makanan yang dikonsumsi. Cocok untuk kamu yang sedang diet atau menjaga pola makan sehat.",
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
    category: "Mobile App",
    title: "Aplikasi Kuis Tes Psikologi.",
    description: "A quiz-based application to help users recognize psychological conditions through a series of questions arranged in the form of a simple test.",
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
    category: "Mobile App",
    title: "Aplikasi Chat Saling bertukar pesan.",
    description: "A simple chat application that allows users to send and receive messages to each other in real-time using Firebase as the backend.",
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
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px]">
              <div className=" text-[50px] font-bold leading-none text-white hover:text-accent">
                {(projects.indexOf(project) + 1).toString().padStart(2, "0")}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.title}</p>
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
              <p className="text-[14px]">{project.description}</p>
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
