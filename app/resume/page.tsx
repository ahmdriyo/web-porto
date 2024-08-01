"use client";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AboutTabsContent from "./about";
import ExperienceTabsContent from "./experience";
import EducationTabsContent from "./education";
import SkillsTabsContent from "./skills";
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
            <ExperienceTabsContent/>
            <EducationTabsContent/>
            <SkillsTabsContent/>
            <AboutTabsContent/>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
