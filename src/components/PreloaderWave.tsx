"use client";
import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import styles from "@/css/ComponentsCss/PreloaderWave.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";
export default function PreloaderWave() {
  const size = useWindowSize();
  const [height, setHeight] = useState(350);
  const [fontSize, setFontSize] = useState(250);
  const [timerStarted, setTimerStarted] = useState(false);
  const [decrementTimer, setDecrementTimer] = useState(50);

  useEffect(() => {
    if (size.width && size.height) {
      if (size.width < 450) {
        setFontSize(200);
        setHeight(size.height * 0.63);
      } else if (size.width < 768) {
        setFontSize(300);
        setHeight(size.height * 0.63);
        setDecrementTimer(40);
      } else if (size.width > 1024) {
        setFontSize(400);
        setHeight(size.height * 0.65);
        setDecrementTimer(30);
      }

      // Set the flag to start the timer
      setTimerStarted(true);
    }
  }, [size.width, size.height]);

  useEffect(() => {
    if (timerStarted) {
      // Start decrementing height every 50ms
      const timer = setInterval(() => {
        setHeight((prevHeight) => prevHeight - 1);
      }, decrementTimer);

      // Stop decrementing after 10 seconds (10000ms)
      const stopTimer = setTimeout(() => {
        clearInterval(timer);
      }, 10000);

      // Clean up timer when component unmounts or when height is less than or equal to -150
      return () => {
        clearInterval(timer);
        clearTimeout(stopTimer);
      };
    }
  }, [timerStarted]); // Start timer when timerStarted changes
  return (
    <div className={styles.container}>
      <Wave
        fill="#9171f8"
        mask="url(#mask)"
        options={{ height, points: 20, speed: 0.3, amplitude: 20 }}
        style={{ height: "100%" }}
      >
        {/* Example adapted from https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask */}
        <mask id="mask">
          {/* Center the text horizontally and vertically */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="white"
            fontSize={fontSize}
          >
            YW
          </text>
        </mask>
      </Wave>
    </div>
  );
}
