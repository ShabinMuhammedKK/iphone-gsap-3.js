import { appleImg, bagImg, searchImg } from "../utils/index.js";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-10 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <div>
          <img src={appleImg} alt="apple-img" width={18} height={18} />
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navs) => (
            <div
              key={navs}
              className="px-5 text-gray text-sm cursor-pointer hover:text-white transition-all" 
            >
              {navs}
            </div>
          ))}
        </div>
        <div className="flex align-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search-img" width={18} height={18} />
          <img src={bagImg} alt="bag-img" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
