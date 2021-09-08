import React from "react";
import Menu from "../../components/organisms/Menu";
import Planos from "../../components/Planos";

import MiniCard from "../../components/MiniCards";
import Secao3 from "../../components/Secao-Tres";
import Footer from "../../components/Footer";
import Secao2 from "../../components/Secao-Dois";

import Section01 from "../../components/organisms/Section01";

const Home = () => {
  return (
    <>
      <header>
        <Menu />
      </header>

      <main>
        <Section01 />
        <Planos />
        <MiniCard />
        <Secao2 />
        <Secao3 />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
