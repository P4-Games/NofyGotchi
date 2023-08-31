// components/VictoryAlert.js
import Link from "next/link";
import styles from "../styles/VictoryAlert.module.css";

const VictoryAlert = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.message}>
          <h2>¡VICTORY!</h2>
          <p>¡Fué sin querer queriendo!</p>
        </div>
        <Link href="/" passHref>
          <button className={styles.playAgainButton}>Jugar de nuevo</button>
        </Link>
        <Link href="https://t.me/CHAVOtokenesp" passHref>
          <button className={styles.discordButton}>¡Sumate a nuestro Telegram!</button>
        </Link>
      </div>
    </div>
  );
};

export default VictoryAlert;