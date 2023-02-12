import { useEffect } from "react";
import Chip from "../../components/Chip/index.js";
import VideoCard from "../../components/Common/VideoCard/index.js";
import { getVideoList } from "../../utils/apiHandler/videoHandler.js";
import "./videoList.css";
import { useVideoList } from "../../context/videoListContext.js";
import Loader from "../../components/Common/Loader";
import { Link } from "react-router-dom";

const VideoListPage = () => {
  const { dispatch, state, videoFilterList } = useVideoList();

  useEffect(() => {
    getVideoList(dispatch);
  }, []);

  console.log(videoFilterList)
  

  return (
    <div className="video-listing-hero-container">
      <Chip />
      <div className="video-list-content">
        {state?.loader ? (
          <Loader />
        ) : (
          videoFilterList.map((item, index) => (
            // <Link key={index} to={`/video/${item._id}`}>       *doubt         
              <VideoCard video={item} key={index} from={true}/>
            // </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoListPage;
