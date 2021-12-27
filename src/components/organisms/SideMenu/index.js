import React, { useState } from "react";
import Img from "../../../assets/Icons/menu.svg";
import MenuResponsive from "../MenuResponsive";
import { Container } from "./styles";

function SideMenu() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <Container onClick={handleMenu}>
      <img src={Img} />
      {visibleMenu && <MenuResponsive />}
    </Container>
  );
}

export default SideMenu;
