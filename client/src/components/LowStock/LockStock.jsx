import { FaExclamationTriangle } from "react-icons/fa";
import { lowStockProducts } from "../../data/dashboardData";

function LowStock() {
  const getStockColor = (stock) => {
    if (stock <= 2) {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          ⚠ Low Stock Products
        </h2>

        <button className="text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {lowStockProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <div>
              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500">
                {product.category}
              </p>
            </div>

            <div
              className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${getStockColor(
                product.stock
              )}`}
            >
              <FaExclamationTriangle />

              {product.stock} Left
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LowStock;