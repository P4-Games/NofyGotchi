import React, { useState, useEffect } from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Tamagochi = ({ showBathGif }) => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    if (randomNumber === null) {
      const random = Math.floor(Math.random() * 120);
      setRandomNumber(random);
    }
  }, [randomNumber]);

  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        {randomNumber !== null && (
          <img
            src={`https://storage.googleapis.com/nof-gamma/T1/${randomNumber}.png`}
            alt="Tamagochi"
            className={tamagochiStyles.tamagochiImage}
          />
        )}
        {showBathGif && (
          <div className={tamagochiStyles.bathGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1136370825340129400/shower.gif"
              alt="Bath Gif"
              className={`${tamagochiStyles.bathGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tamagochi;
