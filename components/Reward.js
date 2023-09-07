import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import Confetti from "../components/Confetti";
import tamagochiStyles from "../styles/Tamagochi.module.css";
import axios from 'axios';

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

  return (
    <div>
      {message && <h1>{message}</h1>}
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
    </div>
  );
};

export default Reward;