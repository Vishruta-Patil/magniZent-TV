import { useParams } from "react-router-dom";
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
} from "../../utils/apiHandler/watchlaterVideoHandler";
import "./index.css";

export const Video = () => {
  const params = useParams();
  const { state, dispatch } = useVideoList();
  const { video, likedVideos } = state;

  useEffect(() => {
    getVideo(params.videoId, dispatch);
    getLikeVideos(dispatch) 
  }, []);
  

  const isWatchLaterHandler = (video) => {
    const isWatched = state.watchLaterVideos.find(
      (item) => item._id === video._id
    );
    if (isWatched) return true;
    else false;
  };

  const isWatchLater = isWatchLaterHandler(video);
  const isLiked = likedVideos.some((item) => item?.video?._id === params.videoId);
console.log({video})
  return (
    <div className="video-list-container">
      <Drawer />
      {state.loader ? (
        <Loader />
      ) : (
        <div className="video-container">
           {console.log(video?.iframe_url)}
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
                    onClick={() => addToLikeVideo(video._id, dispatch)}
                  >
                    <span className="material-icons">favorite</span>
                    <p>Like</p>
                  </button>
                ) : (
                  <button
                    className="video-btn align-center"
                    onClick={() => {deleteLikedVideo(video._id, dispatch); console.log(likedVideos)}}
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
                    onClick={() => {addToWatchLaterVideo(video, dispatch); console.log(likedVideos)}}
                  >
                    <span className="material-icons">watch_later</span>
                    <p>Watch Later</p>
                  </button>
                ) : (
                  <button
                    className="video-btn align-center"
                    onClick={() => deleteWatchLaterVideo(video._id, dispatch)}
                  >
                    <span className="material-icons primary-color">
                      watch_later
                    </span>
                    <p>Watch Later</p>
                  </button>
                )}

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
