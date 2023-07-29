import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import { Address } from "./Address";
import { OtherInfo } from "./OtherInfo";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    firstCompany: "",
    other: "",
  });
  const formSteps = ["Basic Info", "Address", "Other Info"];

  const handleFormDataChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      // Perform validation for the first step (Basic Info)
      case 0:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.age.trim() !== ""
        );

      case 1:
        // Perform validation for the second step (Address)
        return (
          formData.email.trim() !== "" &&
          formData.password.trim() !== "" &&
          formData.confirmPassword === formData.password &&
          formData.address.trim() !== ""
        );

      case 2:
        // Perform validation for the third step (Other Info)
        return (
          formData.other.trim() !== "" && formData.firstCompany.trim() !== ""
        );

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (page === formSteps.length - 1) {
      alert("Data Saved!!");
      console.log(formData);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        firstCompany: "",
        other: "",
      });
      setPage(0);
    } else {
      if (validateStep(page)) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicInfo
            formData={formData}
            onChange={handleFormDataChange}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <Address
            formData={formData}
            onChange={handleFormDataChange}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <OtherInfo
            formData={formData}
            onChange={handleFormDataChange}
            setFormData={setFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">{formSteps[page]}</div>
        <div className="body">{renderStep(page)}</div>
        <div className="footer">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            style={{
              backgroundColor: page === 0 && "grey",
            }}
          >
            Prev
          </button>
          <h5>{`Step ${page + 1} of ${formSteps.length}`}</h5>
          <button
            onClick={handleNext}
            disabled={!validateStep(page)}
            style={{
              backgroundColor:
                validateStep(page) && page !== formSteps.length - 1
                  ? "rgb(0, 166, 255)"
                  : validateStep(page) && page === formSteps.length - 1
                  ? "#6BD640"
                  : "grey",
            }}
          >
            {page === formSteps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
