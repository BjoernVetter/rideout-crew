"use client";
import Image from "next/image";

import {
  StyledWelcomeWrapper,
  StyledHero,
  StyledHeroAlphaLogo,
  StyledHeroOverlay,
  StyledContent,
  StyledCard,
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledActions,
  StyledSocialLink,
  StyledSeoSection,
  StyledSeoContainer,
  StyledSeoTitle,
} from "./styled-welcome";

const Welcome = () => {
  return (
    <StyledWelcomeWrapper>
      {/* <StyledHero>
        <StyledHeroAlphaLogo autoPlay muted loop playsInline preload="metadata">
          <source src="/logo/logo-alpha.webm" type="video/webm" />
        </StyledHeroAlphaLogo>
      </StyledHero> */}

      <StyledHero>
        <StyledHeroAlphaLogo autoPlay muted loop playsInline preload="metadata">
          <source src="/videos/logo-alpha.mov" type="video/quicktime" />
          <source src="/logo/logo-alpha.webm" type="video/webm" />
        </StyledHeroAlphaLogo>
      </StyledHero>

      <StyledContent>
        <StyledCard>
          <StyledTitle>Willkommen bei der RideOut Crew</StyledTitle>
          <br />

          <StyledSubTitle>
            BIKER COMMUNITY • DÜSSELDORF & UMGEBUNG
          </StyledSubTitle>

          <StyledText>
            Motorradgruppe aus Düsseldorf – offen für alle Bikes & Fahrstile.
            <br />
            <strong>Unser Fokus:</strong> gemeinsame Ausfahrten und gute Leute.
          </StyledText>
          <br />
          <StyledActions>
            <StyledSocialLink
              href="https://www.instagram.com/rideout.crew?igsh=MXFra2s0Z3k2cjdidg%3D%3D&utm_source=qr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Image src="/icons/instagram.svg" alt="" width={22} height={22} />
              Instagram
            </StyledSocialLink>

            <StyledSocialLink
              href="https://www.facebook.com/people/Ride-Out/61579355470970/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Image src="/icons/facebook.svg" alt="" width={22} height={22} />
              Facebook
            </StyledSocialLink>

            <StyledSocialLink
              href="https://chat.whatsapp.com/Dw69aPOJGTkG1aFSFpFDCN"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Image src="/icons/whatsapp.svg" alt="" width={22} height={22} />
              WhatsApp
            </StyledSocialLink>
          </StyledActions>
        </StyledCard>

        {/* SEO SECTION */}
        <StyledSeoSection>
          <StyledSeoContainer>
            <StyledSeoTitle>Motorradgruppe Düsseldorf</StyledSeoTitle>
            <br />
            <p>
              Die RideOut Crew ist eine Motorradgruppe aus Düsseldorf für
              Motorradfahrerinnen und Motorradfahrer aus Düsseldorf und
              Umgebung. Wir verbinden Menschen, die die Leidenschaft für
              Motorräder teilen und gemeinsam unterwegs sein möchten.
            </p>

            <p>
              Unsere Touren starten überwiegend im Raum Düsseldorf. Ob spontane
              Feierabendrunde, Wochenend-Ausfahrt oder gemeinsame Treffen – bei
              uns steht das Motorradfahren in Düsseldorf im Mittelpunkt.
            </p>

            <p>
              Egal ob 125er, Naked Bike, Supersportler, Chopper oder Tourer –
              jede Maschine und jeder Fahrstil ist willkommen. Wichtig ist die
              Freude am Fahren und eine entspannte, respektvolle Community.
            </p>

            <p>
              Wenn du eine aktive Motorradgruppe in Düsseldorf suchst, neue
              Leute kennenlernen möchtest und Lust auf gemeinsame Ausfahrten in
              der Region hast, dann bist du bei der RideOut Crew genau richtig.
            </p>
          </StyledSeoContainer>
        </StyledSeoSection>
      </StyledContent>
    </StyledWelcomeWrapper>
  );
};

export default Welcome;
