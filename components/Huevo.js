import React from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Huevo = () => {
  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        <img
          src="https://cdn.discordapp.com/attachments/907599032623431681/1146624720498872421/intro.gif"
          alt="Huevo"
          className={tamagochiStyles.tamagochiImage}
        />
      </div>
    </div>
  );
};

export default Huevo;
