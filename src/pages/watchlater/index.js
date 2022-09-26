import { useEffect } from "react";
import Drawer from "../../components/Drawer";
import { useVideoList } from "../../context/videoListContext";
import VideoCard from "../../components/Common/VideoCard";
import { getWatchLaterVideos } from "../../utils/apiHandler/watchlaterVideoHandler";
import EmptyBox from "../../components/Common/EmptyPage";
import { useWatchLater } from "../../context/watchLaterContext";

export const Watchlater = () => {
  const { state, dispatch } = useVideoList();
  const {watchLaterState, watchLaterDispatch} = useWatchLater()
  const {watchLaterVideos} = watchLaterState
  const videoLength = watchLaterVideos?.length;

  useEffect(() => {
    getWatchLaterVideos(watchLaterDispatch);
  }, []);

  return (
    <div className="video-list-container">
      <Drawer />
      {videoLength === 0 ? (
        <EmptyBox />
      ) : (
      <div className="video-list-content">
        {state?.loader ? (
          <Loader />
        ) : (
          watchLaterVideos.map((item, index) => (
            <VideoCard video={item.video} key={index} />
          ))
        )}
      </div>
      )}
    </div>
  );
};
