import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useVideoList } from "../../context/videoListContext";
import { getVideoFromPlaylist } from "../../utils/apiHandler/playListHandler";
import VideoCard from "../../components/Common/VideoCard";
import Drawer from "../../components/Drawer";

export const PlayListFolder = () => {
  const params = useParams();
  const { state, dispatch } = useVideoList();

useEffect(() => getVideoFromPlaylist(params.playlistId, dispatch), []);


  return (
    <div className="video-list-container">
      <Drawer />
      <div className="video-list-content">
      {state.singlePlaylist.videos.map((video, index) => 
        <VideoCard video={video} key={index} />
      )}
      </div>
    </div>
  );
};
