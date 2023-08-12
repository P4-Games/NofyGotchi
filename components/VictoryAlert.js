// components/VictoryAlert.js
import Link from "next/link";
import styles from "../styles/VictoryAlert.module.css";

const GameOverAlert = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.message}>
          <h2>¡VICTORY!</h2>
          <p>Felcitaciones has superado el desafio, eres un verdadero Buttpug.</p>
        </div>
        <Link href="/" passHref>
          <button className={styles.playAgainButton}>Jugar de nuevo</button>
        </Link>
        <Link href="https://discord.com/invite/eegRCDmwbM" passHref>
          <button className={styles.discordButton}>¡Unete a nuestro Discod!</button>
        </Link>
      </div>
    </div>
  );
};

export default GameOverAlert;