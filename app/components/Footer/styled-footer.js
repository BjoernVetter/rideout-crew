"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: rgb(255, 0, 247);
  padding: 20px 0;
  border-top: 4px solid white;

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
          font-size: 16px;
          display: block;
          &:hover {
            color: orange;
            scale: 1.1;
          }
        }
        @media screen and (min-width: 768px) {
          flex-direction: row;
          gap: 20px;
        }
      }
    }
  }
`;

export { StyledFooter };
