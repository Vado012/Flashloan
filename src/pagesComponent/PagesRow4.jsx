import React, { useEffect, useState } from "react";

function PagesRow4() {
  const docs = [
    "Non-expired government-issued photo ID",
    "Proof of income (pay stubs, T4)",
    "Bank statement",
    "Void cheque or pre-authorized debit form",
    "Proof of address",
    "Annual mortgage statement",
    "Annual property tax statement",
  ];

  const unsecured = ["✅", "✅", "✅", "✅", "✅", "❌", "❌"];
  const secured = ["✅", "✅", "❌", "❌", "✅", "✅", "✅"];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="bg-blue-950 text-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

        {/* DOCUMENT LIST */}
        <div
          className={`transition-all duration-700 ease-out transform 
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-yellow-400 text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">
            Required Documents
          </h2>
          <ul className="space-y-5 text-base sm:text-lg">
            {docs.map((doc, index) => (
              <li
                key={index}
                className="border-b border-blue-800 pb-3 transition-all duration-500 hover:translate-x-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {doc}
              </li>
            ))}
          </ul>
        </div>

        {/* UNSECURED LOAN */}
        <div
          className={`bg-blue-900/40 rounded-2xl p-6 shadow-lg text-center transition-all duration-700 transform
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Unsecured Personal Loan</h3>
          <ul className="space-y-6 text-xl sm:text-2xl">
            {unsecured.map((item, index) => (
              <li
                key={index}
                className="transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SECURED LOAN */}
        <div
          className={`bg-blue-900/40 rounded-2xl p-6 shadow-lg md:col-span-2 xl:col-span-1 text-center transition-all duration-700 transform
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Secured Personal Loan</h3>
          <ul className="space-y-6 text-xl sm:text-2xl">
            {secured.map((item, index) => (
              <li
                key={index}
                className="transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default PagesRow4;


