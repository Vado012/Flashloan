import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiFileText, FiPieChart, FiSettings, FiBell, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalLoans: 0, activeLoans: 0, interestEarned: 0, totalCustomers: 0 });
  const [recentLoans, setRecentLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchAdminData(token);
  }, []);

  const fetchAdminData = async (token) => {
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/loan", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        const allLoans = data.loans || data;
        
        // Calculate stats from loans
        const totalLoans = allLoans.length;
        const activeLoans = allLoans.filter(l => l.status === "approved" || l.status === "active").length;
        const totalAmount = allLoans.reduce((sum, l) => sum + (parseFloat(l.amount) || 0), 0);
        const interestEarned = totalAmount * 0.05; // Assuming 5% interest
        
        setStats({ totalLoans, activeLoans, interestEarned, totalCustomers: totalLoans });
        setRecentLoans(allLoans.slice(0, 5));
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

      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-gray-100 flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold text-yellow-400">FlashLoan</div>
        <nav className="flex-1 px-4 space-y-2 mt-6">
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiFileText /> Loans
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiUser /> Customers
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiPieChart /> Reports
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiSettings /> Settings
          </a>
        </nav>
        <button onClick={handleLogout} className="mx-4 mb-4 flex items-center gap-3 py-2 px-3 rounded hover:bg-red-600 transition">
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
          <h1 className="text-2xl font-bold text-blue-950">Dashboard</h1>
          <div className="flex items-center gap-4">
            <FiBell className="text-xl text-gray-600 cursor-pointer" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-950">A</div>
              <span className="text-gray-700 font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Total Loans</p>
              <h2 className="text-2xl font-bold text-blue-950">{loading ? "..." : stats.totalLoans?.toLocaleString()}</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Active Loans</p>
              <h2 className="text-2xl font-bold text-blue-950">{loading ? "..." : stats.activeLoans?.toLocaleString()}</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Interest Earned</p>
              <h2 className="text-2xl font-bold text-blue-950">{loading ? "..." : `$${stats.interestEarned?.toLocaleString()}`}</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Total Customers</p>
              <h2 className="text-2xl font-bold text-blue-950">{loading ? "..." : stats.totalCustomers?.toLocaleString()}</h2>
            </div>
          </div>

          {/* Loan Chart & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Loans Over Time</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                {/* Replace with chart library */}
                [Chart Here]
              </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Recent Activity</h3>
              <table className="w-full text-left text-sm">
                <thead className="text-gray-500 uppercase text-xs border-b border-gray-200">
                  <tr>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Loan Amount</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="4" className="py-4 text-center text-gray-500">Loading...</td></tr>
                  ) : recentLoans.length === 0 ? (
                    <tr><td colSpan="4" className="py-4 text-center text-gray-500">No recent activity</td></tr>
                  ) : (
                    recentLoans.map((loan, i) => (
                      <tr key={loan._id || i} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-2">{loan.userId?.name || loan.userId?.email || "N/A"}</td>
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
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
