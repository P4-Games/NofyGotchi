import React, { useState, useEffect } from 'react';
import tamagochiStyles from '../styles/Tamagochi.module.css';

const Tamagochi = () => {
  const [randomNumber, setRandomNumber] = useState(null); // Inicialmente, el valor es null

  useEffect(() => {
    // Genera un número aleatorio entre 0 y 119 solo cuando el componente se monta inicialmente
    if (randomNumber === null) {
      const random = Math.floor(Math.random() * 120);
      setRandomNumber(random);
    }
  }, [randomNumber]); // Utiliza el randomNumber como dependencia para ejecutar el efecto solo cuando cambie su valor

  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        {/* Utiliza el número aleatorio en la URL de la imagen solo si ya se ha generado */}
        {randomNumber !== null && (
          <img
            src={`https://storage.googleapis.com/nof-gamma/T1/${randomNumber}.png`}
            alt="Tamagochi"
            className={tamagochiStyles.tamagochiImage}
          />
        )}
      </div>
    </div>
  );
};

export default Tamagochi;
