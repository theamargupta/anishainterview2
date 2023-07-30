import React, { useState } from "react";

const Form = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [formV2Data, setFormV2Data] = useState(formFields);

  const handlePageChange = (index) => {
    if (index < 0) return;
    if (index >= formV2Data.length) return;
    if (formV2Data[selectedPage].form.some((field) => !field.isValid)) return;

    setSelectedPage(index);
  };

  const validateField = ({ value, validationArr }) => {
    if (validationArr?.length) {
      const failedCheck = validationArr.filter(
        (innerCondition) => !innerCondition.validate(value)
      );
      if (failedCheck?.length) {
        return { isValid: false, error: failedCheck[0].error };
      } else {
        return { isValid: true, error: "" };
      }
    } else {
      return { isValid: true, error: "" };
    }
  };

  const handleFormChange = ({ field, value, title, validationArr }) => {
    const isValid = validateField({ field, value, validationArr });
    console.log("isValid", isValid);
    setFormV2Data((innerForm) =>
      innerForm.map((inner2) =>
        inner2.title === title
          ? {
              ...inner2,
              form: inner2.form.map((inner3) =>
                inner3.field === field
                  ? { ...inner3, value: value, ...isValid }
                  : { ...inner3 }
              ),
            }
          : { ...inner2 }
      )
    );
  };

  return (
    <div style={formStyle}>
      <div style={formContainerStyle}>
        {formV2Data.map((formObj, index) => (
          <>
            {index === selectedPage && (
              <>
                <h3>{formObj?.title}</h3>
                <div style={{ ...flexCenterCenter, flexDirection: "column" }}>
                  {formObj?.form?.map((innerForm) => (
                    <div style={inputContainerStyle}>
                      <label>{innerForm.title}</label>
                      <input
                        value={innerForm.value}
                        placeholder={innerForm.placeholder}
                        type={innerForm.type}
                        style={innerForm.isValid ? inputStyle : inputErrorStyle}
                        onChange={(e) =>
                          handleFormChange({
                            field: innerForm.field,
                            value: e.target.value,
                            title: formObj?.title,
                            validationArr: innerForm.validationArr,
                          })
                        }
                      />
                      <div style={errorStyle}>{innerForm?.error}</div>
                    </div>
                  ))}
                  <div style={buttonContainerStyle}>
                    <button
                      style={buttonStyle}
                      onClick={() => handlePageChange(index - 1)}
                      disabled={index === 0}
                    >
                      Prev
                    </button>
                    <button
                      style={buttonStyle}
                      onClick={() => handlePageChange(index + 1)}
                      disabled={formV2Data[selectedPage].form.some(
                        (field) => !field.isValid
                      )}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Form;
// Validation functions
const validateLength = (value) => value.length > 0;

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const formFields = [
  {
    form: [
      // First Name field (already has validation)
      {
        title: "First Name",
        field: "firstName",
        type: "text",
        value: "anisha",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateLength,
            error: "First name is required",
          },
          {
            validate: (value) => value.length > 3,
            error: "First name must be more than 3 characters",
          },
        ],
        placeholder: "Your First Name",
      },
      // Last Name field
      {
        title: "Last Name",
        field: "lastName",
        type: "text",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateLength,
            error: "Last name is required",
          },
        ],
        placeholder: "Your Last Name",
      },
      // Age field
      {
        title: "Age",
        field: "age",
        type: "number",
        placeholder: "Your Age",
        value: 0,
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateLength,
            error: "Age should be a positive number",
          },
        ],
      },
    ],
    title: "Basic Info",
  },
  {
    form: [
      // Address field
      {
        title: "Address",
        field: "address",
        type: "text",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateLength,
            error: "Address is required",
          },
        ],
        placeholder: "Your Address",
      },
      // Password field
      {
        title: "Password",
        field: "password",
        type: "password",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: (value) => value.length >= 6,
            error: "Password must have at least 6 characters",
          },
        ],
        placeholder: "Your Password",
      },
      // Confirm Password field
      {
        title: "Confirm Password",
        field: "confirmPassword",
        type: "text",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: (value) => value === formFields[1].form[1].value, // Check if it matches the Password field value
            error: "Passwords do not match",
          },
        ],
        placeholder: "Your Confirm Password",
      },
      // Email field
      {
        title: "Email",
        field: "email",
        type: "email",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateEmail,
            error: "Invalid email address",
          },
        ],
        placeholder: "Your Email",
      },
    ],
    title: "Address",
  },
  {
    form: [
      // Address field
      {
        title: "Address",
        field: "address",
        type: "text",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateLength,
            error: "Address is required",
          },
        ],
        placeholder: "Your Address",
      },
      // Password field
      {
        title: "Password",
        field: "password",
        type: "password",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: (value) => value.length >= 6,
            error: "Password must have at least 6 characters",
          },
        ],
        placeholder: "Your Password",
      },
      // Confirm Password field
      {
        title: "Confirm Password",
        field: "confirmPassword",
        type: "text",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: (value) => value === formFields[1].form[1].value, // Check if it matches the Password field value
            error: "Passwords do not match",
          },
        ],
        placeholder: "Your Confirm Password",
      },
      // Email field
      {
        title: "Email",
        field: "email",
        type: "email",
        value: "",
        isValid: true,
        error: "",
        validationArr: [
          {
            validate: validateEmail,
            error: "Invalid email address",
          },
        ],
        placeholder: "Your Email",
      },
    ],
    title: "Anything 3",
  },
];
const formStyle = {
  margin: "0 auto",
  width: "50%",
};

const formContainerStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const inputContainerStyle = {
  marginBottom: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const inputErrorStyle = {
  ...inputStyle,
  borderColor: "red",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "10px",
};

const flexCenterCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const errorStyle = {
  color: "red",
  fontSize: "12px",
};
