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
import { useHistory } from "../../context/historyContext";

export const History = () => {
  const { state, dispatch } = useVideoList();
  const {historyState, historyDispatch} = useHistory()
  const videoLength = historyState.historyVideos.length;

  useEffect(() => {
    getHistoryVideos(historyDispatch);
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
          onClick={() => deleteAllHistoryVideo(historyDispatch)}
        >
          Clear History
        </button>
      </div>

      <div className="video-list-content">
        {state.loader ? (
          <Loader />
        ) : (
          <>
            {historyState.historyVideos.map((item, index) => (
              <VideoCard video={item.video} key={index} />
            ))}
          </>
        )}
      </div>
      </>
      )}
    </div>
  );
};
