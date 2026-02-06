import React from "react";
import { Link } from "react-router-dom";

function HomeRow12() {
  return (
    <footer className="bg-blue-950 text-gray-200 pt-16 pb-8 px-6 md:px-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand & About */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">FlashLoan</h1>
          <p className="text-sm leading-6 text-gray-300">
            Fast, secure, and reliable loan services designed to help you
            achieve your financial goals with ease and confidence.
          </p>

          <p className="text-sm text-gray-400 mt-4">
            We provide personal, business, and home loans with competitive
            rates and flexible repayment plans. Your growth is our mission.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs" className="hover:text-yellow-400 transition">About Us</Link>
            </li>
            <li>
              <Link to="/loan-plans" className="hover:text-yellow-400 transition">Loan Plans</Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/personal-loans" className="hover:text-yellow-400 transition">Personal Loans</Link>
            </li>
            <li>
              <Link to="/business-loans" className="hover:text-yellow-400 transition">Business Loans</Link>
            </li>
            <li>
              <Link to="/quick-cash" className="hover:text-yellow-400 transition">Quick Cash Advances</Link>
            </li>
            <li>
              <Link to="/repayment-plans" className="hover:text-yellow-400 transition">Flexible Repayment Plans</Link>
            </li>
            <li>
              <Link to="/financial-consultation" className="hover:text-yellow-400 transition">Financial Consultation</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:support@flashloan.com" className="hover:text-yellow-400 transition">support@flashloan.com</a></li>
            <li>Phone: <a href="tel:+18001234567" className="hover:text-yellow-400 transition">+1 (800) 123-4567</a></li>
            <li>Address: 25 Finance Street, New York, USA</li>
          </ul>

          <h2 className="text-lg font-semibold text-white mt-6 mb-2">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">📘</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">🐦</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">📸</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">💼</a>
          </div>
        </div>
      </div>

      {/* Extra Footer Links */}
      <div className="mt-12 border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© {new Date().getFullYear()} FlashLoan. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-yellow-400 transition">Terms of Service</Link>
          <Link to="/faq" className="hover:text-yellow-400 transition">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

export default HomeRow12;
