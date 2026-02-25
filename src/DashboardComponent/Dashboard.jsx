import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiFileText, FiPieChart, FiSettings, FiBell, FiLogOut, FiTrash2, FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalLoans: 0, activeLoans: 0, interestEarned: 0, totalCustomers: 0 });
  const [recentLoans, setRecentLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingLoan, setEditingLoan] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchAdminData(token);
    fetchNotifications(token);
  }, []);

  const fetchAdminData = async (token) => {
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/loan/all", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched loans:", data.loans || data);
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

  const fetchNotifications = async (token) => {
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/loan", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        const allLoans = data.loans || data;
        const pendingLoans = allLoans.filter(l => l.status === "pending");
        setNotifications(pendingLoans.map(l => ({
          id: l._id,
          message: `New loan application from ${l.userId?.name || l.userId?.email || "User"} for $${parseFloat(l.amount || 0).toLocaleString()}`,
          time: new Date(l.createdAt).toLocaleString()
        })));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDeleteLoan = async (loanId) => {
    if (!confirm("Are you sure you want to delete this loan?")) return;
    
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`https://loanbackend-tafg.onrender.com/api/loan/${loanId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      
      if (response.ok) {
        fetchAdminData(token);
      } else {
        alert("Failed to delete loan");
      }
    } catch (err) {
      alert("Error deleting loan");
    }
  };

  const handleUpdateLoan = async (loanId) => {
    if (!newStatus) return;
    
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`https://loanbackend-tafg.onrender.com/api/loan/${loanId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus }),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setEditingLoan(null);
        setNewStatus("");
        // Force a fresh fetch with a small delay to ensure backend has updated
        setTimeout(async () => {
          await fetchAdminData(token);
          await fetchNotifications(token);
        }, 100);
      } else {
        alert(data.message || "Failed to update loan");
      }
    } catch (err) {
      alert("Error updating loan");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-gray-100 flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold text-yellow-400">FlashLoan</div>
        <nav className="flex-1 px-4 space-y-2 mt-6">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="flex items-center gap-3 py-2 px-3 rounded bg-blue-800 transition">
            <FiHome /> Dashboard
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/all-loans"); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
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
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
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
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="5" className="py-4 text-center text-gray-500">Loading...</td></tr>
                  ) : recentLoans.length === 0 ? (
                    <tr><td colSpan="5" className="py-4 text-center text-gray-500">No recent activity</td></tr>
                  ) : (
                    recentLoans.map((loan, i) => (
                      <tr key={loan._id || i} className="border-b border-gray-200 hover:bg-gray-50 transition">
                        <td className="py-2">{loan.userId?.name || loan.userId?.email || "N/A"}</td>
                        <td className="py-2">${parseFloat(loan.amount || 0).toLocaleString()}</td>
                        <td className="py-2">
                          {editingLoan === loan._id ? (
                            <select
                              value={newStatus}
                              onChange={(e) => setNewStatus(e.target.value)}
                              className="border border-gray-300 rounded px-2 py-1 text-xs"
                            >
                              <option value="">Select status</option>
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          ) : (
                            <span className={`font-semibold ${
                              loan.status === "approved" || loan.status === "active" ? "text-green-600" :
                              loan.status === "pending" ? "text-yellow-500" : "text-red-500"
                            }`}>
                              {loan.status}
                            </span>
                          )}
                        </td>
                        <td className="py-2">{loan.createdAt ? new Date(loan.createdAt).toLocaleDateString() : "N/A"}</td>
                        <td className="py-2">
                          <div className="flex gap-2">
                            {editingLoan === loan._id ? (
                              <>
                                <button
                                  onClick={() => handleUpdateLoan(loan._id)}
                                  className="text-green-600 hover:text-green-800 font-semibold text-xs"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => { setEditingLoan(null); setNewStatus(""); }}
                                  className="text-gray-600 hover:text-gray-800 font-semibold text-xs"
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => { setEditingLoan(loan._id); setNewStatus(loan.status); }}
                                  className="text-blue-600 hover:text-blue-800"
                                  title="Edit"
                                >
                                  <FiEdit size={16} />
                                </button>
                                <button
                                  onClick={() => handleDeleteLoan(loan._id)}
                                  className="text-red-600 hover:text-red-800"
                                  title="Delete"
                                >
                                  <FiTrash2 size={16} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
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
