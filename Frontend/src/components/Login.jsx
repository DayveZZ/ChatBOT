import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="bg-black/10 p-6 w-full max-w-sm rounded">
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium">
            Username:
          </label>
          <input type="username" required />
        </div>
        <div className="mb-8">
          <label for="password" className="block mb-2 text-sm font-medium">
            Password:
          </label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="mt-4 text-white/50">
        Don't have account?{" "}
        <span className="text-white/80 hover:opacity-80 cursor-pointer">
          Signup
        </span>
      </div>
    </div>
  );
};

export default Login;
