import { recentSales } from "../../data/dashboardData";

function RecentSales() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8 overflow-x-auto">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          🧾 Recent Sales
        </h2>

        <button className="text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <table className="min-w-full">
        <thead>
          <tr className="border-b text-left text-gray-500">

            <th className="py-3">Invoice</th>

            <th>Customer</th>

            <th>Payment</th>

            <th>Total</th>

            <th>Status</th>

            <th>Date</th>

          </tr>
        </thead>

        <tbody>

          {recentSales.map((sale) => (

            <tr
              key={sale.id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="py-4 font-medium">
                {sale.invoice}
              </td>

              <td>{sale.customer}</td>

              <td>{sale.payment}</td>

              <td className="font-semibold">
                {sale.total}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    sale.status
                  )}`}
                >
                  {sale.status}
                </span>
              </td>

              <td>{sale.date}</td>

            </tr>

          ))}

        </tbody>
      </table>
    </div>
  );
}

export default RecentSales;