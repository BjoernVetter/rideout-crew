import styled from "styled-components";

const StyledWelcomeWrapper = styled.section`
  width: 100%;
`;

const StyledHero = styled.div`
  position: relative;
  height: 100vh; /* mobile safe viewport height */
  min-height: 520px; /* fallback */
  width: 100%;
  overflow: hidden;
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
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
`;

const StyledContent = styled.div`
  padding: 40px 0 80px;
`;

const StyledCard = styled.div`
  width: min(560px, 92vw);
  margin: 0 auto;

  background: rgba(15, 15, 15, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;

  padding: 28px 22px;
  backdrop-filter: blur(10px);

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
`;

const StyledLogoRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  opacity: 0.95;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: clamp(26px, 3, 6vw, 44px);
  line-height: 1.1;
  letter-spacing: 0cap.4;

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

  width: 100%;
  padding: 14px 16px;

  border-radius: 16px;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);

  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  font-weight: 700;

  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.22);
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
  padding: 46px 0 80px;
`;

const StyledSeoContainer = styled.div`
  width: min(900px, 92vw);
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);

  p {
    margin: 14px 0 0;
    line-height: 1.7;
    opacity: 0.9;
    font-size: 16px;
  }
`;

const StyledSeoTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  letter-spacing: 0.4px;
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
