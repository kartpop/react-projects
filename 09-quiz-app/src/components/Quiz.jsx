import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

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
      <Summary userAnswers={userAnswers}></Summary>
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
