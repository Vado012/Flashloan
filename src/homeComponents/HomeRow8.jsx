import React from "react";
import { Link } from "react-router-dom";

function HomeRow8() {
  const steps = [
    {
      step: "Step 1",
      img: "step-1.png",
      desc: "Apply online in minutes, or visit one of our 200+ locations.",
    },
    {
      step: "Step 2",
      img: "step-2.png",
      desc: "Submit your documents securely online.",
    },
    {
      step: "Step 3",
      img: "step-3.png",
      desc: "Get approved. Receive your money quickly.",
    },
  ];

  return (
    <section
      className="relative h-auto bg-blue-500 bg-cover bg-center py-24 sm:py-32"
      style={{ backgroundImage: "url('pic7.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-500/80"></div>

      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center mb-16 px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 leading-tight animate-fadeInUp">
          Apply in Three Easy Steps
        </h1>
        <p className="text-white text-lg sm:text-xl mt-2 animate-fadeInUp delay-150">
          Fast & Easy Application Process
        </p>
        <div className="w-16 h-1 bg-yellow-500 mt-4 mx-auto rounded animate-fadeInUp delay-300"></div>
      </div>

      {/* Steps */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-6 md:px-10 justify-center items-start">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex-1 bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h2 className="text-2xl font-bold mb-3">{item.step}</h2>
            <img src={item.img} alt={item.step} className="h-32 sm:h-40 mb-4" />
            <p className="text-blue-500 text-center text-lg sm:text-xl mb-4">{item.desc}</p>
            <Link to="/apply" className="w-full">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animate-fadeInUp.delay-150 {
            animation-delay: 0.15s;
          }
          .animate-fadeInUp.delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </section>
  );
}

export default HomeRow8;

