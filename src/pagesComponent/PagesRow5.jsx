import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PagesRow5() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 px-6">
      <div
        className={`max-w-4xl mx-auto bg-blue-600 text-white rounded-3xl shadow-xl p-10 text-center space-y-6 transform transition-all duration-700 ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Flexible Loan Terms You Can Trust
        </h2>

        <p className="text-lg md:text-xl text-blue-100">
          Loan amortization available from <strong>24 to 120 months</strong>.  
          APR ranges between <strong>19.99% – 35.99%</strong>.
        </p>

        <p className="text-sm md:text-base text-blue-200">
          <strong>Example:</strong> $1,000 borrowed for 24 months at 35.99% APR  
          Monthly payment: <strong>$59.06</strong>  
          Total repayment: <strong>$1,417.41</strong>
        </p>

        <Link
          to="/apply"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105"
        >
          Get a loan
        </Link>
      </div>
    </section>
  );
}

export default PagesRow5;


