"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "#home", id: "home" },
  { name: "Skills", path: "#skills", id: "skills" },
  { name: "Resume", path: "#resume", id: "resume" },
  { name: "Projects", path: "#projects", id: "projects" },
  { name: "Contact", path: "#contact", id: "contact" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      const sections = navLinks.map((l) => l.id);
      let current = "home";
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          current = id;
        }
      }
      setActiveTab(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    const id = path.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 72;
      const top = el.offsetTop - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", path);
      setActiveTab(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/70 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1280px] px-6 lg:px-8 flex items-center justify-between h-[64px] md:h-[68px]">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2 shrink-0"
        >
          <span className="text-[18px] md:text-[20px] font-bold tracking-tight text-white">
            Ahmad<span className="text-accent">.</span>Riyo
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`relative block px-4 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-[1.5px] bg-accent rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right - CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-white text-primary text-[13px] font-semibold hover:bg-white/90 transition-colors"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <span className="sr-only">Menu</span>
            <div className="w-[18px] h-[14px] flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 6 : 0,
                }}
                className="block h-[1.5px] w-full bg-white rounded-full origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMobileOpen ? 0 : 1,
                  scaleX: isMobileOpen ? 0 : 1,
                }}
                className="block h-[1.5px] w-full bg-white rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -6 : 0,
                }}
                className="block h-[1.5px] w-full bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/[0.06] bg-primary/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeTab === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-white text-primary"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`text-xs tracking-widest ${
                        isActive ? "text-primary/60" : "text-white/30"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </motion.a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-3 inline-flex items-center justify-center h-11 rounded-xl bg-accent text-primary font-semibold hover:bg-accent-hover transition-colors"
              >
                Hire Me — Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
