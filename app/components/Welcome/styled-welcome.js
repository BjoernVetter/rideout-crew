import styled from "styled-components";

const StyledWelcomeWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("/background/background.jpg") center / cover no-repeat;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    backdrop-filter: blur(2px);

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.35) 40%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }

  &::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledHero = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg
        /* rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.45) 40%,
      rgba(0, 0, 0, 0.55) 100% */
    );
    pointer-events: none;
    z-index: 1;
  }

  video {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%) scale(2.2);
    will-change: transform;

    width: 100vw;
    max-width: 1600px;
    height: auto;

    object-fit: contain;
    pointer-events: none;

    z-index: 2;

    background: transparent;
    display: block;

    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.55));

    @media (max-width: 520px) {
      transform: translate(-50%, -50%) scale(2.5);
      top: 35%;
    }

    @media (max-width: 380px) {
      transform: translate(-50%, -50%) scale(2);
    }

    @media (min-width: 1100px) {
      transform: translate(-50%, -50%) scale(1.4);
    }
  }
`;

const StyledContent = styled.div`
  padding: 60px 0 80px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
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
    overflow-wrap: anywhere;
    word-break: break-word;
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

    hyphens: auto;
    text-wrap: pretty;
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
