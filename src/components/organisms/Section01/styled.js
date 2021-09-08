import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const Container = styled.div`
  background: ${COLORS.thirdBlue};
  display: flex;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 468px;
  height: 505px;
  margin-top: 43px;
`;

export const CardImg = styled.div`
  width: 45%;
  margin-left: 30px;
  height: 550px;
  align-items: center;
`;

export const Conteudo = styled.div`
  text-align: start;
  align-items: center;
  margin-top: 100px;
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 210px;

  background: ${COLORS.white};
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;

export const Seta = styled.img`
  width: 20px;
  display: flex;
`;
export const Icone = styled.img`
  width: 25px;
`;

export const H5 = styled.div`
  font-size: 12px;
  color: ${COLORS.graySecondary};
`;

export const Title = styled.h1`
  margin: 0px;
  color: ${COLORS.gray};
`;

export const Paragraph = styled.p`
  margin: 0px;
  color: ${COLORS.gray};
`;
