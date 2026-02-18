import styled from "styled-components";

const StyledWelcomeWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("/background/background.jpg") center / cover no-repeat;

  &::before {
    content: "";
    position: fixed;
    inset: 4;
    pointer-events: none;

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledHero = styled.div`
  width: min(1400px, 95vw);
  height: 33vh;
  min-height: 500px;

  margin: 22px auto 0;
  position: relative;
  overflow: hidden;

  border: 5px solid #a82222;
  border-radius: 22px;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`;

const StyledHeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  filter: contrast(1.05) saturate(1.05);
`;

const StyledHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    180deg,
    rgba(16, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const StyledContent = styled.div`
  padding: 60px 0 80px;

  background-image: url("/background/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    /* background: rgba(0, 0, 0, 0.45); */
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledCard = styled.div`
  width: min(900px, 92vw);

  margin: 0 auto;
  background-image: url("/background/background1.jpg");
  /* background: rgba(9, 0, 0, 0.85); */
  border: 5px solid #a82222;
  border-radius: 22px;

  padding: 28px 22px;
  backdrop-filter: blur(10px);

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin: 0;

  font-size: clamp(26px, 6vw, 40px);

  line-height: 1.1;

  letter-spacing: 0.4px;

  overflow-wrap: anywhere;
  word-break: break-word;
`;

const StyledSubTitle = styled.p`
  margin: 10px 0 18px;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0.75;
  text-transform: uppercase;
`;

const StyledText = styled.p`
  margin: 0 0 20px;
  font-size: 18px;
  line-height: 1.55;
  opacity: 0.92;

  strong {
    font-weight: 800;
  }
`;

const StyledActions = styled.div`
  display: grid;
  gap: 12px;
  margin: 18px 0 18px;
`;

const StyledSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: auto;
  width: 50%;
  padding: 14px 16px;

  border-radius: 16px;
  text-decoration: none;

  background: rgba(177, 9, 9, 0.08);
  border: 2px solid rgb(255, 255, 255);

  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  font-weight: 700;

  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(65, 10, 10, 0.31);
    border-color: rgb(168, 34, 34);
  }

  img {
    filter: invert(1);
    opacity: 0.95;
  }
`;

const StyledQrBox = styled.div`
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

const StyledQrTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.9;
`;

const StyledHint = styled.p`
  margin: 12px 0 0;
  font-size: 14px;
  opacity: 0.75;
`;

const StyledSeoSection = styled.section`
  padding: 50px 0 80px;
`;

const StyledSeoContainer = styled.div`
  width: min(900px, 92vw);
  margin: 0 auto;

  border: 5px solid #a82222;
  border-radius: 22px;
  padding: 28px 22px;

  background-image: url("/background/background1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);

  color: rgba(255, 255, 255, 0.92);
  text-align: left;

  p {
    margin: 14px 0 0;
    line-height: 1.7;
    font-size: 16px;
    opacity: 1; 
  }
`;

const StyledSeoTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  letter-spacing: 0.4px;
  text-align: center;
`;

export {
  StyledWelcomeWrapper,
  StyledHero,
  StyledHeroVideo,
  StyledHeroOverlay,
  StyledContent,
  StyledCard,
  StyledLogoRow,
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledActions,
  StyledSocialLink,
  StyledQrBox,
  StyledQrTitle,
  StyledHint,
  StyledSeoSection,
  StyledSeoContainer,
  StyledSeoTitle,
};
