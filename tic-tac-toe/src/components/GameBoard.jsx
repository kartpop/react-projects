const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <button key={cellIndex}>{cell}</button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
