export default function Tag({ text, color = "lime-600" }) {
  return (
    <div
      className={`inline-flex border border-${color} gap-2 text-${color} px-3 py-1 rounded-full uppercase items-center`}
    >
      <span>&#10038;</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}
