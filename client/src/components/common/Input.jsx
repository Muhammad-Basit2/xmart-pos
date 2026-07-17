function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error = "",
  required = false,
}) {
  return (
    <div className="mb-5">

      <label className="block mb-2 text-sm font-semibold text-gray-700">

        {label}

        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full
          px-4
          py-3
          rounded-lg
          border
          outline-none
          transition

          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }
        `}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;