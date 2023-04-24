import Layout from "../components/Layout";
import "../styles/globals.css";
import { MenuProvider } from "../components/context/MenuContext";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}

export default MyApp;
