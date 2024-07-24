"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "My journey started in 2022 as a Front End Web programmer. In late 2023 I started studying mobile developer. I am very enthusiastic about the world of technology and science. Coding is my passion, and I am always looking for opportunities to improve my knowledge and skills in creating innovative solutions. This passion is what drives me to continue to develop and become a reliable engineer.",
  info: [
    {
      fieldNama: "Name",
      fieldValue: "Ahmad Riyo Kusuma",
    },
    {
      fieldNama: "Phone",
      fieldValue: "+6282154940857",
    },
    {
      fieldNama: "Experience",
      fieldValue: "+ 2 Years",
    },
    {
      fieldNama: "Email",
      fieldValue: "ahmadriyo.tbn@gmial.com",
    },
    {
      fieldNama: "Nationality",
      fieldValue: "Indonesia",
    },
  ],
};

const experience = {
  icon: "/assets/profile.png",
  title: "My experience",
  description:
    "These are some of my independent projects and there are several projects that I made with the team.",
  items: [
    {
      project : "Health Fit",
      position: "Mobile App",
      duration: "2024",
    },
    {
      project : "Psychology quiz app",
      position: "Mobile App",
      duration: "2024",
    },
    {
      project : "Web Portofolio",
      position: "Web App",
      duration: "2024",
    },
    {
      project : "Web Event Bootcamp",
      position: "Web App",
      duration: "2024",
    },
    {
      project : "Web Trayek Kereta",
      position: "Web App",
      duration: "2024",
    },
    {
      project : "Web Trayek Angkutan",
      position: "Web App",
      duration: "2024",
    },
    {
      project : "Server Event Bootcamp",
      position: "BackEnd",
      duration: "2024",
    },
    {
      project : "Notes app",
      position: "Mobile App",
      duration: "2023",
    },
    {
      project : "Kalori Fit",
      position: "Mobile App",
      duration: "2023",
    },
    {
      project : "Cloning WhatsApp Download",
      position: "Web App",
      duration: "2023",
    },
    {
      project : "Web Music player and list",
      position: "Web App",
      duration: "2022",
    },
  ],
};

const education = {
  icon: "/assets/profile.png",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam sunt explicabo inventore.",
  items: [
    {
      institution: "SMAN 1 ALALAK",
      study: "IPA",
      duration: "2019 - 2022",
    },
    {
      institution: "UNISKA MAB",
      study: "TEKNIK INFORMATIKA",
      duration: "2022 - ongoing",
    },
  ],
};

const skills = {
  title: "My skills",
  skillList: [
    {
      name: "Html 5",
      icon: <FaHtml5 />,
    },
    {
      name: "Css 3",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Mysql",
      icon: <SiMysql />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Node js",
      icon: <FaNodeJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className=" min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className=" text-accent">{item.duration}</span>
                        <h3 className=" text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                          <p className=" text-white/60">{item.project }</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent className=" w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className=" text-accent">{item.duration}</span>
                        <h3 className=" text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                          <p className=" text-white/60">{item.study}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent className=" w-full pb-4" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"></p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-all transform hover:scale-105">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              className=" w-full text-center xl:text-left"
              value="about"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldNama}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
