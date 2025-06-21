"use client";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const certificate = {
  icon: "/assets/profile.png",
  title: "My Certificate",
  description: "This is my certificate history.",
  items: [
    {
      title: "Full-Stack Web Developer(MERN)",
      image: "/assets/certificate/mren.png",
    },
    {
      title: "Desain Web",
      image: "/assets/certificate/desain.png",
    },
    {
      title: "Backend Web Developer(NestJS)",
      image: "/assets/certificate/nest.png",
    },
    {
      title: "Literasi Digital",
      image: "/assets/certificate/literasi.png",
    },
    {
      title: "Kewirausahan Industri",
      image: "/assets/certificate/wmkindustri.png",
    },
    {
      title: "Jaringan Komputer",
      image: "/assets/certificate/jarkom.png",
    },
    {
      title: "Algoritma dan Pemrograman",
      image: "/assets/certificate/algo2.png",
    },
    {
      title: "Pemogramaaan C",
      image: "/assets/certificate/c.png",
    },
    {
      title: "PPKMB",
      image: "/assets/certificate/wmk.jpg",
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
const CertificateTabsContent = () => {
  return (
    <TabsContent className="w-full" value="certificate">
      <div className="flex flex-col gap-6 text-center xl:text-left mb-6">
        <h3 className="text-4xl font-extrabold text-accent drop-shadow-lg">
          {certificate.title}
        </h3>
        <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base leading-relaxed">
          {certificate.description}
        </p>
      </div>
      <ScrollArea className="h-[500px] pr-2">
        <motion.ul
          className="flex flex-wrap gap-8 justify-center xl:justify-start"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {certificate.items.map((item, index) => (
            <motion.li
              whileHover={{
                rotate: 3,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              key={index}
              variants={itembar}
              className="bg-[#232329] border border-[#2e2e38] hover:bg-[#292933] rounded-2xl shadow-lg flex flex-col items-center p-3 w-full g max-w-sm mx-auto"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={180}
                  className="w-full h-[180px] object-contain rounded-lg shadow-md border border-[#333] bg-white"
                />
              )}
              <p className="text-md font-medium text-white/70 text-center mt-2">
                {item.title}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </ScrollArea>
    </TabsContent>
  );
};

export default CertificateTabsContent;
