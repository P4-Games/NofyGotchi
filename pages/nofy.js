// pages/nofy.js
import React, { useState, useEffect } from "react";
import Tamagochi from "../components/Tamagochi";
import ButtonBar from "../components/ButtonBar";
import Stats from "../components/Stats";

const Nofy = () => {
  const [showBathGif, setShowBathGif] = useState(false);
  const [isBathing, setIsBathing] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [dirtinessLevel, setDirtinessLevel] = useState(0);
  const [sueño, setSueño] = useState(0);
  const [hunger, setHunger] = useState(0);

  const [gifs, setGifs] = useState({
    eatGif: false,
    zzzGif: false,
    gameboyGif: false,
    hygieneGif: null,
    sleepGif: null,
  });

  const handleTimedState = (stateKey, duration) => {
    setGifs((prev) => ({ ...prev, [stateKey]: true }));
    setTimeout(() => {
      setGifs((prev) => ({ ...prev, [stateKey]: false }));
    }, duration);
  };

  const handleBathClick = () => {
    setShowBathGif(true);
    setIsBathing(true);
    const interval = setInterval(() => {
      setDirtinessLevel((prev) => {
        const nextValue = prev - 1;
        if (nextValue <= 0) {
          clearInterval(interval);
          setIsBathing(false);
          setShowBathGif(false);
          return 0;
        }
        return nextValue;
      });
    }, 80);
  };

  const handleZzzClick = () => {
    setIsSleeping(true);
    setGifs((prev) => ({ ...prev, zzzGif: true })); // Activar el gif de dormir

    const interval = setInterval(() => {
      setSueño((prev) => {
        const nextValue = prev - 6.25;
        if (nextValue <= 0) {
          clearInterval(interval);
          setIsSleeping(false);
          setGifs((prev) => ({ ...prev, zzzGif: false })); // Desactivar el gif de dormir
          return 0;
        }
        return nextValue;
      });
    }, 1000);
  };

  const handleFeedClick = () => {
    handleTimedState("eatGif", 3500); // Mostrar el gif de comer durante 3.5 segundos
    setHunger((prev) => {
      const newValue = prev - 25;
      return newValue < 0 ? 0 : newValue;
    });
  };

  useEffect(() => {
    const increaseHunger = setInterval(() => {
      setHunger((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 450); // Incrementar en 1 cada 450ms para llegar a 100 en 45 segundos.

    return () => clearInterval(increaseHunger);
  }, []);

  useEffect(() => {
    const updateGif = (value, thresholds, gifs, key) => {
      const selectedGif = thresholds.reduce((acc, threshold, index) => {
        return value >= threshold ? gifs[index] : acc;
      }, gifs[gifs.length - 1]);
      setGifs((prev) => ({ ...prev, [key]: selectedGif }));
    };

    updateGif(
      sueño,
      [50, 75],
      [
        "https://cdn.discordapp.com/attachments/907599032623431681/1137188216793997343/tarde.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137188248695865455/luna.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137188198607499264/sol.gif",
      ],
      "sleepGif"
    );

    updateGif(
      dirtinessLevel,
      [30, 50, 75],
      [
        "https://cdn.discordapp.com/attachments/907599032623431681/1137093146191339652/caca1.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137093161496367265/caca2.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137093247945150515/caca3.gif",
        null,
      ],
      "hygieneGif"
    );
  }, [sueño, dirtinessLevel]);

  useEffect(() => {
    if (!isBathing) {
      const increaseDirtiness = setInterval(() => {
        setDirtinessLevel((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 600);
      return () => clearInterval(increaseDirtiness);
    }
  }, [isBathing]);

  useEffect(() => {
    if (!isSleeping) {
      const increaseSleep = setInterval(() => {
        setSueño((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 1200);
      return () => clearInterval(increaseSleep);
    }
  }, [isSleeping]);

  const buttons = [
    { label: "ALIMENTAR", color: "purple", onClick: handleFeedClick },
    {
      label: "JUGAR",
      color: "blue",
      onClick: () => handleTimedState("gameboyGif", 15000),
    },
    { label: "BAÑAR", color: "red", onClick: handleBathClick },
    { label: "DORMIR", color: "brown", onClick: handleZzzClick },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "700px",
          margin: "10px 0",
        }}
      >
        <Stats label="Hambre" value={hunger} />
        <Stats label="Felicidad" value={80} />
        <Stats label="Suciedad" value={dirtinessLevel} />
        <Stats label="Sueño" value={sueño} />
      </div>
      <Tamagochi
        {...gifs}
        showBathGif={showBathGif}
        isNight={sueño >= 75}
        isNoon={sueño >= 50 && sueño < 75}
      />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <ButtonBar buttons={buttons} />
      </div>
    </div>
  );
};

export default Nofy;
