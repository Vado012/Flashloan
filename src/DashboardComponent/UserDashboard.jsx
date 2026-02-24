import React, { useState, useEffect } from "react";
import { FiHome, FiDollarSign, FiFileText, FiUser, FiLogOut, FiBell } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ApplyLoan from "./ApplyLoan";

function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "User", email: "" });
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApplyLoan, setShowApplyLoan] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchUserData(token);
  }, []);

  const fetchUserData = async (token) => {
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

    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/loan", {
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

  const activeLoans = loans.filter(l => l.status === "approved" || l.status === "active").length;
  const totalBorrowed = loans.reduce((sum, l) => sum + (parseFloat(l.amount) || 0), 0);
  const totalRepaid = loans.reduce((sum, l) => sum + (parseFloat(l.repaid) || 0), 0);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-blue-950 text-gray-100 flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold text-yellow-400">FlashLoan</div>
        <nav className="flex-1 px-4 space-y-2 mt-6">
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded bg-blue-800">
            <FiHome /> Dashboard
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowApplyLoan(true); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiDollarSign /> Apply for Loan
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiFileText /> My Loans
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiUser /> Profile
          </a>
        </nav>
        <button onClick={handleLogout} className="mx-4 mb-4 flex items-center gap-3 py-2 px-3 rounded hover:bg-red-600 transition">
          <FiLogOut /> Logout
        </button>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
          <h1 className="text-2xl font-bold text-blue-950">My Dashboard</h1>
          <div className="flex items-center gap-4">
            <FiBell className="text-xl text-gray-600 cursor-pointer" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-950">
                {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="text-gray-700 font-medium">{user.name || user.email || "User"}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Total Borrowed</p>
              <h2 className="text-2xl font-bold text-blue-950">${totalBorrowed.toLocaleString()}</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Active Loans</p>
              <h2 className="text-2xl font-bold text-blue-950">{activeLoans}</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Total Repaid</p>
              <h2 className="text-2xl font-bold text-green-600">${totalRepaid.toLocaleString()}</h2>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-950 mb-4">My Loans</h3>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : loans.length === 0 ? (
              <p className="text-gray-500">No loans yet. Apply for your first loan!</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-gray-500 uppercase text-xs border-b border-gray-200">
                    <tr>
                      <th className="py-2">Amount</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loans.map((loan, i) => (
                      <tr key={loan._id || i} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-2">${parseFloat(loan.amount || 0).toLocaleString()}</td>
                        <td className="py-2">
                          <span className={`font-semibold ${
                            loan.status === "approved" || loan.status === "active" ? "text-green-600" :
                            loan.status === "pending" ? "text-yellow-500" : "text-red-500"
                          }`}>
                            {loan.status}
                          </span>
                        </td>
                        <td className="py-2">{loan.createdAt ? new Date(loan.createdAt).toLocaleDateString() : "N/A"}</td>
                        <td className="py-2">{loan.dueDate ? new Date(loan.dueDate).toLocaleDateString() : "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {showApplyLoan && (
        <ApplyLoan
          onClose={() => setShowApplyLoan(false)}
          onSuccess={() => {
            const token = localStorage.getItem("token");
            fetchUserData(token);
          }}
        />
      )}
    </div>
  );
}

export default UserDashboard;
