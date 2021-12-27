import React from "react";
import { Container } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

function MenuResponsive() {
  return (
    <Container>
      <ul>
        <AnchorLink href="#home">
          <li>Planos</li>
        </AnchorLink>
        <AnchorLink href="#servico">
          <li>Serviços</li>
        </AnchorLink>
        <AnchorLink href="#promocoes">
          <li>Promoções</li>
        </AnchorLink>
        <AnchorLink href="#contato">
          <li>Contato</li>
        </AnchorLink>
      </ul>
    </Container>
  );
}

export default MenuResponsive;
