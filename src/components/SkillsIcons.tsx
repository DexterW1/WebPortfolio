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
const iconComponents: iconProp = {
  HTML: <FaHtml5 size={55} color="#dd4b26" />,
  CSS: <FaCss3Alt size={55} color="#2965f1" />,
  Sass: <FaSass size={55} color="#cc6699" />,
  JavaScript: <IoLogoJavascript size={55} color="#f0db4f" />,
  TypeScript: <SiTypescript size={50} color="#007acc" />,
  React: <FaReact size={55} color="#61dafb" />,
  "React-Native": <TbBrandReactNative size={55} color="#61dafb" />,
  Nodejs: <Image src={NodeIcon} width={55} height={55} alt="nodejs icon" />,
  Firebase: (
    <Image src={FirebaseIcon} width={55} height={55} alt="firebase icon" />
  ),
  aws: <Image src={AwsIcon} width={55} height={40} alt="aws icon" />,
  Framer: <SiFramer size={55} color="#00aaff" />,
  Figma: <Image src={FigmaIcon} width={55} height={55} alt="figma icon" />,
  GitHub: <FaGithub size={55} color="#000" />,
  PostgreSQL: <BiLogoPostgresql size={55} color="#31648c" />,
  Next: <TbBrandNextjs size={55} color="#000" />,
  Express: <SiExpress size={55} color="#000" />,
};
export default function SkillsIcons() {
  const [activeIcon, setActiveIcon] = useState("");
  const [activeName, setActiveName] = useState("");
  const handlePress = (name: string) => {
    setActiveIcon(activeIcon === name ? "" : name);
  };
  return (
    <div className={styles.container}>
      {Object.entries(iconComponents).map((item) => (
        <div className={styles.chip} key={item[0]}>
          {item[0]}
        </div>
      ))}
    </div>
  );
}
{
  /* {Object.entries(iconComponents).map((item) => (
        <div
          onClick={() => handlePress(item[0])}
          key={item[0]}
          className={styles.buttonContainer}
        >
          <motion.div
            initial={{ opacity: 1, clipPath: "circle(0%)" }}
            animate={{
              clipPath: activeIcon === item[0] ? "circle(0%)" : "circle(80%)",
            }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              if (activeIcon === item[0]) {
                setActiveName(item[0]);
              }
            }}
            className={styles.iconContainer}
          >
            {item[1]}
          </motion.div>
          <motion.div
            onClick={() => {
              setActiveName("");
            }}
            initial={{ opacity: 0, clipPath: "circle(0%)" }}
            animate={{
              opacity: 1,
              clipPath: activeName === item[0] ? "circle(80%)" : "circle(0%)",
            }}
            transition={{ duration: 0.5 }}
            className={styles.namesContainer}
          >
            {item[0]}
          </motion.div>
        </div>
      ))} */
}
