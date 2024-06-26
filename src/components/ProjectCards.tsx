import React, { useRef } from "react";
import styles from "@/css/ComponentsCss/ProjectCards.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className={styles.container}
    >
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
          <Image src={newTab} width={15} height={15} alt="new tab icon" />
        </div>
        <div className={styles.descriptionContainer}>
          <p>{data.summary}</p>
        </div>
      </Link>
    </motion.div>
    // </div>
  );
}
