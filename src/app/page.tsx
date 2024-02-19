"use client";
import React from "react";
import styles from "./page.module.scss";
import Introduction from "@/screens/Introduction";
import Skills from "@/screens/Skills";
export default function Home() {
  return (
    <div className={styles.container}>
      <Introduction />
      <Skills />
    </div>
  );
}
