import Nav from "./Nav";
import Footer from "./Footer";
import { MenuProvider } from "./context/MenuContext";

const Layout = ({ children }) => {
  return (
    <MenuProvider>
        <div className=" font-poppins bg-primary-bg">
          <Nav />
          {children}
          <Footer />
        </div>
    </MenuProvider>
  );
};

export default Layout;
