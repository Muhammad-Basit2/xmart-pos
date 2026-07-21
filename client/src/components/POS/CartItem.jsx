import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaUndo,
} from "react-icons/fa";

function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
  returnItem,
}) {
  const total = item.isWeightBased
    ? item.weight * item.sellingPrice
    : item.quantity * item.sellingPrice;

  return (
    <div className="border rounded-2xl p-4 bg-gray-50">

      <div className="flex justify-between">

        <div>

          <h3 className="font-bold">
            {item.image} {item.name}
          </h3>

          <p className="text-sm text-gray-500">

            {item.isWeightBased
              ? `${item.weight.toFixed(3)} ${item.unit}`
              : `${item.quantity} ${item.unit}`}

          </p>

          <p className="text-blue-600 font-semibold">
            ₨ {item.sellingPrice}
          </p>

        </div>

        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>

      </div>

      {!item.isWeightBased && (
        <div className="flex items-center gap-3 mt-4">

          <button
            onClick={() => decreaseQty(item.id)}
            className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            <FaMinus className="mx-auto" />
          </button>

          <span className="font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-9 h-9 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            <FaPlus className="mx-auto" />
          </button>

        </div>
      )}

      <div className="flex justify-between items-center mt-4">

        <button
          onClick={() => returnItem(item)}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700"
        >
          <FaUndo />
          Return
        </button>

        <h2 className="font-bold text-lg">
          ₨ {total.toFixed(2)}
        </h2>

      </div>

    </div>
  );
}

export default CartItem;