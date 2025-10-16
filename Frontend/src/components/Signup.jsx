import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="bg-black/10 p-6 w-full max-w-sm rounded">
        <div className="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium">
            Full Name:
          </label>
          <input type="name" />
        </div>
        <div className="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium">
            Username:
          </label>
          <input type="username" required />
        </div>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium">
            Email Address:
          </label>
          <input type="email" required />
        </div>
        <div className="mb-8">
          <label for="password" className="block mb-2 text-sm font-medium">
            Password:
          </label>
          <input type="password" required />
        </div>
        <button type="submit">Singup</button>
      </form>

      <div className="mt-4 text-white/50">
        Have account?{" "}
        <span className="text-white/80 hover:opacity-80 cursor-pointer">
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
