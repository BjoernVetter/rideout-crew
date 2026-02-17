"use client";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`

0%   { opacity: 0; }
10%  { opacity: 1; }
90%  { opacity: 1; }
100%  { opacity: 0; }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 700px;

  @media (min-width: 900px) {
    max-width: 650px;
    height: 800px;
  }
  margin: 0 auto;
  background-color: rgb(255, 0, 247);
  border-radius: 20px;
  border: 4px solid white;
  box-shadow: 0 25px 15px rgba(0, 0, 0, 0.3);
  gap: 20px;
  padding: 20px;

  h2 {
    text-align: center;
    margin: 25px 0 10px 0;
    font-size: clamp(2rem, 3vw + 0.7rem, 3rem);
  }

  input:not(input[type="checkbox"]),
  textarea {
    color: black;
    border: none;
    border-radius: 3px;
    background-color: white;
    width: 100%;
    max-width: 900px;
    height: 35px;
    @media (min-width: 900px) {
      height: 80px;
    }
    padding: 10px 20px;
  }

  input::placeholder {
    color: orange;
    text-align: start;
  }

  textarea {
    color: black;
    border-radius: 3px;
    background-color: white;
    width: 100%;
    max-width: 900px;
    height: 900px;
    border: none;
    padding: 10px 20px;
  }

  textarea::placeholder {
    color: orange;
    text-align: center;
  }

  .checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 90px;
    width: 280px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.2;
    color: white;

    input[type="checkbox"] {
      width: 28px;
      height: 28px;
      border: 2px solid black;
      border-radius: 3px;
      background-color: white;
      appearance: none;
      cursor: pointer;
      position: relative;
    }

    input[type="checkbox"]:checked::after {
      content: "✔";
      color: orange;
      position: absolute;
      top: -2px;
      left: 3px;
      font-size: 30px;
    }

    span {
      display: block;
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
  }
  button {
    background-color: orange;
    width: 100%;
    max-width: 150px;
    height: 150px;
    @media (min-width: 900px) {
      max-width: 200px;
      height: 150px;
    }
    border: 2px solid white;
    border-radius: 25px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
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

const StyledFeedback = styled.p`
  color: ${(props) => (props.$success ? "white" : "red")};
  text-align: center;
  margin-bottom: 10px;
  font-size: 12px;
  animation: ${fadeInOut} 3s ease forwards;
`;

export { StyledForm, StyledFeedback };
