"use client";
import React from "react";
import styles from "@/css/ComponentsCss/MobileProjectCards.module.scss";
import Image from "next/image";
type dataItemProp = {
  title: string;
  summary: string;
  skills: string[];
  link?: string;
  gitlink: string;
  imgSrc: string;
};
type dataProp = {
  data: dataItemProp;
  index: number;
};
export default function MobileProjectCards({ data, index }: dataProp) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={data.imgSrc}
          alt="stockwatcher"
          width={1920}
          height={1080}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h2>0{index + 1}</h2>
          <h1>{data.title}</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{data.summary}</p>
        </div>
      </div>
    </div>
  );
}
