import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-white py-10 mt-16 shadow-2xl border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-start gap-2">
          <span className="font-extrabold text-xl md:text-2xl tracking-tight text-accent">Web Portofolio</span>
          <span className="text-xs md:text-sm text-white/60">by Ahmad Riyo Kusuma</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#skill" className="hover:text-accent transition-colors">Skills</a>
            <a href="#resume" className="hover:text-accent transition-colors">Resume</a>
            <a href="#project" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <Socials containerStyles="flex gap-3 mt-2" iconStyles="text-xl hover:text-accent transition-colors" />
        </div>
        <div className="flex flex-col lg:items-end gap-2 lg:text-right items-center text-center">
          <span className="text-xs md:text-sm text-white/60">Follow me:</span>
          <span className="text-xs text-white/40">Instagram: <a href="https://instagram.com/ahmd_riyo" target="_blank" className="hover:text-accent">@ahmd_riyo</a></span>
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm text-white/50 mt-8">&copy;{new Date().getFullYear()} Ahmad Riyo Kusuma. All rights reserved.</div>
    </footer>
  );
}
export default Footer;