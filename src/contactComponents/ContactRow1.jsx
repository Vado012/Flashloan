import React from "react";

function ContactRow1() {
  return (
    <div className="bg-gray-50 overflow-hidden">

      {/* HERO */}
      <div className="relative h-[45vh] bg-[url('/contactpic.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-wide animate-slideInRight">
          Contact <span className="text-blue-500">Flashloan</span>
        </h1>
      </div>

      {/* CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT — CONTACT INFO */}
        <div className="animate-slideInRight">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Have questions about our loan options, repayments, or eligibility?
            Our team is always ready to guide you through every step.
          </p>

          <div className="space-y-8 text-gray-700">

            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="font-semibold text-blue-600">Office Address</h4>
                <p>12 Finance Street, Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-semibold text-blue-600">Phone Number</h4>
                <p>+234 800 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✉️</div>
              <div>
                <h4 className="font-semibold text-blue-600">Email Address</h4>
                <p>support@flashloan.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🕒</div>
              <div>
                <h4 className="font-semibold text-blue-600">Working Hours</h4>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-xl animate-slideInRight delay-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-md px-4 h-[50px] focus:ring-2 focus:ring-blue-400 outline-none transition duration-300 hover:border-blue-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-md px-4 h-[50px] focus:ring-2 focus:ring-blue-400 outline-none transition duration-300 hover:border-blue-300"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-md px-4 h-[50px] focus:ring-2 focus:ring-blue-400 outline-none transition duration-300 hover:border-blue-300"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-200 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition duration-300 hover:border-blue-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* MAP */}
      <div className="h-[400px] w-full animate-slideInRight mt-10">
        <iframe
          title="office-location"
          src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 rounded-xl shadow-lg"
          loading="lazy"
        ></iframe>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
}

export default ContactRow1;


