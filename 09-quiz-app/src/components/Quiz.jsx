import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizcomplete from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const qIdx = userAnswers.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  if (qIdx === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizcomplete} alt="Trophy!" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={qIdx}
        queIdx={qIdx}
        onSkip={handleSkipAnswer}
        onSaveAnswer={handleAnswerClick}
      ></Question>
    </div>
  );
}
