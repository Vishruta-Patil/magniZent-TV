import "./index.css";
import { useVideoList } from "../../../context/videoListContext";
import { deleteLikedVideo } from "../../../utils/apiHandler/likedVideoHandler";
import {addToWatchLaterVideo, deleteWatchLaterVideo} from "../../../utils/apiHandler/watchlaterVideoHandler"

export const Modal = ({ id }) => {
  const { state, dispatch } = useVideoList();
  const { video } = state;

  const isLikedHandler = (video) => {
    const isLiked = state.likedVideos.find((item) => item._id === video._id);
    if (isLiked) return true;
    else false;
  };

  const isVideoLiked = isLikedHandler(video);

  const isWatchLaterHandler = (video) => {
    const isWatched = state.watchLaterVideos.find(
      (item) => item._id === video._id
    );
    if (isWatched) return true;
    else false;
  };

  const isWatchLater = isWatchLaterHandler(video);

  return (
    <div className="modal-container font-sm">
      <div className="modal-unit flex align-center">
        <span className="material-icons">save</span>
        <p>Add to Playlist</p>
      </div>

      {isWatchLater ? (
        <div className="modal-unit flex align-center" onClick={() => deleteWatchLaterVideo(video._id, dispatch)}>
          <span className="material-icons">watch_later</span>
          <p>Remove from watch later</p>
        </div>
      ) : (
        <div className="modal-unit flex align-center" onClick={() => addToWatchLaterVideo(video, dispatch)}>
          <span className="material-icons">watch_later</span>
          <p>Add to watch later</p>
        </div>
      )}

      {isVideoLiked && (
        <div
          className="modal-unit flex align-center"
          style={{ color: "red" }}
          onClick={() => deleteLikedVideo(id, dispatch)}
        >
          <span className="material-icons">delete</span>
          <p>Remove from liked videos</p>
        </div>
      )}
    </div>
  );
};
