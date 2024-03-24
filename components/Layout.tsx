import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import MaintenancePage from "./MaintenancePage";

import { useMenu, useMenuDispatch } from "./context/MenuContext";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  const { dark, menuIsOpen } = useMenu();
  const dispatch = useMenuDispatch();

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch && dispatch({ type: "setDark" });
    } else {
      dispatch && dispatch({ type: "setLight" });
    }
  }, []);

  const underMaintenance = true;
  if (underMaintenance) return <MaintenancePage />;

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
