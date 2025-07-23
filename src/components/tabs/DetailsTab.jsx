import React, { useState, useEffect } from "react";
import { updateCompany } from "../../api/api";


const DetailsTab = ({ company }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(company);

  // Reset form data if company changes
  useEffect(() => {
    setFormData(company);
    setIsEditing(false);
  }, [company]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateCompany(company.id, formData);
      alert("✅ Company updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      alert("❌ Failed to update company.");
    }
  };

 const DetailsTab = ({ company }) => {
  return (
    <div className="text-sm">
      <h2 className="font-semibold mb-2">Company Info</h2>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Structure:</strong> {company.structure}</p>
      <p><strong>Domicile:</strong> {company.domicile}</p>
    </div>
  );
};

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Company Details</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 hover:underline"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {/* Detail Fields */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Legal Name" name="name" value={formData.name} onChange={handleChange} isEditing={isEditing} />
        <Field label="Structure" name="structure" value={formData.structure} onChange={handleChange} isEditing={isEditing} />
        <Field label="State" name="state" value={formData.state} onChange={handleChange} isEditing={isEditing} />
        <Field label="City" name="domicileCity" value={formData.domicileCity} onChange={handleChange} isEditing={isEditing} />
        <Field label="County" name="domicileCounty" value={formData.domicileCounty} onChange={handleChange} isEditing={isEditing} />
        <Field label="Email" name="email" value={formData.email} onChange={handleChange} isEditing={isEditing} />
        <Field label="Phone" name="phone" value={formData.phone} onChange={handleChange} isEditing={isEditing} />
        <Field label="Business Purpose" name="businessPurpose" value={formData.businessPurpose} onChange={handleChange} isEditing={isEditing} />
      </div>

      {/* Save Button */}
      {isEditing && (
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

// Reusable Field Component
const Field = ({ label, name, value, onChange, isEditing }) => (
  <div>
    <label className="block text-sm text-gray-600 mb-1">{label}</label>
    {isEditing ? (
      <input
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full border rounded px-3 py-2 text-sm"
      />
    ) : (
      <p className="text-gray-800">{value || "—"}</p>
    )}
  </div>
);

export default DetailsTab;
