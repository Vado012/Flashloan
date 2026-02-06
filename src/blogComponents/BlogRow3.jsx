import React, { useState, useEffect } from "react";

function BlogRow3() {
  const [activePost, setActivePost] = useState(null);

  const articles = [
    {
      title: "Understanding Loan Interest Rates: Fixed vs Variable",
      img: "blog4.jpg",
      date: "March 02, 2026",
      category: "Loan Education",
      content: `
Interest rates play a major role in determining the total cost of your loan. 
Borrowers often encounter two main types: fixed and variable rates.

A fixed interest rate remains the same throughout the life of the loan, providing predictable monthly payments. This stability makes budgeting easier and protects borrowers from market fluctuations.

Variable interest rates, on the other hand, can change over time depending on market conditions. While they may start lower than fixed rates, they carry the risk of increasing in the future.

Choosing between the two depends on your financial goals, income stability, and risk tolerance. At Flashloan, we help borrowers understand these options clearly so they can make informed decisions with confidence.
      `,
    },
    {
      title: "How Flashloan Makes Borrowing Simple and Transparent",
      img: "blog5.jpg",
      date: "March 10, 2026",
      category: "Company Update",
      content: `
At Flashloan, our mission is to remove complexity from the borrowing process. 
We believe customers deserve clarity, speed, and trust when applying for financial support.

Our streamlined application system allows clients to complete the process quickly while understanding every step involved. We avoid hidden fees and unclear terms, ensuring transparency from application to repayment.

With dedicated customer support and modern security standards, Flashloan delivers a borrowing experience built on reliability and professionalism.
      `,
    },
    {
      title: "Tips for Managing Loan Repayments Responsibly",
      img: "blog6.jpg",
      date: "March 18, 2026",
      category: "Financial Wellness",
      content: `
Managing loan repayments effectively is key to maintaining financial health. 
Start by creating a monthly budget that includes your loan installment as a fixed expense.

Setting up automatic payments can help avoid missed due dates, protecting your credit score. It's also wise to maintain an emergency savings fund to cover unexpected expenses without disrupting your repayment plan.

Responsible borrowing isn't just about getting approved — it's about maintaining long-term financial stability. Flashloan encourages borrowers to take control of their financial journey with confidence and discipline.
      `,
    },
  ];

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activePost ? "hidden" : "auto";
  }, [activePost]);

  return (
    <section className="bg-white py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-blue-900">Latest Financial Articles</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with expert financial knowledge, borrowing insights, and smart money strategies from Flashloan.
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-14">
          {articles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-wider text-yellow-600 font-semibold">{item.category}</span>

                <h3 className="text-2xl font-bold text-blue-800 mt-2 mb-3">{item.title}</h3>

                <p className="text-gray-600 mb-4">
                  Click below to read the full professional insight article.
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <button
                    onClick={() => setActivePost(item)}
                    className="text-blue-700 font-semibold hover:text-yellow-600 transition"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {activePost && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 animate-fadeIn"></div>

          {/* Modal Content */}
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden animate-pop max-h-[90vh] flex flex-col relative">
            <img src={activePost.img} alt={activePost.title} className="h-60 w-full object-cover" />
            <div className="p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">{activePost.title}</h2>
              <p className="text-sm text-gray-400 mb-6">{activePost.date} • {activePost.category}</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{activePost.content}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full shadow-md font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes pop {
            0% { opacity: 0; transform: scale(0.95) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-pop { animation: pop 0.35s ease-out; }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 0.35s ease-out forwards; }
        `}
      </style>
    </section>
  );
}

export default BlogRow3;


