import React from "react";
import styles from "@/css/About.module.scss";
import Image from "next/image";
import ProfileImg from "../../public/images/IMG_1749.jpg";
import Reveal from "@/components/Reveal";
import Link from "next/link";
export default function About() {
  return (
    <div id="about" className={styles.container}>
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
          <Reveal id="about_p1">
            <p>
              I discovered my passion for front-end development just before
              graduating, which quickly evolved into a love for web and mobile
              development. This journey has allowed me to dive into various
              frameworks and technologies, continuously expanding my skill set.
            </p>
          </Reveal>
          <Reveal id="about_p2">
            <p>
              Today, I work as a{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                full stack developer
              </span>{" "}
              at{" "}
              <Link
                target="_blank"
                href={"https://www.nutripair.co/"}
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                Nutripair
              </Link>
              . Our mission is to guide people in finding the best food for
              their dietary needs while helping local restaurants boost their
              revenue and attract a diverse clientele.
            </p>
          </Reveal>
          <Reveal id="about_p3">
            <p>
              When I&apos;m not coding, you can find me playing with my cat,
              shooting hoops, or enjoying the great outdoors. Take a look at the
              exciting projects I&apos;m currently working on!
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
