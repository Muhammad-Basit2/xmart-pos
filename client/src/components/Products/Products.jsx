import { useState } from "react";

import ProductHeader from "../ProductHeader/productHeader";
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FillterBar/FilterBar";
import ProductTable from "../ProductTable/ProductTable";

import { products } from "../../data/profuctsData";

function Products() {
  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [category, setCategory] = useState("All");

  // Filter Products
  const filteredProducts = products.filter((product) => {
    // Search Filter
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // Category Filter
    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <ProductHeader />

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
    </div>
  );
}

export default Products;