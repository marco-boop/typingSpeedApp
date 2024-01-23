import React, { useEffect, useState } from "react";
import styles from "./countdownTimer.module.css";

const CountdownTimer = ({ startTime, setStartTime, setFinished }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (startTime && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
    // go read more about this
  }, [startTime, timeLeft]);

  return (
    <div className={startTime ? "" : "hidden"}>
      <p className={styles.timeText}>Time left: {timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;
