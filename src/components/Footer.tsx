import React from "react";

import styles from "@/css/ComponentsCss/Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>© {new Date().getFullYear()} Yiu Ming Wong. All rights reserved.</p>
    </footer>
  );
}
