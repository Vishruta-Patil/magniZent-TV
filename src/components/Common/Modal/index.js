import "./index.css";
import { useVideoList } from "../../../context/videoListContext";
import { deleteLikedVideo } from "../../../utils/apiHandler/likedVideoHandler";

export const Modal = ({id}) => {
  const { state, dispatch } = useVideoList();
  const { video } = state;
  const isLikedHandler = (video) => {
    const isLiked = state.likedVideos.find((item) => item._id === video._id);
    if (isLiked) return true;
    else false;
  };

  const isVideoLiked = isLikedHandler(video);

  return (
    <div className="modal-container font-sm">
      <div className="modal-unit flex align-center">
        <span className="material-icons">save</span>
        <p>Add to Playlist</p>
      </div>
      <div className="modal-unit flex align-center">
        <span className="material-icons">favorite</span>
        <p>Remove from watch later</p>
      </div>
      {
        <div className="modal-unit flex align-center" style={{color:"red"}} onClick={() => deleteLikedVideo(id, dispatch)}>
          <span className="material-icons">delete</span>
          <p>Remove from liked videos</p>
        </div>
      }
    </div>
  );
};
