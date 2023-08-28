import React, { useState } from "react"; // Importa useState
import ButtonBar from "../components/ButtonBar";
import tamagochiStyles from '../styles/Tamagochi.module.css'; // Importa los estilos
import Huevo from "../components/Huevo"; // Importa el componente
import { useRouter } from 'next/router';


const HomePage = () => {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState("normal"); // Estado para la dificultad

  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty); // Actualiza el estado con la dificultad seleccionada
    router.push({
      pathname: '/nofy',
      query: { difficulty }, // Pasa la dificultad seleccionada como query parameter
    });
  };

  // Agrega botones de dificultad
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
    <div>
      <div className={tamagochiStyles.tamagochiContainer}>
        <Huevo/> {/* Usa el componente Huevo aquí */}
      </div>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
      <p style={{ color: "white", fontWeight: "bold" }}>SELECCIONE LA DIFICULTAD</p>
    </div>
      {/* Agrega los botones de dificultad */}
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <ButtonBar buttons={difficultyButtons} />
      </div>
    </div>
  );
};

export default HomePage;
