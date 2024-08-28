import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className=" py-8 xl:py-12 text-white">
      <div className=" container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-8">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
