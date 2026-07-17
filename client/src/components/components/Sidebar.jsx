import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "./dashboard",
    icon: <FaHome />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <FaBoxOpen />,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <FaUsers />,
  },
  {
    name: "Sales",
    path: "/sales",
    icon: <FaShoppingCart />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-center mb-10">
        POS System
      </h1>

      {/* Navigation */}
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;