import Nav from "./Nav";
import { Provider } from "react-redux";
import { store } from "./store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className=" font-poppins">
        <Nav />
        {children}
      </div>
    </Provider>
  );
};

export default Layout;
