import "./index.css";
import { useVideoList } from "../../../context/videoListContext";
import { deleteLikedVideo } from "../../../utils/apiHandler/likedVideoHandler";
import {
  addToWatchLaterVideo,
  deleteWatchLaterVideo,
} from "../../../utils/apiHandler/watchlaterVideoHandler";
import { deleteHistoryVideo } from "../../../utils/apiHandler/historyVideoHandler";
import { deletePlaylist, deleteVideoFromPLaylist } from "../../../utils/apiHandler/playListHandler"
import { useWatchLater } from "../../../context/watchLaterContext";
import { useHistory } from "../../../context/historyContext";

export const Modal = ({ id, setModal, video, from, playListid }) => {
  const { state, dispatch } = useVideoList();
  const {watchLaterState, watchLaterDispatch} = useWatchLater()
  const {historyState, historyDispatch} = useHistory()
  
  const isWatched = historyState.historyVideos.some((item) => item?.video?._id === id)
  const isWatchLater = watchLaterState.watchLaterVideos.some((item) => item?.video?._id === id)
  const isVideoLiked = state.likedVideos.some((item) => item?.video?._id === id);

  return (
    <>
      <div className="modal-container">
        {from === "playlistcard" && (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            // onClick={() => deletePlaylist(playListid, dispatch)}
          >
            <span className="material-icons">delete</span>
            <p>Delete Playlist</p>
          </div>
        )}

        {from==="playlistfolder" && (
          <div
            className="modal-unit flex align-center bold-highlight-color"
            // onClick={() => deleteVideoFromPLaylist(playListid, video._id, dispatch)}
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
            onClick={() => deleteWatchLaterVideo(video._id, watchLaterDispatch)}
          >
            <span className="material-icons">watch_later</span>
            <p>Remove from watch later</p>
          </div>
        ) : (
          <div
            className="modal-unit flex align-center"
            onClick={() => addToWatchLaterVideo(video._id, watchLaterDispatch)}
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
            onClick={() => deleteHistoryVideo(id, historyDispatch)}
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
