import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

function deriveActivePlayer(turns) {
  let currentPlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(board, playerName) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = board[combination[0].row][combination[0].column];
    const secondSquare = board[combination[1].row][combination[1].column];
    const thirdSquare = board[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = playerName[firstSquare];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let board = [...INITIAL_BOARD.map((row) => [...row])]; // so that initialBoard is not mutated and can be used on reset

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }
  return board;
}

function App() {
  const [playerName, setPlayerName] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const board = deriveGameBoard(gameTurns);
  const winner = deriveWinner(board, playerName);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleResetGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(player, newName) {
    setPlayerName((currNames) => {
      return {
        ...currNames,
        [player]: newName,
      };
    });
  }

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns((currTurns) => {
      const currentPlayer = deriveActivePlayer(currTurns);

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...currTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChanged={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChanged={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            winner={winner}
            onRematch={handleResetGame}
          ></GameOver>
        )}
        <GameBoard onCellClick={handleSelectSquare} board={board}></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
