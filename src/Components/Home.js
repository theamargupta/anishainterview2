import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <div
        style={{ cursor: "pointer" }}
        role="button"
        onClick={() => navigate("form")}
      >
        Form
      </div>
    </div>
  );
};

export default Home;
