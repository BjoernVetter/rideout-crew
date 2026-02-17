"use client";
import React from "react";
import { StyledFadeBackground } from "./styled-fadebackground";

const FadeBackground = ({ children }) => {
  return <StyledFadeBackground>{children}</StyledFadeBackground>;
};
export default FadeBackground;
