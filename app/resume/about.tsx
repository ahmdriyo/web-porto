"use client";
import { TabsContent } from "@/components/ui/tabs";

const about = {
  title: "About me",
  description:
    "My journey began in 2022 as a Front-End Web Developer. In late 2023, I expanded my learning into mobile development. Over the past two years, I have returned to deeply focus on web development and advanced into full-stack development. I’m passionate about technology and innovation, and coding has become more than just a skill it's a craft I continuously sharpen. This drive keeps me learning, building, and striving to become a reliable and impactful software engineer.",
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
      fieldValue: "+ 3 Years Journey as a Software Developer",
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
    <TabsContent className=" w-full text-center xl:text-left "  value="about">
      <div className="flex flex-col gap-[30px] min-h-[650px]">
        <h3 className="text-4xl font-extrabold text-accent drop-shadow-lg">{about.title}</h3>
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
