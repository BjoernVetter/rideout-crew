"use client";
import React from "react";
import { StyledWelcome } from "./styled-welcome";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="wrapper">
        <StyledWelcome>
          <h1>Du hast gescannt!</h1>
          <h3>
            {/* jetzt bist Du dran */}
            jetzt bist du am zug
          </h3>

          <h4>
            Willkommen bei <strong>3promille</strong> <br />
            der erste Drink geht auf Dich!{" "}
          </h4>
        </StyledWelcome>
      </div>
    </section>
  );
};

export default Welcome;
