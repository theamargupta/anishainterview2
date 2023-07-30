import React, { useState } from "react";

const NewForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    age: 1,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [nameErr, setNameErr] = useState("");
  const [ageErr, setAgeErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

//   const handleFormChange = (e) => {
//     e.preventDefault();
//     let inputName = e.target.name;
//     console.log("e", e, inputName, e.target.value);
//     setFormValue({ ...formValue, [inputName]: e.target.value });
//   };

//   const inputValueLength = (inputValue) => inputValue?.length > 3;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const inputValidation = (key, value) => {
    if (key === "name") {
      if (value?.length < 3) {
        setNameErr("The name should contain at least 3 characters!");
      } else {
        setNameErr("");
      }
    }
    if (key === "age") {
      if (isNaN(value) || value <= 0) {
        setAgeErr("Age cannot be less than 1 year!");
      } else if (value >= 121) {
        setAgeErr("Age cannot be greater than 120 years!");
      } else {
        setAgeErr("");
      }
    }
    if (key === "email") {
      console.log(" isValidEmail(value)", isValidEmail(value));
      if (isValidEmail(value)) {
        setEmailErr("The email should contain at least 3 characters!");
      } else {
        setEmailErr("");
      }
    }
    if (key === "password") {
      if (value?.length < 3) {
        setPasswordErr("The password should contain at least 3 characters!");
      } else {
        setPasswordErr("");
      }
    }
    if (key === "confirmPassword") {
      if (value?.length < 3) {
        setConfirmPasswordErr(
          "The confirm password should contain at least 3 characters!"
        );
      } else if (value !== formValue.password) {
        setConfirmPasswordErr("The Passwords do not match!");
      } else {
        setConfirmPasswordErr("");
      }
    }
  };

  // const inputValidation = (key, value ) => {
  //   console.log("key, value", key, value);
  //   switch (key) {
  //     case "name":
  //       if (value?.length < 3) {
  //         setShowErr({
  //           name: "The name should contain atleast 3 characters!",
  //         });
  //       } else {
  //         setShowErr({ name: "" });
  //       }
  //       break;
  //     case "age":
  //       if (isNaN(value) && value <= 0) {
  //         setShowErr("Age can not be less than 1 year!");
  //       } else if (isNaN(value) && value >= 121) {
  //         setShowErr("Age can not be greater than 120 years!");
  //       } else {
  //         setShowErr("");
  //       }
  //       break;
  //     case "email":
  //       if (value?.length < 3) {
  //         setShowErr({
  //           email: "The name should contain atleast 3 characters!",
  //         });
  //       } else {
  //         setShowErr({ email: "" });
  //       }
  //       break;
  //     case "password":
  //       if (value?.length < 3) {
  //         setShowErr({
  //           password: "The name should contain atleast 3 characters!",
  //         });
  //       } else {
  //         setShowErr({ password: "" });
  //       }
  //       break;
  //     case "confirmPassword":
  //       if (value?.length < 3) {
  //         setShowErr({
  //           confirmPassword: "The name should contain atleast 3 characters!",
  //         });
  //       } else {
  //         setShowErr({ confirmPassword: "" });
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };
  //   const inputValidation = (key, value) => {
  //     console.log("key,value", key, value);
  //     const validationRules = {
  //       [key]: {
  //         message: "The name should contain at least 3 characters!",
  //         isValid: inputValueLength,
  //       },
  //       age: {
  //         message: "Age should be a number between 1 and 120!",
  //         isValid: !isNaN(value) && value > 0 && value < 121,
  //       },
  //       email: {
  //         message: "Invalid email address!",
  //         isValid: isValidEmail(value),
  //       },
  //       password: {
  //         message: "The password should contain at least 3 characters!",
  //         isValid: inputValueLength,
  //       },
  //       confirmPassword: {
  //         message: "Passwords do not match!",
  //         isValid: value === formValue?.password,
  //       },
  //     };

  //     // setShowErr((prevErrors) => ({
  //     //   ...prevErrors,
  //     //   [key]: validationRules[key].isValid ? "" : validationRules[key].message,
  //     // }));
  //     console.log('key,value,isValid', key,value,validationRules[key].isValid)
  //     setShowErr({
  //       [key]:[key].message,
  //     });
  //     console.log("showErr", showErr);
  //   };
  //   console.log("showErr", showErr);

  const submit = () => {
    console.log("data", formValue);
    for (const key in formValue) {
      if (!formValue[key]) {
        return alert("Input fields can't be empty!"); 
      }
    }
    return alert("Data is saved successfully!!");
  };

  return (
    <div>
      <h2>Form</h2>
      <div style={formContainerStyle}>
        <form style={formStyle}>
          <label for="name">Name</label>
          <input
            placeholder="Your Name"
            value={formValue.name}
            // onChange={(e) => handleFormChange(e)}
            onChange={(e) => {
              setFormValue({ ...formValue, name: e.target.value });
              inputValidation("name", e.target.value);
            }}
            style={inputStyle}
            type="text"
          />
          <p style={errorStyle}> {nameErr}</p>
          <label for="age">Age</label>
          <input
            placeholder="Your Age"
            value={formValue.age}
            onChange={(e) => {
              setFormValue({ ...formValue, age: e.target.value });
              inputValidation("age", e.target.value);
            }}
            style={inputStyle}
            type="number"
          />
          <p style={errorStyle}> {ageErr}</p>
          <label for="email">Email</label>
          <input
            placeholder="Your Email"
            value={formValue.email}
            onChange={(e) => {
              setFormValue({ ...formValue, email: e.target.value });
              inputValidation("email", e.target.value);
            }}
            style={inputStyle}
            type="email"
          />
          <p style={errorStyle}> {emailErr}</p>
          <label for="password">Password</label>
          <input
            placeholder="Your Password"
            value={formValue.password}
            onChange={(e) => {
              setFormValue({ ...formValue, password: e.target.value });
              inputValidation("password", e.target.value);
            }}
            style={inputStyle}
            type="text"
          />
          <p style={errorStyle}> {passwordErr}</p>
          <label for="confirmPassword">Confirm Password</label>
          <input
            placeholder="Your Confirm Password"
            value={formValue.confirmPassword}
            onChange={(e) => {
              setFormValue({ ...formValue, confirmPassword: e.target.value });
              inputValidation("confirmPassword", e.target.value);
            }}
            style={inputStyle}
            type="text"
          />
          <p style={errorStyle}>{confirmPasswordErr}</p>
          <button style={buttonStyle} type="button" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewForm;

const formContainerStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "2rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "30vw",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
};

const inputStyle = {
  padding: "0.5rem",
  margin: "0.7rem 0rem",
};

const buttonStyle = {
  height: "2rem",
  color: "#fff",
  backgroundColor: "rgb(0, 166, 255)",
  border: "2px solid rgb(0, 166, 255",
  borderRadius: "0.2rem",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  fontSize: "12px",
};
