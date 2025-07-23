import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CompanyList from "../components/CompanyList";
import CompanyDetails from "../components/CompanyDetails";
import { getCompanies } from "../api/api";

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomicile, setSelectedDomicile] = useState("");
  const [selectedStructure, setSelectedStructure] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 6;

  useEffect(() => {
    getCompanies().then((res) => {
      setCompanies(res.data);
      setSelectedCompany(res.data[0]); // auto-select first
    });
  }, []);

  const handleApplyFilters = () => {
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedDomicile("");
    setSelectedStructure("");
    setCurrentPage(1);
  };

  const filteredCompanies = companies.filter((company) => {
    const nameMatch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const domicileMatch = selectedDomicile ? company.domicile === selectedDomicile : true;
    const structureMatch = selectedStructure ? company.businessStructure === selectedStructure : true;
    return nameMatch && domicileMatch && structureMatch;
  });

  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);
  const startIdx = (currentPage - 1) * companiesPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIdx, startIdx + companiesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 px-6 py-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
  <h1 className="text-2xl font-semibold text-gray-800">Companies</h1>

  {/* Add New Company Button */}
  <button
    onClick={() => alert("Add new company functionality coming soon...")}
    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v16m8-8H4"
      />
    </svg>
    Add new company
  </button>
</div>

{/* 🔍 Filter Controls - Full Width */}
<div className="flex flex-wrap gap-3 items-center mb-4">
  <input
    type="text"
    placeholder="Company Name"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="px-3 py-1 border rounded w-[417px] text-sm"
  />
  <select
    value={selectedDomicile}
    onChange={(e) => setSelectedDomicile(e.target.value)}
    className="px-3 py-1 border rounded w-[180px] text-sm text-gray-500"
  >
    <option value="">Filter by Domicile</option>
    <option value="India">India</option>
    <option value="USA">USA</option>
  </select>
  <select
    value={selectedStructure}
    onChange={(e) => setSelectedStructure(e.target.value)}
    className="px-3 py-1 border rounded w-[180px] text-sm text-gray-500"
  >
    <option value="">Filter by Business Structure</option>
    <option value="Private">Private</option>
    <option value="Public">Public</option>
  </select>
  <button
    onClick={handleApplyFilters}
    className="px-4 py-1 bg-blue-600 text-white rounded text-sm"
  >
    Filter
  </button>
  <button
    onClick={handleClearFilters}
    className="px-4 py-1 border rounded text-sm text-gray-500 hover:bg-t-blue-400"
  >
    Clear Filter
  </button>
</div>

        {/* Layout */}
        <div className="flex gap-6 h-[85vh]">
          {/* Company List Section */}
          <div className="w-1/3 bg-white border border-gray-200 rounded-md shadow-sm p-3 overflow-y-auto">
         <CompanyList companies={paginatedCompanies} onSelect={setSelectedCompany} />
            
          {/* Pagination */}
            <div className="flex justify-between items-center text-sm mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-2 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>Page {currentPage} / {totalPages}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-2 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          {/* Company Details Section */}
          <div className="flex-1 bg-white border border-gray-200 rounded-md shadow-sm p-4 overflow-y-auto">
            {selectedCompany ? (
              <CompanyDetails company={selectedCompany} />
            ) : (
              <p className="text-gray-600">Select a company to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
