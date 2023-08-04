import React, { useState, useEffect } from "react";
import Tamagochi from "../components/Tamagochi";
import ButtonBar from "../components/ButtonBar";
import Stats from "../components/Stats";

const Nofy = () => {
  const [showBathGif, setShowBathGif] = useState(false);
  const [isBathing, setIsBathing] = useState(false);
  const [eatGif, setEatGif] = useState(false);
  const [zzzGif, setZzzGif] = useState(false);
  const [gameboyGif, setGameboyGif] = useState(false);
  const [gymGif, setGymGif] = useState(false);
  const [hygieneGif, setHygieneGif] = useState(null);
  const [dirtinessLevel, setDirtinessLevel] = useState(0);

  const handleBathClick = () => {
    setShowBathGif(true);
    setIsBathing(true);

    const interval = setInterval(() => {
      setDirtinessLevel((prevDirtinessLevel) => {
        if (prevDirtinessLevel <= 0) {
          clearInterval(interval);
          setIsBathing(false);
          setShowBathGif(false);
          return 0;
        }
        return prevDirtinessLevel - 1;
      });
    }, 80); // reduce dirtiness level over 8 seconds
  };

  const handleEatClick = () => {
    setEatGif(true);
    setTimeout(() => {
      setEatGif(false);
    }, 3500);
  };

  const handleZzzClick = () => {
    setZzzGif(true);
    setTimeout(() => {
      setZzzGif(false);
    }, 16000);
  };

  const handleGameboyClick = () => {
    setGameboyGif(true);
    setTimeout(() => {
      setGameboyGif(false);
    }, 15000);
  };

  const handlegymClick = () => {
    setGymGif(true);
    setTimeout(() => {
      setGymGif(false);
    }, 15000);
  };

  const updateHygieneGif = (level) => {
    if (level >= 30 && level < 50) {
      setHygieneGif("https://cdn.discordapp.com/attachments/907599032623431681/1137093146191339652/caca1.gif");
    } else if (level >= 50 && level < 75) {
      setHygieneGif("https://cdn.discordapp.com/attachments/907599032623431681/1137093161496367265/caca2.gif");
    } else if (level >= 75) {
      setHygieneGif("https://cdn.discordapp.com/attachments/907599032623431681/1137093247945150515/caca3.gif");
    } else {
      setHygieneGif(null);
    }
  };

  const buttons = [
    {
      label: "ALIMENTAR",
      color: "purple",
      onClick: handleEatClick,
    },
    {
      label: "JUGAR",
      color: "blue",
      onClick: handleGameboyClick,
    },
    {
      label: "ENTRENAR",
      color: "orange",
      onClick: handlegymClick,
    },
    {
      label: "BAÑAR",
      color: "red",
      onClick: handleBathClick,
    },
    {
      label: "DORMIR",
      color: "brown",
      onClick: handleZzzClick,
    },
  ];

  const weight = 75;
  const happiness = 80;
  const skillLevel = 60;
  const sueño = 30;

  useEffect(() => {
    if (!isBathing) {
      const increaseDirtiness = setInterval(() => {
        setDirtinessLevel((prevLevel) => {
          if (prevLevel >= 100) {
            clearInterval(increaseDirtiness);
            return prevLevel;
          } else {
            return prevLevel + 1;
          }
        });
      }, 600); // Increment dirtiness level every 600 ms, so it will take 1 minute to reach 100

      return () => clearInterval(increaseDirtiness);
    }
  }, [isBathing]);

  useEffect(() => {
    updateHygieneGif(dirtinessLevel);
  }, [dirtinessLevel]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%", maxWidth: "700px", margin: "10px 0" }}>
        <Stats label="Hambre" value={weight} />
        <Stats label="Felicidad" value={happiness} />
        <Stats label="Nivel" value={skillLevel} />
        <Stats label="Higiene" value={100 - dirtinessLevel} />
        <Stats label="Sueño" value={sueño} />
      </div>
      <Tamagochi
        showBathGif={showBathGif}
        eatGif={eatGif}
        zzzGif={zzzGif}
        gameboyGif={gameboyGif}
        gymGif={gymGif}
        hygieneGif={hygieneGif}
      />
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <ButtonBar buttons={buttons} />
      </div>
    </div>
  );
};

export default Nofy;
