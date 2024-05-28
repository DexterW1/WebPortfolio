"use client";
import React, { useEffect } from "react";
import styles from "@/css/Introduction.module.scss";
import Coder from "../../public/images/coder.svg";
import Image from "next/image";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import CursorBlinking from "@/components/CursorBlinking";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import WaterDropGrid from "@/components/WaterDropGrid";
export default function Introduction() {
  const names = ["Front-End Developer", "Fullstack Developer"];
  const namesIndex = useMotionValue(0);
  const baseName = useTransform(namesIndex, (latest) => names[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseName.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
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
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
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
        </div>
        {/* Text container */}
        <div className={styles.textContainer}>
          <h2>Hi, my name is</h2>
          <span className={styles.textAnimation}>
            <motion.h1 style={{ marginRight: 4 }}>{displayText}</motion.h1>
            <CursorBlinking />
          </span>
          <p>
            {`I'm a recent Software Engineering grad from UCR, passionate about developing user-friendly technology. Join me as I dive into the world of software and strive to make tech both innovative and accessible!`}
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
          <div className={styles.waterContainer}>
            <WaterDropGrid />
          </div>
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
    </div>
  );
}
