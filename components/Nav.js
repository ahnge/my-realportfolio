import { useDispatch, useSelector } from "react-redux";
import { Hamburger } from "./logos/logo";
import { toggleMenu } from "./features/navmenu/menuSlice";
import { navArr } from "./NavArr";

const Nav = () => {
  // redux states
  const heroInview = useSelector((state) => state.inview.heroInview);
  const aboutInview = useSelector((state) => state.inview.aboutInview);
  const portfolioInview = useSelector((state) => state.inview.portfolioInview);
  const contactInview = useSelector((state) => state.inview.contactInview);
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  // functions
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    const navHeight = document.querySelector("#nav").offsetHeight;

    window.scrollTo({
      left: 0,
      top: location - navHeight,
    });
  };

  return (
    <div
      className=" bg-secondary-bg/80 backdrop-blur sticky top-0 z-10"
      id="nav"
    >
      <div className="flex w-full max-w-7xl justify-between mx-auto items-center px-7">
        <a
          onClick={handleScroll}
          href="#home"
          className="block text-action-pur text-xl py-3 font-bold sm:text-2xl lg:text-3xl"
        >
          Nayzaw
        </a>
        <nav className="hidden sm:block">
          <ul className=" text-white flex space-x-6 lg:space-x-10 text-base lg:text-lg font-semibold">
            {navArr.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={handleScroll}
                    href={`#${item}`}
                    className={` py-6 block capitalize cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-action-pur transition ${
                      heroInview && item === "home"
                        ? "text-action-pur border-white"
                        : aboutInview && item === "about"
                        ? "text-action-pur border-white"
                        : portfolioInview && item === "portfolio"
                        ? "text-action-pur border-white"
                        : contactInview && item === "contact"
                        ? "text-action-pur border-white"
                        : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div onClick={handleClick} className="cursor-pointer sm:hidden py-3">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Nav;
