import { createContext, useContext, useReducer } from "react";
import videoListReducer from "../reducer/videoListReducer";

const VideoListContext = createContext()
const useVideoList = () => useContext(VideoListContext)

const initialValue = {
    loader: false,
    videoList: [],
    category:"All",
}

const filterArr = (state) => {
    if (state.category === "All") {
        return state.videoList;
    }
    else if(state.category === "Astrophysics") {
        return state.videoList.filter((a) => state.category === a.category)
    }
    else if(state.category === "Astrobiology") {
        return state.videoList.filter((a) => state.category === a.category)
    }
    else if(state.category === "Cosmic Mysteries") {
        return state.videoList.filter((a) => state.category === a.category)
    }
    else if(state.category === "Universe") {
        return state.videoList.filter((a) => state.category === a.category)
    }
}

const VideoListProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoListReducer, initialValue)
    const videoFilterList = filterArr(state)
    return (
        <VideoListContext.Provider value={{state, dispatch, videoFilterList}}>
            {children}
        </VideoListContext.Provider>
    )
}

export {useVideoList, VideoListProvider}