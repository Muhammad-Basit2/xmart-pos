import { useMemo, useState } from "react";
import { FaTrash, FaMoneyBillWave, FaReceipt } from "react-icons/fa";

function CartSummary({
  cart,
  subtotal,
  clearCart,
  onCheckout,
}) {
  const [discountType, setDiscountType] = useState("percent");
  const [discount, setDiscount] = useState(0);
  const [cash, setCash] = useState("");

  const discountAmount = useMemo(() => {
    if (discountType === "percent") {
      return (subtotal * Number(discount || 0)) / 100;
    }

    return Number(discount || 0);
  }, [subtotal, discount, discountType]);

  const grandTotal = subtotal - discountAmount;

  const change =
    Number(cash || 0) > grandTotal
      ? Number(cash) - grandTotal
      : 0;

  return (
    <div className="space-y-5">

      {/* Subtotal */}
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₨ {subtotal.toFixed(2)}</span>
      </div>

      {/* Discount */}

      <div>

        <label className="font-medium">
          Discount
        </label>

        <div className="flex gap-3 mt-2">

          <select
            value={discountType}
            onChange={(e) =>
              setDiscountType(e.target.value)
            }
            className="border rounded-lg p-3"
          >
            <option value="percent">%</option>
            <option value="fixed">PKR</option>
          </select>

          <input
            type="number"
            value={discount}
            onChange={(e) =>
              setDiscount(e.target.value)
            }
            placeholder="0"
            className="flex-1 border rounded-lg p-3"
          />

        </div>

      </div>

      {/* Discount Value */}

      <div className="flex justify-between">

        <span>Discount Value</span>

        <span className="text-red-600">
          - ₨ {discountAmount.toFixed(2)}
        </span>

      </div>

      {/* Total */}

      <div className="border-t pt-4 flex justify-between text-xl font-bold">

        <span>Total</span>

        <span className="text-blue-600">
          ₨ {grandTotal.toFixed(2)}
        </span>

      </div>

      {/* Cash */}

      <div>

        <label className="font-medium">
          Cash Received
        </label>

        <input
          type="number"
          value={cash}
          onChange={(e) =>
            setCash(e.target.value)
          }
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter cash received"
        />

      </div>

      {/* Change */}

      <div className="flex justify-between text-green-600 font-bold">

        <span>Change</span>

        <span>
          ₨ {change.toFixed(2)}
        </span>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={clearCart}
          className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <FaTrash />
          Clear
        </button>

        <button
          onClick={() =>
            onCheckout({
              subtotal,
              discountType,
              discount: Number(discount),
              discountAmount,
              grandTotal,
              cash: Number(cash),
              change,
            })
          }
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <FaReceipt />
          Checkout
        </button>

      </div>

    </div>
  );
}

export default CartSummary;