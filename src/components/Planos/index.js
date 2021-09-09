import React from "react";
import * as S from "./styled";

import Rocket from "../../assets/Image/rocket.png";
import Car from "../../assets/Image/car.png";
import Motorcycle from "../../assets/Image/motorcycle.png";
import User from "../../assets/Image/user.png";

import Card from "../../components/atomic/Card/Plan";

const Planos = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <div>
        <h3>Planos</h3>
      </div>
      <S.Container>
        <Card
          color={"card1"}
          Img={Rocket}
          title={"Super Velocidade"}
          velocity={200}
          price={"119, 90"}
        />

        <Card
          color={"card2"}
          Img={Car}
          title={"Alta Velocidade"}
          velocity={150}
          price={"99,90"}
        />

        <Card
          color={"card3"}
          Img={Motorcycle}
          title={"Velocidade Média"}
          velocity={100}
          price={"79,90"}
        />

        <Card
          color={"card4"}
          Img={User}
          title={"Plano Estudante"}
          velocity={70}
          price={"59,90"}
        />
      </S.Container>
    </div>
  );
};

export default Planos;
