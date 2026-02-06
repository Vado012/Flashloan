import React, { useState } from "react";

function HomeRow4() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-blue-500 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE SIDE */}
        <div className="order-1 md:order-2">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full bg-[url('/martins.jpeg')] bg-cover bg-center rounded-2xl shadow-xl"></div>
        </div>

        {/* TEXT SIDE */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            Flashloan Previous Record
          </h1>

          <h3 className="font-semibold text-blue-600 uppercase tracking-wide mb-4 text-sm sm:text-base">
            More than 20 years experience
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            Helping your business reach its full potential. Whether you are a
            start-up or a large corporation, Flashloan has the tools you need to
            start and run your business all in one place.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            Starting a business is both exciting and challenging. We can help you
            every step of the way.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-medium px-6 py-3 rounded-xl shadow-md hover:-translate-y-1 transform duration-300"
          >
            Read more details
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] md:w-3/4 lg:w-1/2 rounded-3xl shadow-2xl p-8 sm:p-10 overflow-y-auto max-h-[90vh] animate-pop">
            
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Flashloan: Our Journey & Expertise
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Flashloan has spent over 20 years transforming the financial landscape 
              for small and medium businesses. We have helped thousands of clients 
              access capital efficiently, offering transparent, secure, and tailored 
              solutions that empower growth.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our approach combines modern technology with expert financial guidance. 
              Every loan is carefully designed to match your unique business needs, 
              from cash flow management to expansion projects. With over two decades 
              of experience, we understand the importance of timely support and clear communication.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We have successfully partnered with hundreds of startups and established 
              enterprises, helping them overcome financial challenges and seize opportunities. 
              Our commitment to integrity, transparency, and client success sets us apart in the 
              industry. Flashloan is more than a lender—we are a trusted business partner.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether you are looking for short-term capital, working capital solutions, 
              or long-term growth financing, our team is here to guide you with expert advice, 
              personalized plans, and fast approval processes. Join the thousands of businesses 
              who have grown with Flashloan.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md transition"
              >
                Close
              </button>
            </div>
          </div>

          {/* POP OUT ANIMATION */}
          <style>
            {`
              @keyframes pop {
                0% { opacity: 0; transform: scale(0.9) translateY(20px); }
                100% { opacity: 1; transform: scale(1) translateY(0); }
              }
              .animate-pop {
                animation: pop 0.5s ease-out forwards;
              }
            `}
          </style>
        </div>
      )}
    </section>
  );
}

export default HomeRow4;
