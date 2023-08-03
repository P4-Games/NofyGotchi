import React, { useState } from "react";
import Tamagochi from "../components/Tamagochi";
import ButtonBar from "../components/ButtonBar";
import Stats from "../components/Stats";
import styles from "../styles/Tamagochi.module.css";

const Nofy = () => {
  const [showBathGif, setShowBathGif] = useState(false);

  const handleBathClick = () => {
    setShowBathGif(true);
    setTimeout(() => {
      setShowBathGif(false);
    }, 8000);
  };

  const buttons = [
    {
      label: "ALIMENTAR",
      color: "purple",
      onClick: () => console.log("Botón ALIMENTAR presionado"),
    },
    {
      label: "JUGAR",
      color: "blue",
      onClick: () => console.log("Botón JUGAR presionado"),
    },
    {
      label: "ENTRENAR",
      color: "orange",
      onClick: () => console.log("Botón ENTRENAR presionado"),
    },
    {
      label: "BAÑAR",
      color: "red",
      onClick: handleBathClick,
    },
    {
      label: "DORMIR",
      color: "brown",
      onClick: () => console.log("Botón DORMIR presionado"),
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
      <Tamagochi showBathGif={showBathGif} />
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <ButtonBar buttons={buttons} />
      </div>
    </div>
  );
};

export default Nofy;
