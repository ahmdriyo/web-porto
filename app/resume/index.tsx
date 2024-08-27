"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTabsContent from "./about";
import ExperienceTabsContent from "./experience";
import EducationTabsContent from "./education";
import SkillsTabsContent from "./skills";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ResumePage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Memastikan animasi hanya berjalan sekali
    threshold: 0.3,    // Memulai animasi saat 10% dari elemen masuk ke tampilan layar
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}  // Mulai dari opacity 0 dan sedikit di kiri
      animate={controls}                // Animasi dikontrol oleh `controls`
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      className="min-h-[81vh] flex items-center justify-center py-12 xl:py-0 t-24 mb-20"
    >
      <div className="container mx-auto mt-24">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex-1"
          >
            <TabsList className="flex flex-col w-full sm:w-[300px] mx-auto  gap-5">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="min-h-[70vh] w-full"
          >
            <ExperienceTabsContent />
            <EducationTabsContent />
            <SkillsTabsContent />
            <AboutTabsContent />
          </motion.div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
