import React from "react";

export const Address = ({ formData, setFormData }) => {
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
            }}
          />
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
            }}
          />
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
            }}
          />
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
            }}
          />
        </div>
      </div>
    </>
  );
};
