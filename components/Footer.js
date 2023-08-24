import React from 'react';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imageContainer}>
        {Array.from({ length: 132 }, (_, index) => (
          <img
            key={index}
            src={`/characters/${index}.png`} // Ruta relativa a la carpeta public
            alt={`${index}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
