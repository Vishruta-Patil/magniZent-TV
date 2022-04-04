import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getVideo } from "../../utils/apiHandler/videoHandler";
import { useVideoList } from "../../context/videoListContext";
import Drawer from "../../components/Drawer";
import Loader from "../../components/Common/Loader";
import "./index.css";

export const Video = () => {
  const params = useParams();
  const { state, dispatch } = useVideoList();
  const { video } = state;

  useEffect(() => {
    getVideo(params.videoId, dispatch);
  }, []);

  return (
    <div className="video-list-container">
      <Drawer />
      {state.loader ? (
        <Loader />
      ) : (
        <div className="video-container">
          <iframe
            className="video-iframe"
            src={video?.iframe_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="content-container space-M">
              <div className="justify-between">
                <h3 className="font-rg main-title">{video.title}</h3>
                <div className="btn-container flex">
                  <button className="video-btn align-center">
                    <span className="material-icons">favorite</span>
                    <p>Like</p>
                  </button>
                  <button className="video-btn align-center">
                    <span className="material-icons">watch_later</span>
                    <p>Watch Later</p>
                  </button>
                  <button className="video-btn align-center">
                    <span className="material-icons">bookmark</span>
                    <p>Save</p>
                  </button>
                  <button className="video-btn align-center">
                    <span className="material-icons">share</span>
                    <p>Copy Link</p>
                  </button>
                </div>
              </div>
              <p className="font-md">{video.creator}</p>
           </div>
        </div>
      )}
    </div>
  );
};