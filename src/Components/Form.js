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

  const showPage = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
    // switch (page) {
    //   case 0:
    //     return <BasicInfo formData={formData} setFormData={setFormData} />;
    //   case 1:
    //     return <Address formData={formData} setFormData={setFormData} />;
    //   case 2:
    //     return <OtherInfo formData={formData} setFormData={setFormData} />;
    //   default:
    //     return <BasicInfo formData={formData} setFormData={setFormData} />;
    //   // Handle cases when `page` does not match any of the defined cases
    // }
  };

  const dataSubmit = () => {
    if (page === formSteps.length - 1) {
      alert("Data Saved!!");
      console.log(formData);
    } else {
      setPage((previousPage) => previousPage + 1);
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">{formSteps[page]}</div>
        <div className="body">{showPage()}</div>
        <div className="footer">
          <button
            onClick={() => {
              setPage((previousPage) => previousPage - 1);
            }}
            disabled={page === 0}
            style={{ backgroundColor: page === 0 && "grey" }}
          >
            Prev
          </button>
          <h5>{`Step ${page} of ${formSteps.length}`}</h5>
          <button
            onClick={() => {
              dataSubmit();
            }}
            style={{
              backgroundColor: page === formSteps.length - 1 && "green",
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
