import { FaBell, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { logout} from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        ;logout();
        navigate("/")
    };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Search Box */}
      <div className="relative w-80">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="text-xl text-gray-600 hover:text-blue-600 transition">
          <FaBell />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
            B
          </div>

          <div>
            <h2 className="font-semibold">Basit</h2>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>

        {/* Logout */}
        <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;