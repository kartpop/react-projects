const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onCellClick, turns }) {
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }

  function handleCellClick(rowIndex, colIndex) {
    onCellClick(rowIndex, colIndex);
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleCellClick(rowIndex, colIndex)} disabled={playerSymbol != null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
