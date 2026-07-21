function SalesTable({ sales }) {
  if (sales.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 text-center text-gray-500 shadow">
        No sales found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Invoice</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-center">Items</th>
            <th className="p-4 text-right">Total</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr
              key={sale.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">
                #{sale.id}
              </td>

              <td className="p-4">
                {sale.date}
              </td>

              <td className="p-4 text-center">
                {sale.items.length}
              </td>

              <td className="p-4 text-right font-bold text-green-600">
                ₨ {sale.grandTotal?.toFixed(2) ?? sale.subtotal.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;