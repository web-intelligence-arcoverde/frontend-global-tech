import React from "react";
import * as S from "./styled";

const Menu = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Global Tech</S.Title>
      </div>

      <div>
        <S.Menu>
          <S.Lista>Planos</S.Lista>
          <S.Lista>Serviços</S.Lista>
          <S.Lista>Negócios</S.Lista>
          <S.Lista>Contato</S.Lista>
        </S.Menu>
      </div>
    </S.Container>
  );
};

export default Menu;
