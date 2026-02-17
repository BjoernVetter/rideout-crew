import styled from "styled-components";

const StyledWelcome = styled.div`
  // hier habe ich ein padding gesetzt, damit ich den header fixed setzen konnte.
  margin-top: 130px;
  
  /* padding-top: 60px; */

  h1 {
    font-size: 2.5rem;
    @media (min-width: 900px) {
      font-size: 3.5rem;
    }
    text-align: center;
    color: #373938ff;
  }
  h3 {
    padding: 20px 0px 10px 0px;
    font-size: 2.0rem;
    @media (min-width: 900px) {
      font-size: 3.5rem;
    }
    text-align: center;
    color: #fff7ffff;
  }
  h4 {
    font-size: 1.9rem;
    @media (min-width: 900px) {
      font-size: 3.5rem;
    }
    text-align: center;
    padding-top: 15px;
    color: #373938ff;
  }
`;

export { StyledWelcome };
