import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ color }) => `${COLORS[color]}` || "white"};
  width: 20%;
  margin-left: 10px;
  padding: 20px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 769px) {
    width: 70%;
    padding: 10px;
    margin: 20px 0;
  }
`;

export const IconeCard = styled.div`
  padding-right: 5px;
`;
export const Destaque = styled.span`
  color: #ff4d4d;
  font-size: 30px;
`;
export const Img = styled.img`
  width: 100px;
  height: 120px;
`;
