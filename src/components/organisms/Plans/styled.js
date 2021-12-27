import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  h2 {
    margin: 60px 0;
  }
  @media (max-width: 768px) {
    height: auto;

    h2 {
      width: 100%;
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
