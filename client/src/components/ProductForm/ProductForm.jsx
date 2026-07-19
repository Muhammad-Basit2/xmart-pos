import { useState } from "react";
import ProductImageUpload from "../productImageUpload/productImageUpload";
function ProductForm({ products, setProducts, closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Beverages",
    sellingPrice: "",
    purchasePrice: "",
    stock: "",
    minimumStock: "",
    unit: "Piece",
    barcode: "",
    description: "",
    image: "📦",
  });

  // Handle all inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.sellingPrice === "" ||
      formData.stock === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      image: formData.image,
      name: formData.name,
      category: formData.category,
      unit: formData.unit,
      price: Number(formData.sellingPrice),
      stock: Number(formData.stock),
    };

    setProducts([...products, newProduct]);

    alert("Product Added Successfully!");

    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Product Name */}
      <div>
        <label className="block mb-2 font-medium">
          Product Name *
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-2 font-medium">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option>Beverages</option>
          <option>Grocery</option>
          <option>Dairy</option>
          <option>Snacks</option>
          <option>Bakery</option>
          <option>Frozen Food</option>
          <option>Stationery</option>
          <option>Electronics</option>
        </select>
      </div>

      {/* Selling Price */}
      <div>
        <label className="block mb-2 font-medium">
          Selling Price (₨)
        </label>

        <input
          type="number"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Purchase Price */}
      <div>
        <label className="block mb-2 font-medium">
          Purchase Price (₨)
        </label>

        <input
          type="number"
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block mb-2 font-medium">
          Stock Quantity
        </label>

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Minimum Stock */}
      <div>
        <label className="block mb-2 font-medium">
          Minimum Stock
        </label>

        <input
          type="number"
          name="minimumStock"
          value={formData.minimumStock}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Unit */}
      <div>
        <label className="block mb-2 font-medium">
          Unit
        </label>

        <select
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option>Piece</option>
          <option>Pack</option>
          <option>Box</option>
          <option>Bottle</option>
          <option>Can</option>
          <option>Dozen</option>
          <option>kg</option>
          <option>g</option>
          <option>Liter</option>
          <option>ml</option>
        </select>
      </div>

      {/* Barcode */}
      <div>
        <label className="block mb-2 font-medium">
          Barcode
        </label>

        <input
          type="text"
          name="barcode"
          value={formData.barcode}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows="4"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        ></textarea>

        <ProductImageUpload />

      </div>

      {/* Buttons */}
      <div className="md:col-span-2 flex justify-end gap-4">
        <button
          type="button"
          onClick={closeModal}
          className="px-5 py-3 rounded-lg border hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}

export default ProductForm;