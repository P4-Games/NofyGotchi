// components/Stats.js
import React from "react";
import StatsStyles from "../styles/Stats.module.css";

const Stats = ({ label, value }) => {
  return (
    <div className={StatsStyles.statBar}>
      <span className={StatsStyles.statLabel}>{label}</span>
      <div className={StatsStyles.statBarFill}>
        <div className={StatsStyles.statBarFillInner} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

export default Stats;
