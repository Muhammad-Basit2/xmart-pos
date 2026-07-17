function StatCard({ title, value, change }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

      <p className="text-green-600 mt-3 text-sm">
        {change}
      </p>
    </div>
  );
}

export default StatCard;