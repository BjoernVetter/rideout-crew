"use client";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation.js";
import { StyledHeader } from "./styled-header.js";
import Link from "next/link.js";
import Image from "next/image.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="flex-container">
          <Link href="/" className="logo-link" passHref>
            <Image
              src="/svg/logo.svg"
              alt="3Promille Logo"
              width={140}
              height={45}
              priority
            />
          </Link>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                <path d="M9 8l6 8" />
                <path d="M15 8l-6 8" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-burger"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" />
                <path d="M5 12h14" />
              </svg>
            )}
          </button>

          <Navigation
            menuOpen={menuOpen}
            ref={navRef}
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
