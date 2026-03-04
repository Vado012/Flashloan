import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiFileText, FiPieChart, FiSettings, FiBell, FiLogOut, FiSearch, FiMenu, FiX, FiMail, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCustomers(token);
  }, []);

  const fetchCustomers = async (token) => {
    setLoading(true);
    try {
      const response = await fetch("https://loanbackend-tafg.onrender.com/api/user", {
        headers: { Authorization: `Bearer ${token}` },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.users || data);
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

  const filteredCustomers = customers.filter(customer => 
    customer.Firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.Lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.Email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.Phonenumber?.includes(searchTerm)
  );

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
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiHome /> Dashboard
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/all-loans"); }} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-800 transition">
            <FiFileText /> Loans
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded bg-blue-800">
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

      <div className="flex-1 flex flex-col w-full">
        <header className="flex justify-between items-center bg-white px-4 lg:px-6 py-4 shadow">
          <h1 className="text-xl lg:text-2xl font-bold text-blue-950 ml-12 lg:ml-0">Customers</h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-950">A</div>
            <span className="text-gray-700 font-medium hidden sm:block">Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="bg-white rounded-xl shadow p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-lg lg:text-xl font-bold text-blue-950">All Customers</h2>
              <div className="relative w-full sm:w-auto">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {loading ? (
              <p className="text-center text-gray-500 py-8">Loading customers...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredCustomers.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 py-8">No customers found</p>
                ) : (
                  filteredCustomers.map((customer) => (
                    <div key={customer._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-xl font-bold text-blue-600">
                            {customer.Firstname?.[0]?.toUpperCase() || customer.Email?.[0]?.toUpperCase() || "U"}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">
                            {customer.Firstname} {customer.Lastname}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Joined {customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiMail size={14} />
                          <span className="truncate">{customer.Email}</span>
                        </div>
                        {customer.Phonenumber && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiPhone size={14} />
                            <span>{customer.Phonenumber}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Customer ID:</span>
                          <span className="font-mono text-gray-700">{customer._id?.slice(-8)}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customers;
