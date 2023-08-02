import React from "react";
import ButtonBar from "../components/ButtonBar";
import tamagochiStyles from '../styles/Tamagochi.module.css';
import { useRouter } from 'next/router'; // Importa el hook useRouter

const HomePage = () => {
  const router = useRouter(); // Obtiene el objeto router

  const handleAbrirHuevoClick = () => {
    // Aquí puedes agregar la lógica para abrir el huevo o cualquier otra acción que desees
    console.log("Huevo abierto");

    // Después de realizar la acción, redirige al usuario a la ruta '/nofy'
    router.push('/nofy');
  };

  const buttons = [
    {
      label: "ABRIR EL HUEVO", // Corrige el texto del botón
      color: "purple",
      onClick: handleAbrirHuevoClick, // Utiliza la función para redirigir al usuario
    },
  ];

  // Puedes reemplazar estos valores con los datos reales de tu aplicación
  const weight = 75;
  const happiness = 80;
  const skillLevel = 60;
  const higiene = 20;
  const sueño = 30;

  return (
    <div>
      <div className={tamagochiStyles.tamagochiContainer}>
        <div className={tamagochiStyles.frame}>
          <img
            src="https://cdn.discordapp.com/attachments/907599032623431681/1136360642832511126/eggg.gif"
            alt="Tamagochi"
            className={tamagochiStyles.tamagochiImage}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <ButtonBar buttons={buttons} />
      </div>
    </div>
  );
};
export default HomePage;
