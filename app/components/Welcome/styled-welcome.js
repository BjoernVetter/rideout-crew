import styled from "styled-components";
const StyledWelcomeWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: clip;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute; /* ✅ war fixed */
    inset: -20px;
    z-index: 0;
    pointer-events: none;

    background: url("/background/background.jpg") center / cover no-repeat;
    filter: blur(2px);
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.35) 40%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const StyledHero = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%, -50%) scale(2.2);
    width: 100vw;
    max-width: 1100px;
    height: auto;
    object-fit: contain;
    pointer-events: none;
    z-index: 2;
  }
`;

const StyledContent = styled.div`
  padding: 60px 0 80px;
  position: relative;
`;

const StyledCard = styled.div`
  width: min(900px, 92vw);
  margin: 0 auto;
  padding: 28px 22px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: clamp(40px, 4vw, 50px);
    line-height: 1.1;
    letter-spacing: 0.4px;
  }

  .subtitle {
    margin: 14px 0 18px;
    font-size: clamp(16px, 2.4vw, 25px);
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: 0.92;
    font-weight: 600;
  }

  .text {
    margin: 0 0 20px;
    font-size: clamp(16px, 2.2vw, 20px);
    line-height: 1.6;
    opacity: 0.92;

    strong {
      font-weight: 800;
    }
  }

  .actions {
    display: grid;
    gap: 19px;
    margin: 18px 0 18px;
    justify-items: center;
  }

  .socialLink {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    width: min(520px, 80%);
    padding: 14px 16px;

    border-radius: 16px;
    text-decoration: none;

    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.18);
    border: 3px solid rgb(255, 255, 255);

    color: rgba(255, 255, 255, 0.92);
    font-size: 18px;
    font-weight: 700;

    transition:
      transform 0.15s ease,
      background 0.15s ease,
      border 0.15s ease;

    &:hover {
      transform: translateY(-1px);
      background: rgba(199, 11, 11, 0.31);
      border-color: rgb(168, 34, 34);
    }

    img {
      filter: invert(1);
      opacity: 0.95;
    }
  }
`;

const StyledSeoSection = styled.section`
  padding: 50px 0 80px;
`;

const StyledSeoContainer = styled.div`
  width: min(900px, 92vw);
  margin: 0 auto;
  padding: 28px 22px;
  color: rgba(255, 255, 255, 0.92);

  h2 {
    margin: 0 0 18px;
    font-size: clamp(22px, 3vw, 30px);
    letter-spacing: 0.4px;
    text-align: center;
  }

  p {
    max-width: 70ch;
    margin: 12px auto 0;
    line-height: 1.85;
    font-size: clamp(16px, 2.2vw, 20px);
    opacity: 0.98;
  }
`;

export {
  StyledWelcomeWrapper,
  StyledHero,
  StyledContent,
  StyledCard,
  StyledSeoSection,
  StyledSeoContainer,
};
