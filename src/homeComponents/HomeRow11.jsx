import React from "react";
import { Link } from "react-router-dom";

function HomeRow11() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-blue-900 via-blue-950 to-blue-900">
      <div className="w-full max-w-6xl bg-blue-950 rounded-2xl py-20 px-6 md:px-16 flex flex-col items-center text-center gap-6 shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">
        
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
          Ready to get started?
        </h1>

        <p className="text-white/90 text-base md:text-lg max-w-2xl">
          Thousands of businesses trust <span className="font-semibold text-yellow-500">Flashloan</span> for fast and flexible funding. Join them today and grow with confidence.
        </p>

        {/* Apply Button — navigates to register */}
        <Link to="/apply" className="w-full sm:w-auto">
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-semibold px-8 py-3 rounded-lg transition duration-500 shadow-lg transform hover:scale-105 animate-pulse hover:animate-none">
            Apply for Business Loan
          </button>
        </Link>

      </div>
    </section>
  );
}

export default HomeRow11;


