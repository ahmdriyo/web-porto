"use client";
import { TabsContent } from "@/components/ui/tabs";

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
      fieldValue: "082154940857",
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
const AboutTabsContent = () => {
  return (
    <TabsContent className=" w-full text-center xl:text-left" value="about">
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
  );
};

export default AboutTabsContent;
