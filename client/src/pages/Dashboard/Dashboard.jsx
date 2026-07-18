import StatCard from "../../components/StatCard/StatCard";
import RecentSales from "../../components/RecentSales/RecentSales";
import LowStock from "../../components/LowStock/LockStock";

import {
  FaMoneyBillWave,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaExclamationTriangle,
} from "react-icons/fa";
import SalesChart from "../../components/SalesChart/SalesChart";
import QuickActions from "../../components/QuickActions/QuickActions";
import Products from "../../components/Products/Products";

function Dashboard() {
  return (
    <div className="p-6">

      {/* Page Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to Xmart POS ERP
        </p>
      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

        <StatCard
          title="Today's Sales"
          value="₨ 85,000"
          change="+12% from yesterday"
          icon={<FaMoneyBillWave />}
          bgColor="bg-green-500"
          changeColor="text-green-600"
        />

        <StatCard
          title="Products"
          value="450"
          change="+10 New Products"
          icon={<FaBoxOpen />}
          bgColor="bg-blue-500"
          changeColor="text-blue-600"
        />

        <StatCard
          title="Customers"
          value="325"
          change="+15 New Customers"
          icon={<FaUsers />}
          bgColor="bg-purple-500"
          changeColor="text-purple-600"
        />

        <StatCard
          title="Orders"
          value="120"
          change="+8 Orders Today"
          icon={<FaShoppingCart />}
          bgColor="bg-orange-500"
          changeColor="text-orange-600"
        />

        <StatCard
          title="Low Stock"
          value="12 Items"
          change="Needs Attention"
          icon={<FaExclamationTriangle />}
          bgColor="bg-red-500"
          changeColor="text-red-600"
        />



      </div>

      <SalesChart />


      <QuickActions />

      <RecentSales />

      <LowStock />
      <br />
      <Products />

    </div>
  );
}

export default Dashboard;