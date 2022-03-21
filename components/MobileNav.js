import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./features/navmenu/menuSlice";

const MobileNav = () => {
  // redux states
  const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`fixed h-screen inset-y-0 w-fit bg-secondary-bg transition-all duration-300 sm:hidden z-50 ${
        menuIsOpen ? "right-0" : " -right-full"
      }`}
    >
      <button
        className="text-white cursor-pointer ml-auto block p-3 font-bold text-xl "
        onClick={handleClick}
      >
        X
      </button>
      <ul className=" text-white font-normal mt-5">
        <li>
          <p className=" hover:text-action-pur cursor-pointer transition py-3 px-14">
            Home
          </p>
        </li>
        <li>
          <p className=" hover:text-action-pur cursor-pointer transition py-3 px-14">
            About me
          </p>
        </li>
        <li>
          <p className=" hover:text-action-pur cursor-pointer transition py-3 px-14">
            Projects
          </p>
        </li>
        <li>
          <p className=" hover:text-action-pur cursor-pointer transition py-3 px-14">
            Contact
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
