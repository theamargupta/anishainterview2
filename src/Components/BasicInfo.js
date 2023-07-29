import React, { useState } from "react";

function BasicInfo({ formData, setFormData }) {
  const [showErr, setShowErr] = useState("");

  const throwErr = (age) => {
    if (age <= 0) {
      setShowErr("Age can not be less than 1 year!");
    } else if (age >= 121) {
      setShowErr("Age can not be greater than 120 years!");
    } else {
      setShowErr("");
    }
  };

  return (
    <div className="personal-info-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ margin: "1rem 0 0 0.4rem" }} for="firstName">
          First Name
        </label>
        <input
          type="text"
          placeholder="Your First Name"
          required
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ margin: "1rem 0 0 0.4rem" }} for="lastName">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Your Last Name"
          required
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ margin: "1rem 0 0 0.4rem" }} for="age">
          Age
        </label>
        <input
          type="number"
          placeholder="Your Age"
          required
          value={formData.age}
          onChange={(e) => {
            setFormData({ ...formData, age: e.target.value });
            throwErr(e.target.value);
          }}
        />
        {showErr}
      </div>
    </div>
  );
}

export default BasicInfo;
