import { useState } from "react";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";


function Login() {
  // ===========================
  // State
  // ===========================

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // ===========================
  // Login Function
  // ===========================

  function handleLogin() {
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter your password.");
      return;
    }

    console.log("===== LOGIN DATA =====");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    // Later we'll connect this with the backend
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      {/* Login Card */}

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Logo */}

        <div className="flex justify-center mb-4">

          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            X
          </div>

        </div>

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Xmart POS ERP
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome Back 👋
        </p>

        {/* Email */}

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        {/* Password */}

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {/* Show Password */}

        <div className="flex justify-end mb-4">

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

        </div>

        {/* Remember Me */}

        <div className="flex justify-between items-center mb-6">

          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <span className="text-sm">
              Remember Me
            </span>

          </div>

          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Forgot Password?
          </button>

        </div>

        {/* Login Button */}

        <Button
          title="Login"
          onClick={handleLogin}
          className="w-full"
        />

        {/* Footer */}

        <p className="text-center text-gray-400 text-sm mt-8">
          Version 1.0
        </p>

      </div>

    </div>
  );
}


export default Login;