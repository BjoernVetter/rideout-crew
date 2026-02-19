"use client";
import React from "react";
import {
  StyledImpressumSection,
  StyledImpressumContainer,
  StyledImpressumContent,
} from "./styled-impressum";

const Impressum = () => {
  return (
    <StyledImpressumSection id="impressum">
      <StyledImpressumContainer>
        <StyledImpressumContent>
          <h1>Impressum</h1>

          <p className="lead">
            <strong>Angaben gemäß § 5 TMG</strong>
          </p>

          <p>
            <strong>Björn Vetter</strong>
            <br />
            Engelbertstraße 13
            <br />
            40233 Düsseldorf
            <br />
            Deutschland
          </p>

          <p>E-Mail: fineschliffdesign@yahoo.de</p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>

          <p>
            Björn Vetter
            <br />
            Engelbertstraße 13
            <br />
            40233 Düsseldorf
          </p>

          <h2>Haftung für Inhalte</h2>

          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>

          <p>
            Unsere Website enthält Links zu externen Websites Dritter
            (Instagram, Facebook, WhatsApp). Auf deren Inhalte haben wir keinen
            Einfluss. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>

          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </StyledImpressumContent>
      </StyledImpressumContainer>
    </StyledImpressumSection>
  );
};

export default Impressum;
