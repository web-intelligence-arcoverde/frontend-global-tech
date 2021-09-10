import React from "react";
import { Container, ContainerTitle, Title, Description } from "./style";

const Index = ({ title, description }) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      <Description>{description}</Description>
    </Container>
  );
};

export default Index;
