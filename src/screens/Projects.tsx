"use client";
import React from "react";
import styles from "@/css/Projects.module.scss";
import MobileProjectCards from "@/components/MobileProjectCards";
import ProjectData from "@/assets/data.json";
export default function Projects() {
  const projectArray = Object.values(ProjectData);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>
          My <span>Projects</span>
        </h1>
      </div>
      <div className={styles.projectContainer}>
        {projectArray.map((item, index) => (
          <MobileProjectCards key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
}
