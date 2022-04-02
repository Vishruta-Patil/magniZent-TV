import "./App.css";
import Header from "./components/Header";
import { Home } from "./pages/home";
import { VideoList } from "./pages/videolist";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {History, Playlist, LikedVideos, Watchlater} from "./pages"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolist" element={<VideoList />} />
        <Route path="/playlist" element={<Playlist/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/liked" element={<LikedVideos/>} />
        <Route path="/watchlater" element={<Watchlater/>} />
        <Route path="/mock" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
