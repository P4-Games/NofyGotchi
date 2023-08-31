import React from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Reward = () => {
  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        <img
          src="https://storage.googleapis.com/nof-gamma/T1/12.png"
          alt="Reward"
          className={tamagochiStyles.tamagochiImage}
        />
      </div>
    </div>
  );
};

export default Reward;
