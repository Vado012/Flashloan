import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function RegisterRow() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 relative">

    

      {/* REGISTER CARD */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 animate-pop relative">

           {/* CLOSE BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 bg-white/5 hover:bg-white/5 text-black p-3 rounded-full backdrop-blur-md transition"
      >
        <X size={22} />
      </button>

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-blue-700">Create Account</h1>
          <p className="text-gray-500 mt-2">Join Flashloan and get funded faster</p>
          <div className="w-14 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FORM */}
        <form className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
          </div>

          <input type="email" placeholder="Email Address" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
          <input type="password" placeholder="Create Password" className="input" />
          <input type="password" placeholder="Confirm Password" className="input" />

          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 accent-blue-600" />
            <p>
              I agree to the{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">Terms</span> and{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">Privacy Policy</span>
            </p>
          </div>
<Link to="/dashboard" className="w-full">
    
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-md
                       transition duration-300 transform hover:-translate-y-1"
          >
            Create Account
          </button>
</Link>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>

      {/* POP OUT ANIMATION */}
      <style>
        {`
          @keyframes pop {
            0% { opacity: 0; transform: scale(0.9) translateY(25px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-pop { animation: pop 0.6s ease-out forwards; }
          .input {
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            padding: 0 1rem;
            height: 50px;
            outline: none;
            transition: 0.2s;
          }
          .input:focus {
            box-shadow: 0 0 0 2px #3b82f6;
            border-color: #3b82f6;
          }
        `}
      </style>

    </section>
  );
}

export default RegisterRow;


