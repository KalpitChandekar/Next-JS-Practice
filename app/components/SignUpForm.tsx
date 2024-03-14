import React from "react";

const SignupForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Welcome to TaskList Pro</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Enter your email address to get started
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@yourcompany.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full mb-4">
          Continue with Email
        </button>
        <p className="text-center text-gray-600 mb-4">OR</p>
        <button className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 w-full mb-4">
          Continue with Google
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 w-full mb-6">
          Continue with Apple
        </button>
        <p className="text-center">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Already have an account? Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
