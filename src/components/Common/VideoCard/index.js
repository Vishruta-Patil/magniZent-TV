import { useState, useEffect } from "react";
import { useVideoList } from "../../../context/videoListContext";
import { addToHistoryVideo } from "../../../utils/apiHandler/historyVideoHandler";
import { Modal } from "../Modal";
import { Link } from "react-router-dom";
import PlaylistModal from "../../PlaylistModal"
import "./videoCard.css";

const VideoCard = ({ video, from, playListid }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { state, dispatch } = useVideoList();

  const [modal, setModal] = useState(false)

  return (
    <>
    <section className="video-card">
      <Link to={`/video/${video?._id}`}>
        <div
          className="img-container flex-center"
          onClick={() => addToHistoryVideo(video, dispatch)}
        >
          <img className="video-img" src={video?.img_url} alt={video?.title} />
        </div>
      </Link>
      <div className="video-inner-content flex">
        <p className="video-title font-md">{video?.title}</p>
        <button
          className="more-icon"
          onClick={(e) => {
            setModalVisibility(!modalVisibility);
          }}
        >
          <span className="material-icons">more_vert</span>
        </button>

        {modalVisibility ? <Modal id={video?._id} setModal={setModal} video={video} from={from} playListid={playListid}/> : null}
      </div>
      <p className="video-subtitle font-sm">{video?.creator}</p>
    </section>
    {modal && <PlaylistModal setModal={setModal} video={video}/> }
    </>
  );
};

export default VideoCard;
