import { useState, useRef } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState("unknown entity");
  const name = useRef(); // gives access to the jsx element and all its props where this ref is set

  function handleClick() {
    setEnteredName(name.current.value);
    name.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
