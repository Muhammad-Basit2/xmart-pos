import {
  FaTachometerAlt,
  FaBoxOpen,
  FaCashRegister,
  FaUsers,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FaTachometerAlt,
  },
  {
    name: "POS",
    path: "/pos",
    icon: FaCashRegister,
  },
  {
    name: "Products",
    path: "/products",
    icon: FaBoxOpen,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: FaUsers,
  },
  {
    name: "Sales",
    path: "/sales",
    icon: FaShoppingCart,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FaCog,
  },
];

function Sidebar({ onClose }) {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-center">Xmart POS</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700 text-center text-sm text-gray-400">
        © 2026 Xmart POS
      </div>
    </aside>
  );
}

export default Sidebar;
