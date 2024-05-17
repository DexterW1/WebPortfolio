"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/css/ProjectFull.module.scss";
import { Modal, ModalClose } from "@mui/joy";
import { FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import NodeIcon from "../../public/images/Node.js_logo.svg";
import FirebaseIcon from "../../public/images/firebase.svg";
import AwsIcon from "../../public/images/aws.svg";
import FigmaIcon from "../../public/images/figma.svg";
type projectProps = {
  title: string;
  summary: string;
  skills: string[];
  link?: string;
  gitlink: string;
  imgSrc: string;
  imgArr: string[];
};
type DataProps = {
  data: projectProps;
};
const iconComponents = {
  Html: <FaHtml5 size={55} color="#dd4b26" />,
  Css: <FaCss3Alt size={55} color="#2965f1" />,
  Sass: <FaSass size={55} color="#cc6699" />,
  Javascript: <IoLogoJavascript size={55} color="#f0db4f" />,
  Typescript: <SiTypescript size={50} color="#007acc" />,
  React: <FaReact size={55} color="#61dafb" />,
  "React-Native": <TbBrandReactNative size={55} color="#61dafb" />,
  Nodejs: <Image src={NodeIcon} width={55} height={55} alt="nodejs icon" />,
  Firebase: (
    <Image src={FirebaseIcon} width={55} height={55} alt="firebase icon" />
  ),
  aws: <Image src={AwsIcon} width={55} height={40} alt="aws icon" />,
  Framer: <SiFramer size={55} color="#00aaff" />,
  Figma: <Image src={FigmaIcon} width={55} height={55} alt="figma icon" />,
  Github: <FaGithub size={55} color="#000" />,
  Postgresql: <BiLogoPostgresql size={55} color="#31648c" />,
  Nextjs: <TbBrandNextjs size={55} color="#000" />,
};
export default function ProjectFull({ data }: DataProps) {
  const [openModal, setOpenModal] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const handleButtonPress = (item: string) => {
    setOpenModal(true);
    setImageSelected(item);
  };
  const handButtonClose = () => {
    setOpenModal(false);
    setImageSelected("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.summaryContainer}>
        <p>{data.summary}</p>
      </div>
      <div className={styles.metaContainer}>
        <a href={data.gitlink} target="_blank" rel="noopener noreferrer">
          <p className={styles.buttonStyle}>Github</p>
          <p className={styles.gitLinkStyle}>{data.gitlink}</p>
        </a>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <p className={styles.buttonStyle}>Source</p>
            <p className={styles.gitLinkStyle}>{data?.link}</p>
          </a>
        )}
      </div>
      <div className={styles.imageContainer}>
        {data.imgArr.map((item, index) => (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => handleButtonPress(item)}
            key={index}
          >
            <div className={styles.imageStyle} key={index}>
              <Image
                loading="lazy"
                src={item}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  border: "1.5px solid grey",
                }}
                alt="Project Images"
              />
            </div>
          </button>
        ))}
      </div>
      <Modal
        open={openModal}
        onClose={handButtonClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div style={{ width: "80%" }}>
          <ModalClose />
          <Image
            src={imageSelected}
            width={1920}
            height={1080}
            quality={100}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              border: "1.5px solid grey",
            }}
            alt="Project Images"
          />
        </div>
      </Modal>
    </div>
  );
}
