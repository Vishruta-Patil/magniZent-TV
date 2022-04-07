import { useEffect } from "react";
import Drawer from "../../components/Drawer";
import { useVideoList } from "../../context/videoListContext";
import VideoCard from "../../components/Common/VideoCard";
import {
  getHistoryVideos,
  deleteAllHistoryVideo,
} from "../../utils/apiHandler/historyVideoHandler";
import EmptyBox from "../../components/Common/EmptyPage";
import "./index.css";

export const History = () => {
  const { state, dispatch } = useVideoList();
  const { historyVideos } = state;

  const videoLength = historyVideos.length;

  useEffect(() => {
    getHistoryVideos(dispatch);
  }, []);

  return (
    <div className="history-list-container">
      <Drawer />
      {videoLength === 0 ? (
        <EmptyBox />
      ) : (
        <>
      <div style={{ gridArea: "btn" }}>
        <button
          className="clearHistoryBtn hero-btn"
          onClick={() => deleteAllHistoryVideo(dispatch)}
        >
          Clear History
        </button>
      </div>

      <div className="video-list-content">
        {state.loader ? (
          <Loader />
        ) : (
          <>
            {historyVideos.map((item, index) => (
              <VideoCard video={item} key={index} />
            ))}
          </>
        )}
      </div>
      </>
      )}
    </div>
  );
};
