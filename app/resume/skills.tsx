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
  SiSass,
  SiSupabase,
  SiPostgresql,
  SiLaravel,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = {
  title: "My Skills",
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
      name: "SCSS",
      icon: <SiSass />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase />,
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
      name: "Laravel",
      icon: <SiLaravel />,
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
      name: "Postgresql",
      icon: <SiPostgresql  />,
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
      name: "React Native",
      icon: <TbBrandReactNative />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
  ],
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itembar = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const SkillsTabsContent = () => {
  return (
    <TabsContent className=" w-full pb-4" value="skills">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-extrabold text-accent drop-shadow-lg">{skills.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"></p>
        </div>
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {skills.skillList.map((skill, index) => {
            return (
              <motion.li key={index} variants={itembar}>
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
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </TabsContent>
  );
};

export default SkillsTabsContent;
