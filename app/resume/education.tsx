"use client";
import { motion } from "framer-motion";
import {  TabsContent } from "@/components/ui/tabs";
;
import { ScrollArea } from "@/components/ui/scroll-area";

const education = {
  icon: "/assets/profile.png",
  title: "My Education",
  description:
    "This is my education history.",
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
const EducationTabsContent = () => {
  return (
    <TabsContent className=" w-full" value="education">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-extrabold text-accent drop-shadow-lg">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {education.description}
        </p>
      </div>
      <ScrollArea className="h-[550px]">
        <motion.ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {education.items.map((item, index) => {
            return (
              <motion.li
                whileHover={{ rotate: 3, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                key={index}
                variants={itembar}
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
              </motion.li>
            );
          })}
        </motion.ul>
      </ScrollArea>
    </TabsContent>
  );
};

export default EducationTabsContent;
