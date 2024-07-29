import { useRef } from "react";

export default function Answer({
  answers,
  selectedAnswer,
  isCorrect,
  onSaveAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <div id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cl = "";

        if (selectedAnswer === answer) {
          cl = "answered";
          if (isCorrect != null) {
            cl = isCorrect ? "correct" : "wrong";
          }
        }

        return (
          <li key={answer} className="answer">
            <button className={cl} onClick={() => onSaveAnswer(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </div>
  );
}
