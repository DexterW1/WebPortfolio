"use client";
import React from "react";
import Image from "next/image";
import styles from "@/css/ProjectFull.module.scss";
type projectProps = {
  title: string;
  summary: string;
  skills: string[];
  link?: string;
  gitlink: string;
  imgSrc: string;
  imgArr: string[];
};
type DataProps = {
  data: projectProps;
};
export default function ProjectFull({ data }: DataProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.summaryContainer}>
        <p>{data.summary}</p>
      </div>
      <div className={styles.metaContainer}>
        <a href={data.gitlink} target="_blank" rel="noopener noreferrer">
          <p className={styles.buttonStyle}>Github</p>
          <p className={styles.gitLinkStyle}>{data.gitlink}</p>
        </a>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <p className={styles.buttonStyle}>Source</p>
            <p className={styles.gitLinkStyle}>{data?.link}</p>
          </a>
        )}
      </div>
      <div className={styles.imageContainer}>
        {data.imgArr.map((item, index) => (
          <div className={styles.imageStyle} key={index}>
            <Image
              src={item}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                border: "1.5px solid grey",
              }}
              alt="Project Images"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
