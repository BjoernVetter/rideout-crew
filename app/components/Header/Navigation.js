"use client";
import React, { forwardRef } from "react";
import { StyledNavigation } from "./styled-navigation.js";

const Navigation = forwardRef(({ menuOpen, onLinkClick }, ref) => {
  return (
    <StyledNavigation ref={ref} $menuOpen={menuOpen}>
      <ul>
        <li>
          <a href="/#welcome" onClick={onLinkClick}>
            Willkommen
          </a>
        </li>
        <li>
          <a href="/#about-us" onClick={onLinkClick}>
            Über uns
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={onLinkClick}>
            Kontakt
          </a>
        </li>
      </ul>
    </StyledNavigation>
  );
});

export default Navigation;
