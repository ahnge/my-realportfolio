import Head from "next/head";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nayzaw Minnaing</title>
        <link rel="shortcut icon" href="me.jpeg" type="image/x-icon" />
        <meta name="keywords" content="nayzaw nayzawminnaing" />
        <meta
          name="description"
          content="Web developer. I create seamless web experiences for end-users."
        />
      </Head>
      <Hero />
    </>
  );
}
