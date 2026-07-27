"use client";

import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const experience = {
  icon: "/assets/profile.png",
  title: "My Experience",
  description:
    "This is my real experience in the world of work, both when collaborating in a team and individually.",
  items: [
    {
      type: "Freelance",
      position: "Full-Stack Web Developer",
      project:
        "AviationHub - Website providing Aviation information news and aviation ebook sales",
      description: `
<div style="padding-left: 10px;">
  <div>
    <h2 style="font-weight: 600; color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;">
      AviationHub
    </h2>
    <p>
      <strong>Description:</strong> Developing a digital platform for aviation e-book sales, blog article management, newsletter services, and admin dashboard management.
    </p>
    <p><strong>Responsibilities and Achievements:</strong></p>
    <ul style="list-style: disc; padding-left: 20px;">
      <li>Managed end-to-end application development, from requirements planning, project setup, task allocation, implementation, testing, and production deployment.</li>
      <li>Handled the majority of frontend development using Next.js, TypeScript, Tailwind CSS, and Shadcn UI, and contributed to backend and database integration.</li>
      <li>Developed features for the e-book catalog, blog, newsletter, authentication, transactions, and user and admin dashboards.</li>
      <li>Collaborated with backend developers on API development, database management, and asset storage.</li>
      <li>Handled production configuration, application deployment, domain installation, and bug resolution.</li>
    </ul>
    <p>
      <strong>Technology:</strong> Next.js, TypeScript, Tailwind CSS, Shadcn UI, Supabase, Prisma ORM, Cloudflare R2, REST API, Midtrans
    </p>
  </div>
</div>
`.trim(),
      location: "Cilandak, Jakarta, Indonesia",
      duration: "2026 Apr – 2026 Jun",
      compeny: "PT Digicorp Teknologi Indonesia",
    },
    {
      type: "Internship",
      position: "Full-Stack Web Developer",
      project: "National Civil Servant Assessment System",
      description: `
<div style="padding-left: 10px;">
  <div>
    <h2 style="font-weight: 600; color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;">
      National Civil Servant Performance Assessment System
    </h2>
    <p>
      <strong>Description:</strong> Developing a national-level ASN performance assessment web application with a multi-role architecture and access-based verification workflow, including integration of hundreds of internal and external API endpoints for authentication, data synchronization, and notification.
    </p>
    <p><strong>Responsibilities and Achievements:</strong></p>
    <ul style="list-style: disc; padding-left: 20px;">
      <li>Selected as Best of the Best Fullstack Developer from 42 Impact Internship Program participants from various universities in Indonesia.</li>
      <li>Set up project structure and application development standards.</li>
      <li>Develop dashboards and assessment pages for 9 out of 11 user roles.</li>
      <li>Implement assessment, verification, and approval workflows in accordance with business rules.</li>
      <li>Integrate APIs for authentication, data synchronization, and real-time notifications.</li>
      <li>Refactor code and standardize components to maintain maintainability and scalability.</li>
    </ul>
    <p>
      <strong>Technology:</strong> Astro, React.js, TypeScript, Tailwind CSS, Tanstack Query, Golang, REST API
    </p>
  </div>
</div>
`.trim(),
      location: "Jakarta Timur, Indonesia",
      duration: "2025 Aug - 2025 Dec",
      compeny: "PT Indi Teknokreasi Internasional",
    },
    {
      type: "Freelance",
      position: "Front-End Developer",
      project: "Dacapo",
      description: `
        <div style="padding-left: 10px;">
          <h4 style="font-weight: 600;  color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;">
            Dacapo
          </h4>
          <p><strong>Description: Dacapo is an e-learning website that provides training for South Korean pilots.</strong> </p>
          <p><strong>Achievement:</strong></p>
          <ul style="list-style: disc; padding-left: 20px;">
            <li>Developed responsive user interfaces using <strong>Next.js App Router</strong> and <strong>SCSS</strong> for optimal performance.</li>
            <li>Collaborated with backend and design teams to implement user-friendly flows for onboarding and account access.</li>
            <li>Implemented <strong>state management</strong> and <strong>secure form handling</strong> to improve overall user experience.</li>
            <li>Integrated four login methods: <strong>Apple</strong>, <strong>Naver</strong>, <strong>Google</strong>, and <strong>Kakao</strong>, providing flexible and localized authentication options for Korean users.</li>
            <li>Connected and configured <strong>TossPayments</strong>, a popular Korean payment gateway, to support seamless online transactions.</li>
          </ul>
          <p><strong>Technologies:</strong> Next.js, Tanstack Query, TypeScript, Antd, Sass</p>
        </div>
      `.trim(),
      location: "South Korea",
      duration: "2025 Jan - 2025 Juni",
      compeny: "PT. Healstation Indonesia",
    },
    {
      type: "Internship",
      position: "Full-Stack Web Developer",
      project:
        "ACP Website Application,KPI Website Application, Attendance System on Islamic Boarding School ",
      description: `
        <div style="padding-left: 10px;">
          <div >
            <h2 style="font-weight: 600; color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;">ACP Website Application Development</h2>
            <p><strong>Description:</strong> Developing features for companies engaged in road construction, especially asphalt material management.</p>
            <p><strong>Achievement:</strong></p>
            <ul style="list-style: disc; padding-left: 20px;">
              <li>Create a calculator feature to calculate asphalt material requirements efficiently.</li>
              <li>Convert web applications to mobile applications using Capacitor to improve user accessibility.</li>
            </ul>
            <p><strong>Technologies:</strong> React.js (TypeScript), Tailwind CSS, Capacitor</p>
          </div>
          <div style="margin-top: 12px">
            <h4 style="font-weight: 600;  color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;">Development of Assessment Features on the KPI Website</h4>
            <p><strong>Description:</strong> Adding student assessment features to the attendance and assessment management system used by vocational schools in Banjarbaru.</p>
            <p><strong>Achievement:</strong></p>
            <ul style="list-style: disc; padding-left: 20px;">
              <li>Building features to manage and display student grades dynamically.</li>
              <li>Integrating backend to store assessment data securely using Golang and MySQL.</li>
            </ul>
            <p><strong>Technologies:</strong> React.js (TypeScript), Golang, MySQL</p>
          </div>
          <div style="margin-top: 12px">
            <h4 style="font-weight: 600;  color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;">Improvement of Attendance System on Islamic Boarding School Website</h4>
            <p><strong>Description:</strong> Making improvements to the attendance system used by one of the Islamic boarding schools in Banjarbaru.</p>
            <p><strong>Achievement:</strong></p>
            <ul style="list-style: disc; padding-left: 20px;">
              <li>Improve the appearance of attendance results to make them more informative and easier for users to understand.</li>
              <li>Addressed the issue of student photo profiles not appearing by fixing the backend and frontend logic.</li>
            </ul>
            <p><strong>Technologies:</strong> React.js (TypeScript), Golang, MySQL</p>
          </div>
        </div>
      `.trim(),
      location: "Banjarbaru, Indonesia",
      duration: "2024 Oct - 2024 Nov",
      compeny: "Cv. Tarkiz Paz Banua",
    },
    {
      type: "Freelance ",
      position: "Frontend Developer",
      project: "Admin Dashboard Rocket Deli",
      description: `
        <div style="padding-left: 10px;">
          <h4 style="font-weight: 600;  color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;"">
            Admin Dashboard Rocket Deli
          </h4>
          <p><strong>Description: Rocket Deli Admin Dashboard is a web-based administration system for managing South Korean restaurant operations.</strong> </p>
          <ul style="list-style: disc; padding-left: 20px;">
            <li>Developed an admin dashboard for menu management, orders, transactions, and operational data.</li>
            <li>Building an organized data structure and display to support daily restaurant operations.</li>
            <li>Implementing form validation and data flow to ensure more accurate admin input.</li>
            <li>Integrating APIs for real-time data management.</li>
          </ul>
          <p><strong>Technologies:</strong> Next.js, Tanstack Query, TypeScript, Tailwind CSS, Shadcn</p>
        </div>
      `.trim(),
      location: "South Korea",
      duration: "2025 Oct - 2025 Des",
      compeny: "-",
    },
    {
      type: "Freelance ",
      position: "Full-Stack Web Developer",
      project: "Transportation Management Application",
      description: `
        <div style="padding-left: 10px;">
          <h4 style="font-weight: 600;  color: #0ed145; font-size: 1.1rem; margin-bottom: 4px;"">
            Transportation Management Application
          </h4>
          <ul style="list-style: disc; padding-left: 20px;">
            <li>Create and develop websites for private clients, including friends and associates.</li>
            <li>Implementing technologies such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>Tailwind</strong>, and <strong>Firebase</strong> to build responsive and dynamic        websites.</li>
            <li>Manage the entire project development cycle from design, coding, testing, to deployment.</li>
          </ul>
          <p><strong>Technologies:</strong> Next.js, Firebase, TypeScript, Tailwind CSS</p>
        </div>
      `.trim(),
      location: "Banjarmasin, Indonesia",
      duration: "2024 Aug - 2024 Sep",
      compeny: "-",
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
      <div className="flex flex-col gap-6 text-center xl:text-left mb-6">
        <h3 className="text-4xl font-extrabold text-accent drop-shadow-lg">
          {experience.title}
        </h3>
        <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base leading-relaxed">
          {experience.description}
        </p>
      </div>
      <ScrollArea className="h-[500px] pr-2">
        <motion.ul
          className="flex flex-col gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {experience.items.map((item, index) => (
            <motion.li
              transition={{ duration: 0.3 }}
              key={index}
              variants={itembar}
              className="bg-[#232329] border border-[#2e2e38] hover:bg-[#292933] py-8 px-8 rounded-2xl shadow-lg flex flex-col gap-1 items-start w-full transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between w-full mb-2 gap-1">
                <span className="text-accent font-semibold text-sm tracking-wide uppercase">
                  {item.type}
                </span>
                <span className="text-xs text-white/50">{item.duration}</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between w-full items-center gap-2">
                <h4 className="text-lg font-bold text-white/90">
                  {item.compeny}
                </h4>
                <span className="text-sm text-white/60">{item.location}</span>
              </div>
              <div className="flex flex-row items-center gap-2 mt-1">
                <span className="text-white/60 font-medium">Position : </span>
                <span className="text-base font-semibold text-white/80">
                  {item.position}
                </span>
              </div>
              <div className="flex flex-row items-start gap-2 mt-1">
                <span className="text-white/60 font-medium min-w-[90px]">
                  Project :
                </span>
                <span className="text-base text-white/80">{item.project}</span>
              </div>
              <span className="text-white/60 font-medium">Detail :</span>
              <div className="flex flex-row items-start gap-2 w-full">
                <span
                  className="text-base text-white/80 w-full"
                  style={{ lineHeight: "1.7" }}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </ScrollArea>
    </TabsContent>
  );
};

export default ExperienceTabsContent;
