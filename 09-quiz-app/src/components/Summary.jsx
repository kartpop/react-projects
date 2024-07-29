import quizcomplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  let skipped = 0,
    correctlyAnswered = 0,
    incorrectlyAnswered = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === null) {
      skipped++;
    } else if (userAnswers[i] === QUESTIONS[i].answers[0]) {
      correctlyAnswered++;
    } else {
      incorrectlyAnswered++;
    }
  }

  return (
    <div id="summary">
      <img src={quizcomplete} alt="Trophy!" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((skipped / QUESTIONS.length) * 100)}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((correctlyAnswered / QUESTIONS.length) * 100)}%
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">
            {Math.round((incorrectlyAnswered / QUESTIONS.length) * 100)}%
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let answerClass = "";
          if (answer === null) {
            answerClass = "skipped";
          } else if (answer === QUESTIONS[i].answers[0]) {
            answerClass = "correct";
          } else {
            answerClass = "wrong";
          }
          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={`user-answer ${answerClass}`}>
                {answer ?? "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
