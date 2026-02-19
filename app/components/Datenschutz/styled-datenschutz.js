"use client";
import styled from "styled-components";

const StyledDatenschutzSection = styled.section`
  min-height: 100vh;
  width: 100%;

  background-image: url("/background/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.55) 50%,
      rgba(0, 0, 0, 0.65) 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledDatenschutzContainer = styled.div`
  width: 100%;
  padding: 140px 20px 80px;
  display: flex;
  justify-content: center;
`;

const StyledDatenschutz = styled.div`
  width: min(900px, 95vw);
  padding: 40px;

  h1 {

    @media (max-width: 390px) {
    font-size: 25px;





  }
  h2,
  p {
    color: rgba(255, 255, 255, 0.92);
  }

  p {
    line-height: 1.7;
  }

  h2 {
    margin-top: 26px;
  }
`;

export {
  StyledDatenschutzSection,
  StyledDatenschutzContainer,
  StyledDatenschutz,
};
