import { useDispatch, useSelector } from "react-redux";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import { toggleMenu } from "../components/features/navmenu/menuSlice";
import Hero from "../components/hero/Hero";
import MobileNav from "../components/MobileNav";
import Projects from "../components/projects/Projects";

export default function Home() {
  // redux states
  const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      {menuIsOpen && (
        <div
          className=" fixed inset-0 bg-black/40 cursor-pointer z-10 backdrop-blur-sm"
          onClick={handleClick}
        ></div>
      )}
      <MobileNav />
    </>
  );
}
