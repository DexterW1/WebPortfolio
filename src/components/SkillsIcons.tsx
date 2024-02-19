"use client";
import React, { useState } from "react";
import styles from "@/css/ComponentsCss/SkillsIcons.module.scss";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
type iconProp = {
  [key: string]: JSX.Element;
};
const iconComponents: iconProp = {
  Html: <FaHtml5 size={60} color="#dd4b26" />,
  Css: <FaCss3Alt size={60} color="#2965f1" />,
  Sass: <FaSass size={60} color="#cc6699" />,
  Javascript: <IoLogoJavascript size={60} color="#f0db4f" />,
  Typescript: <SiTypescript size={55} color="#007acc" />,
  React: <FaReact size={60} color="#61dafb" />,
  Github: <FaGithub size={60} color="#000" />,
  "React-Native": <TbBrandReactNative size={60} color="#61dafb" />,
  Nextjs: <TbBrandNextjs size={60} color="#000" />,
  Framer: <SiFramer size={60} color="#00aaff" />,
};
export default function SkillsIcons() {
  const [activeIcon, setActiveIcon] = useState("");
  const handlePress = (name: string) => {
    setActiveIcon(activeIcon === name ? "" : name);
  };
  return (
    <div className={styles.container}>
      {Object.keys(iconComponents).map((name) => (
        <div
          // onClick={() => handlePress(name)}
          key={name}
          className={styles.iconContainer}
        >
          {activeIcon === name ? (
            <motion.div
              onClick={() => handlePress(name)}
              initial={{ clipPath: "circle(0%)" }}
              animate={{ clipPath: "circle(80%)" }}
              transition={{ duration: 1 }}
            >
              {name}
            </motion.div>
          ) : (
            <motion.div
              onClick={() => handlePress(name)}
              animate={{
                clipPath: activeIcon === name ? "circle(0%)" : "circle(80%",
              }}
              transition={{ duration: 1 }}
            >
              {iconComponents[name]}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
