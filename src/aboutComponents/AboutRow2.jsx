import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AboutRow2() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // small delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Text */}
      <div
        className={`md:w-[70%] text-center md:text-left transition-all duration-1000 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-blue-600">
          <span className="text-yellow-500 font-bold">
            You can achieve your financial goals.
          </span>{" "}
          We can help. <br />
          Pay off your loan with fixed{" "}
          <span className="font-bold">3 or 5-year*</span> terms
        </h1>
      </div>

      {/* Button */}
      <div
        className={`md:w-[30%] flex justify-center md:justify-end transition-all duration-1000 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Link
          to="/apply"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-md transition duration-500 transform hover:scale-105"
        >
          All Personal Loans
        </Link>
      </div>
    </div>
  );
}

export default AboutRow2;


