import styled, { keyframes } from "styled-components";

const fadeBackground = keyframes`
  0% {
    background-color: #FF5F1F;
  }
  100% {
    background-color:rgba(55, 255, 20, 0.73);
  }
`;

const StyledFadeBackground = styled.div`
  animation: ${fadeBackground} 10s infinite alternate;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { StyledFadeBackground };

//  background-color: rgb(255, 0, 212);
