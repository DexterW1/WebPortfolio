"use client";
import React, { useState, useEffect } from "react";
import styles from "@/css/ComponentsCss/SkillsIcons.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import NodeIcon from "../../public/images/Node.js_logo.svg";
import FirebaseIcon from "../../public/images/firebase.svg";
import AwsIcon from "../../public/images/aws.svg";
import FigmaIcon from "../../public/images/figma.svg";
type iconProp = {
  [key: string]: JSX.Element;
};

const fadeInAnimationsVariants = {
  intital: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05 * index,
    },
  }),
};
const iconComponents: iconProp = {
  HTML: <FaHtml5 size={55} color="#dd4b26" />,
  CSS: <FaCss3Alt size={55} color="#2965f1" />,
  Sass: <FaSass size={55} color="#cc6699" />,
  JavaScript: <IoLogoJavascript size={55} color="#f0db4f" />,
  TypeScript: <SiTypescript size={50} color="#007acc" />,
  React: <FaReact size={55} color="#61dafb" />,
  "React-Native": <TbBrandReactNative size={55} color="#61dafb" />,
  "Node.js": <Image src={NodeIcon} width={55} height={55} alt="nodejs icon" />,
  Firebase: (
    <Image src={FirebaseIcon} width={55} height={55} alt="firebase icon" />
  ),
  "AWS Cognito": <Image src={AwsIcon} width={55} height={40} alt="aws icon" />,
  "AWS Lambda": <Image src={AwsIcon} width={55} height={40} alt="aws icon" />,
  "AWS S3": <Image src={AwsIcon} width={55} height={40} alt="aws icon" />,
  "AWS RDS": <Image src={AwsIcon} width={55} height={40} alt="aws icon" />,
  Framer: <SiFramer size={55} color="#00aaff" />,
  Figma: <Image src={FigmaIcon} width={55} height={55} alt="figma icon" />,
  GitHub: <FaGithub size={55} color="#000" />,
  PostgreSQL: <BiLogoPostgresql size={55} color="#31648c" />,
  Next: <TbBrandNextjs size={55} color="#000" />,
  Express: <SiExpress size={55} color="#000" />,
};
export default function SkillsIcons() {
  return (
    <ul className={styles.container}>
      {Object.entries(iconComponents).map((item, index) => (
        <motion.li
          variants={fadeInAnimationsVariants}
          initial="intital"
          whileInView={"animate"}
          viewport={{ once: true }}
          custom={index}
          className={styles.chip}
          key={item[0]}
        >
          {item[0]}
        </motion.li>
      ))}
    </ul>
  );
}
