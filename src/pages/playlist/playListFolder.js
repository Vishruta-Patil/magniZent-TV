import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getVideoFromPlaylist } from "../../utils/apiHandler/playListHandler";
import VideoCard from "../../components/Common/VideoCard";
import Drawer from "../../components/Drawer";
import { usePlaylist } from "../../context/playlistContext";

export const PlayListFolder = () => {
  const params = useParams();
  const { playlistState, playlistDispatch } = usePlaylist();
  const playListVideosLength = playlistState?.singlePlaylist.length;

  useEffect(
    () => getVideoFromPlaylist(params.playlistId, playlistDispatch),
    []
  );

  return (
    <div className="video-list-container">
      <Drawer />
      <div className="video-list-content">
        {playListVideosLength === 0 ? (
          <h1 className="markup-line">No Videos Present in the Playlist</h1>
        ) : (
          playlistState?.singlePlaylist?.map((video, index) => (
            <VideoCard
              video={video}
              key={index}
              from="playlistfolder"
              playListid={params.playlistId}
            />
          ))
        )}
      </div>
    </div>
  );
};
