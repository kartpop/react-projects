import logo from "../../public/quiz-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="A Quiz to test knowledge of React" />
      <h1>React Quiz</h1>
    </header>
  );
}
