import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMouse";

const CursorStyles = styled(motion.div)`
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 0.36vw;
  height: 0.36vw;
  padding: 1.5vw;
  border-radius: 100%;
  background-color: var(--text);
  border: 0.1vw solid var(--text);
  mix-blend-mode: difference;
  z-index: 20;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    display: none;
  }
`;

const PointerStyles = styled.div`
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 0.6vw;
  height: 0.6vw;
  border-radius: 100%;
  background-color: var(--text);
  transform: translate(-50%, -50%);
  z-index: 20;
  &.on-focus {
    background-color: transparent;
  }
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    display: none;
  }
`;

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <CursorStyles
        animate={{
          top: y,
          left: x,
          x: "-50%",
          y: "-50%",
          scale: 1,
          opacity: 0.15,
          border: "none",
          backgroundColor: `black`,
        }}
        transition={{ ease: "linear", duration: 0.15 }}
      />
      <PointerStyles
        className={""}
        style={{
          top: y,
          left: x,
        }}
      />
    </>
  );
};

export { Cursor };
