// components/Stats.js
import React from "react";
import StatsStyles from "../styles/Stats.module.css";

const Stats = ({ label, value }) => {
  let fillBackgroundColorClass;

  if (value <= 60) {
    fillBackgroundColorClass = StatsStyles.greenFillBackground;
  } else if (value <= 85) {
    fillBackgroundColorClass = StatsStyles.yellowFillBackground;
  } else {
    fillBackgroundColorClass = StatsStyles.redFillBackground;
  }

  return (
    <div className={StatsStyles.statBar}>
      <div className={StatsStyles.statBarFill}>
        <div className={`${StatsStyles.statBarFillInner} ${fillBackgroundColorClass}`} style={{ width: `${value}%` }}>
        </div>
      </div>
      <span className={StatsStyles.statLabel}>{label}</span>
    </div>
  );
};

export default Stats;
