"use client";

import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const experience = {
  icon: "/assets/profile.png",
  title: "My experience",
  description:
    "These are some of my independent projects and there are several projects that I made with the team.",
  items: [
    {
      project: "Dacapo",
      position: "Web App",
      duration: "2025",
    },
    {
      project: "Sistem Informasi Transportasi",
      position: "Web App",
      duration: "2025",
    },
    {
      project: "Compeny Profile",
      position: "Web App",
      duration: "2025",
    },
    {
      project: "MahaKreatif Studio",
      position: "Web App",
      duration: "2024",
    },
    {
      project: "Web Event Bootcamp",
      position: "Web App",
      duration: "2024",
    },
    {
      project: "Web Trayek Kereta",
      position: "Web App",
      duration: "2024",
    },
    {
      project: "Web Trayek Angkutan",
      position: "Web App",
      duration: "2024",
    },
    {
      project: "Web GIS Kampus di Barito Kuala",
      position: "Web App",
      duration: "2024",
    },
    {
      project: "Web Portofolio",
      position: "Web App",
      duration: "2024",
    },
    
    {
      project: "Server Event Bootcamp",
      position: "BackEnd",
      duration: "2024",
    },
    {
      project: "Notes app",
      position: "Mobile App",
      duration: "2023",
    },
    {
      project: "Kalori Fit",
      position: "Mobile App",
      duration: "2023",
    },
    {
      project: "Cloning WhatsApp Download",
      position: "Web App",
      duration: "2023",
    },
    {
      project: "Web Music player and list",
      position: "Web App",
      duration: "2022",
    },
     {
      project: "Health Fit",
      position: "Mobile App",
      duration: "2024",
    },
    {
      project: "Psychology quiz app",
      position: "Mobile App",
      duration: "2024",
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
const ExperienceTabsContent = () => {
  return (
    <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left ">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {experience.description}
        </p>
      </div>
      <ScrollArea className="h-[400px]">
        <motion.ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {experience.items.map((item, index) => {
            return (
              <motion.li
                whileHover={{
                  rotate: 3,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                key={index}
                variants={itembar}
                className="bg-[#232329] hover:bg-[#34343d] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className=" text-accent">{item.duration}</span>
                <h3 className=" text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  {/* dot */}
                  <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                  <p className=" text-white/60">{item.project}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </ScrollArea>
    </TabsContent>
  );
};

export default ExperienceTabsContent;
