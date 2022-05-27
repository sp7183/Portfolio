import React from "react";
import styled from "styled-components";

const GrainBox = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: #e7e7e7;
  .grain {
    height: 100vh;
  }
  .grain:after {
    animation: grain 8s steps(10) infinite;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png");
    content: "";
    height: 300%;
    left: -50%;
    opacity: 0.3;
    position: fixed;
    top: -110%;
    width: 300%;
  }
  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
`;
function Grain() {
  return (
    <GrainBox>
      <div classname="grain" />
    </GrainBox>
  );
}

export default Grain;
