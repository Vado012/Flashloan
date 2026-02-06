import React, { useState } from "react";

function HomeRow10() {
  const [amount, setAmount] = useState(0);
  const [months, setMonths] = useState(0);
  const [rate, setRate] = useState(0);

  const monthlyRate = rate / 100 / 12;

  const monthlyPayment =
    amount && months && rate
      ? (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      : 0;

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - amount;

  const isFormValid = amount > 0 && months > 0 && rate > 0;

  const handleApply = () => {
    if (!isFormValid) return;
    alert(`Loan Application Started!
Amount: $${amount}
Duration: ${months} months
APR: ${rate}%`);
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT — Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-10 lg:px-20 py-10 gap-10 bg-blue-50">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-yellow-500">Get up to $15,000</span> <br />
            <span className="text-blue-500">
              Fast & Easy Cash Loan Application
            </span>
          </h1>
          <div className="w-14 h-1 bg-yellow-500 mt-4 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-6">
          {/* Amount */}
          <div>
            <h4 className="font-bold mb-2">How much do you need?</h4>
            <select
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-[50px] px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Select amount</option>
              <option value="500">500</option>
              <option value="1000">1,000</option>
              <option value="3000">3,000</option>
              <option value="5000">5,000</option>
              <option value="10000">10,000</option>
              <option value="15000">15,000</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <h4 className="font-bold mb-2">For how long?</h4>
            <select
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-[50px] px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Select duration</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
              <option value="18">18 Months</option>
              <option value="24">24 Months</option>
            </select>
          </div>

          {/* Rate */}
          <div>
            <h4 className="font-bold mb-2">Rate (APR)</h4>
            <select
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-[50px] px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Select rate</option>
              <option value="10">10%</option>
              <option value="12">12%</option>
              <option value="15">15%</option>
              <option value="18">18%</option>
            </select>
          </div>
        </div>
      </div>

      {/* RIGHT — Results */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 md:px-10 lg:px-20 py-10 bg-gray-100">
        <div className="w-full md:w-[90%] lg:w-full h-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-center">Your Results</h2>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-blue-500 font-semibold">Total Principal</h3>
              <p className="text-yellow-500 text-3xl font-bold">
                ${amount || 0}
              </p>
            </div>
            <div>
              <h3 className="text-blue-500 font-semibold">Monthly Payment</h3>
              <p className="text-yellow-500 text-3xl font-bold">
                ${monthlyPayment.toFixed(2)}
              </p>
            </div>
            <div>
              <h3 className="text-blue-500 font-semibold">Total Interest</h3>
              <p className="text-yellow-500 text-3xl font-bold">
                ${totalInterest > 0 ? totalInterest.toFixed(2) : 0}
              </p>
            </div>
            <div>
              <h3 className="text-blue-500 font-semibold">Months to Payoff</h3>
              <p className="text-yellow-500 text-3xl font-bold">{months || 0}</p>
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-2xl font-semibold text-white transition-all duration-300
              ${
                isFormValid
                  ? "bg-green-600 hover:bg-green-700 hover:scale-105 shadow-lg"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Apply For Loan
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeRow10;


