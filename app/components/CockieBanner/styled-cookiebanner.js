"use client";
import styled from "styled-components";

const StyledBanner = styled.div`
  position: fixed;
  position: fixed;
  inset: 0; /* top: 0; right: 0; bottom: 0; left: 0 */
  background: rgba(255, 0, 247, 0.71);
  color: white;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  text-align: center;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  a {
    color: white;
    text-decoration: underline;
    display: block;
    &:hover {
      cursor: pointer;
      color: orange;
      scale: 1.1;
    }
  }

  button {
    border: 2px solid white;
    background-color: orange;
    width: 150px;
    height: 40px;
    border-radius: 25px;
    margin: 15px auto 25px auto;
    font-size: 20px;
    font-weight: bold;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: rgb(61, 13, 51);
      color: orange;
      transition: 0.3s;
    }
  }
`;

export { StyledBanner };
