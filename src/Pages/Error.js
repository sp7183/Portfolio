import React from "react";
import styled from "styled-components";

const Err = styled.div`
  width: 100vw;
  font-family: monument;
  height: 100vh;
  position: fixed;
  inset: 0;
  color: var(--text);
  div {
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 5vw;
      text-align: center;
    }
  }
  a {
    text-align: center;
    display: block;
    font-size: 6vw;
    color: var(--text);
  }
`;

function Error() {
  return (
    <Err>
      <div>
        <h1>404</h1>
        <h1>You Lost Kid</h1>
        <a href="/">Go Home</a>
      </div>
    </Err>
  );
}

export default Error;
