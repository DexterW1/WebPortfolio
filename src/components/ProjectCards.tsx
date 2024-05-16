import React from "react";
import styles from "@/css/ComponentsCss/ProjectCards.module.scss";
import Image from "next/image";
import Link from "next/link";
import newTab from "../../public/images/newtab.png";
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
  hrefLink: string;
};
export default function ProjectCards({ data, index, hrefLink }: dataProp) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          sizes="100vw"
          src={data.imgSrc}
          alt="stockwatcher"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            border: "2px solid grey",
          }}
        />
      </div>
      <Link
        href={hrefLink}
        className={
          index % 2 == 0 ? styles.textContainer : styles.textContainerOdd
        }
      >
        <h1>0{index + 1}</h1>
        <div className={styles.titleContainer}>
          <h2>{data.title}</h2>
          <Image src={newTab} width={15} height={15} alt="figma icon" />
        </div>
        <div className={styles.descriptionContainer}>
          <p>{data.summary}</p>
        </div>
      </Link>
    </div>
    // </div>
  );
}
