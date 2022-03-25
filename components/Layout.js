import Nav from "./Nav";
import { Provider } from "react-redux";
import { store } from "./store";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className=" font-poppins bg-primary-bg">
        <Nav />
        {children}
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
