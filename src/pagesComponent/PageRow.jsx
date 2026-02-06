import React, { useEffect, useState } from "react";

function PageRow() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[70vh] bg-[url('/pagespic3.jpg')] bg-cover bg-center flex items-center justify-center">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl transition-all duration-1000 ease-out"
           style={{
             opacity: loaded ? 1 : 0,
             transform: loaded ? "translateY(0)" : "translateY(20px)"
           }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">
          How <span className="text-white">It Works</span>
        </h1>

        <p className="text-gray-200 mt-4 text-lg md:text-xl leading-relaxed">
          A simple, fast and secure process designed to get you the funds you need without stress.
        </p>

        {/* Decorative Line */}
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full relative">
          <span className="absolute left-0 top-0 w-0 h-full bg-yellow-400 rounded-full animate-line"></span>
        </div>
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

export default PageRow;

