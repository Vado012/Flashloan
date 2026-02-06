import React, { useEffect, useState } from "react";

function ServicesRow1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center text-center px-6">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/aboutpic3.jpg')] bg-cover bg-center"></div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-4">
          Our Main Loan Services
        </h1>

        <div className="w-16 h-1 bg-yellow-400 mx-auto my-5 rounded-full"></div>

        <p className="text-lg md:text-xl text-gray-200">
          Flexible financial solutions designed to support your goals, growth,
          and stability.
        </p>
      </div>
    </section>
  );
}

export default ServicesRow1;

