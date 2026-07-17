function StatCard({
  title,
  value,
  change,
  icon,
  bgColor,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

      {/* Top Section */}

      <div className="flex justify-between items-center">

        <h3 className="text-gray-500 font-medium">
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

      <p className="text-green-600 mt-3 text-sm">
        {change}
      </p>

    </div>
  );
}

export default StatCard;