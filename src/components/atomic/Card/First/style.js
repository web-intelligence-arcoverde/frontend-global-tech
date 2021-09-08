import styled from "styled-components";
import COLORS from "../../../../constants/colors";

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

export const H5 = styled.div`
  font-size: 12px;
  color: ${COLORS.graySecondary};
`;
