"use client";
import React from "react";
import styles from "./page.module.scss";
import Introduction from "@/screens/Introduction";
import Skills from "@/screens/Skills";
import Projects from "@/screens/Projects";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
export default function Home() {
  return (
    <div className={styles.container}>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
