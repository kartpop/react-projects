import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turns, setTurns] = useState([]);

  function handleSelectSquare(rowIdx, colIdx) {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === "X" ? "O" : "X";
    });

    setTurns((currTurns) => {
      let currentPlayer = "X"; // cannot use activePlayer here as that state is being updated asynchronously

      if (currTurns.length > 0 && currTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...currTurns,
      ];

      return updatedTurns
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onCellClick={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
