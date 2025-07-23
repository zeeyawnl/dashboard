import React from "react";

const CompanyList = ({ companies, onSelect }) => {
  return (
    <div className="space-y-3">
      {companies.map((company) => (
        <div
          key={company.id}
          onClick={() => onSelect(company)}
          className="p-4 bg-white rounded-md border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">{company.name || "Business_Name"}</h3>
              <p className="text-xs text-gray-500">{company.businessStructure || "Limited Liability Company"}</p>
            </div>
            <div className="flex items-center gap-2">
              {company.domicile && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {company.domicile}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
