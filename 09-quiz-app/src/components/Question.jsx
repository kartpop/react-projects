import { useState } from "react";
import QuizTimer from "./QuizTimer";
import Answer from "./Answer";
import QUESTIONS from "../questions";

export default function Question({ queIdx, onSkip, onSaveAnswer }) {
  const [answerState, setAnswerState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  // Handle answerState in order to give feedback to the user:
  // 1. Set answerState to 'answered' when the user clicks an answer - yellow
  // 2. Set answerState to 'correct' or 'wrong' after 1 second - green or red
  // 3. Reset answerState to '' after 2 seconds - so that qIdx is set to next question
  const handleAnswerClick = (answer) => {
    setAnswerState({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswerState({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[queIdx].answers[0],
      });

      setTimeout(() => {
        onSaveAnswer(answer);
      }, 2000);
    }, 1000);
  };

  return (
    <div id="question">
      <QuizTimer timeout={10000} onTimeout={() => onSkip()} />
      <h2>{QUESTIONS[queIdx].text}</h2>
      <Answer
        answers={QUESTIONS[queIdx].answers}
        selectedAnswer={answerState.selectedAnswer}
        isCorrect={answerState.isCorrect}
        onSaveAnswer={handleAnswerClick}
      ></Answer>
    </div>
  );
}
