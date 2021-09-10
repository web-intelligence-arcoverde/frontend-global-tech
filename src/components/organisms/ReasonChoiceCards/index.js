import React from "react";

/* Styled Components */
import { TitleSection, ContainerCard } from "./styled";

import Card from "../../atomic/Card/ReasonChoice";

const Index = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleSection>Motivos para nos escolher</TitleSection>
      </div>
      <ContainerCard>
        <Card
          title={"Preços com desconto"}
          description={"Desconto de 10% em pagamento tri-mestral"}
        />

        <Card
          title={"Diversos Planos"}
          description={" Escolhar o plano com de acordo com sua necessidade"}
        />

        <Card
          title={"Suporte"}
          description={
            "Tenha certeza de que nossa equipe estará pronta para lhe atender em menos de 24hrs."
          }
        />
      </ContainerCard>
    </div>
  );
};

export default Index;
