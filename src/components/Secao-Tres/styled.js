import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Roteador = styled.img`
  width: 70%;
`;

export const ColumnRight = styled.div`
  width: 100%;
  h3 {
    margin: 25px;
  }
  p {
    width: 70ch;
    margin: 25px;
  }
  @media (max-width: 769px) {
    width: 100%;
    text-align: center;

    p {
      width: 30ch;
    }
  }
`;
export const Icone = styled.img`
  width: 50px;
  height: 60px;
  margin: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
`;
export const MiniContainer = styled.div`
  display: flex;

  align-items: center;
  width: 35%;
  @media (max-width: 769px) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Spam = styled.span`
  color: black;
  font-size: 20px;
`;
