"use client";
import Image from "next/image";

import {
  StyledWelcomeWrapper,
  StyledHero,
  StyledHeroVideo,
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
      {/* HERO VIDEO */}
      <StyledHero>
        <StyledHeroVideo autoPlay muted loop playsInline preload="metadata">
          <source src="/videos/rideout-hero.mp4" type="video/mp4" />
        </StyledHeroVideo>
        <StyledHeroOverlay />
      </StyledHero>

      <StyledContent>
        <StyledCard>
          <StyledTitle>RideOut Crew</StyledTitle>
          {/* <StyledTitle>Motorradgruppe Düsseldorf RideOut Crew</StyledTitle> */}
          <StyledSubTitle>
            BIKER COMMUNITY • DÜSSELDORF & UMGEBUNG
          </StyledSubTitle>

          <StyledText>
            Motorradgruppe aus Düsseldorf – offen für alle Bikes & Fahrstile.
            <br />
            <strong>Unser Fokus:</strong> gemeinsame Ausfahrten und gute Leute.
          </StyledText>

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
              href="https://www.facebook.com/people/Ride-Out/61579355470970/?mibextid=wwXIfr&rdid=Vx4COYzCvJh03BCH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17WJR7v7bt%2F%3Fmibextid%3DwwXIfr/"
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

        {/* SEO SECTION (unter der Card) */}
        <StyledSeoSection>
          <StyledSeoContainer>
            <StyledSeoTitle>
              Motorradgruppe Düsseldorf – RideOut Crew
            </StyledSeoTitle>

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
