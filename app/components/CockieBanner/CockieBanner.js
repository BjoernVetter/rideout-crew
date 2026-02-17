"use client";
import { useEffect, useState } from "react";
import { StyledBanner } from "./styled-cookiebanner";
import Link from "next/link";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <StyledBanner>
      <p>
        Diese Website verwendet Cookies, um dein Erlebnis zu verbessern.{""}
        <Link href="/datenschutz">Mehr erfahren</Link>
      </p>
      <button onClick={handleAccept}>Verstanden </button>
    </StyledBanner>
  );
};

export default CookieBanner;
