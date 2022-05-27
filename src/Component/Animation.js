import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const textReveal = {
  initial: {
    opacity: 0,
    y: "200%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const textReveal_1 = {
  initial: {
    opacity: 0,
    y: "200%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const showtext = {
  initial: {
    opacity: 0,
    y: "100px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const expandLine = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
  },
};

export const expandDiv = {
  initial: {
    y: "40%",
    scale: 1.3,
  },
  animate: {
    y: 0,
    scale: 1,
  },
};

export const ImageBox = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      class="imageBox"
      variants={expandDiv}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.5,
        type: "Spring",
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const LineinView = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={expandLine}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.6,
        type: "Tween",
        ease: [0.6, -0.05, 0.01, 0.9],
      }}
    >
      {children}
    </motion.div>
  );
};
export const Showtext = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={showtext}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.6,
        type: "Spring",
        ease: [0.6, -0.05, 0.01, 0.9],
      }}
    >
      {children}
    </motion.div>
  );
};
