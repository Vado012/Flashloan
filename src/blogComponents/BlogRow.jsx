import React, { useEffect, useState } from 'react';

function BlogRow() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[70vh] bg-[url('/blogpic.jpg')] bg-cover bg-center flex items-center justify-center">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      {/* Content */}
      <div
        className={`relative text-center px-6 transform transition-all duration-700 ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
          News & <span className='text-blue-500'>Updates</span>
        </h1>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Stay informed with the latest financial tips, loan guides, and
          company updates from Flashloan.
        </p>

        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
      </div>
    </section>
  )
}

export default BlogRow;

