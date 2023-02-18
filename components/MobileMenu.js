import { useMenuDispatch } from "./context/MenuContext";

const navArr = ["home", "about", "portfolio", "contact"];

const MobileMenu = () => {
  const dispatch = useMenuDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch({ type: "toggle" });
  };

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
      className=" fixed inset-0 bg-black/40 cursor-pointer backdrop-blur-sm sm:hidden"
      onClick={handleClick}
    >
      <nav className="">
        <ul className="absolute text-white top-16 rounded-sm right-5 flex p-5 bg-white/30 flex-col text-base lg:text-lg font-semibold">
          {navArr.map((item, index) => {
            return (
              <li key={index}>
                <a
                  onClick={handleScroll}
                  href={`#${item}`}
                  className={` py-3 block capitalize cursor-pointer hover:text-action-pur border-b-4 border-transparent hover:border-action-pur transition `}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
