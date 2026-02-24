import React, { useState } from "react";
import ButtonBar from "../components/ButtonBar";
import tamagochiStyles from "../styles/Tamagochi.module.css";
import Huevo from "../components/Huevo";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState("normal");

  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
    router.push({
      pathname: "/nofy",
      query: { difficulty },
    });
  };

  const difficultyButtons = [
    {
      label: "Easy",
      color: "green",
      isActive: selectedDifficulty === "easy",
      onClick: () => handleDifficultyClick("easy"),
    },
    {
      label: "Normal",
      color: "blue",
      isActive: selectedDifficulty === "normal",
      onClick: () => handleDifficultyClick("normal"),
    },
    {
      label: "Hard",
      color: "red",
      isActive: selectedDifficulty === "hard",
      onClick: () => handleDifficultyClick("hard"),
    },
  ];

  return (
    <div className={tamagochiStyles.gameScreen}>
      <div className={tamagochiStyles.tamagochiWrapper}>
        <Huevo />
      </div>
      <div style={{ textAlign: "center", marginTop: "12px", marginBottom: "4px" }}>
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Elige tu desafío
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            marginTop: "4px",
            color: "#e5e7eb",
          }}
        >
          Selecciona la dificultad
        </p>
      </div>
      <ButtonBar buttons={difficultyButtons} />
    </div>
  );
};

export default HomePage;
