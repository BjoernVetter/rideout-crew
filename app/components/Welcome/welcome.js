"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  StyledWelcomeWrapper,
  StyledHero,
  StyledContent,
  StyledCard,
  StyledSeoSection,
  StyledSeoContainer,
  StyledVideoSection,
  StyledVideoContainer,
} from "./styled-welcome";

const Welcome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <StyledWelcomeWrapper>
      <StyledHero>
        {/* <img src="/logo/logo2.svg" alt="RideOut Crew Logo" /> */}
        <img src="/logo/logo3.svg" alt="RideOut Crew Logo" />

        {/* <video autoPlay muted loop playsInline preload="metadata">
          <source src="/videos/logo-alpha.mov" type="video/quicktime" />
          <source src="/logo/logo-alpha.webm" type="video/webm" />
        </video> */}
      </StyledHero>

      <StyledContent>
        <StyledCard>
          <h1>Willkommen bei RideOut</h1>

          <p className="subtitle">BIKER COMMUNITY • DÜSSELDORF & UMGEBUNG</p>

          <p className="text">
            Motorradgruppe aus Düsseldorf - offen für alle Bikes & Fahrstile.
            <br />
            <strong>Unser Fokus:</strong> gemeinsame Ausfahrten und gute Leute.
          </p>

          <div className="actions">
            <a
              className="socialLink"
              href="https://www.instagram.com/rideout.crew?igsh=MXFra2s0Z3k2cjdidg%3D%3D&utm_source=qr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Image src="/icons/instagram.svg" alt="" width={22} height={22} />
              Instagram
            </a>

            <a
              className="socialLink"
              href="https://www.facebook.com/people/Ride-Out/61579355470970/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Image src="/icons/facebook.svg" alt="" width={22} height={22} />
              Facebook
            </a>

            <a
              className="socialLink"
              href="https://chat.whatsapp.com/K1MEvQPN2FI92nE8XXFc8w"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Image src="/icons/whatsapp.svg" alt="" width={22} height={22} />
              WhatsApp
            </a>
          </div>
        </StyledCard>

        <StyledSeoSection>
          <StyledSeoContainer>
            <h2>Motorradgruppe Düsseldorf</h2>

            <p>
              Die RideOut Crew ist eine lockere Motorrad-Community aus
              Düsseldorf für Motorradfahrerinnen und Motorradfahrer aus
              Düsseldorf und Umgebung. Bei uns steht der Spaß am gemeinsamen
              Fahren im Vordergrund. Wir sind kein Motorradclub, kein Verein und
              verfolgen keine clubähnlichen Strukturen.
            </p>

            <p>
              Unsere Community richtet sich an alle, die gerne gemeinsam
              unterwegs sind, neue Leute kennenlernen möchten und Lust auf
              entspannte Ausfahrten haben. Ob spontane Feierabendrunde,
              Wochenendtour oder gemeinsames Treffen im Raum Düsseldorf: Bei uns
              geht es um das Hobby Motorradfahren und um eine respektvolle
              Gemeinschaft auf Augenhöhe.
            </p>

            <p>
              Egal ob 125er, Naked Bike, Supersportler, Chopper, Tourer oder
              Cruiser: Jede Maschine und jeder Fahrstil ist willkommen. Wichtig
              sind gegenseitiger Respekt, ein entspannter Umgang miteinander und
              die Freude am Fahren.
            </p>

            <p>
              Die RideOut Crew versteht sich ausdrücklich nicht als Motorradclub
              und distanziert sich von MC-Strukturen, Abzeichen, Rangordnungen
              oder vereinsähnlichen Verpflichtungen. Jeder kann sich einbringen,
              gemeinsame Fahrten vorschlagen oder einfach mitfahren, wenn es
              zeitlich passt.
            </p>

            <p>
              Wenn du eine lockere Motorradgruppe in Düsseldorf suchst, bei der
              es einfach um gemeinsame Ausfahrten, gute Gespräche und Spaß am
              Motorrad geht, dann bist du bei der RideOut Crew genau richtig.
            </p>
          </StyledSeoContainer>
        </StyledSeoSection>

        <StyledVideoSection>
          <StyledVideoContainer>
            <h2>Das sind wir</h2>

            <video autoPlay muted loop playsInline controls preload="metadata">
              <source src="/videos/rideoutvideo.mp4" type="video/mp4" />
            </video>
          </StyledVideoContainer>
        </StyledVideoSection>
      </StyledContent>
    </StyledWelcomeWrapper>
  );
};

export default Welcome;
