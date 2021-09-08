import React from "react";
import * as S from "./styled";
import Img from "../../../assets/homem.png";

import { ReactComponent as EarthIcon } from "../../../assets/Icons/earth.svg";
import { ReactComponent as WalletIcon } from "../../../assets/Icons/wallet.svg";
import { ReactComponent as LockIcon } from "../../../assets/Icons/lock.svg";

import { ReactComponent as ArrowRightIcon } from "../../../assets/Icons/arrow-right.svg";

import Card from "../../../components/atomic/Card/First";

const Index = () => {
  return (
    <S.Container>
      <S.CardImg>
        <S.Img src={Img} />
      </S.CardImg>

      <S.Conteudo>
        <div>
          <S.Title>Obtenha mais do que importa para você</S.Title>
          <div style={{ marginTop: "10px" }}>
            <S.Paragraph>Você muda,você economiza</S.Paragraph>
          </div>
        </div>

        <S.ContainerCards>
          <Card
            Icon={EarthIcon}
            title={"Para sua casa"}
            description={"Loren ipsum dolor sit amet , &nbsp; consec"}
          />

          <Card
            Icon={WalletIcon}
            title={"Para sua casa"}
            description={"Loren ipsum dolor sit amet , &nbsp; consec"}
          />

          <Card
            Icon={LockIcon}
            title={"Para seu Telefone"}
            description={"Loren ipsum dolor sit amet , &nbsp; consec"}
          />
        </S.ContainerCards>
      </S.Conteudo>
    </S.Container>
  );
};

export default Index;
