import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 relative">

      {/* HOME CLOSE BUTTON */}
      

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 animate-pop">
         <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-black p-3 rounded-full backdrop-blur-md transition duration-300"
      >
        <span className="text-xl font-bold">&times;</span>
      </button>
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-blue-700">Flashloan</h1>
          <p className="text-gray-500 mt-2">Secure Client Login</p>
          <div className="w-14 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 h-[50px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 h-[50px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes pop {
            0% { opacity: 0; transform: scale(0.9) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-pop {
            animation: pop 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Login;

