import React, { useState, useEffect } from "react";
import { FiHome, FiDollarSign, FiFileText, FiUser, FiLogOut, FiBell, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ApplyLoan from "./ApplyLoan";

function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "User", email: "" });
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApplyLoan, setShowApplyLoan] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    
    // Set notifications
    const approvedLoans = (data.loans || data).filter(l => l.status === "approved");
    setNotifications(approvedLoans.map(l => ({
      id: l._id,
      message: `Your loan application for $${parseFloat(l.amount || 0).toLocaleString()} has been approved!`,
      time: new Date(l.updatedAt || l.createdAt).toLocaleString()
    })));
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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-950 text-white p-2 rounded-lg"
      >
        {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`${
        showMobileMenu ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 fixed lg:static w-64 h-full bg-blue-950 text-gray-100 flex flex-col transition-transform duration-300 z-40`}>
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
          <h1 className="text-xl lg:text-2xl font-bold text-blue-950 ml-12 lg:ml-0">My Dashboard</h1>
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="relative">
              <FiBell 
                className="text-xl text-gray-600 cursor-pointer hover:text-blue-600 transition" 
                onClick={() => setShowNotifications(!showNotifications)}
              />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-800">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="p-4 text-gray-500 text-sm">No new notifications</p>
                    ) : (
                      notifications.map((notif) => (
                        <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition">
                          <p className="text-sm text-gray-800">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-950">
                {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="text-gray-700 font-medium hidden sm:block">{user.name || user.email || "User"}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-950">Welcome back, {user.name || user.email?.split('@')[0] || "User"}!</h2>
            <p className="text-gray-600 mt-1 text-sm lg:text-base">Here's an overview of your loan activity</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
            <div className="bg-white p-4 lg:p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Total Borrowed</p>
              <h2 className="text-xl lg:text-2xl font-bold text-blue-950">${totalBorrowed.toLocaleString()}</h2>
            </div>
            <div className="bg-white p-4 lg:p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Active Loans</p>
              <h2 className="text-xl lg:text-2xl font-bold text-blue-950">{activeLoans}</h2>
            </div>
            <div className="bg-white p-4 lg:p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500 text-sm">Total Repaid</p>
              <h2 className="text-xl lg:text-2xl font-bold text-green-600">${totalRepaid.toLocaleString()}</h2>
            </div>
          </div>

          <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
            <h3 className="text-lg lg:text-xl font-bold text-blue-950 mb-4">My Loans</h3>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : loans.length === 0 ? (
              <p className="text-gray-500">No loans yet. Apply for your first loan!</p>
            ) : (
              <div className="overflow-x-auto -mx-4 lg:mx-0">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="text-gray-500 uppercase text-xs border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-2">Amount</th>
                      <th className="py-2 px-2">Status</th>
                      <th className="py-2 px-2 hidden sm:table-cell">Date</th>
                      <th className="py-2 px-2 hidden md:table-cell">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loans.map((loan, i) => (
                      <tr key={loan._id || i} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-2 px-2">${parseFloat(loan.amount || 0).toLocaleString()}</td>
                        <td className="py-2 px-2">
                          <span className={`font-semibold text-xs sm:text-sm ${
                            loan.status === "approved" || loan.status === "active" ? "text-green-600" :
                            loan.status === "pending" ? "text-yellow-500" : "text-red-500"
                          }`}>
                            {loan.status}
                          </span>
                        </td>
                        <td className="py-2 px-2 hidden sm:table-cell">{loan.createdAt ? new Date(loan.createdAt).toLocaleDateString() : "N/A"}</td>
                        <td className="py-2 px-2 hidden md:table-cell">{loan.dueDate ? new Date(loan.dueDate).toLocaleDateString() : "N/A"}</td>
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
