// components/GameOverAlert.js
import Link from "next/link";
import styles from "../styles/GameOverAlert.module.css";

const GameOverAlert = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.message}>
          <h2>¡GAME OVER!</h2>
          <p>Tu Butty ha muerto, intentalo nuevamente.</p>
        </div>
        <Link href="/" passHref>
          <button className={styles.playAgainButton}>Jugar de nuevo</button>
        </Link>
      </div>
    </div>
  );
};

export default GameOverAlert;