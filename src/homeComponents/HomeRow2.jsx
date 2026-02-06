import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeRow2() {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="h-screen bg-[url('/pic1.jpg')] bg-cover bg-center relative flex items-center justify-center"
    >
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${loaded ? "opacity-50" : "opacity-0"}`}></div>

      {/* Content */}
      <div
        className={`relative text-center px-6 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Your Loan, Tailored for You <br />
          Borrow up to <span className="text-yellow-400">$3,500</span>
        </h1>

        <p className="text-gray-200 max-w-xl mx-auto mb-8">
          Fast approval, flexible repayment plans, and secure financial solutions
          designed to meet your needs.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {/* Apply Now Button */}
          <Link to="/apply" className="w-fit">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:-translate-y-1 duration-300">
              Apply Now
            </button>
          </Link>

          {/* Learn More Button */}
          <button
            onClick={() => setShowModal(true)}
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition transform hover:-translate-y-1 duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* ✅ Popout Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-3xl max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 font-bold text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-blue-700 mb-4">Learn More About Flashloan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Flashloan provides flexible and fast personal loans designed to
              meet your unique financial needs. Whether you’re planning a major
              purchase, consolidating debt, or handling unexpected expenses,
              our team ensures you get the right solution quickly.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With competitive APR rates, repayment plans from 6 to 24 months,
              and a seamless online application process, Flashloan makes
              borrowing simple and transparent. Our dedicated support team is
              always available to guide you through each step, ensuring your
              experience is smooth and stress-free.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Why choose Flashloan? We prioritize security, speed, and
              personalized financial solutions. Your trust is our commitment,
              and our proven track record demonstrates our reliability in
              helping thousands of clients achieve their financial goals.
            </p>

            <Link to="/apply">
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-2xl shadow-md transition">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default HomeRow2;




