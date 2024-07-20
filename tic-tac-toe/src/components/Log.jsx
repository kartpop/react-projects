export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {`Player ${turn.player} moved to row ${turn.square.row}, col ${turn.square.col}`}
        </li>
      ))}
    </ol>
  );
}
