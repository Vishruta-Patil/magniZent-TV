import Drawer from "../../components/Drawer";
import VideoListPage from "./videoPage";

export const VideoList = () => {
  return (
    <div className="video-list-container">
      <Drawer />
      <VideoListPage />
    </div>
  );
};
