import { GET_VIDEO_LIST, LOADER, CATEGORY, GET_VIDEO, GET_LIKED_VIDEOS, GET_WATCHLATER_VIDEOS } from "./videoListConstant"

const videoListReducer = (state, action) => {
    switch(action.type) {
        case GET_VIDEO_LIST:
            return {
                ...state,
                videoList: action.payload
            }
        case LOADER:
            return {
                ...state,
                loader: !state.loader
            }
        case CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case GET_VIDEO:
            return {
                ...state,
                video: action.payload
            }
        case GET_LIKED_VIDEOS:
            return {
                ...state,
                likedVideos: action.payload
            }
        case GET_WATCHLATER_VIDEOS:
            return {
                ...state,
                watchLaterVideos: action.payload
            }
    }
}

export default videoListReducer