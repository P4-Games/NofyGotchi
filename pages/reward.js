import React, { useEffect, useState } from "react";
import Confetti from "../components/Confetti";
import Reward from "../components/Reward";
import rewardStyles from "../styles/Reward.module.css";
import { useRouter } from 'next/router';

const RewardPage = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    if (!router.query.reward) {
      router.push('/');
    } else {
      setLoaded(true)
    }
  }, []);

  return (
    <div>
      {loaded && <div className={rewardStyles.tamagochiContainer}>
        <Confetti />
        <Reward />
      </div>}
    </div>
  );
};

export default RewardPage;
