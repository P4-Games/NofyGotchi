// components/Tamagotchi.js
import React, { useState, useEffect } from "react";
import tamagochiStyles from "../styles/Tamagochi.module.css";

const Tamagochi = ({
  showBathGif,
  eatGif,
  zzzGif,
  gameboyGif,
  gymGif,
  hygieneGif,
  sleepGif,
  isNight,
  isNoon,
}) => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    if (randomNumber === null) {
      const random = Math.floor(Math.random() * 1024);
      setRandomNumber(random);
    }
  }, [randomNumber]);

  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        {randomNumber !== null && (
          <img
  src={`https://bafybeibnw2yuc7tpkt4pkzx3c2yizyjx24vioehwqodxppbqoyncyi4t44.ipfs.dweb.link/${randomNumber}.gif`}
  alt="Tamagochi"
  className={`${tamagochiStyles.tamagochiImage} ${
    isNight ? tamagochiStyles.nightMode : ""
  } ${isNoon ? tamagochiStyles.noonMode : ""}`}
  style={{ width: "1200px", height: "100%" }} // Agrega este estilo
/>

        )}
        {showBathGif && (
          <div className={tamagochiStyles.bathGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1140831820909392023/love.gif"
              alt="Bath Gif"
              className={`${tamagochiStyles.bathGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {eatGif && (
          <div className={tamagochiStyles.eatGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1140834290809196554/error.gif"
              alt="Eat Gif"
              className={`${tamagochiStyles.eatGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {zzzGif && (
          <div className={tamagochiStyles.zzzGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1140830644130300034/battery.gif"
              alt="Zzz Gif"
              className={`${tamagochiStyles.zzzGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {gameboyGif && (
          <div className={tamagochiStyles.gameboyGifContainer}>
            <img
              src="https://cdn.discordapp.com/attachments/907599032623431681/1140829281023434832/pac-man.gif"
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
        {hygieneGif && (
          <div className={tamagochiStyles.hygieneGifContainer}>
            <img
              src={hygieneGif}
              alt="Hygiene Gif"
              className={`${tamagochiStyles.hygieneGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {sleepGif && (
          <div className={tamagochiStyles.sleepGifContainer}>
            <img
              src={sleepGif}
              alt="Sleep Gif"
              className={`${tamagochiStyles.sleepGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tamagochi;
