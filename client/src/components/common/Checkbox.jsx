function Checkbox({
  label,
  checked,
  onChange,
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span className="text-sm">
        {label}
      </span>

    </label>
  );
}

export default Checkbox;