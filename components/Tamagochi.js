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
  src={`https://raw.githubusercontent.com/webtresclub/buttplug-traits/main/buttplugs/images/${randomNumber}.gif`}

  
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
              src="/animaciones/love.gif"
              alt="Bath Gif"
              className={`${tamagochiStyles.bathGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {eatGif && (
          <div className={tamagochiStyles.eatGifContainer}>
            <img
              src="/animaciones/error.gif"
              alt="Eat Gif"
              className={`${tamagochiStyles.eatGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {zzzGif && (
          <div className={tamagochiStyles.zzzGifContainer}>
            <img
              src="/animaciones/battery.gif"
              alt="Zzz Gif"
              className={`${tamagochiStyles.zzzGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {gameboyGif && (
          <div className={tamagochiStyles.gameboyGifContainer}>
            <img
              src="/animaciones/pac-man.gif"
              alt="Gameboy Gif"
              className={`${tamagochiStyles.gameboyGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {gymGif && (
          <div className={tamagochiStyles.gymGifContainer}>
            <img
              src="/animaciones/gym.gif"
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
