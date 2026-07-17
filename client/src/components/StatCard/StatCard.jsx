function StatCard({
  title,
  value,
  change,
  icon,
  bgColor,
  changeColor,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-medium">
          {title}
        </h3>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl ${bgColor}`}
        >
          {icon}
        </div>
      </div>

      {/* Value */}
      <h2 className="text-3xl font-bold mt-5">
        {value}
      </h2>

      {/* Change */}
      <p className={`mt-3 text-sm font-medium ${changeColor}`}>
        {change}
      </p>
    </div>
  );
}

export default StatCard;