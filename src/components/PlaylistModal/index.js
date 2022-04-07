import { useState, useEffect } from "react";
import { useVideoList } from "../../context/videoListContext";
import { SET_PLAYLIST_MODAL } from "../../reducer/video/videoListConstant";
import { getPlaylists, createPlaylist, createVideoInPlaylist, deleteVideoFromPLaylist } from "../../utils/apiHandler/playListHandler";
import "./index.css";

const PlaylistModal = ({video, setModal}) => {
  const { state, dispatch } = useVideoList();
  const [playlistDetails, setPlaylistDetails] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getPlaylists(dispatch)
  }, [])

  return (
    <section className="playlist-modal-container flex-column font-sm">
      <div className="playlist-modal-header flex justify-between font-md">
        <p>Save To...</p>
        <p
          className="cursor-pointer"
          onClick={() => setModal(false)}
        >
          X
        </p>
      </div>

      <div className="playlist-modal-list">
        {state.playlistVideo.map((playlist, index) => (
        <div className="playlist-modal-unit flex-sm-gap align-center">
          <input type="checkbox" id={playlist._id} onChange={(e) => e.target.checked ? createVideoInPlaylist(video, playlist._id, dispatch) : deleteVideoFromPLaylist(playlist._id, video._id) }/>
          <label for={playlist._id}>{playlist.title}</label>
        </div>
        ))}
  
      </div>
      {!playlistDetails ? (
        <div
          className="playlist-modal-btn flex-sm-gap align-center cursor-pointer"
          onClick={() => setPlaylistDetails(true)}
        >
          <p className="font-md">+</p>
          <p>Create New Playlist</p>
        </div>
      ) : (
        <div className="new playlist-details flex-column flex-sm-gap">
          <div className="flex-column flex-sm-gap">
            <input
              placeholder="Enter the name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button
            className="hero-btn create-btn font-sm"
            style={{ flexGrow: 1 }}
            onClick={() => createPlaylist(dispatch, title)}
          >
            Create
          </button>
        </div>
      )}
    </section>
  );
};

export default PlaylistModal;
