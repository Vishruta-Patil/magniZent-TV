import Drawer from "../../components/Drawer";
import PlayListCard from "./playListCard";
import {getPlaylists} from "../../utils/apiHandler/playListHandler"
import {useEffect} from "react"
import { usePlaylist } from "../../context/playlistContext";
import EmptyBox from "../../components/Common/EmptyPage";

export const Playlist = () => {
  const {playlistState, playlistDispatch} = usePlaylist()
  const playlistLength = playlistState.playlistVideo.length

  useEffect(() => {
    getPlaylists(playlistDispatch)
  }, [])

  return (
    <div className="video-list-container">
      <Drawer />
      <div className="video-list-content">
      {playlistLength === 0 ? <EmptyBox /> : playlistState.playlistVideo.map((playlist, index) => (
        <PlayListCard playlist={playlist} key={index}/> 
      ))}
      </div>
    </div>
  );
};
