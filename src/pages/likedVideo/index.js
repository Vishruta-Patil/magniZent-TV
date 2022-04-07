import { useEffect } from "react";
import Drawer from "../../components/Drawer";
import { useVideoList } from "../../context/videoListContext";
import VideoCard from "../../components/Common/VideoCard";
import { getLikeVideos } from "../../utils/apiHandler/likedVideoHandler";

export const LikedVideos = () => {
  const { state, dispatch } = useVideoList();

  useEffect(() => {
    getLikeVideos(dispatch);
  }, []);

  console.log(state.likedVideos)

  return (
    <div className="video-list-container">
      <Drawer />
      <div className="video-list-content">
        {state.loader ? (
          <Loader />
        ) : (
          state.likedVideos.map((item, index) => (
            <VideoCard video={item} key={index} />
          ))
        )}
      </div>
    </div>
  );
};
