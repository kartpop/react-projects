import QuizTimer from "./QuizTimer";
import Answer from "./Answer";

export default function Question({
  queText,
  onSkip,
  answers,
  selectedAnswer,
  answerState,
  onClick,
}) {
  return (
    <div id="question">
      <QuizTimer timeout={10000} onTimeout={() => onSkip()} />
      <h2>{queText}</h2>
      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onClick={onClick}
      ></Answer>
    </div>
  );
}
