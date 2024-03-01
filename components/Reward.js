import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import Confetti from "../components/Confetti";
import tamagochiStyles from "../styles/Tamagochi.module.css";
import rewardStyles from "../styles/Reward.module.css";
import axios from 'axios';
import Link from "next/link";

const Reward = () => {
  const [message, setMessage] = useState(null);
  const { data: session, status } = useSession();
  const [rewardImage, setRewardImage] = useState(null);

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchUserId = () => {
        try {
          const url = session.user.image
          const regex = /\/avatars\/(\d+)\//;
          const match = url.match(regex);
          return match[1]
        } catch (error) {
          console.error('Failed to fetch user ID:', error);
        }
      };

      const fetchReward = async (discordId) => {
        try {
          const response = await axios.get(`/api/reward?discordId=${discordId}`);
          if (response.data.success) {
            setRewardImage(response.data.message);
          } else {
            setMessage(response.data.message);
          }
        } catch (error) {
          console.error('Error en la llamada a la API interna:', error);
        }
      };

      const discordId = fetchUserId();
      fetchReward(discordId);
    }
  }, [status]);

  useEffect(() => {
    window.onbeforeunload = function() {
      window.setTimeout(function () {
        window.location = '/';
      }, 0);
      window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser
    }
  }, []);

  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      {message &&
        <div className={rewardStyles.modal}>
          <div className={rewardStyles.message}>
            <h2>¡Has roto la Matrix!</h2>
            <p>Felcitaciones, ya tienes todos los nofys especiales.</p>
          </div>
        </div>
      }
      {rewardImage && 
          <div className={tamagochiStyles.frame}>
            <Confetti />
            <img
              src={`data:image/gif;base64,${rewardImage}`}
              alt="Reward"
              className={tamagochiStyles.tamagochiImage}
            />
          </div>
      }
      <Link href="/" passHref>
        <button className={rewardStyles.playAgainButton}>Jugar de nuevo</button>
      </Link>
    </div>
  );
};

export default Reward;