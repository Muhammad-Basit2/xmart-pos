import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart({
  cart,
  subtotal,
  increaseQty,
  decreaseQty,
  removeItem,
  returnItem,
  clearCart,
  handleCheckout,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">

      <h2 className="text-2xl font-bold mb-5">
        Shopping Cart
      </h2>

      {/* Empty Cart */}

      {cart.length === 0 ? (
        <div className="flex-1 flex justify-center items-center text-gray-400">
          Cart is Empty
        </div>
      ) : (
        <>
          {/* Cart Items */}

          <div className="space-y-4 flex-1 overflow-y-auto">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
                returnItem={returnItem}
              />
            ))}

          </div>

          {/* Summary */}

          <div className="mt-6 border-t pt-5">

            <CartSummary
              subtotal={subtotal}
              clearCart={clearCart}
              onCheckout={handleCheckout}
            />

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;