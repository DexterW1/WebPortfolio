"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/css/ProjectFull.module.scss";
import newTab from "../../public/images/newtab.png";
import { Modal, ModalClose } from "@mui/joy";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress } from "react-icons/si";
import { FaReact, FaGithub, FaBootstrap } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import NodeIcon from "../../public/images/Node.js_logo.svg";
import AwsIcon from "../../public/images/aws.svg";
import FigmaIcon from "../../public/images/figma.svg";
type projectProps = {
  title: string;
  summary: string;
  skills: string[];
  link?: string;
  credits?: string;
  creditLink?: string;
  gitlink: string;
  imgSrc: string;
  imgArr: string[];
};
type DataProps = {
  data: projectProps;
};
const iconComponents: any = {
  Html: <FaHtml5 size="100%" color="#dd4b26" />,
  Css: <FaCss3Alt size="100%" color="#2965f1" />,
  Javascript: <IoLogoJavascript size="100%" color="#f0db4f" />,
  Typescript: <SiTypescript size="100%" color="#007acc" />,
  React: <FaReact size="100%" color="#61dafb" />,
  "React-Native": <TbBrandReactNative size="100%" color="#61dafb" />,
  Nodejs: (
    <Image
      src={NodeIcon}
      width={0}
      height={0}
      alt="nodejs icon"
      sizes="100vw"
      style={{
        width: "100%",
      }}
    />
  ),
  Aws: (
    <Image
      src={AwsIcon}
      width={0}
      height={0}
      alt="aws icon"
      sizes="100vw"
      style={{ width: "100%", height: "100%" }}
    />
  ),
  Framer: <SiFramer size={20} color="#00aaff" />,
  Figma: (
    <Image
      src={FigmaIcon}
      width={0}
      height={0}
      alt="figma icon"
      sizes="100vw"
      style={{ width: "100%" }}
    />
  ),
  Postgresql: <BiLogoPostgresql size="100%" color="#31648c" />,
  Expressjs: <SiExpress size="100%" color="#FFF" />,
  RestApi: <p>REST</p>,
  Bootstrap: <FaBootstrap size="100%" color="#7f0ff3" />,
};
export default function ProjectFull({ data }: DataProps) {
  const [openModal, setOpenModal] = useState(false);
  const [dataCredit, setdataCredit] = useState<React.ReactNode>(null);
  const [imageSelected, setImageSelected] = useState("");
  const handleButtonPress = (item: string) => {
    setOpenModal(true);
    setImageSelected(item);
  };
  const handButtonClose = () => {
    setOpenModal(false);
    setImageSelected("");
  };
  useEffect(() => {
    if (data.title === "Weatherio") {
      setdataCredit(
        <p>
          The design of this project was heavily inspired by{" "}
          <a
            className={styles.creditLinkStyle}
            href={data.creditLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            codewithsadee
          </a>
          . However, all the code was written independently without copying any
          of their code. I mainly took inspiration from the design and
          implemented it with my own code.
        </p>
      );
    } else if (data.title === "Spotify Wrap") {
      setdataCredit(
        <p>
          The UI design of this project was heavily inspired by Brittany
          Chiang&apos;s{" "}
          <a
            className={styles.creditLinkStyle}
            href={data.creditLink}
            target="_blank"
            rel="noopener no referrer"
          >
            Spotify Profile
          </a>{" "}
          project. While I drew design inspiration from her work, all the code
          was written independently without copying any of her code.
          Additionally, this projects analytics was also inspired by
          Spotify&apos;s annual &apos;Wrapped&apos; feature.
        </p>
      );
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.summaryContainer}>
        <p>{data.summary}</p>
      </div>
      <div className={styles.skillsContainer}>
        <h2>Skills & Tools</h2>
        <div className={styles.skillsFlex}>
          {data.skills.map((item, index) => (
            <div className={styles.iconStyle} key={index}>
              {iconComponents[item]}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.metaContainer}>
        <a
          href={data.gitlink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubButtonStyle}
        >
          <FaGithub size={25} color="#FFF" />
          View on Github
        </a>
        {data.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.checkButtonStyle}
          >
            Check it out!{" "}
            <Image src={newTab} width={15} height={15} alt="new tab icon" />
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
      {data.credits && (
        <div className={styles.creditsContainer}>
          <h2>Credits</h2>
          <p>{dataCredit}</p>
        </div>
      )}
    </div>
  );
}
