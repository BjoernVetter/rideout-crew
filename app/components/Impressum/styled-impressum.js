"use client";
import styled from "styled-components";

const StyledImpressumSection = styled.section`
  min-height: 100vh;
  width: 100%;

  background-image: url("/background/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  /* Dark Overlay */
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

  /* 🔥 Wichtig: Inhalt über Overlay */
  > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledImpressumContainer = styled.div`
  width: 100%;
  padding: 140px 20px 80px;
  display: flex;
  justify-content: center;
`;

const StyledImpressum = styled.div`
  width: min(900px, 95vw);
  padding: 40px;

  color: rgba(255, 255, 255, 0.92);

  h1 {
    font-size: clamp(28px, 4vw, 42px);
    margin-bottom: 20px;
    font-weight: 600;
  }

  h2 {
    margin-top: 32px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }

  p {
    line-height: 1.8;
    margin-bottom: 14px;
    font-size: 16px;
    opacity: 0.95;
  }
`;

export {
  StyledImpressumSection,
  StyledImpressumContainer,
  StyledImpressum
};