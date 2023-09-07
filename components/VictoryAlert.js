// components/VictoryAlert.js
import Link from "next/link";
import styles from "../styles/VictoryAlert.module.css";
import { useSession } from "next-auth/react";

const GameOverAlert = ({ onClose }) => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.message}>
          <h2>¡VICTORY!</h2>
          <p>Felcitaciones has superado el desafio, eres un verdadero Number One Fan.</p>
        </div>
        <Link href="/" passHref>
          <button className={styles.playAgainButton}>Jugar de nuevo</button>
        </Link>
        <Link href="https://discord.gg/t2prTfMwZh" passHref>
          <button className={styles.discordButton}>¡Sumate a nuestro Discod!</button>
        </Link>
        {status === 'authenticated' && (
        <a href="/reward">
          <button className={styles.rewardButton}>¡Obtené tu recompensa!</button>
        </a>
        )}
      </div>
    </div>
  );
};

export default GameOverAlert;