import { useEffect } from "react";
import Drawer from "../../components/Drawer";
import { useVideoList } from "../../context/videoListContext";
import VideoCard from "../../components/Common/VideoCard";
import { getWatchLaterVideos } from "../../utils/apiHandler/watchlaterVideoHandler";

export const Watchlater = () => {
  const { state, dispatch } = useVideoList();

  useEffect(() => {
    getWatchLaterVideos(dispatch);
  }, []);

  return (
    <div className="video-list-container">
      <Drawer />
      <div className="video-list-content">
        {state.loader ? (
          <Loader />
        ) : (
          state.watchLaterVideos.map((item, index) => (
            <VideoCard video={item} key={index} />
          ))
        )}
      </div>
    </div>
  );
};
