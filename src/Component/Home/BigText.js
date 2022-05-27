import React from "react";
import { motion } from "framer-motion";
import { textReveal } from "../Animation.js";
function BigText() {
  return (
    <div className="textblock">
      <div className="Textwrapper">
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 3.5,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          UI/UX
        </motion.span>
        <br />
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 3.8,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          DESIGNER
        </motion.span>
        <br />
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 4.1,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          + WEB
        </motion.span>
        <br />
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 4.4,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          DEVELOPER
        </motion.span>
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 4.7,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
          id="foot"
        >
          <span id="arrow">
            <i class="fal fa-chevron-double-down"></i>
          </span>
          <span>Scroll Down</span>
          <span></span>
        </motion.span>
      </div>
    </div>
  );
}

export default BigText;
