import { useMemo, useState } from "react";
import ProductCard from "../../components/POS/ProductCard";
import WeightModal from "../../components/POS/WeightModal";
import { products } from "../../data/productsData";

function POS() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [weightModalOpen, setWeightModalOpen] = useState(false);

  // Search Products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add Product
  const handleAddToCart = (product) => {
    // Weight Product
    if (product.isWeightBased) {
      setSelectedProduct(product);
      setWeightModalOpen(true);
      return;
    }

    // Piece Product
    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        !item.isWeightBased
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Add Weight Product
  const handleWeightProduct = (weight) => {
    const product = selectedProduct;

    const existing = cart.find(
      (item) => item.id === product.id && item.isWeightBased
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                weight: item.weight + weight,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          weight,
        },
      ]);
    }

    setWeightModalOpen(false);
    setSelectedProduct(null);
  };

  // Increase Qty
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && !item.isWeightBased
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && !item.isWeightBased
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) =>
          item.isWeightBased ? true : item.quantity > 0
        )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Total
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => {
      if (item.isWeightBased) {
        return total + item.weight * item.sellingPrice;
      }

      return total + item.quantity * item.sellingPrice;
    }, 0);
  }, [cart]);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Products */}

        <div className="xl:col-span-2 bg-white rounded-2xl shadow-lg p-6">

          <h1 className="text-3xl font-bold mb-6">
            POS Billing
          </h1>

          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl p-4 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAddToCart}
              />
            ))}

          </div>

        </div>

        {/* Cart */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <div className="h-80 flex items-center justify-center text-gray-400">
              Cart is Empty
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[450px] overflow-y-auto">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-xl p-3"
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="font-bold">
                          {item.name}
                        </h3>

                        {item.isWeightBased ? (
                          <p className="text-gray-500 text-sm">
                            {item.weight.toFixed(3)} {item.unit} × ₨
                            {item.sellingPrice}
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm">
                            {item.quantity} × ₨
                            {item.sellingPrice}
                          </p>
                        )}

                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500"
                      >
                        ✕
                      </button>

                    </div>

                    {!item.isWeightBased && (
                      <div className="flex items-center gap-3 mt-3">

                        <button
                          onClick={() =>
                            decreaseQty(item.id)
                          }
                          className="w-8 h-8 rounded bg-gray-200"
                        >
                          -
                        </button>

                        <span className="font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQty(item.id)
                          }
                          className="w-8 h-8 rounded bg-blue-600 text-white"
                        >
                          +
                        </button>

                      </div>
                    )}

                    <div className="text-right font-bold mt-3">

                      ₨{" "}
                      {item.isWeightBased
                        ? (
                            item.weight *
                            item.sellingPrice
                          ).toFixed(2)
                        : item.quantity *
                          item.sellingPrice}

                    </div>

                  </div>
                ))}

              </div>

              <div className="border-t mt-6 pt-6">

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span>
                    ₨ {subtotal.toFixed(2)}
                  </span>

                </div>

                <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold">
                  Checkout
                </button>

              </div>
            </>
          )}

        </div>

      </div>

      <WeightModal
        isOpen={weightModalOpen}
        product={selectedProduct}
        onClose={() => {
          setWeightModalOpen(false);
          setSelectedProduct(null);
        }}
        onConfirm={handleWeightProduct}
      />
    </>
  );
}

export default POS;