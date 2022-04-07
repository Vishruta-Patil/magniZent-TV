import { createContext, useContext, useReducer } from "react";
import videoListReducer from "../reducer/video/videoListReducer";
import { categoryFilterArr } from "../utils/category";

const VideoListContext = createContext()
const useVideoList = () => useContext(VideoListContext)

const initialValue = {
    loader: false,
    videoList: [],
    category:"All",
    video: [],
    likedVideos: [],
    watchLaterVideos: [],
    historyVideos: [],
    playlistVideo: [],
    playlistModal: false,
    singlePlaylist: []
}

const VideoListProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoListReducer, initialValue)
    const videoFilterList = categoryFilterArr(state)
    return (
        <VideoListContext.Provider value={{state, dispatch, videoFilterList}}>
            {children}
        </VideoListContext.Provider>
    )
}

export {useVideoList, VideoListProvider}