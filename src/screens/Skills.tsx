"use client";
import React from "react";
import styles from "@/css/Skills.module.scss";
import SkillsIcons from "@/components/SkillsIcons";
export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>
          My <span>Skills</span>
        </h1>
      </div>
      <div className={styles.listContainer}>
        <SkillsIcons />
      </div>
    </div>
  );
}
