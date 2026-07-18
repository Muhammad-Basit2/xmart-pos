import { FaPlus } from "react-icons/fa";

function ProductHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <div>
        <h2 className="text-2xl font-bold">
          Product Management
        </h2>

        <p className="text-gray-500">
          Manage your store products
        </p>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition">

        <FaPlus />

        Add Product

      </button>

    </div>
  );
}

export default ProductHeader;