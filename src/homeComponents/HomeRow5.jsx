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

    const duration = 2000; // animation duration in ms
    const intervalTime = 20; // update every 20ms
    const steps = duration / intervalTime;

    let p = 0, l = 0, i = 0;

    const projectStep = projectTarget / steps;
    const loanStep = loanTarget / steps;
    const interestStep = interestTarget / steps;

    const interval = setInterval(() => {
      p += projectStep;
      l += loanStep;
      i += interestStep;

      setProjects((prev) => (p > projectTarget ? projectTarget : Math.floor(p)));
      setLoans((prev) => (l > loanTarget ? loanTarget : Math.floor(l)));
      setInterest((prev) => (i > interestTarget ? interestTarget : +i.toFixed(1)));

      if (p >= projectTarget && l >= loanTarget && i >= interestTarget) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[180px] flex justify-center items-center">
      <div className="gap-10 max-w-5xl flex justify-between px-6 w-full">

        <div
          className={`text-center transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-2xl text-blue-500 font-bold">Projects Done</p>
          <h1 className="text-3xl font-bold text-yellow-500">
            {projects.toLocaleString()}
          </h1>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-150 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-2xl text-blue-500 font-bold">Loan Increase</p>
          <h1 className="text-3xl font-bold text-yellow-500">
            {loans.toLocaleString()}
          </h1>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-2xl text-blue-500 font-bold">Offer Low Interest</p>
          <h1 className="text-3xl font-bold text-yellow-500">
            {interest}%
          </h1>
        </div>

      </div>
    </div>
  );
}

export default HomeRow5;
