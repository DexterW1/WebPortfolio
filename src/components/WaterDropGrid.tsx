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

const DotGrid = () => {
  const size = useWindowSize();
  const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (size.height && size.width) {
      let newGridHeight = 0;
      let newGridWidth = 0;

      if (size.width > 1280) {
        newGridHeight = 20;
        newGridWidth = 25;
        if (size.height > 800) {
          newGridWidth = 30;
        }
      } else {
        newGridWidth = 20;
        newGridHeight = 15;
        if (size.height > 800) {
          newGridWidth = 22;
        }
      }

      setGridDimensions({ width: newGridWidth, height: newGridHeight });
    }
  }, [size.width, size.height]);

  const handleDotClick = (e) => {
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
        { value: 0.4, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(80, {
        grid: [gridDimensions.width, gridDimensions.height],
        from: parseInt(index),
      }),
    });
  };

  const dots = [];
  let index = 0;

  if (gridDimensions.width === 0 || gridDimensions.height === 0) {
    return null;
  }

  for (let i = 0; i < gridDimensions.width; i++) {
    for (let j = 0; j < gridDimensions.height; j++) {
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
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${gridDimensions.width}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
