import {
  FaCashRegister,
  FaBoxOpen,
  FaUserPlus,
  FaChartBar,
} from "react-icons/fa";

function QuickActions() {
  const actions = [
    {
      title: "New Sale",
      icon: <FaCashRegister />,
      color: "bg-green-500",
    },
    {
      title: "Add Product",
      icon: <FaBoxOpen />,
      color: "bg-blue-500",
    },
    {
      title: "Add Customer",
      icon: <FaUserPlus />,
      color: "bg-purple-500",
    },
    {
      title: "View Reports",
      icon: <FaChartBar />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full">
      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="space-y-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${action.color}`}
            >
              {action.icon}
            </div>

            <span className="font-medium">
              {action.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;