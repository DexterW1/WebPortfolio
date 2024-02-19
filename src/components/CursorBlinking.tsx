"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/css/ComponentsCss/CursorBlinking.module.scss";

const cursorVariant = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
export default function CursorBlinking() {
  return (
    <motion.div
      className={styles.blinkStyle}
      variants={cursorVariant}
      animate="blinking"
    />
  );
}
