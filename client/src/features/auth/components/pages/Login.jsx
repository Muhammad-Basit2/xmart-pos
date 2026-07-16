import { useState } from "react";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h1 className="text-3xl font-bold text-center">
          Xmart POS ERP
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
          Welcome Back
        </p>

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          title="Login"
          onClick={handleLogin}
          className="w-full"
        />

      </div>
    </div>
  );
}

export default Login;