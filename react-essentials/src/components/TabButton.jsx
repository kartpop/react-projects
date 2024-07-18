export default function TabButton({ children }) {
  function handleClick() {
    console.log(`Button clicked: ${children}`);
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
