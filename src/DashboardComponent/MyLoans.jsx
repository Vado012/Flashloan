import React, { useState, useEffect } from "react";
import { FiHome, FiDollarSign, FiFileText, FiUser, FiLogOut, FiBell, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function MyLoans() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "User", email: "" });
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchLoans(token);
    fetchUser(token);
  }, []);

  const fetchUser = async (token) => {
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user || data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchLoans = async (token) => {
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/loan/myloans", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setLoans(data.loans || data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-950 text-white p-2 rounded-lg"
      >
        {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <aside className={`${
        showMobileMenu ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 fixed lg:static w-64 h-full bg-blue-950 text-gray-100 flex flex-col transition-transform duration-300 z-40`}>
        <div className="px-6 py-4 text-2xl font-bold text-yellow-400">FlashLoan</div>
        <nav className="flex-1 px-4 space-y-2 mt-6">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/user-dashboard"); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiDollarSign /> Apply for Loan
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded bg-blue-800">
            <FiFileText /> My Loans
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/user-profile"); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiUser /> Profile
          </a>
        </nav>
        <button onClick={handleLogout} className="mx-4 mb-4 flex items-center gap-3 py-2 px-3 rounded hover:bg-red-600 transition">
          <FiLogOut /> Logout
        </button>
      </aside>

      <div className="flex-1 flex flex-col w-full">
        <header className="flex justify-between items-center bg-white px-4 lg:px-6 py-4 shadow">
          <h1 className="text-xl lg:text-2xl font-bold text-blue-950 ml-12 lg:ml-0">My Loans</h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-950">
              {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
            </div>
            <span className="text-gray-700 font-medium hidden sm:block">{user.name || user.email || "User"}</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="bg-white rounded-xl shadow p-4 lg:p-6">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-950 mb-4 lg:mb-6">All My Loans</h2>
            
            {loading ? (
              <p className="text-center text-gray-500 py-8">Loading loans...</p>
            ) : loans.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">You haven't applied for any loans yet.</p>
                <button
                  onClick={() => navigate("/user-dashboard")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition"
                >
                  Apply for Your First Loan
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {loans.map((loan) => (
                  <div key={loan._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-sm text-gray-500">Loan Amount</p>
                        <h3 className="text-2xl font-bold text-blue-950">${parseFloat(loan.amount || 0).toLocaleString()}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        loan.status === "approved" || loan.status === "active" ? "bg-green-100 text-green-700" :
                        loan.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                      }`}>
                        {loan.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Term:</span>
                        <span className="font-semibold">{loan.term} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Applied:</span>
                        <span className="font-semibold">{loan.createdAt ? new Date(loan.createdAt).toLocaleDateString() : "N/A"}</span>
                      </div>
                      {loan.dueDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Due Date:</span>
                          <span className="font-semibold">{new Date(loan.dueDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-gray-500 text-xs">Purpose:</p>
                        <p className="text-gray-700 text-sm mt-1">{loan.purpose || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyLoans;
