import SkillPage from "./skill";
import ResumePage from "./resume";
import ProjectPage from "./project";
import ContactPage from "./contact";
import HomePage from "./home";
import Footer from "./footer";

const Home = () => {
  return (
    <section className="h-full">
      <section id="home" className="scroll-mt-[72px]">
        <HomePage />
      </section>
      <section id="skills" className="scroll-mt-[72px]">
        <SkillPage />
      </section>
      <section id="resume" className="scroll-mt-[72px]">
        <ResumePage />
      </section>
      <section id="projects" className="scroll-mt-[72px]">
        <ProjectPage />
      </section>
      <section id="contact" className="scroll-mt-[72px]">
        <ContactPage />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </section>
  );
};
export default Home;
