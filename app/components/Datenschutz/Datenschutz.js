"use client";
import React from "react";
import {
  StyledDatenschutzSection,
  StyledDatenschutzContainer,
  StyledDatenschutzContent,
} from "./styled-datenschutz";

const Datenschutz = () => {
  return (
    <StyledDatenschutzSection id="datenschutz">
      <StyledDatenschutzContainer>
        <StyledDatenschutzContent>
          <h1>Datenschutzerklärung</h1>

          <h2>1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <h2>2. Verantwortlicher</h2>
          <p>
            Björn Vetter <br />
            Engelbertstraße 13 <br />
            40233 Düsseldorf <br />
            Deutschland <br />
            E-Mail: fineschliffdesign@yahoo.de
          </p>

          <h2>3. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister (Vercel Inc.,
            USA) gehostet. Beim Aufruf der Website werden automatisch folgende
            Daten erfasst:
          </p>

          <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und Version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>

          <p>
            Diese Daten dienen der technischen Bereitstellung und Sicherheit der
            Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2>4. Externe Links zu Social Media</h2>
          <p>
            Diese Website enthält Links zu externen Plattformen (Instagram,
            Facebook, WhatsApp). Beim Anklicken eines solchen Links verlassen
            Sie unsere Website. Für die Datenverarbeitung auf diesen Plattformen
            ist ausschließlich der jeweilige Anbieter verantwortlich.
          </p>

          <h2>5. Keine Cookies &amp; kein Tracking</h2>
          <p>
            Diese Website verwendet keine Tracking- oder Analyse-Tools. Es
            werden keine Marketing- oder Analyse-Cookies gesetzt.
          </p>

          <h2>6. Verwendung von Schriftarten</h2>
          <p>
            Die auf dieser Website verwendeten Schriftarten werden lokal
            eingebunden. Es erfolgt kein Abruf von Google Fonts oder anderen
            externen Anbietern.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft gemäß Art. 15 DSGVO, Berichtigung
            gemäß Art. 16 DSGVO, Löschung gemäß Art. 17 DSGVO, Einschränkung der
            Verarbeitung gemäß Art. 18 DSGVO sowie Widerspruch gemäß Art. 21
            DSGVO. Hierzu können Sie sich jederzeit unter der oben angegebenen
            E-Mail-Adresse an uns wenden.
          </p>
        </StyledDatenschutzContent>
      </StyledDatenschutzContainer>
    </StyledDatenschutzSection>
  );
};

export default Datenschutz;