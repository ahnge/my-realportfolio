import { CloseLogo, Hamburger } from "./logos/logo";
import { useMenuDispatch, useMenu } from "./context/MenuContext";

const Nav = () => {
  // MenuContext
  const mdispatch = useMenuDispatch();
  const menuIsOpen = useMenu();

  // functions to dispatch menu states
  const handleToggle = () => {
    mdispatch({ type: "toggle" });
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

  //
  const navArr = ["home", "about", "portfolio", "contact"];

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
                    className={` py-6 block capitalize cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-action-pur transition `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div onClick={handleToggle} className="cursor-pointer sm:hidden py-3">
          {menuIsOpen ? <CloseLogo /> : <Hamburger />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
