import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  a {
    text-decoration: none;
  }
  ul {
    background-color: ${COLORS.white};
    height: 100vh;
    justify-content: space-around;
    animation: show 0.7s forwards;
  }
  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  li {
    list-style: none;
    height: 140px;
    margin-top: 20px;
    color: ${COLORS.secondaryBlue};
    border-bottom: 1px solid ${COLORS.secondaryBlue};
    :hover {
      cursor: pointer;
    }
  }
`;
