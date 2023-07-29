import React, { useState } from "react";

export const OtherInfo = ({ formData, setFormData }) => {
  const [showErr, setShowErr] = useState({ other: "", firstCompany: "" });

  const throwErr = (value, key) => {
    switch (key) {
      case "firstCompany":
        if (value.length < 4) {
          setShowErr({ firstCompany: "Please input a valid name!" });
        } else {
          setShowErr({ firstCompany: "" });
        }
        break;
      case "other":
        if (value.length < 4) {
          setShowErr({ other: "Please input atleast 4 characters!" });
        } else {
          setShowErr({ other: "" });
        }
        break;
      default:
        break;
    }
  };

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
            throwErr(e.target.value, "firstCompany");
          }}
        />
        {showErr.firstCompany}
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
            throwErr(e.target.value, "other");
          }}
        />
        {showErr.other}
      </div>
    </div>
  );
};
