import { useEffect } from "react";
import Chip from "../../components/Chip/index.js";
import VideoCard from "../../components/Common/VideoCard/index.js";
import { getVideoList } from "../../Services/videoService.js";
import "./videoList.css";
import { useVideoList } from "../../context/videoListContext.js";
import Loader from "../../components/Common/Loader";
const VideoListPage = () => {
  const { dispatch, state, videoFilterList } = useVideoList();

  useEffect(() => {
    getVideoList(dispatch);
  }, []);

  return (
    <div className="video-listing-hero-container">
      <Chip />
      <div className="video-list-content">
        {state.loader ? (
          <Loader />
        ) : (
          videoFilterList.map((item, index) => (
            <VideoCard video={item} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default VideoListPage;
