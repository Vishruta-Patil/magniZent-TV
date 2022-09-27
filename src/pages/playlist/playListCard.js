import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Common/Modal";

import "../../components/Common/VideoCard/videoCard.css";

const PlayListCard = ({ playlist }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <section className="video-card">
      <Link to={`/playlist/${playlist._id}`}>
        <div className="img-container flex-center">
          {playlist?.video.length !== 0 ? (
            <img
              className="video-img"
              src={playlist?.video[0]?.img_url}
              alt={playlist.name}
            />
          ) : (
            <img
              className="video-img"
              src="https://res.cloudinary.com/debanftke/image/upload/v1664283848/playlist_image_l5nfuj.jpg"
              alt={"playlistlist-img"}
            />
          )}
        </div>
      </Link>
      <div className="video-inner-content flex">
        <p className="video-title font-md">{playlist.name}</p>
        <button
          className="more-icon"
          onClick={(e) => {
            setModalVisibility(!modalVisibility);
          }}
        >
          <span className="material-icons">more_vert</span>
        </button>

        {modalVisibility ? (
          <Modal playListid={playlist._id} from="playlistcard" />
        ) : null}
      </div>
    </section>
  );
};

export default PlayListCard;
