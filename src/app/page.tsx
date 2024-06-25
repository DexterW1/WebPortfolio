"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import Introduction from "@/screens/Introduction";
import Skills from "@/screens/Skills";
import Projects from "@/screens/Projects";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
export default function Home() {
  const mouseRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const updateMousePosition = (ev: MouseEvent) => {
  //     if (!mouseRef.current) return;
  //     const { clientX, clientY } = ev;
  //     const { scrollX, scrollY } = window;
  //     mouseRef.current.style.setProperty("--x", `${clientX + scrollX}px`);
  //     mouseRef.current.style.setProperty("--y", `${clientY + scrollY}px`);
  //   };

  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);
  return (
    <div ref={mouseRef} className={styles.container}>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
