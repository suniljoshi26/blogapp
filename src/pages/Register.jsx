import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }

    // console.log("e", ee);
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />

        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p> This is an error</p>
        <span>
          Do you have an account?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
