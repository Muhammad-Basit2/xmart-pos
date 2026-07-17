import {
  FaMoneyBillWave,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
} from "react-icons/fa";
import StatCard from "../../components/StatCard/StatCard";

function Dashboard() {
  return (
    <div className="p-6">

      <div className="grid grid-cols-4 gap-6">

  <StatCard
    title="Today's Sales"
    value="₨ 85,000"
    change="+12% from yesterday"
    icon={<FaMoneyBillWave />}
    bgColor="bg-green-500"
  />

  <StatCard
    title="Products"
    value="450"
    change="+10 New Products"
    icon={<FaBoxOpen />}
    bgColor="bg-blue-500"
  />

  <StatCard
    title="Customers"
    value="325"
    change="+15 New Customers"
    icon={<FaUsers />}
    bgColor="bg-purple-500"
  />

  <StatCard
    title="Orders"
    value="120"
    change="+8 Today"
    icon={<FaShoppingCart />}
    bgColor="bg-orange-500"
  />

  <StatCard
  title="Today's Sales"
  value="₨ 85,000"
  change="+12%"
  changeColor="text-green-600"
/>

<StatCard
  title="Returns"
  value="₨ 5,000"
  change="-3%"
  changeColor="text-red-600"
/>

</div>

    </div>
  );
}

export default Dashboard;