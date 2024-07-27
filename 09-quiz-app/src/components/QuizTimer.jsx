import { useState, useEffect } from "react";

export default function QuizTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => { // without useEffect, setInterval would be called on every render after setRemainingTime is called causing multiple timers to run
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);

  useEffect(() => { // we don't want timeout to be set on every render when remainitTime is updated
    setTimeout(() => {
      onTimeout();
    }, timeout);
  }, [onTimeout, timeout]);

  return <progress id="progress" max={timeout} value={remainingTime}></progress>;
}
