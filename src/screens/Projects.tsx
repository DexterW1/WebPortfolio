import React from "react";
import styles from "@/css/Projects.module.scss";
import MobileProjectCards from "@/components/MobileProjectCards";
import ProjectCards from "@/components/ProjectCards";
import Link from "next/link";
import ProjectData from "@/assets/shortdata.json";
const linkIndex = ["stockhub", "spotifywrap", "collisioninsight", "weatherio"];
export default function Projects() {
  const projectArray = Object.values(ProjectData);
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>
          My <span>Projects</span>
        </h1>
      </div>
      <div className={styles.projectMobileContainer}>
        {projectArray.map((item, index) => (
          <Link key={index} href={`projects/${linkIndex[index]}`}>
            <MobileProjectCards key={index} data={item} index={index} />
          </Link>
        ))}
      </div>
      <div className={styles.projectFullContainer}>
        {projectArray.map((item, index) => (
          <ProjectCards
            key={index}
            data={item}
            index={index}
            hrefLink={`projects/${linkIndex[index]}`}
          />
        ))}
      </div>
    </div>
  );
}
