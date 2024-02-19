"use client";
import React, { useState } from "react";
import styles from "@/css/Navbar.module.scss";
import { HiBars3 } from "react-icons/hi2";
import IconButton from "@mui/joy/IconButton";
import { motion } from "framer-motion";
export function NavbarMobile() {
  const [pressed, setPressed] = useState(false);
  const handlePressed = () => {
    setPressed(!pressed);
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>YW.</h1>
        <button className={styles.buttonStyle} onClick={() => handlePressed()}>
          <span className={pressed ? `${styles.active}` : ""} />
          <span className={pressed ? `${styles.active}` : ""} />
          <span className={pressed ? `${styles.active}` : ""} />
          {/* <HiBars3 color="#FFF" size={30} /> */}
        </button>
      </div>
      <div className={styles.contentContainer}>
        <motion.div
          className={styles.listContainer}
          initial={{ y: -150, opacity: 0 }} // Initial hidden state
          animate={{ y: pressed ? 0 : -150, opacity: pressed ? 1 : 0 }} // Animation when button is clicked
          transition={{ type: "tween", duration: 0.4 }} // Adjust spring animation properties as needed
        >
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact Me</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
export default function Navbar() {
  return <NavbarMobile />;
}
