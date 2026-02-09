import React, { useEffect, useState } from "react";

function HomeRow5() {
  const [projects, setProjects] = useState(0);
  const [loans, setLoans] = useState(0);
  const [interest, setInterest] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const projectTarget = 3472;
    const loanTarget = 156000;
    const interestTarget = 5.6;

    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    let p = 0, l = 0, i = 0;

    const projectStep = projectTarget / steps;
    const loanStep = loanTarget / steps;
    const interestStep = interestTarget / steps;

    const interval = setInterval(() => {
      p += projectStep;
      l += loanStep;
      i += interestStep;

      setProjects(p > projectTarget ? projectTarget : Math.floor(p));
      setLoans(l > loanTarget ? loanTarget : Math.floor(l));
      setInterest(i > interestTarget ? interestTarget : +i.toFixed(1));

      if (p >= projectTarget && l >= loanTarget && i >= interestTarget) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

          {/* Projects */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-blue-500 font-semibold">
              Projects Done
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mt-2">
              {projects.toLocaleString()}
            </h1>
          </div>

          {/* Loans */}
          <div
            className={`transition-all duration-1000 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-blue-500 font-semibold">
              Loan Increase
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mt-2">
              {loans.toLocaleString()}
            </h1>
          </div>

          {/* Interest */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-blue-500 font-semibold">
              Offer Low Interest
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mt-2">
              {interest}%
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeRow5;

