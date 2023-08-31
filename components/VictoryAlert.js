// components/VictoryAlert.js
import Link from "next/link";
import styles from "../styles/VictoryAlert.module.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';

const GameOverAlert = ({ onClose }) => {
  const { data: session, status } = useSession();
  const [discordId, setDiscordId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchUserId = async () => {
        try {
          const url = session.user.image
          const regex = /\/avatars\/(\d+)\//;
          const match = url.match(regex);
          setDiscordId(match[1]);
        } catch (error) {
          console.error('Failed to fetch user ID:', error);
        }
      };

      fetchUserId();
    }
  }, []);

  const handleRewardClick = async () => {
    if (discordId) {
      const testID = "434017814505062401";
      const response = await axios.get(`https://nof.town/api/post?discordID=${testID}`, { 'responseType': 'arraybuffer'});
      router.push(
        {
          pathname: '/reward',
          query: {nofy: response},
        }
        //,'/reward', // "as" argument
      );
    }
  }

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
        {discordId && (
        <a onClick={handleRewardClick}>
          <button className={styles.rewardButton}>¡Obtené tu recompensa!</button>
        </a>
        )}
      </div>
    </div>
  );
};

export default GameOverAlert;