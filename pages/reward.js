import React from "react";
import Confetti from "../components/Confetti";
import Reward from "../components/Reward";
import rewardStyles from "../styles/Reward.module.css";

const RewardPage = () => {
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
