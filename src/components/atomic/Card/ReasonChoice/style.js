import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const ContainerTitle = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3``;

export const Description = styled.p`
  color: ${COLORS.black};
  text-align: center;
`;
