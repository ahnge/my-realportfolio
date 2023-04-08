import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

import { useMenu, useMenuDispatch } from "./context/MenuContext";

const Layout = ({ children }) => {
  const { dark, menuIsOpen } = useMenu();
  const dispatch = useMenuDispatch();

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch({ type: "setDark" });
    } else {
      dispatch({ type: "setLight" });
    }
  }, []);

  return (
    <div className={`font-poppins ${dark ? "dark" : ""}`}>
      <Nav />
      {children}
      <Footer />
      {menuIsOpen && <MobileMenu />}
    </div>
  );
};

export default Layout;
