import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col">

      {/* Product Image */}
      <div className="h-32 rounded-xl bg-gray-100 flex items-center justify-center text-5xl">
        {product.image || "📦"}
      </div>

      {/* Product Name */}
      <h2 className="mt-4 text-lg font-bold text-gray-800">
        {product.name}
      </h2>

      {/* Category */}
      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      {/* Price */}
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">
          ₨ {product.sellingPrice}
        </span>

        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
          {product.unit}
        </span>
      </div>

      {/* Stock */}
      <p className="mt-2 text-sm text-gray-500">
        Stock: {product.stock}
      </p>

      {/* Button */}
      <button
        onClick={() => onAdd(product)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;