import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        inputs
      );

      // const response = await fetch("http://localhost:8000/api/auth/register", {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(inputs),
      // });

      // const result = await response.json();
      // //  navigate("/login");
      // console.log("Success:", result);
      // setError(result);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);

      // console.log("e", error);
    }
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
        {error && <p> {error}</p>}
        <span>
          Do you have an account?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
