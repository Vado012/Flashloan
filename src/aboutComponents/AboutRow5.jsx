import React, { useEffect, useState } from "react";

function AboutRow5() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setLoaded(true);
  }, []);

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">

      {/* TOP INTRO */}
      <div
        className={`max-w-5xl mx-auto text-center mb-20 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-600 leading-relaxed">
          For more than 30 years, companies around the world have depended on
          Flashloan to help ensure the{" "}
          <span className="text-yellow-500">quality and safety</span> of
          their financial services, processes, and systems.
        </h1>
      </div>

      {/* MISSION / IMAGE SECTION */}
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* IMAGE */}
        <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
          <div className="w-full h-full bg-[url('/cardpic.jpg')] bg-cover bg-center"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600">
            Our Mission, Vision & Values
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Flashloan, innovation and trust are at the heart of everything we
            do. We are committed to delivering reliable financial solutions that
            empower individuals and businesses to achieve their goals with
            confidence and security.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-1">
              Our Purpose
            </h3>
            <p className="text-gray-600">Bringing financial access and security to life.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-1">
              Our Mission
            </h3>
            <p className="text-gray-600">
              We provide fast, transparent, and accessible loan solutions that
              support people when they need it most.
            </p>
          </div>
        </div>
      </div>

      {/* VISION SECTION */}
      <div
        className={`max-w-4xl mx-auto text-center mt-24 space-y-4 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
          Our Vision
        </h2>
        <p className="text-gray-600 leading-relaxed">
          To become a trusted global leader in digital lending by making
          financial services simple, fair, and accessible for everyone.
        </p>
      </div>

    </section>
  );
}

export default AboutRow5;


