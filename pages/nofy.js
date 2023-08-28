// pages/nofy.js
import React, { useState, useEffect } from "react";
import Tamagochi from "../components/Tamagochi";
import ButtonBar from "../components/ButtonBar";
import Stats from "../components/Stats";
import Timer from "../components/Timer";
import GameOverAlert from "../components/GameOverAlert";
import styles from "../styles/GameOverAlert.module.css";
import VictoryAlert from "../components/VictoryAlert";
import { useRouter } from "next/router";

const Nofy = () => {
  const [showBathGif, setShowBathGif] = useState(false);
  const [isBathing, setIsBathing] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [dirtinessLevel, setDirtinessLevel] = useState(0);
  const [sueño, setSueño] = useState(0);
  const [hunger, setHunger] = useState(0);
  const [game, setGameboy] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGameOverAlert, setShowGameOverAlert] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showVictoryAlert, setShowVictoryAlert] = useState(false);
  const [isPerformingAction, setIsPerformingAction] = useState(false);
  const [intervals, setIntervals] = useState([]);
  const router = useRouter();

  // Utiliza el valor de la dificultad seleccionada para ajustar las variables
  const selectedDifficulty = router.query.difficulty || "normal"; // Obtiene la dificultad de los query parameters

  const getDifficultyValues = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return { diversion: 750, baño: 600, cansancio: 1000, comida: 650  };
      case "hard":
        return { diversion: 650, baño: 400, cansancio: 500, comida: 450 };
      default:
        return { diversion: 700, baño: 500, cansancio: 750, comida: 550 };
    }
  };

  const { diversion, baño, cansancio, comida } =
    getDifficultyValues(selectedDifficulty); // Obtiene los valores de dificultad

  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const [gifs, setGifs] = useState({
    eatGif: false,
    zzzGif: false,
    gameboyGif: false,
    hygieneGif: null,
    sleepGif: null,
  });

  const handleTimedState = (stateKey, duration) => {
    setGifs((prev) => ({ ...prev, [stateKey]: true }));
    setTimeout(() => {
      setGifs((prev) => ({ ...prev, [stateKey]: false }));
    }, duration);
  };

  const handleBathClick = () => {
    if (isPerformingAction) return; // Checa si ya está realizando una acción
    setIsPerformingAction(true);
    setShowBathGif(true);
    setIsBathing(true);
    const interval = setInterval(() => {
      setDirtinessLevel((prev) => {
        const nextValue = prev - 1;
        if (nextValue <= 0) {
          clearInterval(interval);
          setIsBathing(false);
          setShowBathGif(false);
          setIsPerformingAction(false);
          return 0;
        }
        return nextValue;
      });
    }, 80);
  };

  const handleZzzClick = () => {
    if (isPerformingAction) return; // Checa si ya está realizando una acción
    setIsPerformingAction(true);
    setIsSleeping(true);
    setGifs((prev) => ({ ...prev, zzzGif: true })); // Activar el gif de dormir

    const interval = setInterval(() => {
      setSueño((prev) => {
        const nextValue = prev - 6.25;
        if (nextValue <= 0) {
          clearInterval(interval);
          setIsSleeping(false);
          setGifs((prev) => ({ ...prev, zzzGif: false })); // Desactivar el gif de dormir
          setIsPerformingAction(false);
          return 0;
        }
        return nextValue;
      });
    }, 1000);
  };

  const handleFeedClick = () => {
    if (isPerformingAction) return;
    setIsPerformingAction(true);
    handleTimedState("eatGif", 3500);

    setTimeout(() => {
      setHunger((prev) => {
        const newValue = prev - 25;
        setIsPerformingAction(false);
        return newValue < 0 ? 0 : newValue;
      });
    }, 3500); // Establecer isPerformingAction en false después de 3.5 segundos
  };

  // Función para incrementar el stat de juego
  const aumentarStatJuego = () => {
    setGameboy((prev) => (prev >= 100 ? 100 : prev + 1));
  };

  const handleGameboyClick = () => {
    if (isPerformingAction) return; // Checa si ya está realizando una acción
    setIsPerformingAction(true);
    setIsPlaying(true);
    setGifs((prev) => ({ ...prev, gameboyGif: true }));

    const decreaseAmount = 40 / 125;
    let iterations = 0;

    const interval = setInterval(() => {
      setGameboy((prev) => {
        const newValue = prev - decreaseAmount;
        iterations++;
        if (newValue <= 0 || iterations >= 125) {
          clearInterval(interval);
          setIsPlaying(false); // Establecer isPlaying en false cuando el juego ha terminado
          setIsPerformingAction(false);
          setGifs((prev) => ({ ...prev, gameboyGif: false }));
          aumentarStatJuego(); // Llamar a la función para incrementar el stat de juego
          return Math.max(0, newValue);
        }
        return newValue;
      });
    }, 100);
  };

  useEffect(() => {
    // Incrementar el stat de juego cuando no se está jugando el juego
    if (!isPlaying) {
      const interval = setInterval(() => {
        setGameboy((prev) => (prev >= 100 ? 100 : prev + 1));
      }, diversion);

      setIntervals((prevIntervals) => [...prevIntervals, interval]);

      return () => {
        clearInterval(interval);
        setIntervals((prevIntervals) =>
          prevIntervals.filter((id) => id !== interval)
        );
      };
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prev) => (prev >= 100 ? 100 : prev + 1));
    }, comida); // Incrementar en 1 cada 450ms para llegar a 100 en 45 segundos.
    setIntervals((prevIntervals) => [...prevIntervals, interval]);

    return () => {
      clearInterval(interval);
      setIntervals((prevIntervals) =>
        prevIntervals.filter((id) => id !== interval)
      );
    };
  }, []);

  useEffect(() => {
    const updateGif = (value, thresholds, gifs, key) => {
      const selectedGif = thresholds.reduce((acc, threshold, index) => {
        return value >= threshold ? gifs[index] : acc;
      }, gifs[gifs.length - 1]);
      setGifs((prev) => ({ ...prev, [key]: selectedGif }));
    };

    updateGif(
      sueño,
      [50, 75],
      [
        "https://cdn.discordapp.com/attachments/907599032623431681/1137188216793997343/tarde.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137188248695865455/luna.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137188198607499264/sol.gif",
      ],
      "sleepGif"
    );

    updateGif(
      dirtinessLevel,
      [30, 50, 75],
      [
        "https://cdn.discordapp.com/attachments/907599032623431681/1137093146191339652/caca1.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137093161496367265/caca2.gif",
        "https://cdn.discordapp.com/attachments/907599032623431681/1137093247945150515/caca3.gif",
        null,
      ],
      "hygieneGif"
    );
  }, [sueño, dirtinessLevel]);

  useEffect(() => {
    if (!isBathing) {
      const interval = setInterval(() => {
        setDirtinessLevel((prev) => (prev >= 100 ? 100 : prev + 1));
      }, baño);

      setIntervals((prevIntervals) => [...prevIntervals, interval]);

      return () => {
        clearInterval(interval);
        setIntervals((prevIntervals) =>
          prevIntervals.filter((id) => id !== interval)
        );
      };
    }
  }, [isBathing]);

  useEffect(() => {
    if (!isSleeping) {
      const interval = setInterval(() => {
        setSueño((prev) => (prev >= 100 ? 100 : prev + 1));
      }, cansancio);

      setIntervals((prevIntervals) => [...prevIntervals, interval]);

      return () => {
        clearInterval(interval);
        setIntervals((prevIntervals) =>
          prevIntervals.filter((id) => id !== interval)
        );
      };
    }
  }, [isSleeping]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0 && !isPaused) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    // Verificar si algún stat alcanza 100
    if (
      hunger >= 100 ||
      game >= 100 ||
      dirtinessLevel >= 100 ||
      (sueño >= 100 && !isPaused)
    ) {
      // Pausar el juego y mostrar la alerta de "GAME OVER"
      clearAllIntervals();
      setIsPaused(true);
      setShowGameOverAlert(true);
    }
  }, [hunger, game, dirtinessLevel, sueño]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && !isPaused) {
      clearAllIntervals();
      setShowVictoryAlert(true);
      setIsPaused(true); // Pausa el juego
    }
  }, [minutes, seconds]);

  const clearAllIntervals = () => {
    console.log("LIMPIANDO");
    intervals.forEach((interval) => {
      clearInterval(interval);
    });
    setIntervals([]);
  };

  const buttons = [
    { label: "FIXEAR", color: "purple", onClick: handleFeedClick },
    { label: "HACKEAR", color: "blue", onClick: handleGameboyClick },
    { label: "FUZZEAR", color: "red", onClick: handleBathClick },
    { label: "CHARGE", color: "brown", onClick: handleZzzClick },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "700px",
          margin: "10px 0",
        }}
      >
        <Stats label="Errors" value={hunger} />
        <Stats label="Bounty" value={game} />
        <Timer minutes={minutes} seconds={seconds} />
        <Stats label="Meduza" value={dirtinessLevel} />
        <Stats label="Battery" value={sueño} />
      </div>
      <Tamagochi
        {...gifs}
        showBathGif={showBathGif}
        isNight={sueño >= 75}
        isNoon={sueño >= 50 && sueño < 75}
      />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <ButtonBar buttons={buttons} isPerformingAction={isPerformingAction} />
        {isPaused && <div className={styles.overlay} />}{" "}
        {/* Agrega el fondo para la pausa */}
        {showGameOverAlert && (
          <GameOverAlert onClose={() => setShowGameOverAlert(false)} />
        )}
        {showVictoryAlert && (
          <VictoryAlert onClose={() => setShowVictoryAlert(false)} />
        )}
      </div>
    </div>
  );
};

export default Nofy;
