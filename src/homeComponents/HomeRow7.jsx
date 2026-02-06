import React, { useEffect, useState } from "react";

function HomeRow7() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animations on mount
    setLoaded(true);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Check Your Rate",
      desc: "Select your loan amount, answer a few questions and get your lowest eligible rates instantly.",
      color: "bg-blue-500",
      textColor: "text-white",
    },
    {
      number: "02",
      title: "Choose Your Loan",
      desc: "Choose the offer with the terms that work best for you.",
      color: "bg-yellow-500",
      textColor: "text-white",
    },
    {
      number: "03",
      title: "Get Your Funds",
      desc: "Your money goes straight to your bank account via direct deposit.",
      color: "bg-yellow-500",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT CONTENT */}
        <div className={`space-y-10 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 leading-tight">
              Getting a Loan <br />
              <span className="text-blue-500">Looking for More?</span>
            </h1>

            <div className="w-12 h-1 bg-yellow-500 mt-3 rounded" />
          </div>

          {/* STEPS */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 items-start">
                <div className={`h-10 w-10 rounded-full ${step.color} ${step.textColor} flex items-center justify-center font-bold transition-transform duration-300 hover:-translate-y-1 hover:scale-110 shadow-md`}>
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-blue-500">{step.title}</h4>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={`flex justify-center transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <img
            src="loan-card.png"
            alt="Loan process illustration"
            className="max-w-full md:max-w-md lg:max-w-lg rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}

export default HomeRow7;


