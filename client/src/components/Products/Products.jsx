import { useState } from "react";

import ProductHeader from "../ProductHeader/productHeader";
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FillterBar/FilterBar";
import ProductTable from "../ProductTable/ProductTable";
import Modal from "../Modal/Modal";
import ProductForm from "../ProductForm/ProductForm";

import { products as initialProducts } from "../../data/productsData";

function Products() {
  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [category, setCategory] = useState("All");

  // Modal State
  const [openModal, setOpenModal] = useState(false);

  // Products State
  const [products, setProducts] = useState(initialProducts);

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <ProductHeader onAddProduct={() => setOpenModal(true)} />

      {/* Search & Filter */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <FilterBar
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Product Counter */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700">
          Total Products:
          <span className="ml-2 text-blue-600">
            {filteredProducts.length}
          </span>
        </h2>
      </div>

      {/* Product Table */}
      <ProductTable products={filteredProducts} />

      {/* Add Product Modal */}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Add New Product"
      >
        <ProductForm
          products={products}
          setProducts={setProducts}
          closeModal={() => setOpenModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Products;