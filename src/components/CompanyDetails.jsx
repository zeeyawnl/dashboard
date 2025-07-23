import React, { useState } from "react";
import { PencilLine, Save, X } from "lucide-react";

const CompanyDetails = ({ company }) => {
  const [activeTab, setActiveTab] = useState("Details");
  const [isEditing, setIsEditing] = useState(false);
  const [editableCompany, setEditableCompany] = useState(company);

  const handleInputChange = (field, value) => {
    setEditableCompany((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optional: send update to backend
    console.log("Saved data:", editableCompany);
  };

  const handleCancel = () => {
    setEditableCompany(company);
    setIsEditing(false);
  };

  const tabs = [
    "Details",
    "Locations",
    "Key Personnel",
    "Records",
    "Orders",
    "Services",
    "Subscriptions",
    "Contacts",
  ];

  const renderTabContent = () => {
    if (activeTab === "Details") {
      return (
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500">Legal Name</p>
            {isEditing ? (
              <input
                value={editableCompany.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="border px-2 py-1 rounded w-full text-sm"
              />
            ) : (
              <p className="text-gray-900 font-medium">{editableCompany.name || "—"}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Structure</p>
            {isEditing ? (
              <input
                value={editableCompany.businessStructure || ""}
                onChange={(e) =>
                  handleInputChange("businessStructure", e.target.value)
                }
                className="border px-2 py-1 rounded w-full text-sm"
              />
            ) : (
              <p className="text-gray-900 font-medium">
                {editableCompany.businessStructure || "—"}
              </p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            {isEditing ? (
              <input
                value={editableCompany.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border px-2 py-1 rounded w-full text-sm"
              />
            ) : (
              <p className="text-gray-900 font-medium">{editableCompany.email}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            {isEditing ? (
              <input
                value={editableCompany.contacts?.[0]?.phone || ""}
                onChange={(e) => {
                  const updatedContacts = [...(editableCompany.contacts || [])];
                  updatedContacts[0] = {
                    ...updatedContacts[0],
                    phone: e.target.value,
                  };
                  handleInputChange("contacts", updatedContacts);
                }}
                className="border px-2 py-1 rounded w-full text-sm"
              />
            ) : (
              <p className="text-gray-900 font-medium">
                {editableCompany.contacts?.[0]?.phone || "—"}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <p className="text-gray-500">Business Purpose</p>
            {isEditing ? (
              <textarea
                value={editableCompany.details || ""}
                onChange={(e) => handleInputChange("details", e.target.value)}
                className="border px-2 py-1 rounded w-full text-sm"
              />
            ) : (
              <p className="text-gray-900 font-medium">
                {editableCompany.details || "—"}
              </p>
            )}
          </div>
        </div>
      );
    }

    // Placeholder for non-editable tabs
    return (
      <p className="text-sm text-gray-500 italic">
        This tab is read-only.
      </p>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">{editableCompany.name}</h2>
            {editableCompany.domicile && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                {editableCompany.domicile}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">
            {editableCompany.businessStructure || "Business Structure"} | Member Managed –{" "}
            <a href="#" className="text-blue-600 underline">
              {editableCompany.contacts?.[0]?.name || "Contact Person"}
            </a>
          </p>
        </div>

        {/* Edit / Save / Cancel */}
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <PencilLine className="w-4 h-4" />
            Edit
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 text-sm text-green-600 hover:underline"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 text-sm text-red-600 hover:underline"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b mb-4">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 font-medium text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default CompanyDetails;
