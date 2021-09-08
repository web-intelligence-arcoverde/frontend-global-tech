import React from "react";
import * as S from "./style";

import { ReactComponent as ArrowRightIcon } from "../../../../assets/Icons/arrow-right.svg";

const Index = ({ Icon, title, description }) => {
  return (
    <S.Card>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ArrowRightIcon />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Icon />
        <h3 style={{ margin: "0px" }}>{title}</h3>
        <S.H5>{description}</S.H5>
      </div>
    </S.Card>
  );
};

export default Index;
