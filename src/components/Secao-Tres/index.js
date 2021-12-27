import react from "react";
import * as S from "./styled";

import Roteador from "../../assets/roteador.png";
import Whatsapp from "../../assets/whatsapp.png";
import Relogio from "../../assets/relogio.png";
import Bussula from "../../assets/bussola.png";
import Escudo from "../../assets/escudo.png";
import Dados from "../../assets/dados.png";

const Secao3 = () => {
  return (
    <S.Container id="promocoes">
      <S.Roteador src={Roteador} />

      <S.ColumnRight>
        <h3>Faça o pedido pelo Whatssap e ganhe um roteador wi-fi grátis</h3>
        <p>
          Ter uma rede Wi-Fi na empresa ou em casa não é mais um luxo há muito
          tempo. A rede sem fio se tornou uma necessidade. Celular, tablet,
          notebook e smart TV são equipamentos que usamos todos os dias e somos
          dependentes. Por sua vez, todos eles dependem de uma rede Wi-Fi
          eficiente.
        </p>

        <S.CardContainer>
          <S.MiniContainer>
            <S.Card>
              <S.Icone src={Relogio} />
            </S.Card>
            <p>
              <S.Spam>Lorem ipsum</S.Spam>
              <br /> uctor tincidunt ultricies tortor felis commodo sed at
            </p>
          </S.MiniContainer>

          <S.MiniContainer>
            <S.Card>
              <S.Icone src={Escudo} />
            </S.Card>
            <p>
              <S.Spam>Lorem ipsum</S.Spam>
              <br /> uctor tincidunt ultricies tortor felis commodo sed at
            </p>
          </S.MiniContainer>

          <S.MiniContainer>
            <S.Card>
              <S.Icone src={Bussula} />
            </S.Card>
            <p>
              <S.Spam>Lorem ipsum</S.Spam>
              <br /> uctor tincidunt ultricies tortor felis commodo sed at
            </p>
          </S.MiniContainer>

          <S.MiniContainer>
            <S.Card>
              <S.Icone src={Dados} />
            </S.Card>
            <p>
              <S.Spam>Lorem ipsum</S.Spam>
              <br /> uctor tincidunt ultricies tortor felis commodo sed at
            </p>
          </S.MiniContainer>
        </S.CardContainer>
      </S.ColumnRight>
    </S.Container>
  );
};

export default Secao3;
