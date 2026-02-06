import React, { useState, useEffect } from "react";

function HomeRow9() {
  const slides = [
    {
      id: 1,
      quote: "This company gave me fast and reliable service. Highly recommended!",
      name: "John Okafor",
      role: "Business Owner",
    },
    {
      id: 2,
      quote: "Very professional and trustworthy. I will definitely come back.",
      name: "Aisha Bello",
      role: "Entrepreneur",
    },
    {
      id: 3,
      quote: "Smooth process and excellent customer support throughout.",
      name: "Michael James",
      role: "Freelancer",
    },
    {
      id: 4,
      quote: "They truly understand customer needs. Amazing experience.",
      name: "Grace Williams",
      role: "Startup Founder",
    },
    {
      id: 5,
      quote: "Fast approval and transparent terms. No hidden charges.",
      name: "Samuel Ade",
      role: "Consultant",
    },
  ];

  const [current, setCurrent] = useState(0);

  // 🔁 Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      {/* Heading */}
      <div className="h-[20vh] flex flex-col items-center justify-end gap-4 text-center px-4">
        <h1 className="font-extrabold text-yellow-500 text-4xl md:text-5xl leading-tight animate-fadeInUp">
          Words From Customers
          <br />
          <span className="text-blue-500">Testimonials</span>
        </h1>
        <div className="w-16 h-1 bg-yellow-500 rounded-full animate-fadeInUp delay-150"></div>
      </div>

      {/* Slider */}
      <div className="h-[80vh] flex items-center justify-center relative overflow-hidden px-4">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full flex justify-center px-2">
              <div className="bg-white w-[90%] md:w-[45%] p-8 rounded-2xl shadow-lg text-center transform transition-transform duration-500 hover:scale-105">
                <p className="text-yellow-500 text-lg italic mb-6">
                  “{slide.quote}”
                </p>
                <h3 className="font-bold text-blue-600 text-xl">{slide.name}</h3>
                <p className="text-gray-500 text-sm">{slide.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-transform duration-300 ${
                current === index
                  ? "bg-blue-600 scale-125"
                  : "bg-blue-300 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
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
        `}
      </style>
    </section>
  );
}

export default HomeRow9;


