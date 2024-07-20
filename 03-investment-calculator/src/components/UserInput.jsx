export default function UserInput({ label, value, step, onInputChanged }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        className="input"
        type="number"
        value={value}
        step={step}
        onChange={onInputChanged}
      />
    </div>
  );
}
