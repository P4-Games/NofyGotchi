import React from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Huevo = () => {
  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        <img
          src="https://cdn.discordapp.com/attachments/907599032623431681/1138187870809640980/eggg.gif"
          alt="Huevo"
          className={tamagochiStyles.tamagochiImage}
        />
      </div>
    </div>
  );
};

export default Huevo;
