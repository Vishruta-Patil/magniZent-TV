import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
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
                <span className="material-icons icon"> login </span>
                <p>Login</p>
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
