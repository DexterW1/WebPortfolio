"use client";
import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import styles from "@/css/Navbar.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";
export function NavbarMobile() {
  const [pressed, setPressed] = useState(false);
  const handlePressed = () => {
    setPressed(!pressed);
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Link href="/" replace>
          <h1>YW.</h1>
        </Link>

        <button className={styles.buttonStyle} onClick={() => handlePressed()}>
          <span className={pressed ? `${styles.active}` : ""} />
          <span className={pressed ? `${styles.active}` : ""} />
          <span className={pressed ? `${styles.active}` : ""} />
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
export function NavbarFull() {
  const [pressed, setPressed] = useState(false);
  const handlePressed = () => {
    setPressed(!pressed);
  };
  return (
    <div className={styles.container}>
      <div className={styles.fullHeaderContainer}>
        <Link href="/" replace>
          <h1>YW.</h1>
        </Link>
        <div className={styles.fullContentContainer}>
          <Link href="/" replace>
            <p>About Me</p>
          </Link>
          <Link href="/" replace>
            <p>Skills</p>
          </Link>
          <Link href="/" replace>
            <p>Projects</p>
          </Link>
          <Link href="/" replace>
            <p>Contact Me</p>
          </Link>
        </div>

        <a
          href="/pdf/YiuMingWongResume.pdf"
          className={styles.aButtonStyle}
          download
        >
          Resume
          <MdOutlineFileDownload />
        </a>
      </div>
    </div>
  );
}
export default function NavbarCustom() {
  return (
    <>
      <div className={styles.navbar_mobile_container}>
        <NavbarMobile />
      </div>
      <div className={styles.navbar_full_container}>
        <NavbarFull />
      </div>
    </>
  );
}
