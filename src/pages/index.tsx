import type { NextPage } from "next";
import Head from "next/head";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guiplay | Editor Audiovisual</title>
      </Head>

      <Header />

      <Content />

      <Footer />
    </>
  );
};

export default Home;
