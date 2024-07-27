import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const qIdx = userAnswers.length;

  function handleAnswerClick(answer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[qIdx].text}</h2>
      </div>
      <div id="answers">
        {QUESTIONS[qIdx].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
          </li>
        ))}
      </div>
    </div>
  );
}
