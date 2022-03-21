import { useDispatch } from "react-redux";
import { Hamburger } from "./logos/logo";
import { toggleMenu } from "./features/navmenu/menuSlice";

const Nav = () => {
  // redux states
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" bg-secondary-bg sticky top-0">
      <div className="flex w-full max-w-7xl justify-between mx-auto items-center px-7">
        <div className=" text-action-pur text-xl py-3 font-bold sm:text-2xl lg:text-3xl">
          Nayzaw
        </div>
        <nav className="hidden sm:block">
          <ul className=" text-white flex space-x-6 lg:space-x-10 text-base lg:text-lg font-semibold">
            <li className=" py-6 cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-white transition">
              <p>Home</p>
            </li>
            <li className=" py-6 cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-white transition">
              <p>About</p>
            </li>
            <li className=" py-6 cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-white transition">
              <p>Portfolio</p>
            </li>
            <li className=" py-6 cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-white transition">
              <p>Contact</p>
            </li>
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
