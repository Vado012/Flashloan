import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function HomeRow1() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative group cursor-pointer ${
      isActive ? "text-yellow-400" : "text-white"
    }`;

  const mobileLinkStyle =
    "block py-3 border-b border-white/10 text-white text-lg";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-blue-700 shadow-xl" : "bg-blue-500 shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[60px] flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          Flashloan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutUs" },
              { name: "Services", path: "/services" },
              { name: "Pages", path: "/pages" },
              { name: "Blog", path: "/blog" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={navLinkStyle}>
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="bg-black px-4 py-1.5 rounded-full hover:bg-gray-800 transition transform hover:-translate-y-1 duration-300 text-white">
              Login
            </button>
          </Link>
          <Link to="/apply">
            <button className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-100 transition transform hover:-translate-y-1 duration-300">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-blue-800/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[500px] py-6 px-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutUs" },
            { name: "Services", path: "/services" },
            { name: "Pages", path: "/pages" },
            { name: "Blog", path: "/blog" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={mobileLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-black py-2 rounded-full text-white">
                Login
              </button>
            </Link>
            <Link to="/apply" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-white text-black py-2 rounded-full">
                Apply Now
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HomeRow1;






