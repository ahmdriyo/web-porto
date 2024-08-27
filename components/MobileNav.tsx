"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "#home" },
  { name: "Skills", path: "#skills" },
  { name: "Resume", path: "#resume" },
  { name: "Project", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault(); // Mencegah perilaku default browser
    const targetId = path.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);

      // Ganti hash tanpa memicu scroll lagi
      history.pushState(null, "", path);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button 
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl"></div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`${
                link.path === window.location.hash &&
                "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
