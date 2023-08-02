// components/Tamagochi.js
import React from 'react';
import tamagochiStyles from '../styles/Tamagochi.module.css';

const Tamagochi = () => {

  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        <img
          src="https://storage.googleapis.com/nof-gamma/T1/9.png"
          alt="Tamagochi"
          className={tamagochiStyles.tamagochiImage}
        />
      </div>
    </div>
  );
};

export default Tamagochi;