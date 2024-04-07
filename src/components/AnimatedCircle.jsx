import React from "react";
import styled, { keyframes } from "styled-components";
import styles from "./Skills.module.css";

const AnimatedCircle = ({ number, strokeDashoffset }) => {
  const Anime = keyframes`
        100% {
            stroke-dashoffset: ${strokeDashoffset};
        }
    `;

  const Circle = styled.circle`
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 450;
    stroke-dashoffset: 450;
    animation: ${Anime} 1.5s linear forwards;
  `;

  return (
    <div>
      <div className={styles.skill}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.number}>{number}%</div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#09ebf3" />
            <stop offset="100%" stop-color="#60ddee" />
          </linearGradient>
        </defs>
        <Circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  );
};

export default AnimatedCircle;
