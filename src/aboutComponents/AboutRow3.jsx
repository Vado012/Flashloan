import React, { useEffect, useState } from "react";

function AboutRow3() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // trigger animation after mount
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      img: "/banker.png",
      title: "Personal Loan @ 10.75%",
      desc: "Enjoy attractive deals, flexible repayment options, and financial solutions designed to fit your needs.",
    },
    {
      img: "/money-bag.png",
      title: "Repayable in 12 – 60 EMIs",
      desc: "Choose repayment plans that suit your income with low interest rates and flexible monthly installments.",
    },
    {
      img: "/money-bag-2.png",
      title: "Instant Credit Approval",
      desc: "Fast processing and quick approvals help you access funds when you need them most.",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 200}ms` }}
            className={`bg-white p-8 rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-700 text-center transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img src={card.img} alt={card.title} className="w-20 mx-auto mb-6 transition-transform duration-500 hover:scale-105" />
            <h2 className="text-blue-600 font-bold text-xl mb-3">{card.title}</h2>
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutRow3;

