import React, { useState } from "react";

function AboutRow4() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative bg-gray-50">

      {/* Top Blue Background Strip */}
      <div className="h-40 sm:h-48 md:h-60 bg-gradient-to-r from-blue-700 to-blue-500"></div>

      {/* Floating Content Card */}
      <div className="relative max-w-7xl mx-auto -mt-28 sm:-mt-32 md:-mt-40 bg-white flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden border border-gray-200">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center p-6 sm:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Flashloan Previous Record
          </h1>

          <h4 className="text-blue-600 font-semibold text-lg sm:text-xl tracking-wide">
            More than 20 Years of Experience
          </h4>

          <p className="text-gray-600 leading-relaxed">
            Helping your business reach its full potential. Whether you are a start-up or a large corporation, Flashloan provides the tools you need to start and run your business — all in one place.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Starting a business is both exciting and challenging. Our team is here to guide and support you every step of the way.
          </p>

          {/* Button to open long pop-out section */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 w-full sm:w-56 py-3 rounded-xl font-semibold text-gray-900 shadow-md hover:scale-105"
          >
            Read More Details
          </button>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div className="h-60 sm:h-80 md:h-96 w-full rounded-xl bg-[url('/aboutpic2.jpg')] bg-cover bg-center shadow-lg"></div>
        </div>
      </div>

      {/* POP-OUT LONG SECTION MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-start pt-20 z-50 px-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full sm:w-3/4 p-6 sm:p-10 relative animate-pop overflow-y-auto max-h-[90vh]">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">
              Flashloan: Our History & Achievements
            </h2>

            {/* Long, scrollable content */}
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Flashloan has been a trusted name in financial solutions for over 20 years. Our mission has always been to make loans fast, reliable, and accessible for businesses and individuals alike.
              </p>
              <p>
                Throughout the years, we have helped thousands of clients grow their businesses, consolidate debts, and achieve financial freedom. Our dedicated team ensures every loan process is transparent and efficient.
              </p>
              <p>
                We pride ourselves on personalized support. Every client receives guidance tailored to their needs, from small business loans to large corporate financing.
              </p>
              <p>
                With modern technology and flexible repayment plans, Flashloan continues to innovate the way people access funds, making borrowing simple, safe, and smart.
              </p>
              <p>
                Our achievements include expanding services to over 50 cities, launching online applications that take minutes to complete, and maintaining a 95% customer satisfaction rate.
              </p>
              <p>
                Looking forward, Flashloan is committed to creating even more transparent and accessible financial solutions. Our vision is to help entrepreneurs, families, and businesses thrive without the stress of complicated loans.
              </p>
              <p>
                Join thousands of satisfied clients and experience the Flashloan difference — fast approvals, clear terms, and support you can trust.
              </p>
              <p>
                Whether you are starting a new venture, expanding an existing business, or needing quick personal financing, our team is ready to guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style>
        {`
          @keyframes pop {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          .animate-pop {
            animation: pop 0.4s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default AboutRow4;





