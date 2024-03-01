import React from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Huevo = () => {
  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        <img
          src="/animaciones/eggg.gif"
          alt="Huevo"
          className={tamagochiStyles.tamagochiImage}
        />
      </div>
    </div>
  );
};

export default Huevo;
