"use client";
import React, { useState, useEffect } from "react";
import anime from "animejs";
import styles from "@/css/ComponentsCss/WaterDropGrid.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";
const WaterDropGrid = () => {
  return (
    <div className={styles.relativeGrid}>
      <DotGrid />
    </div>
  );
};
let GRID_WIDTH = 0;
let GRID_HEIGHT = 0;

const DotGrid = () => {
  const size = useWindowSize();
  useEffect(() => {
    if (size.height && size.width) {
      console.log("height" + size.height + "width" + size.width);
      if (size.width > 1280) {
        GRID_HEIGHT = 20;
        GRID_WIDTH = 25;
        if (size.height > 800) {
          GRID_WIDTH = 30;
        }
      } else {
        GRID_WIDTH = 20;
        GRID_HEIGHT = 15;
      }
    }

    console.log("Width:", GRID_WIDTH);
    console.log("Height:", GRID_HEIGHT);
  }, [size.width, size.height]);
  const handleDotClick = (e: any) => {
    const index = e.target.dataset.index;
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
  if (!size.width && !size.height) {
    return null;
  }

  const dots = [];
  let index = 0;
  if (GRID_HEIGHT != 0 && GRID_WIDTH != 0) {
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
