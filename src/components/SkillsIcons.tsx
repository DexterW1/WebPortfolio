"use client";
import React, { useState, useEffect } from "react";
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
  Html: <FaHtml5 size={55} color="#dd4b26" />,
  Css: <FaCss3Alt size={55} color="#2965f1" />,
  Sass: <FaSass size={55} color="#cc6699" />,
  Javascript: <IoLogoJavascript size={55} color="#f0db4f" />,
  Typescript: <SiTypescript size={50} color="#007acc" />,
  React: <FaReact size={55} color="#61dafb" />,
  Github: <FaGithub size={55} color="#000" />,
  "React-Native": <TbBrandReactNative size={55} color="#61dafb" />,
  Nextjs: <TbBrandNextjs size={55} color="#000" />,
  Framer: <SiFramer size={55} color="#00aaff" />,
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
        <div
          onClick={() => handlePress(item[0])}
          key={item[0]}
          className={styles.buttonContainer}
        >
          <motion.div
            initial={{ opacity: 1, clipPath: "circle(0%)" }}
            animate={{
              // opacity: activeIcon === item[0] ? 0 : 1,
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
      ))}
    </div>
  );
}

//  {
//    Object.keys(iconComponents).map((name) => (
//      <div
//        // onClick={() => handlePress(name)}
//        key={name}
//        className={styles.iconContainer}
//      >
//        {activeIcon === name ? (
//          <motion.div
//            onClick={() => handlePress(name)}
//            initial={{ clipPath: "circle(0%)" }}
//            animate={{ clipPath: "circle(80%)" }}
//            transition={{ duration: 1 }}
//          >
//            {name}
//          </motion.div>
//        ) : (
//          <motion.div
//            onClick={() => handlePress(name)}
//            animate={{
//              clipPath: activeIcon === name ? "circle(0%)" : "circle(80%",
//            }}
//            transition={{ duration: 1 }}
//          >
//            {iconComponents[name]}
//          </motion.div>
//        )}
//      </div>
//    ));
//  }
