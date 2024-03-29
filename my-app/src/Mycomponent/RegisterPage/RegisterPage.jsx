import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../LoginPage/LoginPage";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container myTextWhite">
      <h2 className="myTextWhite">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />{" "}
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="text-dark w-50 fw-bold">
            Registrati
          </button>
        </div>
      </form>
      <button className="link-btn">Already have an account? Login here.</button>
    </div>
  );
};

export default RegisterPage;
