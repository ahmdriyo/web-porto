import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full pb-4">
      <div className=" container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h2 mb-2">
              {`Hello I'm`}
              <br /> <span className=" text-accent">Ahmad Riyo Kusuma</span>
            </h1>
            <span className="text-xl">Web Developer & Mobile Developer</span>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a student in the field of Informatics Engineering who has a
              great passion in web and mobile development. With a high desire to
              continue learning and developing, I always try to keep up with the
              latest technological developments and apply my knowledge in real
              projects.{" "}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2 border-2"
              >
                <Link target="_blank" href="https://drive.google.com/file/d/105m6WXlrLZ56Xr5IBokEp0CjJn-moE5t/view?usp=sharing">Download CV</Link>
                <FiDownload className=" text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
