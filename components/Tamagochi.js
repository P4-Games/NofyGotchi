import React, { useState, useEffect } from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Tamagochi = ({ showBathGif, eatGif, zzzGif, gameboyGif, gymGif }) => {
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
        {eatGif && (
          <div className={tamagochiStyles.eatGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1136470524474691584/sandia.gif"
              alt="Eat Gif"
              className={`${tamagochiStyles.eatGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {zzzGif && (
          <div className={tamagochiStyles.zzzGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1136475713504018583/zzz.gif"
              alt="Zzz Gif"
              className={`${tamagochiStyles.zzzGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
                {gameboyGif && (
          <div className={tamagochiStyles.gameboyGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1136665450869182484/Gameboy.gif"
              alt="Gameboy Gif"
              className={`${tamagochiStyles.gameboyGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
                 {gymGif && (
          <div className={tamagochiStyles.gymGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1136720725529604146/gym.gif"
              alt="Gym Gif"
              className={`${tamagochiStyles.gymGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tamagochi;
