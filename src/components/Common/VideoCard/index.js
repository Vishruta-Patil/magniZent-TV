import { useState } from "react";
import { Modal } from "../Modal";
import "./videoCard.css";

const VideoCard = ({ video }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <section className="video-card">
      <div className="img-container flex-center">
        <img className="video-img" src={video.img_url} alt={video.title} />
      </div>
      <div className="video-inner-content flex">
        <p className="video-title font-md">{video.title}</p>
        <button className="more-icon" onClick={(e) => {e.stopPropagation(); setModalVisibility(!modalVisibility)} }>
          <span className="material-icons">more_vert</span>
        </button>

        {modalVisibility ? <Modal id={video._id}/> : null}
      </div>
      <p className="video-subtitle font-sm">{video.creator}</p>
    </section>
  );
};

export default VideoCard;
