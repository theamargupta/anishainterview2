import React from "react";

export const OtherInfo = ({ formData, setFormData, showError }) => {
  return (
    <div className="other-info-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ margin: "1rem 0 0 0.4rem" }} for="firstCompany">
          First Company
        </label>
        <input
          type="text"
          placeholder="Your First Company"
          value={formData.firstCompany}
          onChange={(e) => {
            setFormData({ ...formData, firstCompany: e.target.value });
          }}
        />
        {/* {showError} */}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ margin: "1rem 0 0 0.4rem" }} for="other">
          Other Information
        </label>
        <input
          type="text"
          placeholder="Other..."
          value={formData.other}
          onChange={(e) => {
            setFormData({ ...formData, other: e.target.value });
          }}
        />
        {/* {showError} */}
      </div>
    </div>
  );
};
