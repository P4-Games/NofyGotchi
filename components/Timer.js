// components/Timer.js
import React from 'react';
import styles from '../styles/Timer.module.css';

const Timer = ({ minutes, seconds }) => {
  return (
    <div className={styles.timerContainer}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;