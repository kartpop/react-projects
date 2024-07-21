import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(900);
  const [expectedReturn, setExpectedReturn] = useState(5.5);
  const [duration, setDuration] = useState(12);

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(parseInt(event.target.value));
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(parseInt(event.target.value));
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(parseFloat(event.target.value));
  }

  function handleDurationChange(event) {
    setDuration(parseInt(event.target.value));
  }

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <main>
      <div id="user-input">
        <ol className="input-group">
          <UserInput
            label="Initial Investment"
            value={initialInvestment}
            step="1000"
            onInputChanged={handleInitialInvestmentChange}
          ></UserInput>
          <UserInput
            label="Annual Investment"
            value={annualInvestment}
            step="1000"
            onInputChanged={handleAnnualInvestmentChange}
          ></UserInput>
        </ol>
        <ol className="input-group">
          <UserInput
            label="Expected Return"
            value={expectedReturn}
            step="0.1"
            onInputChanged={handleExpectedReturnChange}
          ></UserInput>
          <UserInput
            label="Duration"
            value={duration}
            step="1000"
            onInputChanged={handleDurationChange}
          ></UserInput>
        </ol>
      </div>
      <Result annualData={annualData}></Result>
    </main>
  );
}

export default App;
