export default function CustomInput({ label, invalid, ...props }) {
  let labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";

  if (invalid) {
    labelClasses =
      "block mb-2 text-xs font-bold tracking-wide uppercase text-red-500";
  }
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
        {...props}
      />
    </p>
  );
}
