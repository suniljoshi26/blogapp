import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
        "http://localhost:8000/api/auth/login",
        inputs
      );
      navigate("/");
    } catch (err) {
      setError(err.response.data);

      // console.log("e", error);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error} </p>}
        <span>
          Don't you have an account?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
