import "./drawer.css";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const drawerData = [
    {
      id: 1,
      title: "Home",
      to: "/videolist",
      icon: "home"
    },
    {
      id: 2,
      title: "Playlists",
      to: "/playlist",
      icon: "playlist_play"
    },
    {
      id: 3,
      title: "Liked",
      to: "/liked",
      icon: "favorite"
    },
    {
      id: 4,
      title: "History",
      to: "/history",
      icon: "history"
    },
    {
      id: 5,
      title: "Watch Later",
      to: "/watchlater",
      icon: "watch_later"
    },
  ]
  return (
    <aside className="drawer-container">
      <ul>
        {drawerData.map(data => (
           <NavLink className="drawer-unit flex-gap align-center font-md"  activeclassname="active" to={data.to} key={data.id}>
           <span className="material-icons">{data.icon}</span>
           <p>{data.title}</p>
         </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Drawer;
