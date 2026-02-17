"use client";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  ul {
    padding: ${({ $menuOpen }) => ($menuOpen ? "30px" : "0")};
    margin: 0;
    max-height: ${({ $menuOpen }) => ($menuOpen ? "300px" : "0")};
    opacity: ${({ $menuOpen }) => ($menuOpen ? "1" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
    text-align: center;

    li {
      list-style: none;
      a {
        font-size: 30px;
        text-decoration: none;
        font-weight: bolder;
        color: inherit;
        display: inline-block;
        padding: 10px 10px;
        transition: all 0.3s ease;

        &:hover {
          color: orange;
          scale: 1.1;
        }
      }
    }

    @media (min-width: 768px) {
      max-height: none !important;
      opacity: 1 !important;
      display: flex !important;
      flex-direction: row;
      justify-content: flex-end;
      a {
        font-size: 50px;
      }
      li {
        list-style: none;

        a {
          text-decoration: none;
          font-weight: bold;
          font-size: 30px;
          color: inherit;
          display: inline-block;
          padding: 10px 10px;
          gap: 100px;
        }
      }
    }
  }
`;

export { StyledNavigation };
