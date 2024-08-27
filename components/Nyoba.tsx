import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

const Nyoba: React.FC = () => {
  return (
    <div className="py-1">
      <SlideTabs />
    </div>
  );
};

export default Nyoba;

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("");
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setIsVisible(false); 
    } else {
      setIsVisible(true); 
    }
    prevScrollY.current = currentScrollY;

    const sections = ["home", "skills", "resume", "projects", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && currentScrollY >= element.offsetTop - 80) {
        setActiveTab(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.ul
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto flex w-fit rounded-full border-[1px] border-[#ffffff] bg-[#1c1c22d0] p-1"
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
    >
      <Tab setPosition={setPosition} path="#home" activeTab={activeTab}>
        Home
      </Tab>
      <Tab setPosition={setPosition} path="#skills" activeTab={activeTab}>
        Skills
      </Tab>
      <Tab setPosition={setPosition} path="#resume" activeTab={activeTab}>
        Resume
      </Tab>
      <Tab setPosition={setPosition} path="#projects" activeTab={activeTab}>
        Projects
      </Tab>
      <Tab setPosition={setPosition} path="#contact" activeTab={activeTab}>
        Contact
      </Tab>
      <Cursor position={position} />
    </motion.ul>
  );
};


interface TabProps {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  path: string;
  activeTab: string;
}
const Tab: React.FC<TabProps> = ({ children, setPosition, path, activeTab }) => {
  const ref = useRef<HTMLLIElement>(null);
  const isActive = `#${activeTab}` === path;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Mencegah scroll default
    const targetId = path.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={path} onClick={handleClick}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs md:px-5 md:py-3 md:text-base ${
          isActive ? "bg-[#ffffff] text-primary rounded-full" : "text-white"
        } hover:bg-white rounded-full hover:text-primary transition-colors duration-200`}
      >
        {children}
      </li>
    </a>
  );
};


interface CursorProps {
  position: Position;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};
