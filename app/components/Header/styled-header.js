"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #ff00f7ff;
  padding: 20px 0;
  border-bottom: 4px solid white;
  position: fixed;
  width: 100%;
  z-index: 10;

  .flex-container {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-link {
      display: flex;
      align-items: center;
      height: 60px;
      line-height: 0;

      &:hover {
        img {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
        }
      }

      img {
        display: block;
        height: 100%;
        width: auto;
        margin: 0;
        padding: 0;
        transition: transform 0.3s ease-in-out;
      }
    }

    .burger {
      background: none;
      border: none;
      font-size: 2rem;
      position: absolute;
      right: 20px;
      top: 3.5px;
      cursor: pointer;
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
`;

export { StyledHeader };
