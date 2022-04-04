import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, VideoList, Video, History, Playlist, LikedVideos, Watchlater } from "../../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videolist" element={<VideoList />} />
      <Route path="/video/:videoId" element={<Video />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/history" element={<History />} />
      <Route path="/liked" element={<LikedVideos />} />
      <Route path="/watchlater" element={<Watchlater />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
