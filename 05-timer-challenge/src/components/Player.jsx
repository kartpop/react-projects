import { useState } from "react";

export default function Player() {
  const [name, setName] = useState("unknown entity");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setSubmitted(false);
    setName(event.target.value);
  }

  function handleSetNameButton() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? name : 'unknown entity'}</h2>
      <p>
        <input onChange={handleNameChange} type="text" value={name}/>
        <button onClick={handleSetNameButton}>Set Name</button>
      </p>
    </section>
  );
}
