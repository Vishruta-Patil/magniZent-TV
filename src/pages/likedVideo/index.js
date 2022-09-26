import { useEffect } from "react";
import Drawer from "../../components/Drawer";
import { useVideoList } from "../../context/videoListContext";
import VideoCard from "../../components/Common/VideoCard";
import { getLikeVideos } from "../../utils/apiHandler/likedVideoHandler";
import EmptyBox from "../../components/Common/EmptyPage";

export const LikedVideos = () => {
  const { state, dispatch } = useVideoList();
  const videoLength = state.likedVideos.length;

  useEffect(() => {
    getLikeVideos(dispatch);
  }, []);

  return (
    <div className="video-list-container">
      <Drawer />
      {videoLength === 0 ? (
        <EmptyBox />
      ) : (
        <div className="video-list-content">
          {state.loader ? (
            <Loader />
          ) : (
            state.likedVideos?.map((item, index) => (
              <VideoCard video={item.video} key={index} />
            ))
          )}
        </div>
      )}
    </div>
  );
};
