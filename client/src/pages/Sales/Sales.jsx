import { getSales } from "../../services/saleService";
import SalesTable from "../../components/Sales/SalesTable";

function Sales() {
  const sales = getSales();

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Sales History
      </h1>

      <SalesTable sales={sales} />

    </div>
  );
}

export default Sales;