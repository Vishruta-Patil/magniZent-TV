import { Route, Routes, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Home,
  VideoList,
  Video,
  History,
  Playlist,
  LikedVideos,
  Watchlater,
  SignIn,
  LogIn,
} from "../../pages";
import { PlayListFolder } from "../../pages/playlist/playListFolder";

export const Router = () => {
  const useAuth = () => {
    const user_data = localStorage.getItem("token");
    return user_data !== null;
  };

  const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videolist" element={<VideoList />} />
      <Route path="/video/:videoId" element={<Video />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/mock" element={<Mockman />} />

      <Route
        path="/playlist"
        element={
          <PrivateRoute>
            <Playlist />
          </PrivateRoute>
        }
      />

      <Route
        path="/playlist/:playlistId"
        element={
          <PrivateRoute>
            <PlayListFolder />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <History />
          </PrivateRoute>
        }
      />

      <Route
        path="/liked"
        element={
          <PrivateRoute>
            <LikedVideos />
          </PrivateRoute>
        }
      />

      <Route
        path="/watchlater"
        element={
          <PrivateRoute>
            <Watchlater />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
