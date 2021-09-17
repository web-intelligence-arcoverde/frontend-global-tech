import React from "react";

import Menu from "../../components/organisms/Menu";
import PlansInformation from "../../components/organisms/Plans";
import Secao3 from "../../components/Secao-Tres";
import Footer from "../../components/Footer";
import Section01 from "../../components/organisms/Section01";
import ReasonsChoiceCards from "../../components/organisms/ReasonChoiceCards";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <header>
            <Menu />
          </header>
        </div>
      </div>
    </>
  );
};

export default Home;
