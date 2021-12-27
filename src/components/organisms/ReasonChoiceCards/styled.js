import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const Container = styled.div`
  height: 40vh;
  background: #36abd95e;
  border-radius: 8px;

  h2 {
    text-align: center;
    margin-bottom: 50px;
    padding-top: 20px;
  }
  @media (max-width: 769px) {
    height: auto;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
