import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAdd }) {
  const outOfStock = product.stock <= 0;
  const lowStock = product.stock > 0 && product.stock <= 10;

  return (
    <div
      className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
    >
      {/* Product Image */}
      <div className="h-28 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-5xl">
        {product.image || "📦"}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">

        {/* Name */}
        <h2 className="font-bold text-lg text-gray-800 line-clamp-2">
          {product.name}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        {/* Unit & Price */}
        <div className="flex justify-between items-center mt-3">

          <span className="text-blue-600 font-bold text-xl">
            ₨ {product.sellingPrice}
          </span>

          <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
            {product.unit}
          </span>

        </div>

        {/* Stock */}

        <div className="mt-3">

          {outOfStock ? (
            <span className="text-red-600 text-sm font-semibold">
              ❌ Out of Stock
            </span>
          ) : lowStock ? (
            <span className="text-orange-600 text-sm font-semibold">
              ⚠ Low Stock ({product.stock})
            </span>
          ) : (
            <span className="text-green-600 text-sm font-semibold">
              ✔ Stock: {product.stock}
            </span>
          )}

        </div>

        {/* Spacer */}

        <div className="flex-1"></div>

        {/* Button */}

        <button
          disabled={outOfStock}
          onClick={() => onAdd(product)}
          className={`mt-4 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition
          ${
            outOfStock
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          <FaShoppingCart />

          {product.isWeightBased
            ? "Add Weight"
            : "Add to Cart"}

        </button>

      </div>
    </div>
  );
}

export default ProductCard;