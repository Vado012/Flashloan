import React, { useEffect, useState } from "react";

function PagesRow2() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 text-center px-6">
      
      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl font-extrabold text-blue-600 leading-snug transition-all duration-1000 ease-out"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)"
        }}
      >
        Apply in <span className="text-yellow-500">Three Easy Steps</span>
      </h1>

      {/* Paragraph */}
      <p
        className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg transition-all duration-1000 ease-out delay-200"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)"
        }}
      >
        Our fast and secure application process is designed to get you funded
        quickly without unnecessary stress or paperwork.
      </p>

      {/* Decorative Line */}
      <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full relative overflow-hidden">
        <span
          className="absolute left-0 top-0 h-full bg-yellow-400 rounded-full animate-line"
          style={{ animationDelay: "400ms" }}
        ></span>
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes lineGrow {
            0% { width: 0; }
            100% { width: 100%; }
          }
          .animate-line {
            animation: lineGrow 1s forwards;
          }
        `}
      </style>

    </section>
  );
}

export default PagesRow2;

