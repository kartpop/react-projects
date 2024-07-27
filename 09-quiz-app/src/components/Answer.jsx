import { useRef } from "react";

export default function Answer({
  answers,
  selectedAnswer,
  answerState,
  onClick,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <div id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cl = "";

        if (isSelected && answerState === "answered") {
          cl = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cl = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button className={cl} onClick={() => onClick(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </div>
  );
}
