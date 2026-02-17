"use client";
import React from "react";
import { StyledDatenschutz } from "./styled-datenschutz";

const Datenschutz = () => {
  return (
    <section id="datenschutz">
      <div className="wrapper">
        <StyledDatenschutz>
          <h1>Datenschutzerklärung</h1>
          <br />
          <p>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
            Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz
            „Daten“) innerhalb unseres Onlineangebotes und der mit ihm
            verbundenen Webseiten, Funktionen und Inhalte auf.
          </p>
          <br />
          <br />

          <h2>Verantwortlicher</h2>
          <br />
          <p>
            Björn Vetter
            <br />
            Engelbertstraße 13
            <br />
            40233 Düsseldorf
            <br />
            fineschliffdesign@yahoo.de
          </p>
          <br />
          <br />

          <h2>Erhebung und Speicherung personenbezogener Daten</h2>
          <br />
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät
            zum Einsatz kommenden Browser automatisch Informationen an den
            Server unserer Website gesendet. Diese Informationen werden temporär
            in einem sog. Logfile gespeichert. Folgende Informationen werden
            dabei ohne Ihr Zutun erfasst:
          </p>
          <br />
          <br />
          <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>
              verwendeter Browser und ggf. das Betriebssystem Ihres Rechners
            </li>
          </ul>
          <br />
          <br />

          <h2>Verwendung von Google Fonts</h2>
          <br />
          <p>
            Auf dieser Website werden Schriftarten lokal eingebunden, es erfolgt
            kein externer Abruf bei Google.
          </p>
          <br />
          <br />

          <br />
          <p>
            Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            Wir haben ein berechtigtes Interesse daran, unsere Website vor
            automatisierter Ausspähung und Spam zu schützen.
          </p>
          <br />

          <br />

          <h2>Ihre Rechte</h2>
          <br />
          <p>
            Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten
            personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der
            Datenverarbeitung sowie ggf. ein Recht auf Berichtigung, Sperrung
            oder Löschung dieser Daten.
          </p>
        </StyledDatenschutz>
      </div>
    </section>
  );
};

export default Datenschutz;
