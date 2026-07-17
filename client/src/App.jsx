import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./features/auth/components/pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import Sales from "./pages/Sales/Sales";
import Settings from "./pages/settings/Settings";

import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard Layout */}
      <Route
       element={
        <ProtectedRoute>

        <DashboardLayout />
        </ProtectedRoute>
        }>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Unknown URL */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;