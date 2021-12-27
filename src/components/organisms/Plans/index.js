import React from "react";

/* Styled Components */
import * as S from "./styled";

/* Imagens */
import Rocket from "../../../assets/Image/rocket.png";
import Car from "../../../assets/Image/car.png";
import Motorcycle from "../../../assets/Image/motorcycle.png";
import User from "../../../assets/Image/user.png";

/* Imagens */
import Card from "../../atomic/Card/Plan";

const Index = () => {
  return (
    <S.Container id="servico">
      <div>
        <h2>Conheça nossos Planos</h2>
      </div>
      <S.ContainerCard>
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
      </S.ContainerCard>
    </S.Container>
  );
};

export default Index;
