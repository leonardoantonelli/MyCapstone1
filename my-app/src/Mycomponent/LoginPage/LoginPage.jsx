import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.scss";
import imghp from "../../assets/shoe.png";

import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import RegisterPage from "../RegisterPage/RegisterPage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  const navigate = useNavigate;

  return (
    <div className="auth-form-container d-flex flex-column myTextWhite">
      <h2 className=" myTextWhite">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="d-flex flex-column ">
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />{" "}
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="w-50 text-dark fw-bold ">
            Log In
          </button>{" "}
        </div>
      </form>
      <Link
        onClick={() => {
          navigate("/register");
        }}
        className="link-btn text-decoration-none"
      >
        <h5 className="text-decoration-none myTextWhite ">
          {" "}
          Already have an account? Login here.{" "}
        </h5>
      </Link>
    </div>
  );
};

export default Login;
