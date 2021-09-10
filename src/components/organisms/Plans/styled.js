import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ImgFoguete = styled.img`
  width: 100px;
  height: 120px;
`;
export const Icone4 = styled.img`
  width: 120px;
  height: 130px;
`;

export const ContainerCard = styled.div`
  display: flex;
  background: ${({ color }) => `${COLORS[color]}` || "white"};
  width: 310px;
  margin-left: 10px;
`;

export const Card = styled.div`
  flex-direction: column;
  margin: 20px;
`;

export const IconeCard = styled.div`
  padding-top: 70%;
  padding-right: 5px;
`;
export const Destaque = styled.span`
  color: #ff4d4d;
  font-size: 30px;
`;
