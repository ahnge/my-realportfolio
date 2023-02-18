import Head from "next/head";
import { useMenu } from "../components/context/MenuContext";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import MobileMenu from "../components/MobileMenu";

export default function Home() {
  // redux states
  const menuIsOpen = useMenu();

  return (
    <>
      <Head>
        <title>Nayzaw Oppa</title>
        <link rel="shortcut icon" href="peace.ico" type="image/x-icon" />
        <meta name="keywords" content="nayzaw nayzawminnaing" />
        <meta
          name="description"
          content="Freelance developer. I create seamless web experiences for end-users."
        />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Contact />
      {menuIsOpen && <MobileMenu />}
    </>
  );
}
