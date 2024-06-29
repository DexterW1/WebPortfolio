"use client";
import React, { useRef } from "react";
import styles from "@/css/ComponentsCss/MobileProjectCards.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import newTab from "../../public/images/newtab.png";
import Reveal from "./Reveal";
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className={styles.container}
    >
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
          <Reveal id={index + "mobile_h2"}>
            <h2>0{index + 1}</h2>
          </Reveal>
          <Reveal id={index + "mobile_h1"}>
            <h1>
              {data.title}{" "}
              <Image src={newTab} alt="new-tab logo" width={18} height={18} />
            </h1>
          </Reveal>
        </div>
        <div className={styles.descriptionContainer}>
          <Reveal id={index + "mobile_p"}>
            <p>{data.summary}</p>
          </Reveal>
        </div>
      </div>
    </motion.div>
  );
}
