function FilterBar({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-lg px-4 py-3 w-full md:w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="All">All Categories</option>
      <option value="Beverages">Beverages</option>
      <option value="Grocery">Grocery</option>
      <option value="Dairy">Dairy</option>
      <option value="Snacks">Snacks</option>
      <option value="Bakery">Bakery</option>
      <option value="Frozen Food">Frozen Food</option>
      <option value="Stationery">Stationery</option>
      <option value="Electronics">Electronics</option>
    </select>
  );
}

export default FilterBar;