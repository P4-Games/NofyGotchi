import React from "react";
import Reward from "../components/Reward";
import rewardStyles from "../styles/Reward.module.css";

const RewardPage = () => {
  return (
    <div>
      <div className={rewardStyles.tamagochiContainer}>
        <Reward />
      </div>
    </div>
  );
};

export default RewardPage;
