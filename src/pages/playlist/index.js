import Drawer from "../../components/Drawer";
import PlayListCard from "./playListCard";
import {getPlaylists} from "../../utils/apiHandler/playListHandler"
import { useVideoList } from "../../context/videoListContext";
import {useEffect} from "react"

export const Playlist = () => {
  const { state, dispatch } = useVideoList();
  const {playlistVideo} = state

  useEffect(() => {
    getPlaylists(dispatch)
  }, [])

  return (
    <div className="video-list-container">
      <Drawer />
      <div className="video-list-content">
      {playlistVideo.map((playlist, index) => (
        <PlayListCard playlist={playlist} key={index}/>
      ))}
      </div>
    </div>
  );
};
