import React, { useState } from "react";
import Tamagochi from "../components/Tamagochi";
import ButtonBar from "../components/ButtonBar";
import Stats from "../components/Stats";

const Nofy = () => {
  const [showBathGif, setShowBathGif] = useState(false);

  const handleBathClick = () => {
    setShowBathGif(true);
    setTimeout(() => {
      setShowBathGif(false);
    }, 8000);
  };

  const [eatGif, setEatGif] = useState(false);

  const handleEatClick = () => {
    setEatGif(true);
    setTimeout(() => {
      setEatGif(false);
    }, 3500);
  };

  const [zzzGif, setZzzGif] = useState(false);

  const handleZzzClick = () => {
    setZzzGif(true);
    setTimeout(() => {
      setZzzGif(false);
    }, 16000);
  };

  const [gameboyGif, setGameboyGif] = useState(false);

  const handleGameboyClick = () => {
    setGameboyGif(true);
    setTimeout(() => {
      setGameboyGif(false);
    }, 15000);
  };

  const [gymGif, setGymGif] = useState(false);

  const handlegymClick = () => {
    setGymGif(true);
    setTimeout(() => {
      setGymGif(false);
    }, 15000);
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
  const higiene = 20;
  const sueño = 30;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%", maxWidth: "700px", margin: "10px 0" }}>
        <Stats label="Hambre" value={weight} />
        <Stats label="Felicidad" value={happiness} />
        <Stats label="Nivel" value={skillLevel} />
        <Stats label="Higiene" value={higiene} />
        <Stats label="Sueño" value={sueño} />
      </div>
      <Tamagochi showBathGif={showBathGif} eatGif={eatGif} zzzGif={zzzGif} gameboyGif={gameboyGif} gymGif={gymGif}/>
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <ButtonBar buttons={buttons} />
      </div>
    </div>
  );
};

export default Nofy;
