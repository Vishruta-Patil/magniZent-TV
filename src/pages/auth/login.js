import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/authContext"
import { login } from "../../utils/apiHandler/authHandler";
import "./auth.css"

export const LogIn = () => {
  const [credentails, setCredentials] = useState({});
  const { state, dispatch } = useAuth();

  let navigate = useNavigate();

  const loginHandler = async () => {
    await login(credentails.email, credentails.password, dispatch, navigate);
  };

  const guestCredentailsHandler = async () => {
    await login("adarshbalika@gmail.com", "adarshBalika123", dispatch, navigate);
  };

  return (
    <div className="login-container flex-column">
      <h2 className="main-header">LOGIN</h2>
      <input
        type="email"
        className="input-box"
        placeholder="Enter your email"
        onChange={(e) => {
          setCredentials({ ...credentails, email: e.target.value });
        }}
      />
      <input
        type="password"
        className="input-box"
        placeholder="Enter your password"
        onChange={(e) => {
          setCredentials({ ...credentails, password: e.target.value });
        }}
      />
      <div className="terms-container flex">
        <input id="terms-input" type="checkbox" />{" "}
        <label htmlFor="terms-input">I accept all the terms and conditions</label>
      </div>

      <button className="hero-btn" onClick={loginHandler}>
        Login
      </button>
      <button className="outline-btn" onClick={guestCredentailsHandler}>
        Login With Guest Credentials
      </button>
      <p className="gen-msg">
        Dont have an account,{" "}
        <Link className="primary-color" to="/signin">
          {" "}
          Sign In!
        </Link>
      </p>
    </div>
  );
};
