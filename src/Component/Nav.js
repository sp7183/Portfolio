import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { expandLine } from "./Animation";

const Line = styled(motion.div)`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.border};
`;
const NavContainer = styled.section`
  position: relative;
  width: 90vw;
  margin: 0 auto;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  .NavItems {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
    font-family: excon;
    @media (max-width: 500px) {
      font-size: 0.7rem;
    }
    span {
      display: inline-block;
    }
    a {
      padding-bottom: 20px;
      text-decoration: none;
    }
    #links {
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      a {
        position: relative;
        display: inline-block;
        margin-left: 40px;
      }
      #about:after {
        content: "About";
        position: absolute;
        top: 100%;
        left: 0%;
        color: inherit;
      }
      #work:after {
        content: "Print It";
        position: absolute;
        top: 100%;
        left: 0%;
        color: inherit;
      }
    }
  }
`;
function Nav({ border }) {
  return (
    <NavContainer>
      <div className="NavItems">
        <span id="name">
          <a style={{ color: `${border}` }} href="/">
            Paramjeet
          </a>
        </span>
        <span id="links">
          <motion.a
            style={{ color: `${border}` }}
            whileHover={{ transform: "translateY(-100%)" }}
            transition={{
              duration: 0.5,
              type: "Tween",
              ease: "easeOut",
            }}
            id="about"
            href="/About"
          >
            About
          </motion.a>
          <motion.a
            style={{ color: `${border}` }}
            whileHover={{ transform: "translateY(-100%)" }}
            transition={{
              duration: 0.5,
              type: "Tween",
              ease: "easeOut",
            }}
            id="work"
            href="/Resume"
          >
            Resume
          </motion.a>
        </span>
      </div>
      <Line
        border={border}
        variants={expandLine}
        initial="initial"
        animate="animate"
        transition={{
          delay: 3.5,
          duration: 2,
          type: "Inertia",
          ease: "easeIn",
        }}
      />
    </NavContainer>
  );
}

export default Nav;
