import Link from "next/link";
import { useMenuDispatch } from "./context/MenuContext";
const navArr = [
  {
    title: "home",
    link: "",
  },
  {
    title: "about",
    link: "about",
  },
  {
    title: "projects",
    link: "projects",
  },
];
const MobileMenu = () => {
  const dispatch = useMenuDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div
      className="fixed inset-0 z-10 flex justify-end cursor-pointer bg-black/40 backdrop-blur-sm md:hidden"
      onClick={handleClick}
    >
      <nav className="mt-16 mr-8">
        <ul className="flex flex-col p-5 text-base font-semibold text-white rounded-sm bg-white/30 lg:text-lg">
          {navArr.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={`/${item.link}`}
                  className={`py-3 block capitalize cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-action-pur transition `}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
