"use client";
import styled from "styled-components";

const StyledImpressumSection = styled.section`
  min-height: 100vh;
  width: 100%;

  background-image: url("/background/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* optional: damit Text besser lesbar ist */
  position: relative;
`;

const StyledImpressumContainer = styled.div`
  width: 100%;
  padding: 140px 20px 80px; /* Platz oben */
  display: flex;
  justify-content: center;
`;

const StyledImpressum = styled.div`
  width: min(900px, 95vw);
  background: rgba(15, 15, 15, 0.75);
  border: 5px solid rgb(168, 34, 34);;
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);

  h1,
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

export { StyledImpressumSection, StyledImpressumContainer, StyledImpressum };
