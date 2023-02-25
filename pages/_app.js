import Layout from "../components/Layout";
import "../styles/globals.css";
import { MenuProvider } from "../components/context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}

export default MyApp;
