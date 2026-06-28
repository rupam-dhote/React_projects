import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Buttons";

const Start = ({ toggle }) => {
  return (
    <Container>
      <div className="img">
        <img src="/images/dices.png" />
      </div>
      <div className="con">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  max-width: 1180px;

  .con {
    h1 {
      font-size: 5rem;
      white-space: nowrap;
    }
  }
  @media (width<=720px) {
    flex-direction: column;
    .img {
      img {
        max-width: 500px;
      }
    }
  }
  @media (width<=500px) {
    .img {
      img {
        max-width: 450px;
      }
    }
    .con {
      h1 {
        font-size: 4rem;
        white-space: nowrap;
      }
    }
  }
  /* .img {
    animation: rotate 3s linear 2s infinite alternate;
  }
  @keyframes rotate {
    0% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-5deg);
    }
  } */
`;

export default Start;
