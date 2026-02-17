"use client";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 20px;
  gap: 30px;

  .card {
    background-color: hsla(0, 100%, 61%, 0.49);
    box-shadow: 0 25px 15px rgba(0, 0, 0, 0.3);
    width: 310px;
    height: 480px;
    border-radius: 40px;
    border: 6px solid white;
    margin: 80px auto 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-image {
    border: 4px solid #00ff48ff;
    width: 250px;
    height: 250px;
    border-radius: 25px;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
  }

  .card-name {
    margin-top: 25px;
    font-family: luckiestGuy;
    font-size: 30px;
    /* color: #00ff48ff; */
    color: #fff7ffff;
  }

  .card-graphic {
    padding-top: 20px;

    img {
      width: 240px;
      height: 120px;
      border: 4px solid  #00ff48ff ;

      border-radius: 15px;
      background-color: hsla(0, 38%, 26%, 0.63);
      
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 30),
        inset -9px -9px 4px rgba(8, 0, 0, 0.09);
      border-radius: 10px;
    }
  }
`;

export { StyledCardContainer };
