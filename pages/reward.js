import React from "react";
import Confetti from "../components/Confetti";
import Reward from "../components/Reward";
import rewardStyles from "../styles/Reward.module.css";
import { useRouter } from 'next/router';

const RewardPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <div className={rewardStyles.tamagochiContainer}>
        <Confetti />
        <Reward />
      </div>
    </div>
  );
};

export default RewardPage;
