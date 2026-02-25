import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiFileText, FiPieChart, FiSettings, FiBell, FiLogOut, FiTrash2, FiEdit, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AllLoans() {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingLoan, setEditingLoan] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchAllLoans(token);
  }, []);

  const fetchAllLoans = async (token) => {
    setLoading(true);
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/loan/all", {
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
        fetchAllLoans(token);
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
      
      if (response.ok) {
        setEditingLoan(null);
        setNewStatus("");
        setTimeout(() => fetchAllLoans(token), 100);
      } else {
        const data = await response.json();
        alert(data.message || "Failed to update loan");
      }
    } catch (err) {
      alert("Error updating loan");
    }
  };

  const filteredLoans = loans.filter(loan => 
    loan.userId?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loan.userId?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loan.amount?.toString().includes(searchTerm) ||
    loan.status?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-blue-950 text-gray-100 flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold text-yellow-400">FlashLoan</div>
        <nav className="flex-1 px-4 space-y-2 mt-6">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded bg-blue-800">
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

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
          <h1 className="text-2xl font-bold text-blue-950">All Loans</h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-950">A</div>
            <span className="text-gray-700 font-medium">Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-blue-950">Loan Management</h2>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search loans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {loading ? (
              <p className="text-center text-gray-500 py-8">Loading loans...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-gray-500 uppercase text-xs border-b-2 border-gray-200">
                    <tr>
                      <th className="py-3 px-2">Customer</th>
                      <th className="py-3 px-2">Amount</th>
                      <th className="py-3 px-2">Term</th>
                      <th className="py-3 px-2">Purpose</th>
                      <th className="py-3 px-2">Status</th>
                      <th className="py-3 px-2">Date</th>
                      <th className="py-3 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLoans.length === 0 ? (
                      <tr><td colSpan="7" className="py-8 text-center text-gray-500">No loans found</td></tr>
                    ) : (
                      filteredLoans.map((loan) => (
                        <tr key={loan._id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                          <td className="py-3 px-2">{loan.userId?.name || loan.userId?.email || "N/A"}</td>
                          <td className="py-3 px-2 font-semibold">${parseFloat(loan.amount || 0).toLocaleString()}</td>
                          <td className="py-3 px-2">{loan.term} months</td>
                          <td className="py-3 px-2 max-w-xs truncate">{loan.purpose || "N/A"}</td>
                          <td className="py-3 px-2">
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
                          <td className="py-3 px-2">{loan.createdAt ? new Date(loan.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td className="py-3 px-2">
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
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AllLoans;
