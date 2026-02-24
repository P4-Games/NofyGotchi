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
  message,
}) => {
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
        {message && (
          <div className={tamagochiStyles.messageBubble}>
            {message}
          </div>
        )}
        {randomNumber !== null && (
          <img
            src={`https://storage.googleapis.com/nof-gamma/T2/${randomNumber}.png`}
            alt="Tamagochi"
            className={`${tamagochiStyles.tamagochiImage} ${
              isNight ? tamagochiStyles.nightMode : ""}
              ${ isNoon ? tamagochiStyles.noonMode : ""
            }`}
          />
        )}
        {showBathGif && (
          <div className={tamagochiStyles.bathGifContainer}>
            <img
              src="/animaciones/shower.gif"
              alt="Bath Gif"
              className={`${tamagochiStyles.bathGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {eatGif && (
          <div className={tamagochiStyles.eatGifContainer}>
            <img
              src="/animaciones/sandia.gif"
              alt="Eat Gif"
              className={`${tamagochiStyles.eatGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {zzzGif && (
          <div className={tamagochiStyles.zzzGifContainer}>
            <img
              src="/animaciones/zzz.gif"
              alt="Zzz Gif"
              className={`${tamagochiStyles.zzzGif}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {gameboyGif && (
          <div className={tamagochiStyles.gameboyGifContainer}>
            <img
              src="/animaciones/Gameboy.gif"
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
