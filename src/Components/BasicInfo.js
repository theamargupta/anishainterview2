import React, { useState } from "react";

function BasicInfo({ formData, setFormData }) {
  const [showErr, setShowErr] = useState({
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const throwErr = (value, key) => {
    switch (key) {
      case "firstName":
        if (value?.length < 3) {
          setShowErr({
            firstName: "The name should contain atleast 3 characters!",
          });
        } else {
          setShowErr({ firstName: "" });
        }
        break;
      case "lastName":
        if (value?.length < 3) {
          setShowErr({
            lastName: "The name should contain atleast 3 characters!",
          });
        } else {
          setShowErr({ lastName: "" });
        }
        break;
      case "age":
        if (isNaN(value) && value <= 0) {
          setShowErr("Age can not be less than 1 year!");
        } else if (isNaN(value) && value >= 121) {
          setShowErr("Age can not be greater than 120 years!");
        } else {
          setShowErr("");
        }
        break;
      default:
        break;
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
            throwErr(e.target.value, "firstName");
          }}
        />
        {showErr.firstName}
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
            throwErr(e.target.value, "lastName");
          }}
        />
        {showErr.lastName}
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
        {showErr.age}
      </div>
    </div>
  );
}

export default BasicInfo;
