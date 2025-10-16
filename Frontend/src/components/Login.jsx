import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="bg-black/10 p-6 w-full max-w-sm rounded">
        <div className="mb-6">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="mt-4 text-white/50">
        Don't have an account?
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;
