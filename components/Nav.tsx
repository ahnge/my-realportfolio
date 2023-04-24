import { CloseLogo, Hamburger, Moon, Sun } from "./logos/logo";
import { useMenuDispatch, useMenu } from "./context/MenuContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  // MenuContext
  const dispatch = useMenuDispatch();
  const { menuIsOpen, dark } = useMenu();

  const router = useRouter();

  // functions to dispatch menu states
  const handleToggle = () => {
    dispatch && dispatch({ type: "toggle" });
  };

  //
  const navArr = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about",
      link: "/about",
    },
    {
      title: "projects",
      link: "/projects",
    },
  ];

  return (
    <div
      className="sticky top-0 z-10 px-5 lg:px-8 bg-stone-50 dark:bg-secondary-bg"
      id="nav"
    >
      <div className="flex items-center justify-between w-full mx-auto text-tertairy-bg dark:text-action-pur max-w-7xl">
        <Link
          href="/"
          className="block py-3 text-xl font-bold sm:text-2xl lg:text-3xl"
        >
          Nayzaw
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-base font-semibold dark:text-whitejj lg:space-x-10 lg:text-lg">
            {navArr.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`${item.link}`}
                    className={`py-6 block capitalize cursor-pointer hover:text-action-pur dark:hover:text-white dark:hover:border-white border-b-4 border-transparent hover:border-action-pur transition ${
                      item.link === router.pathname
                        ? "text-action-pur dark:text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li
              className={` py-6 block capitalize cursor-pointer hover:text-action-pur dark:hover:text-white dark:hover:border-white border-b-4 border-transparent hover:border-action-pur transition `}
              onClick={() => dispatch && dispatch({ type: "toggleDarkMode" })}
            >
              {dark ? <Sun /> : <Moon />}
            </li>
          </ul>
        </nav>
        <div className="flex py-3 space-x-3 text-black md:hidden dark:text-action-pur">
          <div onClick={handleToggle} className="cursor-pointer">
            {menuIsOpen ? <CloseLogo /> : <Hamburger />}
          </div>
          <div
            className={`capitalize cursor-pointer hover:text-action-pur dark:hover:text-white dark:hover:border-white border-b-4 border-transparent hover:border-action-pur transition `}
            onClick={() => dispatch && dispatch({ type: "toggleDarkMode" })}
          >
            {dark ? <Sun /> : <Moon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
