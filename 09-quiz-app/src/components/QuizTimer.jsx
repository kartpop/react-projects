import { useState, useEffect } from "react";

export default function QuizTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => { // without useEffect, setInterval would be called on every render after setRemainingTime is called causing multiple timers to run
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => { // we don't want timeout to be set on every render when remainitTime is updated
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  return <progress id="progress" max={timeout} value={remainingTime} className={mode}></progress>;
}
