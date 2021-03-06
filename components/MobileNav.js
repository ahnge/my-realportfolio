import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./features/navmenu/menuSlice";
import { navArr } from "./NavArr";

const MobileNav = () => {
  // redux states
  const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
  const heroInview = useSelector((state) => state.inview.heroInview);
  const aboutInview = useSelector((state) => state.inview.aboutInview);
  const portfolioInview = useSelector((state) => state.inview.portfolioInview);
  const contactInview = useSelector((state) => state.inview.contactInview);
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  // onClick functions
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    const navHeight = document.querySelector("#nav").offsetHeight;

    window.scrollTo({
      left: 0,
      top: location - navHeight,
    });
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`fixed h-screen inset-y-0 w-fit bg-secondary-bg transition-all duration-300 sm:hidden z-50 ${
        menuIsOpen ? "right-0" : " -right-full"
      }`}
    >
      <button
        className="text-white cursor-pointer ml-auto block p-4 mr-4 font-bold text-xl "
        onClick={handleClick}
      >
        X
      </button>
      <ul className=" text-white font-normal mt-5">
        {navArr.map((item, index) => {
          return (
            <li key={index}>
              <a
                onClick={handleScroll}
                href={`#${item}`}
                className={`capitalize hover:text-action-pur cursor-pointer transition px-12 block py-3 border-l-8 border-transparent ${
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
    </div>
  );
};

export default MobileNav;
