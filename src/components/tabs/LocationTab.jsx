const LocationTab = ({ company }) => {
  return (
    <div className="text-sm">
      <h2 className="font-semibold mb-2">Location Info</h2>
      <p><strong>City:</strong> {company.city || "N/A"}</p>
      <p><strong>State:</strong> {company.state || "N/A"}</p>
      <p><strong>Country:</strong> {company.country || "N/A"}</p>
    </div>
  );
};

export default LocationTab;
