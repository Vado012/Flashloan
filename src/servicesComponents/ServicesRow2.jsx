import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesRow2() {
  const plans = [
    { title: "Education Loan @ 6.75%", subtitle: "Low Cost", image: "servicepic4.jpg" },
    { title: "Students Loan @ 11.65%", subtitle: "Lowest interest", image: "servicepic3.jpg" },
    { title: "Auto Loan @ 12.75%", subtitle: "Rate of Interest", image: "servicepic.jpg" },
    { title: "Health & Medical @ 4.25%", subtitle: "Low cost", image: "servicespic2.jpg" },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12">
          Our Specialized Loan Plans
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden text-center group transform transition-all duration-700 ease-out
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]`}
            >
              {/* IMAGE WITH ZOOM */}
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
                <Link
                  to="/apply"
                  className="inline-block mt-3 bg-blue-500 hover:bg-yellow-500 hover:scale-105 transition transform text-white px-6 py-2 rounded-2xl shadow-md font-semibold"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesRow2;
