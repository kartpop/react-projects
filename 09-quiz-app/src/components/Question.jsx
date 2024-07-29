import { useState } from "react";
import QuizTimer from "./QuizTimer";
import Answer from "./Answer";
import QUESTIONS from "../questions";

export default function Question({ queIdx, onSkip, onSaveAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer != "") {
    timer = 1000;
  }
  if (answer.isCorrect != null) {
    timer = 2000;
  }


  // Handle answer in order to give feedback to the user:
  // 1. Set answer to 'answered' when the user clicks an answer - yellow
  // 2. Set answer to 'correct' or 'wrong' after 1 second - green or red
  // 3. Reset answer to '' after 2 seconds - so that qIdx is set to next question
  const handleAnswerClick = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[queIdx].answers[0],
      });

      setTimeout(() => {
        onSaveAnswer(answer);
      }, 2000);
    }, 1000);
  };

  const handleSkipAnswer = () => {
    onSkip();
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuizTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === "" ? handleSkipAnswer : null} mode={answerState} />
      <h2>{QUESTIONS[queIdx].text}</h2>
      <Answer
        answers={QUESTIONS[queIdx].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSaveAnswer={handleAnswerClick}
      ></Answer>
    </div>
  );
}
