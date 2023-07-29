import React, { useState } from "react";

export const Address = ({ formData, setFormData }) => {
  const [showErr, setShowErr] = useState({
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const throwErr = (value, key) => {
    console.log(value, key);
    switch (key) {
      case "password":
        if (value.length < 6 || value.length > 12) {
          setShowErr({
            password:
              "The password should be minimum 6 and maximum 12 characters long!",
          });
        } else if (
          key === "confirmPassword" &&
          value !== formData?.confirmPassword
        ) {
          setShowErr({
            confirmPassword:
              "The confirm password doesn't match with the password!",
          });
        } else {
          setShowErr({
            password: "",
          });
        }
        break;
      case "confirmPassword":
        if (value !== formData?.password) {
          setShowErr({
            confirmPassword:
              "The confirm password doesn't match with the password!",
          });
        } else {
          setShowErr({
            confirmPassword: "",
          });
        }
        break;
      case "email":
        if (!value.includes("@")) {
          setShowErr({ email: "Please input a valid email Id!" });
        } else {
          setShowErr({
            email: "",
          });
        }
        break;
      case "address":
        if (value.length < 5) {
          setShowErr({
            address: "Address should not be less than 4 characters!",
          });
        } else {
          setShowErr({
            address: "",
          });
        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="personal-info-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "1rem 0 0 0.4rem" }} for="address">
            Address
          </label>
          <input
            type="text"
            placeholder="Your Address"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
              throwErr(e.target.value, "address");
            }}
          />
          {showErr.address}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "1rem 0 0 0.4rem" }} for="password">
            Password
          </label>
          <input
            type="text"
            placeholder="Your Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              throwErr(e.target.value, "password");
            }}
          />
          {showErr.password}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "1rem 0 0 0.4rem" }} for="confirmPassword">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Your Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
              throwErr(e.target.value, "confirmPassword");
            }}
          />
          {showErr.confirmPassword}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "1rem 0 0 0.4rem" }} for="email">
            Email
          </label>
          <input
            type="text"
            placeholder="Your Email Id"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              throwErr(e.target.value, "email");
            }}
          />
          {showErr.email}
        </div>
      </div>
    </>
  );
};
