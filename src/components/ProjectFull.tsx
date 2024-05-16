"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/css/ProjectFull.module.scss";
import { Modal, ModalClose, Sheet } from "@mui/joy";
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
export default function ProjectFull({ data }: DataProps) {
  const [openModal, setOpenModal] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const handleButtonPress = (item: string) => {
    setOpenModal(true);
    setImageSelected(item);
  };
  const handButtonClose = () => {
    setOpenModal(false);
    setImageSelected(false);
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
