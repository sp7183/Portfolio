import React, { useRef, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import { works } from "../Component/Data";
import Mask from "../Assets/heightMap.webp";
import Footer from "../Component/Footer";
import { Showtext } from "../Component/Animation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Panels } from "../Component/Load";
import { motion } from "framer-motion";
import { textReveal } from "../Component/Animation";
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--text);
`;
const Container = styled.section`
  width: 100vw;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  .image {
    position: relative;
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      display: block;
      width: 90vw;
      height: auto;
      bottom: 10vh;
      left: 5vw;
      position: absolute;
      text-decoration: none;
      color: var(--bg);
      font-size: 6vw;
      line-height: 97%;
      text-transform: uppercase;
      font-family: exil;
    }
  }
`;
const Details = styled.div`
  padding-top: 50px;
  width: 90vw;
  height: auto;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Links = styled.div`
  width: 100px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    color: var(--text);
    text-decoration: none;
    font-size: 3rem;
  }
`;
const Desc = styled.div`
  width: 100%;
  height: auto;
  p {
    margin-left: 50%;
    width: 30vw;
    font-size: 1.5rem;
    font-family: grotesk;
    color: var(--text);
    word-spacing: 10px;
    @media (max-width: 1024px) {
      margin-left: 0%;
      width: 100%;
    }
  }
`;
const Lang = styled.div`
  width: 100%;
  height: auto;
  p {
    margin-left: 10%;
    width: auto;
    font-size: 2rem;
    font-family: monument;
    color: var(--text);
    word-spacing: 10px;
    @media (max-width: 1024px) {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const ImageGrid = styled.div`
  padding-top: 150px;
  width: 90vw;
  height: 100vh;
  height: auto;
  margin: auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1024px) {
    grid-gap: 30px;
    grid-template-columns: 1fr;
  }
  img {
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const Device = styled.div`
  padding-top: 150px;
  width: 90vw;
  height: auto;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .Mob {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      margin: auto;
      width: 340px;
      object-fit: contain;
    }
    @media (max-width: 1024px) {
      justify-content: space-between;
      flex-direction: column;
      img {
        margin: auto;
        margin-top: 40px;
        width: 80%;
        object-fit: contain;
      }
    }
  }
  .Tab {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 512px;
      object-fit: contain;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      img {
        margin: auto;
        width: 80%;
        object-fit: contain;
      }
    }
  }
`;
const Next = styled.div`
  width: 90vw;
  margin: 0 auto;
  position: relative;
  height: 200px;
  font-family: monument;
  font-size: 6vw;
  a {
    display: block;
    width: 35%;
    position: absolute;
    right: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-text-stroke: 1px var(--text);
    color: transparent;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      color: var(--text);
      -webkit-text-stroke: none;
    }
  }
`;

function Work() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mobile, setMobile] = useState("");
  const [tablet, setTablet] = useState("");
  const [git, setGit] = useState("");
  const [live, setLive] = useState("");
  const [next, setNext] = useState(null);
  const [lang, setLang] = useState("");
  const [bg, setBg] = useState("");
  const [eximage, setEximage] = useState("");
  const containerRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const newWork = works.find((work) => work.id === parseInt(id));
    setTitle(newWork.name);
    setDesc(newWork.details);
    setMobile(newWork.mobile);
    setTablet(newWork.tablet);
    setGit(newWork.github);
    setLive(newWork.live);
    setNext(newWork.next);
    setBg(newWork.bg);
    setLang(newWork.lang);
    setEximage(newWork.eximages);
  }, []);

  return (
    <>
      <Panels />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        containerRef={containerRef}
      >
        <Container data-scroll-container ref={containerRef}>
          <div className="image">
            <motion.img
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 3.3,
                duration: 2,
                type: "Spring",
                ease: [0.6, -0.05, 0.01, 0.9],
              }}
              src={bg}
            />
            <motion.span
              id="title"
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1,
                delay: 3.5,
                ease: [0.6, -0.05, 0.01, 0.9],
              }}
            >
              {title[0]}
              <br />
              {title[1]}
            </motion.span>
          </div>
          <Details>
            <Line />
            <Links>
              <a href="">
                <i class="fas fa-external-link-square-alt" />
              </a>
              <a href="">
                <i class="fab fa-github-square" />
              </a>
            </Links>
            <Desc>
              <Showtext>
                <p>{desc}</p>
              </Showtext>
            </Desc>
            <Lang>
              <p>{lang}</p>
            </Lang>
          </Details>
          <ImageGrid>
            <img src={eximage[0]} />
            <img src={eximage[1]} />
            <img src={eximage[2]} />
            <img src={eximage[3]} />
          </ImageGrid>
          <Device>
            <div className="Mob">
              <img src={mobile[0]} />
              <img src={mobile[1]} />
            </div>
            <div className="Tab">
              <img src={tablet[0]} />
              <img src={tablet[1]} />
            </div>
          </Device>
          <Next>
            <a href={next}>
              <h>NEXT</h>
              <i class="fad fa-chevron-right"></i>
            </a>
          </Next>
          <Footer />
        </Container>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Work;
