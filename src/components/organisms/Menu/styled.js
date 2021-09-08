import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const Title = styled.h1`
  margin: 0px;
  color: ${COLORS.secondaryBlue};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 20px 0px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Lista = styled.li`
  margin-left: 100px;
  :hover {
    cursor: pointer;
    color: ${COLORS.secondaryBlue};
  }
`;
