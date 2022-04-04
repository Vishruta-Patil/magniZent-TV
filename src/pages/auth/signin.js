import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { LOGIN_STATUS} from "../../reducer/auth/authConstant"
import { useAuth } from "../../context/authContext";
import { signInHandler } from "../../utils/apiHandler/authHandler";
import "./auth.css"

export const SignIn = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useAuth();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="login-container signin-container flex-column">
      <h2 className="main-header">REGISTER</h2>
      <p className="top-msg gen-msg">
        Looks like you are new!! Please fill in the information below.
      </p>
      <input
        type="email"
        className="input-box"
        placeholder="Enter your email"
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        className="input-box"
        placeholder="Enter your password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <div className="terms-container flex">
        <input id="terms-input" type="checkbox" />{" "}
        <label htmlFor="terms-input">I accept all the terms and conditions</label>
      </div>

      <button className="hero-btn" onClick={() => signInHandler(dispatch, navigate, credentials)}>
        Sign In
      </button>
      <p className="gen-msg">
        Already have an account?{" "}
        <Link className="primary-color" to="/login">
          {" "}
          Log In!
        </Link>
      </p>
    </div>
  );
};
