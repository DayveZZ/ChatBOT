import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="bg-black/10 p-6 w-full max-w-sm rounded">
        <div className="mb-6">
          <label htmlFor="name">Full Name:</label>
          <input type="name" />
        </div>
        <div className="mb-6">
          <label htmlFor="name">Username:</label>
          <input type="username" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email">Email Address:</label>
          <input type="email" required />
        </div>
        <div className="mb-8">
          <label htmlFor="password">Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="mt-4 text-white/50">
        Have account?
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
