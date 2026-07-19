import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  const [search, setSearch] = useState("");

  return (
   <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-white px-4 shadow-md md:px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-2xl text-gray-700 hover:text-blue-600"
        >
          <FaBars />
        </button>

        {/* Search */}
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-48 md:w-64 lg:w-96 pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <FaUserCircle size={24} />
          </div>

          <div>
            <h4 className="font-semibold">Basit</h4>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition">
          <FaSignOutAlt />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
