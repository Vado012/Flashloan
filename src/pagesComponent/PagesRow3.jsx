import React, { useEffect, useState } from "react";

function PagesRow3() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const steps = [
    {
      id: 1,
      bg: "bg-blue-600",
      textBg: "bg-blue-600 text-white",
      iconBg: "bg-blue-500",
      icon: "/step1.png",
      title: "Step 1 — Apply Online",
      desc1: "Complete our simple online application in just a few minutes or visit one of our branches.",
      desc2: "Our secure digital form ensures your information is protected while we review your request quickly and efficiently.",
    },
    {
      id: 2,
      bg: "bg-gray-100",
      textBg: "bg-gray-100 p-10",
      iconBg: "bg-blue-100",
      icon: "/step2.png",
      title: "Step 2 — Get Approved",
      desc1: "Submit required documents and receive a quick decision from our loan specialists.",
      desc2: "We assess your application promptly so you can move forward without delays.",
    },
    {
      id: 3,
      bg: "bg-yellow-500",
      textBg: "bg-yellow-500 text-white",
      iconBg: "bg-yellow-400",
      icon: "/step3.png",
      title: "Step 3 — Receive Funds",
      desc1: "Once approved, funds are sent quickly so you can take care of what matters most.",
      desc2: "Fast processing and reliable service mean you get your money when you need it.",
    },
  ];

  return (
    <section className="py-10 bg-white flex flex-col items-center gap-16 px-6">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`w-full max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {/* Icon Side */}
          <div className={`md:w-1/4 ${step.bg} flex items-center justify-center p-10`}>
            <div className={`w-36 h-36 rounded-full ${step.iconBg} flex items-center justify-center shadow-inner`}>
              <img src={step.icon} alt={`Step ${step.id}`} className="w-16" />
            </div>
          </div>

          {/* Text Side */}
          <div className={`md:w-3/4 ${step.textBg} p-10 flex flex-col justify-center gap-4`}>
            <h2 className={`text-3xl font-bold ${step.id === 2 ? "text-blue-600" : ""}`}>{step.title}</h2>
            <p className={`text-lg ${step.id === 2 ? "text-gray-700" : ""}`}>{step.desc1}</p>
            <p className={`${step.id === 2 ? "text-gray-600" : step.id === 3 ? "text-yellow-100" : "text-blue-100"}`}>{step.desc2}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PagesRow3;


