import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeRow6() {
  const plans = [
    { title: "Personal Loan @ 10.75%", subtitle: "Low Cost", image: "pic2.jpg" },
    { title: "Business Loan @ 11.65%", subtitle: "Lowest Rates", image: "pic3.jpg" },
    { title: "Home Loan @ 7.75%", subtitle: "Rate of Interest", image: "pic4.jpg" },
    { title: "Credit & Debit Cards @ 5.15%", subtitle: "Lowest Rates", image: "pic5.jpg" },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger fade-in animations
  }, []);

  return (
    <section className="py-20">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h1 className="text-yellow-500 text-4xl md:text-5xl font-bold leading-tight">
          Helping Your Business Reach Its Full{" "}
          <span className="text-blue-500">Potential</span>
        </h1>
        <div className="flex justify-center my-4">
          <div className="w-12 h-1 bg-yellow-500 rounded" />
        </div>
        <p className="text-xl text-gray-700">
          Starting a business is both exciting and challenging. We can help you every step of the way.
        </p>
      </div>

      {/* LOAN PLANS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`bg-white rounded-xl shadow overflow-hidden text-center group transform transition-all duration-700 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:shadow-lg hover:-translate-y-1`}
          >
            {/* IMAGE */}
            <div className="h-48 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${plan.image})` }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-3">
              <h3 className="text-yellow-500 text-xl font-bold">{plan.title}</h3>
              <p className="text-blue-500 font-medium">{plan.subtitle}</p>

              {/* APPLY BUTTON */}
              <Link to="/apply" className="block w-full">
                <button
                  className="w-full sm:w-auto bg-blue-500 hover:bg-yellow-500 hover:text-black text-white font-semibold px-6 py-2 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeRow6;



