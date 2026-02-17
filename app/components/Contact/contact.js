"use client";
import { StyledContact } from "./styled-contact";
import React from "react";

const Contact = () => {
  return (
    <StyledContact>
      <p className="text-content">
        {/* Du willst uns was sagen, mit uns feiern oder einfach nur 'ne Runde
        schnacken? Dann schreib uns. Wir beißen nur, wenn du zuerst provozierst. */}
        Ob Partyalarm oder einfach nur Quatschen, schreib uns, wir sind voll
        dabei wenn’s ums Feiern, Lachen und gute Vibes geht.
      </p>
    </StyledContact>
  );
};

export default Contact;
