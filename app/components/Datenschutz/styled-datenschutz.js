"use client";
import styled from "styled-components";

const StyledDatenschutzSection = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;

  background: url("/background/background.jpg") center / cover no-repeat;

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

const StyledDatenschutzContent = styled.div`
  width: min(900px, 95vw);
  padding: 0;

  color: rgba(255, 255, 255, 0.92);

  /* Typo */
  h1 {
    margin: 0 0 26px;
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: 0.2px;
  }

  h2 {
    margin: 28px 0 10px;
    font-size: clamp(18px, 2.4vw, 22px);
    font-weight: 700;
    letter-spacing: 0.2px;
  }

  p {
    margin: 0;
    margin-top: 10px;
    max-width: 70ch;         
    font-size: clamp(16px, 2vw, 18px);
    opacity: 0.97;

    hyphens: auto;
    text-wrap: pretty;
  }

 
  p + h2 {
    margin-top: 32px;
  }

  ul {
    margin: 12px 0 0;
    padding-left: 20px;
    max-width: 70ch;
  }

  li {
    margin: 8px 0;
    line-height: 1.7;
    font-size: clamp(16px, 2vw, 18px);
    opacity: 0.96;
  }
`;

export {
  StyledDatenschutzSection,
  StyledDatenschutzContainer,
  StyledDatenschutzContent,
};