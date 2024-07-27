import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizcomplete from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";
import Answer from "./Answer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const qIdx = answerState === "" ? userAnswers.length : userAnswers.length - 1;

  // Handle answerState in order to give feedback to the user:
  // 1. Set answerState to 'answered' when the user clicks an answer - yellow
  // 2. Set answerState to 'correct' or 'wrong' after 1 second - green or red
  // 3. Reset answerState to '' after 2 seconds - so that qIdx is set to next question
  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setAnswerState("answered");
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

    setTimeout(() => {
      if (answer === QUESTIONS[qIdx].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
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
      <div id="question">
        <QuizTimer
          key={qIdx}
          timeout={10000}
          onTimeout={() => handleSkipAnswer(null)}
        />
        <h2>{QUESTIONS[qIdx].text}</h2>
        <Answer
          key={qIdx}
          answers={QUESTIONS[qIdx].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onClick={handleAnswerClick}
        ></Answer>
      </div>
    </div>
  );
}
