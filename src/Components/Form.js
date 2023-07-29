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

const formFields = [
  {
    form: [
      {
        title: "First Name",
        field: "firstName",
        type: "text",
        value: "anisha",
        isValid: false,
        error: "",
        validationArr: [
          {
            validate: (value) => value.length > 0,
            error: "First name id required",
          },
          {
            validate: (value) => value.length > 3,
            error: "First name must be more than 3 chracter",
          },
        ],
        placeholder: "Your First Name",
      },
      {
        title: "Last Name",
        field: "lastName",
        type: "text",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Last Name",
      },
      {
        title: "Age",
        field: "age",
        type: "number",
        placeholder: "Your Age",
        value: 0,
      },
    ],
    title: "Basic Info",
  },
  {
    form: [
      {
        title: "Address",
        field: "address",
        type: "text",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Address",
      },
      {
        title: "Password",
        field: "password",
        type: "password",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Password",
      },
      {
        title: "Confirm Password",
        field: "confirmPassword",
        type: "text",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Confirm Password",
      },
      {
        title: "Email",
        field: "email",
        type: "email",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Email",
      },
    ],
    title: "Address",
  },
  {
    form: [
      {
        title: "Address",
        field: "address",
        type: "text",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Address",
      },
      {
        title: "Password",
        field: "password",
        type: "password",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Password",
      },
      {
        title: "Confirm Password",
        field: "confirmPassword",
        type: "text",
        value: "",
        isValid: false,
        check: "",
        placeholder: "Your Confirm Password",
      },
      {
        title: "Email",
        field: "email",
        type: "email",
        value: "",
        isValid: false,
        check: "",
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
