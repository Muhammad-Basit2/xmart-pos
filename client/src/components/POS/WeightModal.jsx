import { useState, useEffect } from "react";
import { FaWeightHanging, FaTimes } from "react-icons/fa";

function WeightModal({
  isOpen,
  onClose,
  product,
  onConfirm,
}) {
  const [weight, setWeight] = useState("");

  useEffect(() => {
    if (isOpen) {
      setWeight("");
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const total =
    Number(weight || 0) * product.sellingPrice;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}

        <div className="bg-blue-600 text-white p-5 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <FaWeightHanging size={24} />

            <h2 className="text-xl font-bold">
              Enter Weight
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <div className="text-center">

            <div className="text-5xl">
              {product.image}
            </div>

            <h2 className="text-2xl font-bold mt-3">
              {product.name}
            </h2>

            <p className="text-gray-500 mt-1">
              ₨ {product.sellingPrice} / {product.unit}
            </p>

          </div>

          {/* Weight */}

          <div>

            <label className="font-semibold">
              Weight ({product.unit})
            </label>

            <input
              type="number"
              step="0.001"
              min="0"
              autoFocus
              placeholder="Example: 1.250"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              className="w-full mt-2 border rounded-xl p-4 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          {/* Quick Buttons */}

          <div className="grid grid-cols-4 gap-2">

            {[0.25, 0.5, 1, 2].map((value) => (
              <button
                key={value}
                onClick={() => setWeight(value)}
                className="bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg py-2 transition"
              >
                {value}
              </button>
            ))}

          </div>

          {/* Total */}

          <div className="bg-blue-50 rounded-xl p-4">

            <div className="flex justify-between text-lg">

              <span>Total</span>

              <span className="font-bold text-blue-700">
                ₨ {total.toFixed(2)}
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="p-5 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            disabled={!weight || Number(weight) <= 0}
            onClick={() =>
              onConfirm(Number(weight))
            }
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default WeightModal;