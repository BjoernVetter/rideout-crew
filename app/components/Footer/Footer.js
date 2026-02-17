import React from "react";
import { StyledFooter } from "./styled-footer.js";
import FooterNavigation from "./FooterNavigation.js";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-content">
          <FooterNavigation />
          <p>&copy; {new Date().getFullYear()} - 3 Promille</p>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
