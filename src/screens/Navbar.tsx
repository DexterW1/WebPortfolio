"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import styles from "@/css/Navbar.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useScrollStore from "@/store/scrollStore";
import { motion } from "framer-motion";
import { set } from "animejs";
export function NavbarMobile() {
  const [pressed, setPressed] = useState(false);
  const router = useRouter();
  const handleScroll = (id: string) => {
    if (window.location.pathname === "/") {
      scrollToSection(id);
      setPressed(false);
    } else {
      router.push("/");
      setTimeout(() => {
        setPressed(false);
        scrollToSection(id);
      }, 500);
    }
  };
  const handlePressed = () => {
    setPressed(!pressed);
  };
  const scrollToSection = useScrollStore((state) => state.scrollToSection);
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
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: pressed ? 0 : -150, opacity: pressed ? 1 : 0 }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          <ul>
            <li onClick={() => handleScroll("about")}>About Me</li>
            <li onClick={() => handleScroll("skills")}>Skills</li>
            <li onClick={() => handleScroll("projects")}>Projects</li>
            <li onClick={() => handleScroll("contact")}>Contact Me</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
export function NavbarFull() {
  const [pressed, setPressed] = useState(false);
  const scrollToSection = useScrollStore((state) => state.scrollToSection);
  const router = useRouter();
  const handleScroll = (id: string) => {
    if (window.location.pathname === "/") {
      scrollToSection(id);
    } else {
      router.push("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 500);
    }
  };
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
          <Link onClick={() => handleScroll("about")} href="/" replace>
            <p>About Me</p>
          </Link>
          <Link onClick={() => handleScroll("skills")} href="/" replace>
            <p>Skills</p>
          </Link>
          <Link onClick={() => handleScroll("projects")} href="/" replace>
            <p>Projects</p>
          </Link>
          <Link onClick={() => handleScroll("contact")} href="/" replace>
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
export default function NavbarCustom({ scrollToSection }: any) {
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
