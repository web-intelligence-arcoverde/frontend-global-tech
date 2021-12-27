import React from "react";

/* Styled Components */
import { TitleSection, ContainerCard, Container } from "./styled";

import Card from "../../atomic/Card/ReasonChoice";

const Index = () => {
  return (
    <Container>
      <h2>Motivos para nos escolher</h2>

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
          description={"Equipe pronta para lhe atender em menos de 24hrs."}
        />
      </ContainerCard>
    </Container>
  );
};

export default Index;
