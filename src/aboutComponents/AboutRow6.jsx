import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AboutRow6() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* IMAGE BANNER */}
        <div
          className={`relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-[url('/aboutpic4.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-blue-900/60"></div>

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 max-w-3xl">
              Integrity. Innovation. Financial Empowerment.
            </h2>
          </div>
        </div>

        {/* TEXT + BUTTON ROW */}
        <div
          className={`bg-gray-50 rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed text-center md:text-left">
            We live our values, attract and retain top talent, and encourage an
            entrepreneurial spirit. We are proud of our corporate culture and the
            integrity of our people.
          </h4>

          <Link
            to="/apply"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 hover:scale-105 whitespace-nowrap"
          >
            Join Our Conversation
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutRow6;


