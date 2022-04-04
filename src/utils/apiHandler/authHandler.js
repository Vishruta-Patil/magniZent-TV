import { LOGIN_STATUS } from "../../reducer/auth/authConstant";
import axios from "axios";

export const signInHandler = async (dispatch, navigate) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email: credentials.email,
        password: credentials.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    //   dispatch({type: USER_LOADING})
      dispatch({type: LOGIN_STATUS})
    //    setTimeout(() => dispatch({type: USER_LOADING}), 500)
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
    //   dispatch({ type: USER_LOADING });
      dispatch({type: LOGIN_STATUS})
    //   setTimeout(() => dispatch({ type: USER_LOADING }), 1000);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  