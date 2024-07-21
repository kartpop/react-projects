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
    setInitialInvestment(+event.target.value); // can use + to convert string to number
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(+event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(parseFloat(event.target.value)); // can use parseFloat to convert string to float
  }

  function handleDurationChange(event) {
    setDuration(parseInt(event.target.value)); // can use parseInt to convert string to integer
  }

  const isInputValid =
    annualInvestment > 0 && expectedReturn > 0 && duration > 0;

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <main>
      <div id="user-input" className="center">
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
      <div className="center">
        {isInputValid && <Result annualData={annualData}></Result>}
        {!isInputValid && <p>Please enter valid input</p>}
      </div>
    </main>
  );
}

export default App;
