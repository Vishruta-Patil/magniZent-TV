import "./drawer.css";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  return (
    <aside className="drawer-container">
      <ul>
        <NavLink className="drawer-unit flex font-md"  activeclassname="active" to="/videolist">
          <span className="material-icons">home</span>
          <p>Home</p>
        </NavLink>
        <NavLink className="drawer-unit flex font-md" activeclassname="active" to="/playlist">
          <span className="material-icons">playlist_play</span>
          <p>Playlists</p>
        </NavLink>
        <NavLink className="drawer-unit flex font-md" activeclassname="active" to="/liked">
          <span className="material-icons">favorite</span>
          <p>Liked</p>
        </NavLink>
        <NavLink className="drawer-unit flex font-md" activeclassname="active" to="/history">
          <span className="material-icons">history</span>
          <p>History</p>
        </NavLink>
        <NavLink className="drawer-unit flex font-md" activeclassname="active" to="/watchlater">
          <span className="material-icons">watch_later</span>
          <p>Watch Later</p>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Drawer;
