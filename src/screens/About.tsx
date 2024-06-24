"use client";
import React from "react";
import styles from "@/css/About.module.scss";
import Image from "next/image";
import ProfileImg from "../../public/images/IMG_1749.jpg";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>
          About <span>Me</span>
        </h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={ProfileImg}
            alt="profile img"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.imageStyle}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            I started learning front-end development just before graduating,
            which quickly turned into a passion for web and mobile development.
            This journey led me to explore and learn various frameworks and
            technologies, expanding my skills along the way.
          </p>
          <p>
            Fast-forward to today, I&apos;m currently working as a{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              full stack developer
            </span>{" "}
            at{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              Nutripair
            </span>
            . Our mission is to help people find the best food for their dietary
            needs while simultaneously helping local restaurants increase
            revenue and attract diverse customers.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually playing with my
            cat, shooting hoops, or spending time outdoors enjoying nature. Come
            checkout the work i&apos;m currently doing!
          </p>
          {/* <p>
            I started learning front-end development just before graduating,
            which quickly turned into a passion for web development. This
            journey led me to explore and learn various frameworks and
            technologies, expanding my skills along the way. Fast-forward to
            today, I'm currently working as a full stack devloper at Nutripair.
            Our mission is to help people find the best food for their dietary
            needs while simultaneously help local restauraunts increase revenue
            & attrack diverse customers. My main focus is on creating robust,
            user-friendly applications. I have a particular passion for crafting
            animations and visually satisfying components, thriving at the
            intersection of design and engineering to build solutions that are
            both beautiful and functional. When I'm not at the computer, I'm
            usually playing with my cat, shooting hoops, or spending time
            outdoors enjoying nature.
          </p> */}
        </div>
      </div>
    </div>
  );
}
