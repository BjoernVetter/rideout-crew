"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: rgba(255, 255, 255, 0.06);
  padding: 20px 0;
  

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    @media screen and(min-width: 768px) {
      gap: 20px;
    }
    nav {
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        a {
          transition: all 0.3s ease;
          font-size: 20px;
          display: block;
          &:hover {
            color: rgb(168, 34, 34);;
            scale: 1.1;
          }
        }
        @media screen and (min-width: 768px) {
          flex-direction: row;
          gap: 10px;
        }
      }
    }
  }
`;

export { StyledFooter };
