// components/GameOverAlert.js
import Link from "next/link";
import styles from "../styles/GameOverAlert.module.css";

const GameOverAlert = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.message}>
          <h2>¡GAME OVER!</h2>
          <p>Es que no me tienen paciencia.</p>
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

export default GameOverAlert;