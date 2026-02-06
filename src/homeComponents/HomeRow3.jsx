import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeRow3() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const loanCards = [
    {
      img: "/banker.png",
      title: "Personal Loan @ 10.75%",
      desc: "Unlimited rewards with attractive deals & discounts, flexible payment options, and global usage privileges.",
    },
    {
      img: "/money-bag.png",
      title: "Repayable in 12 – 60 EMIs",
      desc: "Lowest interest rates with worldwide acceptance and cash advance facilities.",
    },
    {
      img: "/money-bag-2.png",
      title: "Instant Credit Approval",
      desc: "Get your credit card within 24 hours with up to 98% cash withdrawal facilities.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">

      {/* TOP CONTENT */}
      <div
        className={`max-w-6xl mx-auto bg-white rounded-xl shadow px-6 py-16 text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="/savings.png"
          alt="Savings"
          className="mx-auto mb-6 transition-transform duration-500 hover:scale-105"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-400">
            You can achieve your financial goals.
          </span>
          <br />
          <span className="text-blue-500">We can help.</span>
        </h1>

        <div className="w-12 h-1 bg-yellow-400 mx-auto mb-6 rounded"></div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We will match you with a loan program that meets your financial
          needs. For short-term liquidity, we strive to make funds available
          within 24 hours of application.
        </p>

        <Link to="/apply">
          <button className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:-translate-y-1 duration-300">
            All Personal Loans
          </button>
        </Link>
      </div>

      {/* LOAN CARDS */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {loanCards.map((card, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`bg-white rounded-2xl shadow-xl p-6 text-center transition-all transform duration-700 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:shadow-2xl hover:-translate-y-2 hover:scale-105`}
          >
            <img
              src={card.img}
              alt=""
              className="mx-auto mb-4 transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-blue-500 text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeRow3;



