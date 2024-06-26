"use client";
import React, { useEffect, useState } from "react";
import styles from "@/css/Introduction.module.scss";
import Coder from "../../public/images/coder.svg";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  animate,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import CursorBlinking from "@/components/CursorBlinking";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import Spline from "@splinetool/react-spline";

const COLORS = ["#5e43f3", "#7a5af5", "#9171f8", "#a688fa", "#ba9ffb"];

export default function Introduction() {
  const bgColor = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 0%, #121212 50%, ${bgColor})`;
  const names = ["Front-end Developer", "Full-stack Developer"];
  const namesIndex = useMotionValue(0);
  const baseName = useTransform(namesIndex, (latest) => names[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseName.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
  useEffect(() => {
    animate(bgColor, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  useEffect(() => {
    const controls = animate(count, 25, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatDelay: 2,
      repeatType: "reverse",
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (namesIndex.get() === names.length - 1) {
            namesIndex.set(0);
          } else {
            namesIndex.set(namesIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    return controls.stop;
  }, []);
  return (
    <motion.section style={{ backgroundImage }} className={styles.container}>
      <div className={styles.stars}>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.splineContainer}>
          <Spline scene="https://prod.spline.design/6Af4kiMPIoeRAH72/scene.splinecode" />
        </div>
        {/* <div className={styles.imageContainer}>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={Coder}
            alt="guy coding on laptop image"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div> */}
        {/* Text container */}
        <div className={styles.textContainer}>
          <h3>hi, my name is</h3>
          <h3>
            <span>Yiu Ming Wong</span>
          </h3>
          <h2>I&apos;m a...</h2>
          <span className={styles.textAnimation}>
            <motion.h1>{displayText}</motion.h1>
            <CursorBlinking />
          </span>
          <p>
            {`As a recent Computer Science graduate from UCR, passionate about developing user-friendly technology. Join me as I dive into the world of software and strive to make tech both innovative and accessible!`}
          </p>
          <div className={styles.iconContainer2}>
            <a
              href="https://github.com/DexterW1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} color="black" />
            </a>
            <a
              href="https://www.linkedin.com/in/yiu-ming-wong-47274a2a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={30} color="black" />
            </a>
            <a
              href="mailto:dexterymwong@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail size={30} color="black" />
            </a>
          </div>
          {/* <div style={{ top: topSize }} className={styles.waterContainer}>
            <WaterDropGrid />
          </div> */}
        </div>
      </div>
      {/* Svg Image contianer */}
      {/* Button container */}
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/DexterW1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="black" />
        </a>
        <a
          href="https://www.linkedin.com/in/yiu-ming-wong-47274a2a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={30} color="black" />
        </a>
        <a
          href="mailto:dexterymwong@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdMail size={30} color="black" />
        </a>
      </div>
    </motion.section>
  );
}
