export default function LabelInput({ label, type, value, onChange }) {
  return (
    <div className="flex flex-col p-4">
      <label
        htmlFor={label}
        className="text-left font-bold text-sm text-slate-800"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="border border-slate-300 p-2"
      />
    </div>
  );
}
