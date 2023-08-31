import tamagochiStyles from "../styles/Tamagochi.module.css";
import { useRouter } from 'next/router';

const Reward = () => {
  const router = useRouter();

  return (
    <div className={tamagochiStyles.tamagochiContainer}>
      <div className={tamagochiStyles.frame}>
        <img
            src={`data:image/gif;base64,${router.query.reward}`}
            alt="Reward"
            className={tamagochiStyles.tamagochiImage}
          />
      </div>
    </div>
  );
};

export default Reward;
