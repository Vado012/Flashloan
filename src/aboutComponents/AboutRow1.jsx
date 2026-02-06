import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AboutRow1() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100) // small delay for animation
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-[80vh] bg-[url('/aboutpic1.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl space-y-6">

        {/* Heading */}
        <h1
          className={`text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 transition-all duration-1000 transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About <span className="text-blue-500">Flashloan</span>
        </h1>

        {/* Underline */}
        <div
          className={`w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full transition-all duration-1000 ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        ></div>

        {/* Paragraph */}
        <p
          className={`text-white text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-200 transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Flashloan is committed to providing fast, transparent, and reliable loan
          solutions. We help individuals and businesses access the funds they need
          with simple processes, fair rates, and quick approvals.
        </p>

        {/* Button */}
        <Link
          to="/aboutUs"
          className={`inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-500 shadow-lg transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } hover:scale-105`}
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default AboutRow1
