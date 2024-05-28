"use client";
import React, { useState, useEffect } from "react";
import anime from "animejs";
import styles from "@/css/ComponentsCss/WaterDropGrid.module.scss";

const WaterDropGrid = () => {
  return (
    <div className={styles.relativeGrid}>
      <DotGrid />
    </div>
  );
};
let GRID_WIDTH = 25;
let GRID_HEIGHT = 20;

const DotGrid = () => {
  // useEffect(() => {
  //   const updateGridDimensions = () => {
  //     const vw = Math.max(
  //       document.documentElement.clientWidth || 0,
  //       window.innerWidth || 0
  //     );

  //     // Adjust dimensions based on viewport size
  //     if (vw < 768) {
  //       GRID_WIDTH = 10;
  //       GRID_HEIGHT = 5;
  //     } else if (vw < 1024) {
  //       GRID_WIDTH = 15;
  //       GRID_HEIGHT = 10;
  //     } else {
  //       GRID_WIDTH = 20;
  //       GRID_HEIGHT = 15;
  //     }

  //     // Apply the new dimensions to the grid
  //     const gridElement = document.querySelector(`.${styles.dotGrid}`);
  //     if (gridElement) {
  //       gridElement.style.gridTemplateColumns = `repeat(${GRID_WIDTH}, 1fr)`;
  //     }
  //   };

  //   // Call updateGridDimensions on initial render and when viewport size changes
  //   updateGridDimensions();
  //   window.addEventListener("resize", updateGridDimensions);
  //   return () => {
  //     window.removeEventListener("resize", updateGridDimensions);
  //   };
  // }, []);
  const handleDotClick = (e: any) => {
    const index = e.target.dataset.index;
    console.log(index);
    anime({
      targets: ".dotSelector",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(80, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: parseInt(index),
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
          onClick={handleDotClick}
        >
          <div
            className={`${styles.dotPoint} dotSelector`}
            onClick={handleDotClick}
            data-index={index}
          />
        </div>
      );
      index++;
      // console.log("This is index:", index);
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
