import { Link, useNavigate } from "react-router-dom";
import { LOGIN_STATUS } from "../../reducer/auth/authConstant";
import {useAuth } from "../../context/authContext"
import "./header.css"

const Header = () => {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.clear();
    dispatch({ type: LOGIN_STATUS });
    navigate("/");
  };

  const logInHandler = () => {
    navigate("/login");
  };
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <Link className="primary-color" to="/">
            <h2 className="main-title">
              magni<span className="bold-main-title">Z</span>ent{" "}
              <span className="bold-main-title secondary-color"></span>
            </h2>
          </Link>
        </div>

        <div className="search-bar-container search-bar-inline">
          <div className="search-bar">
            <input
              className="input-search"
              type="text"
              placeholder="Search your favorite video"
            />
            <span className="material-icons search-icon">search</span>
          </div>
        </div>

        <div className="icon-container flex-gap">
        <div className="icon-unit">
            {!state.loginStatus ? (
              <div
                className="flex-column flex-center secondary-color header-icon"
                onClick={logInHandler}
              >
                <span className="material-icons icon"> login </span>
                <p>Login</p>
              </div>
            ) : (
              <div
                className="flex-column flex-center secondary-color header-icon"
                onClick={logOutHandler}
              >
                <span className="material-icons icon"> logout</span>
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="hr-line header-divider" />

      <div className="search-bar-container search-bar-block">
        <div className="search-bar flex-gap align-center">
          <input
            className="input-search"
            type="text"
            placeholder="Search your favorite video"
          />
          <span className="material-icons search-icon flex-center"> search </span>
        </div>
      </div>
    </div>
  );
};

export default Header
