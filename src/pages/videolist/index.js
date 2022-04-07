import Drawer from "../../components/Drawer";
import VideoListPage from "./videoPage";
import PlaylistModal from "../../components/PlaylistModal";
import { useVideoList } from "../../context/videoListContext.js";

export const VideoList = () => {
  const {state} = useVideoList()
  return (
    <div className="video-list-container">
      <Drawer />
      <VideoListPage />
      {/* {state.playlistModal && <PlaylistModal /> } */}
    </div>
  );
};
