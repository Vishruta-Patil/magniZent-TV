import { LOGIN_STATUS } from "../../reducer/auth/authConstant";
import axios from "axios";
import { signIn } from "../../Services/services";

export const signInHandler = async (dispatch, navigate, credentials) => {
    try {
      const response = await signIn(credentials)
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      dispatch({type: LOGIN_STATUS})
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  export const login = async (email, password, dispatch, navigate) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      dispatch({type: LOGIN_STATUS})
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  