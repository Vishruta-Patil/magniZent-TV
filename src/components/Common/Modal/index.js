import "./index.css";
import { useVideoList } from "../../../context/videoListContext";
import { deleteLikedVideo } from "../../../utils/apiHandler/likedVideoHandler";
import {
  addToWatchLaterVideo,
  deleteWatchLaterVideo,
} from "../../../utils/apiHandler/watchlaterVideoHandler";
import { deleteHistoryVideo } from "../../../utils/apiHandler/historyVideoHandler";
import { deletePlaylist, deleteVideoFromPLaylist } from "../../../utils/apiHandler/playListHandler"

export const Modal = ({ id, setModal, video, from, playListid }) => {
  const { state, dispatch } = useVideoList();
  const { likedVideos, watchLaterVideos, historyVideos } = state;

  const isVideoPresent = (data, video) => {
    const isPresent = data.find((item) => item?._id === video?._id);
    if (isPresent) return true;
    else return false;
  };

  const isVideoLiked = isVideoPresent(likedVideos, video);
  const isWatchLater = isVideoPresent(watchLaterVideos, video);
  const isWatched = isVideoPresent(historyVideos, video);

  return (
    <>
      <div className="modal-container">
        {from === "playlistcard" && (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            onClick={() => deletePlaylist(playListid, dispatch)}
          >
            <span className="material-icons">delete</span>
            <p>Delete Playlist</p>
          </div>
        )}

        {from==="playlistfolder" && (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            onClick={() => deleteVideoFromPLaylist(playListid, video._id, dispatch)}
          >
            <span className="material-icons">delete</span>
            <p>Delete video from Playlist</p>
          </div>
        )}

{(from !== "playlistcard" && from !== "playlistfolder") && <>
        <div
          className="modal-unit flex align-center"
          onClick={() => setModal(true)}
        >
          <span className="material-icons">save</span>
          <p>Add to Playlist</p>
        </div>

        {isWatchLater ? (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            onClick={() => deleteWatchLaterVideo(video._id, dispatch)}
          >
            <span className="material-icons">watch_later</span>
            <p>Remove from watch later</p>
          </div>
        ) : (
          <div
            className="modal-unit flex align-center"
            onClick={() => addToWatchLaterVideo(video, dispatch)}
          >
            <span className="material-icons">watch_later</span>
            <p>Add to watch later</p>
          </div>
        )}

        {isVideoLiked && (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            onClick={() => deleteLikedVideo(id, dispatch)}
          >
            <span className="material-icons">delete</span>
            <p>Remove from liked videos</p>
          </div>
        )}

        {isWatched && (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            onClick={() => deleteHistoryVideo(id, dispatch)}
          >
            <span className="material-icons">delete</span>
            <p>Remove from history</p>
          </div>
        )}
      </> }
      </div>
       
    </>
  );
};
