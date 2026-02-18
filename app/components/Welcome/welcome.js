"use client";
import Image from "next/image";

import {
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

      {/* CONTENT UNTER DEM VIDEO */}
      <StyledContent>
        {/* CARD (CTA) */}
        <StyledCard>
          <StyledLogoRow>
            <Image src="/logo/Logo.svg" alt="RideOut Crew" width={140} height={60} />
          </StyledLogoRow>

          <StyledTitle>Motorradgruppe Düsseldorf – RideOut Crew</StyledTitle>

          <StyledSubTitle>BIKER COMMUNITY • DÜSSELDORF & UMGEBUNG</StyledSubTitle>

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

          <StyledQrBox>
            <StyledQrTitle>QR-Code scannen & direkt beitreten</StyledQrTitle>
            <Image src="/Images/qr.png" alt="QR Code" width={160} height={160} />
            <StyledHint>Oder nutze die Buttons oben.</StyledHint>
          </StyledQrBox>
        </StyledCard>

        {/* SEO SECTION (unter der Card) */}
        <StyledSeoSection>
          <StyledSeoContainer>
            <StyledSeoTitle>Motorradgruppe Düsseldorf & Umgebung</StyledSeoTitle>

            <p>
              Die RideOut Crew ist eine Motorradgruppe aus Düsseldorf für
              Fahrerinnen und Fahrer aus Düsseldorf, Erkrath, Mettmann und dem
              gesamten Raum NRW. Egal ob 125er, Naked Bike, Supersportler,
              Chopper oder Tourer,  bei uns steht die gemeinsame Leidenschaft
              für Motorräder im Mittelpunkt.
            </p>

            <p>
              Wir organisieren regelmäßige Ausfahrten rund um Düsseldorf, fahren
              ins Bergische Land oder treffen uns spontan für Touren in der
              Region. Unsere WhatsApp-Gruppe verbindet alle Mitglieder schnell
              und unkompliziert.
            </p>

            <p>
              Wenn du eine aktive Motorradgruppe in Düsseldorf suchst, neue
              Leute kennenlernen möchtest und Lust auf gemeinsame Touren hast,
              dann bist du bei der RideOut Crew genau richtig.
            </p>
          </StyledSeoContainer>
        </StyledSeoSection>
      </StyledContent>
    </StyledWelcomeWrapper>
  );
};

export default Welcome;
