import { formatter, formatIndianCurrency } from "../util/investment";

export default function Result({ annualData }) {
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((data) => ( 
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatIndianCurrency(data.valueEndOfYear)}</td>
              <td>{formatIndianCurrency(data.interest)}</td>
              <td>{formatIndianCurrency(data.totalInterest)}</td>
              <td>{formatIndianCurrency(data.investedCaptial)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
