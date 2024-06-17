"use client";
import React from "react";
import styles from "@/css/Contact.module.scss";
import { MdWavingHand } from "react-icons/md";
export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Lets Have a Chat </h2>
          <MdWavingHand size={30} />
        </div>
        <div className={styles.content}>
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="email" />
          <p>Message</p>
          <textarea name="message" id="" cols={30} rows={10}></textarea>
          <button className={styles.buttonStyle}>Submit</button>
        </div>
      </div>
    </div>
  );
}
