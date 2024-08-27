import SkillPage from "./skill";
import ResumePage from "./resume";
import ProjectPage from "./project";
import ContactPage from "./contact";
import HomePage from "./home";

const Home = () => {
  return (
    <section className="h-full pb-4">
      <section id="home">
        <HomePage />
      </section>
      <section id="skills">
        <SkillPage />
      </section>
      <section id="resume">
        <ResumePage />
      </section>
      <section id="projects">
        <ProjectPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </section>
  );
};
export default Home;
