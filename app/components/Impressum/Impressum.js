"use client";
import React from "react";
import { StyledImpressum } from "./styled-impressum";


const Impressum = () => {
  return (
    <section id="impressum">
      <div className="wrapper">
        <StyledImpressum>
        <h1>Impressum</h1>
        <br />
        <p>
          Angaben gemäß § 5 TMG:
          <br />
          <strong>Björn Vetter</strong>
          <br />
          Engelbertstraße 13
          <br />
          40233 Düsseldorf
          <br />
          Deutschland
        </p>
        <br />
        <br />

        <h2>Kontakt</h2>
        <br />
        <p>
          Telefon: 0172/4189006
          <br />
          E-Mail: fineschliffdesign@yahoo.de
        </p>
        <br />
        <br />

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <br />
        <p>
          Björn Vetter
          <br />
          Engelbertstraße 13
          <br />
          40233 Düsseldorf
        </p>
        <br />
        <br />

        <h2>Haftung für Inhalte</h2>
        <br />
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. [...]
        </p>
        </StyledImpressum>
      </div>
    </section>
  );
};

export default Impressum;
