import React from "react";
import styled from "styled-components";
import resume from "../Assets/Resume.png";
const Container = styled.section`
  width: 90vw;
  min-height: 100vh;
  margin: 0 auto;
  .resume {
    width: 100%;
    height: 100%;
    position: relative;
    .image {
      position: relative;
      margin: auto;
      max-width: 595px;
      max-height: 842px;
      text-align: center;
      a {
        color: var(--text);
        font-size: 5vw;
        font-family: monument;
      }
      img {
        margin: auto;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

function Resume() {
  return (
    <Container>
      <div className="resume">
        <div className="image">
          <a href="https://drive.google.com/file/d/1mxae1x_a3gJg1AiNsTI_tiHzU27SOkYv/view?usp=sharing">
            Download
          </a>
          <img src={resume} />
        </div>
      </div>
    </Container>
  );
}

export default Resume;
