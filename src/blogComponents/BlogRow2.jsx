import React, { useState, useEffect } from "react";

function BlogRow2() {
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      title: "How to Choose the Right Loan for Your Needs",
      category: "Loan Guide",
      author: "Flashloan Finance Team",
      date: "Jan 12, 2026",
      img: "blog1.jpg",
      desc: "Understanding loan terms, interest rates, and repayment plans can help you make smarter financial decisions.",
      full: `
Choosing the right loan starts with understanding your financial needs and repayment capacity. 
Not all loans are created equal, and selecting the wrong one can lead to unnecessary stress.

Interest rates, loan duration, and hidden fees are some of the most important factors to compare. 
Borrowers should also review prepayment penalties and flexibility options.

At Flashloan, we recommend borrowing only what you truly need and ensuring your monthly payments fit comfortably within your income.
      `,
    },
    {
      title: "5 Smart Ways to Use a Personal Loan",
      category: "Finance Tips",
      author: "Flashloan Finance Team",
      date: "Feb 03, 2026",
      img: "blog2.jpg",
      desc: "Discover practical ways personal loans can support your financial goals.",
      full: `
Personal loans are powerful financial tools when used wisely. Many people use them to consolidate high-interest debts, reducing overall monthly payments.

They can also help cover medical emergencies, home improvements, or education expenses.

Responsible borrowing ensures that your loan works for you, not against you. Always have a clear repayment strategy before applying.
      `,
    },
    {
      title: "Improving Your Credit Score Before Applying",
      category: "Credit Health",
      author: "Flashloan Finance Team",
      date: "Feb 20, 2026",
      img: "blog3.jpg",
      desc: "A better credit score can unlock lower interest rates and better loan options.",
      full: `
Your credit score plays a major role in loan approvals and interest rates. Improving it before applying can save you money.

Pay bills on time, keep credit utilization low, and avoid multiple loan applications in a short period.

A strong credit history shows lenders you are reliable and financially responsible.
      `,
    },
  ];

  // Scroll lock for modal
  useEffect(() => {
    if (activePost) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [activePost]);

  return (
    <section className="bg-gray-50 py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Financial Knowledge Hub
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Insights, strategies, and expert guidance to help you make confident
            financial decisions with Flashloan.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <span className="text-xs uppercase tracking-wider text-yellow-600 font-semibold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-blue-800 mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">{post.desc}</p>

                <button
                  onClick={() => setActivePost(post)}
                  className="mt-6 text-yellow-600 font-semibold hover:underline text-left"
                >
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROFESSIONAL ARTICLE MODAL */}
      {activePost && (
        <div className="fixed inset-0 flex items-start justify-center z-50 overflow-y-auto py-20 px-4">
          {/* Fade-in overlay */}
          <div className="absolute inset-0 bg-black/70 animate-fadeIn"></div>

          <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl relative animate-pop z-10">
            {/* Close */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-6 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ✕
            </button>

            {/* Hero Image */}
            <div className="h-80 w-full">
              <img
                src={activePost.img}
                alt={activePost.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Article Content */}
            <div className="p-10 md:p-14">
              <p className="text-sm text-yellow-600 font-semibold uppercase tracking-wide">
                {activePost.category}
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-4">
                {activePost.title}
              </h2>

              <div className="text-sm text-gray-500 mb-8">
                By {activePost.author} • {activePost.date}
              </div>

              <div className="text-gray-700 leading-relaxed space-y-6 whitespace-pre-line">
                {activePost.full}
              </div>

              {/* CTA */}
              <div className="mt-12 bg-blue-950 text-white rounded-xl p-8 text-center">
                <h4 className="text-2xl font-bold mb-3">Need Financial Support?</h4>
                <p className="text-gray-200 mb-6">
                  Apply with Flashloan today for fast approval and flexible repayment options.
                </p>
                <button className="cta-button bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105">
                  Apply for a Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
        @keyframes pop {
          0% { opacity: 0; transform: translateY(40px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-pop {
          animation: pop 0.35s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out forwards;
        }
        `}
      </style>
    </section>
  );
}

export default BlogRow2;


