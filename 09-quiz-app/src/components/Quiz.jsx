import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizcomplete from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const qIdx = userAnswers.length;

  if (qIdx === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizcomplete} alt="Trophy!" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  const shuffledAnswers = [...QUESTIONS[qIdx].answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={qIdx}
          timeout={10000}
          onTimeout={() => handleSkipAnswer(null)}
        />
        <h2>{QUESTIONS[qIdx].text}</h2>
      </div>
      <div id="answers">
        {shuffledAnswers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
          </li>
        ))}
      </div>
    </div>
  );
}
