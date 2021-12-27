import React from "react";
import * as S from "./style";

const Index = ({ Img, color, title, velocity, price, onClick }) => {
  return (
    <S.Card color={color} onClick={onClick}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{title}</h1>
        <div style={{ marginTop: "10px" }}>
          <h5>
            <S.Destaque>{velocity}</S.Destaque>GB
          </h5>
        </div>

        <div style={{ marginTop: "10px" }}>
          <p>Fibra óptica</p>
        </div>

        <div style={{ marginTop: "10px" }}>
          <p>Wi-fi de alta Perfomance </p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p>Instalação inclusa</p>
        </div>

        <div style={{ marginTop: "10px" }}>
          <h3>
            R$
            <S.Destaque> {price}</S.Destaque>
          </h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <S.Img src={Img} />
      </div>
    </S.Card>
  );
};

export default Index;
