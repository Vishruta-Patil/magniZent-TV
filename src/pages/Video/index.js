import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideo } from "../../utils/apiHandler/videoHandler";
import { useVideoList } from "../../context/videoListContext";
import Drawer from "../../components/Drawer";
import Loader from "../../components/Common/Loader";
import {
  addToLikeVideo,
  deleteLikedVideo,
  getLikeVideos,
} from "../../utils/apiHandler/likedVideoHandler";
import {
  addToWatchLaterVideo,
  deleteWatchLaterVideo,
  getWatchLaterVideos,
} from "../../utils/apiHandler/watchlaterVideoHandler";
import "./index.css";
import { useWatchLater } from "../../context/watchLaterContext";
import { useHistory } from "../../context/historyContext";
import { getHistoryVideos } from "../../utils/apiHandler/historyVideoHandler";
import { toast } from "react-toastify";

export const Video = () => {
  const params = useParams();
  const { state, dispatch } = useVideoList();
  const { video, likedVideos } = state;
  const {watchLaterState, watchLaterDispatch} = useWatchLater()
  const {historyState, historyDispatch} = useHistory()

  const navigate = useNavigate()

  useEffect(() => {
    getVideo(params.videoId, dispatch);
    getLikeVideos(dispatch) 
    getWatchLaterVideos(watchLaterDispatch)
    getHistoryVideos(historyDispatch);
  }, []);
  
  const isWatchLater = watchLaterState.watchLaterVideos.some((item) => item?.video?._id === params.videoId)
  const isLiked = likedVideos.some((item) => item?.video?._id === params.videoId);

  const copyLinkHandler = () => {   
      navigator.clipboard.writeText(`http://localhost:3000/video/${params.videoId}`)
      toast.success("Link copied, share the video now!")
  }

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
                {!isLiked ? (
                  <button
                    className="video-btn align-center"
                    onClick={() => addToLikeVideo(video._id, dispatch, navigate)}
                  >
                    <span className="material-icons">favorite</span>
                    <p>Like</p>
                  </button>
                ) : (
                  <button
                    className="video-btn align-center"
                    onClick={() => deleteLikedVideo(video._id, dispatch, navigate)}
                  >
                    <span className="material-icons bold-highlight-color">
                      favorite
                    </span>
                    <p>Like</p>
                  </button>
                )}

                {!isWatchLater ? (
                  <button
                    className="video-btn align-center"
                    onClick={() => addToWatchLaterVideo(video._id, watchLaterDispatch, navigate)}
                  >
                    <span className="material-icons">watch_later</span>
                    <p>Watch Later</p>
                  </button>
                ) : (
                  <button
                    className="video-btn align-center"
                    onClick={() => deleteWatchLaterVideo(video._id, watchLaterDispatch)}
                  >
                    <span className="material-icons primary-color">
                      watch_later
                    </span>
                    <p>Watch Later</p>
                  </button>
                )}

                {/* <button className="video-btn align-center">
                  <span className="material-icons">bookmark</span>
                  <p>Save</p>
                </button> */}
                <button className="video-btn align-center" onClick={copyLinkHandler}>
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
