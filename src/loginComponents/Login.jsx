import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email, Password }),
        credentials: "include"
      });
      console.log(Email, Password)

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          console.log("Token saved:", data.token);
        }
        setShowSuccess(true);
        setTimeout(() => {
          navigate("/user-dashboard");
        }, 1500);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetLoading(true);
    setResetError("");
    setResetMessage("");

    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/user/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
        credentials: "include"
      });

      const data = await response.json();

      if (response.ok) {
        setResetMessage("Password reset link sent to your email!");
        setTimeout(() => {
          setShowForgotPassword(false);
          setResetEmail("");
          setResetMessage("");
        }, 3000);
      } else {
        setResetError(data.message || "Failed to send reset link");
      }
    } catch (err) {
      setResetError("Network error. Please try again.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 relative">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 animate-pop relative">

        {/* CLOSE BUTTON */}
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
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 h-[50px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <button type="button" onClick={() => setShowForgotPassword(true)} className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* BUTTON WITH LOADER */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-3
              ${loading ? "bg-yellow-400" : "bg-yellow-500 hover:bg-yellow-600"}
              text-black font-semibold py-3 rounded-lg shadow-md
              transition duration-300 transform hover:-translate-y-1`}
          >
            {loading && (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            )}
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/apply")}
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

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-[60] bg-black/30">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-4 text-center animate-pop">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h3>
            <p className="text-gray-600">Redirecting to your dashboard...</p>
          </div>
        </div>
      )}

      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center z-[60] bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-pop">
            <button
              onClick={() => { setShowForgotPassword(false); setResetEmail(""); setResetError(""); setResetMessage(""); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <span className="text-2xl">&times;</span>
            </button>

            <h2 className="text-2xl font-bold text-blue-950 mb-2">Forgot Password?</h2>
            <p className="text-gray-600 text-sm mb-6">Enter your email and we'll send you a reset link</p>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Email Address</label>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 h-12 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {resetError && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {resetError}
                </div>
              )}

              {resetMessage && (
                <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {resetMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={resetLoading}
                className={`w-full flex items-center justify-center gap-3 ${
                  resetLoading ? "bg-yellow-400" : "bg-yellow-500 hover:bg-yellow-600"
                } text-black font-semibold py-3 rounded-lg shadow-md transition`}
              >
                {resetLoading && (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                )}
                {resetLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Login;


