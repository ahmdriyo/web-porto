
import MobileNav from "./MobileNav";
import Nyoba from "./Nyoba";
const Header = () => {
  return (
    <header className=" py-8 xl:py-12 text-white">
      <div className=" container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-8">
          <Nyoba />
        </div>
      </div>
    </header>
  );
};

export default Header;
