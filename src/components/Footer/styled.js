import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  background: #3d3d3d;
  color: #fff;
  margin: 30px 0;

  h3 {
    margin-bottom: 20px;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const ContainerRedes = styled.div`
  align-items: center;
`;

export const RedesSocias = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Icones = styled.img`
  width: 20px;
  margin-right: 10px;
`;
export const Card = styled.div`
  align-items: center;
  @media (max-width: 769px) {
    font-size: 12px;
    margin: 15px 0;
    width: 80%;
    margin-left: 10px;
    h3 {
      font-size: 13.5px;
      text-align: start;
    }
  }
`;

export const FooterPara = styled.p`
  text-align: center;
  background: #3d3d3d;
  color: white;
  padding: 10px;
  border-top: 1px solid white;
`;
export const Main = styled.div`
  background: #3d3d3d;
  height: auto;
`;
