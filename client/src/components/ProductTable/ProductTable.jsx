import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function ProductTable({ products }) {
  const getStockStatus = (stock) => {
    if (stock <= 5) {
      return {
        text: "Low Stock",
        color: "bg-red-100 text-red-700",
      };
    }

    if (stock <= 20) {
      return {
        text: "Medium",
        color: "bg-yellow-100 text-yellow-700",
      };
    }

    return {
      text: "In Stock",
      color: "bg-green-100 text-green-700",
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Unit</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Stock</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="py-10 text-center text-gray-500 text-lg"
                >
                  😕 No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => {
                const status = getStockStatus(product.stock);

                return (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    {/* Image */}
                    <td className="px-6 py-4 text-3xl">
                      {product.image}
                    </td>

                    {/* Product */}
                    <td className="px-6 py-4 font-semibold">
                      {product.name}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      {product.category}
                    </td>

                    {/* Unit */}
                    <td className="px-6 py-4">
                      {product.unit}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 font-bold text-green-600">
                      ₨ {product.sellingPrice.toLocaleString()}
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-4">
                      {product.stock}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${status.color}`}
                      >
                        {status.text}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition"
                          title="View"
                        >
                          <FaEye />
                        </button>

                        <button
                          className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;