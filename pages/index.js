// index.js
import React from "react";
import ButtonBar from "../components/ButtonBar";
import tamagochiStyles from '../styles/Tamagochi.module.css'; // Importa los estilos
import Huevo from "../components/Huevo"; // Importa el componente

import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handleAbrirHuevoClick = () => {
    console.log("Huevo abierto");
    router.push('/nofy');
  };

  const buttons = [
    {
      label: "ABRIR  HUEVO",
      color: "purple",
      onClick: handleAbrirHuevoClick,
    },
  ];

  return (
    <div>
      <div className={tamagochiStyles.tamagochiContainer}>
        <Huevo/> {/* Usa el componente Huevo aquí */}
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <ButtonBar buttons={buttons} />
      </div>
    </div>
  );
};

export default HomePage;
