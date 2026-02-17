"use client";

import styled from "styled-components";

export const StyledWelcomeSection = styled.section`
  min-height: calc(100svh - 140px);
  display: flex;
  align-items: center;
  padding: 48px 16px;
  background:
    radial-gradient(
      1200px 800px at 50% 10%,
      rgba(255, 255, 255, 0.06),
      transparent 60%
    ),
    radial-gradient(
      900px 600px at 20% 80%,
      rgba(220, 0, 0, 0.12),
      transparent 55%
    ),
    #0b0b0c;
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
`;

export const StyledCard = styled.div`
  position: relative;
  border-radius: 18px;
  padding: 28px 22px;
  background: rgba(15, 15, 16, 0.86);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  border: 2px solid rgba(170, 0, 0, 0.75);

  &:before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }
`;

export const StyledLogoRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14px;
  opacity: 0.95;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: clamp(44px, 6vw, 72px);
  letter-spacing: 0.5px;
  line-height: 0.95;
  color: #e9e9ea;
  text-transform: uppercase;
`;

export const StyledSubTitle = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  letter-spacing: 2px;
  color: rgba(233, 233, 234, 0.75);
  text-transform: uppercase;
`;

export const StyledText = styled.p`
  margin: 18px 0 0;
  font-size: 16px;
  line-height: 1.55;
  color: rgba(233, 233, 234, 0.88);

  strong {
    color: rgba(233, 233, 234, 0.98);
  }
`;

export const StyledActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledSocialLink = styled.a`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  padding: 12px 14px;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.3px;

  background: rgba(255, 255, 255, 0.06);
  color: rgba(233, 233, 234, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);

  transition:
    transform 120ms ease,
    background 120ms ease,
    border-color 120ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(220, 0, 0, 0.1);
    border-color: rgba(220, 0, 0, 0.45);
  }
`;

export const StyledQrBox = styled.div`
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  display: grid;
  gap: 10px;
  justify-items: start;
`;

export const StyledQrTitle = styled.p`
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(233, 233, 234, 0.88);
`;

export const StyledHint = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgba(233, 233, 234, 0.65);
`;

// import styled from "styled-components";

// const StyledWelcome = styled.div`
//   // hier habe ich ein padding gesetzt, damit ich den header fixed setzen konnte.
//   margin-top: 130px;

//   /* padding-top: 60px; */

//   h1 {
//     font-size: 2.5rem;
//     @media (min-width: 900px) {
//       font-size: 3.5rem;
//     }
//     text-align: center;
//     color: #373938ff;
//   }
//   h3 {
//     padding: 20px 0px 10px 0px;
//     font-size: 2.0rem;
//     @media (min-width: 900px) {
//       font-size: 3.5rem;
//     }
//     text-align: center;
//     color: #fff7ffff;
//   }
//   h4 {
//     font-size: 1.9rem;
//     @media (min-width: 900px) {
//       font-size: 3.5rem;
//     }
//     text-align: center;
//     padding-top: 15px;
//     color: #373938ff;
//   }
// `;

// export { StyledWelcome };
