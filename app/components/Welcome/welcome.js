"use client";
import Image from "next/image";

import {
  StyledWelcomeSection,
  StyledContainer,
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
} from "./styled-welcome";

const Welcome = () => {
  return (
    <StyledWelcomeSection>
      <StyledContainer>
        <StyledCard>
          <StyledLogoRow>
            {/* Optional: falls du ein Logo hast, z.B. /svg/logo.svg */}
            <Image
              src="/logo/Logo.svg"
              alt="RideOut Crew"
              width={140}
              height={60}
            />
          </StyledLogoRow>

          <StyledTitle>RideOut</StyledTitle>
          <StyledSubTitle>
            BIKER COMMUNITY • DÜSSELDORF & UMGEBUNG
          </StyledSubTitle>

          <StyledText>
            Hier treffen sich Gleichgesinnte – egal ob 125er, Chopper, Naked,
            Sportler oder Tourer. Jede Maschine, jedes Alter, jeder Stil ist
            willkommen.
            <br />
            <br />
            <strong>Unser Ziel:</strong> gemeinsame Ausfahrten, Spaß auf zwei
            Rädern und neue Freundschaften.
          </StyledText>

          <StyledActions>
            <StyledSocialLink
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Image src="/icons/instagram.svg" alt="" width={22} height={22} />
              Instagram
            </StyledSocialLink>

            <StyledSocialLink
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Image src="/icons/facebook.svg" alt="" width={22} height={22} />
              Facebook
            </StyledSocialLink>

            <StyledSocialLink
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Image src="/icons/whatsapp.svg" alt="" width={22} height={22} />
              WhatsApp
            </StyledSocialLink>
          </StyledActions>

          <StyledQrBox>
            <StyledQrTitle>QR-Code scannen & direkt beitreten</StyledQrTitle>

            {/* Ersetze /Images/qr.png später durch deinen echten QR-Code */}
            <Image
              src="/Images/qr.png"
              alt="QR Code"
              width={160}
              height={160}
            />

            <StyledHint>Oder nutze die Buttons oben.</StyledHint>
          </StyledQrBox>
        </StyledCard>
      </StyledContainer>
    </StyledWelcomeSection>
  );
};

export default Welcome;

// import React from "react";
// import { StyledWelcome } from "./styled-welcome";

// const Welcome = () => {
//   return (
//     <section id="welcome">
//       <div className="wrapper">
//         <StyledWelcome>
//           <h1>Du hast gescannt!</h1>
//           <h3>
//             {/* jetzt bist Du dran */}
//             jetzt bist du am zug
//           </h3>

//           <h4>
//             Willkommen bei <strong>3promille</strong> <br />
//             der erste Drink geht auf Dich!{" "}
//           </h4>
//         </StyledWelcome>
//       </div>
//     </section>
//   );
// };

// export default Welcome;
